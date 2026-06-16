const scenarios = {
  current: [
    { id: 1, title: "Task list view demo", status: "Done", estimateDays: 1, assignee: "Hui", dependency: null },
    { id: 3, title: "Unassigned assignee icon sizing", status: "Done", estimateDays: 0.5, assignee: "", dependency: null },
    { id: 4, title: "Task List View V2 design", status: "Done", estimateDays: 1, assignee: "", dependency: 3 },
    { id: 5, title: "Resizable edit box handles", status: "In review", estimateDays: 1, assignee: "", dependency: 4 },
    { id: 6, title: "Project completion dashboard", status: "In progress", estimateDays: null, assignee: "", dependency: 5 }
  ],
  clean: [
    { id: 1, title: "Task list view demo", status: "Done", estimateDays: 1, assignee: "Hui", dependency: null },
    { id: 3, title: "Unassigned assignee icon sizing", status: "Done", estimateDays: 0.5, assignee: "Hui", dependency: null },
    { id: 4, title: "Task List View V2 design", status: "Done", estimateDays: 1, assignee: "Hui", dependency: 3 },
    { id: 5, title: "Resizable edit box handles", status: "In review", estimateDays: 1, assignee: "Hui", dependency: 4 },
    { id: 6, title: "Project completion dashboard", status: "In progress", estimateDays: 1.5, assignee: "Hui", dependency: 5 }
  ],
  blocked: [
    { id: 1, title: "Task list view demo", status: "Done", estimateDays: 1, assignee: "Hui", dependency: null },
    { id: 3, title: "Unassigned assignee icon sizing", status: "Done", estimateDays: null, assignee: "", dependency: null },
    { id: 4, title: "Task List View V2 design", status: "Done", estimateDays: 1, assignee: "", dependency: 3 },
    { id: 5, title: "Resizable edit box handles", status: "Todo", estimateDays: null, assignee: "", dependency: 4 },
    { id: 6, title: "Project completion dashboard", status: "Todo", estimateDays: null, assignee: "", dependency: 5 }
  ]
};

const state = {
  active: location.hash.replace("#", "") || "executive",
  startDate: "2026-06-15",
  capacityHours: 6,
  scenario: "current"
};

const statusClass = {
  Done: "done",
  "In progress": "progress",
  "In review": "progress",
  Todo: "todo",
  Draft: "todo"
};
const workdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function parseDate(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function toISODate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isWorkday(date) {
  const day = date.getDay();
  return day >= 1 && day <= 5;
}

function nextWorkday(date) {
  const candidate = new Date(date);
  while (!isWorkday(candidate)) candidate.setDate(candidate.getDate() + 1);
  return candidate;
}

function addWorkdays(date, days) {
  let remaining = Math.max(0, Math.ceil(days));
  const cursor = nextWorkday(date);
  if (remaining === 0) return cursor;
  while (remaining > 1) {
    cursor.setDate(cursor.getDate() + 1);
    if (isWorkday(cursor)) remaining -= 1;
  }
  return cursor;
}

function effortMultiplier(status) {
  if (status === "Done") return 0;
  if (status === "In progress" || status === "In review") return 0.5;
  return 1;
}

function topologicalSort(tasks) {
  const sorted = [];
  const pending = [...tasks];
  const seen = new Set();
  while (pending.length) {
    const index = pending.findIndex((task) => !task.dependency || seen.has(task.dependency));
    const [task] = pending.splice(index === -1 ? 0 : index, 1);
    sorted.push(task);
    seen.add(task.id);
  }
  return sorted;
}

function buildForecast() {
  const tasks = scenarios[state.scenario].map((task) => ({ ...task }));
  const startDate = nextWorkday(parseDate(state.startDate));
  const warnings = [];
  const workerAvailability = new Map();
  const finishByTask = new Map();

  const scheduled = topologicalSort(tasks).map((task) => {
    const estimateDays = Number.isFinite(task.estimateDays) ? task.estimateDays : 1;
    const worker = task.assignee || "Default worker";
    const remainingDays = estimateDays * effortMultiplier(task.status) * (6 / state.capacityHours);
    const dependencyFinish = task.dependency ? finishByTask.get(task.dependency) : null;
    const workerReady = workerAvailability.get(worker) || startDate;
    const earliest = nextWorkday(new Date(Math.max(startDate, dependencyFinish || startDate, workerReady)));
    const finish = remainingDays === 0 ? earliest : addWorkdays(earliest, remainingDays);

    if (!Number.isFinite(task.estimateDays)) {
      warnings.push({ task: `#${task.id} ${task.title}`, message: "Missing estimate. Defaulted to 1 day." });
    }
    if (!task.assignee) {
      warnings.push({ task: `#${task.id} ${task.title}`, message: "Missing assignee. Scheduled against Default worker." });
    }

    finishByTask.set(task.id, finish);
    if (remainingDays > 0) {
      const nextAvailable = new Date(finish);
      nextAvailable.setDate(nextAvailable.getDate() + 1);
      workerAvailability.set(worker, nextWorkday(nextAvailable));
    }
    return { ...task, estimateDays, worker, remainingDays, start: earliest, finish };
  });

  const openTasks = scheduled.filter((task) => task.remainingDays > 0);
  const completion = openTasks.reduce((latest, task) => task.finish > latest ? task.finish : latest, startDate);
  return {
    tasks: scheduled,
    startDate,
    completion,
    remainingDays: scheduled.reduce((sum, task) => sum + task.remainingDays, 0),
    warnings,
    workers: new Set(scheduled.map((task) => task.worker)),
    openTasks
  };
}

function setAllText(selector, value, root = document) {
  root.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function renderSharedValues(forecast, root) {
  setAllText('[data-value="completion"]', formatDate(forecast.completion), root);
  setAllText('[data-value="completion-note"]', `${workdayNames[forecast.completion.getDay()]} finish after dependency and capacity checks.`, root);
  setAllText('[data-value="remaining"]', `${forecast.remainingDays.toFixed(1)}d`, root);
  setAllText('[data-value="warnings"]', String(forecast.warnings.length), root);
  setAllText('[data-value="workers"]', String(forecast.workers.size), root);
  setAllText('[data-value="task-count"]', `${forecast.tasks.length} tasks`, root);
  setAllText('[data-value="warning-label"]', `${forecast.warnings.length} warnings`, root);
  setAllText(
    '[data-value="brief-summary"]',
    `${forecast.openTasks.length} ${forecast.openTasks.length === 1 ? "open task" : "open tasks"} remain after applying status, estimates, missing-data defaults, dependencies, and ${state.capacityHours}h/day capacity.`,
    root
  );
}

function renderTasks(forecast, root) {
  root.querySelectorAll('[data-table="tasks"]').forEach((table) => {
    table.innerHTML = forecast.tasks.map((task) => {
      const statusKey = statusClass[task.status] || "todo";
      const dependency = task.dependency ? `#${task.dependency}` : "None";
      return `
        <tr>
          <td class="task-title">#${task.id} ${task.title}</td>
          <td><span class="status ${statusKey}">${task.status}</span></td>
          <td>${task.estimateDays}d</td>
          <td>${task.worker}</td>
          <td>${dependency}</td>
          <td>${task.remainingDays.toFixed(1)}d</td>
          <td>${formatDate(task.start)} - ${formatDate(task.finish)}</td>
        </tr>
      `;
    }).join("");
  });
}

function renderLists(forecast, root) {
  const assumptions = [
    ["Forecast start date", `${formatDate(forecast.startDate)} is normalized to the first available workday.`],
    ["Done = 0 remaining", "Completed work is excluded from the remaining effort total."],
    ["In Progress = 50% remaining", "Tasks in active review or progress keep half their estimate."],
    ["Todo = 100% remaining", "Not-started work keeps its full estimate."],
    ["Missing estimate = 1 day", "A warning is emitted and one default workday is scheduled."],
    ["Missing assignee = default worker", "Unassigned work uses a single default capacity bucket."],
    [`Capacity = ${state.capacityHours}h/day`, "Scheduling uses Monday-Friday workdays only."],
    ["Dependencies finish first", "Successors start after dependency completion and worker availability."]
  ];
  root.querySelectorAll('[data-list="assumptions"]').forEach((list) => {
    list.innerHTML = assumptions.map(([title, detail]) => `<li><strong>${title}</strong><span>${detail}</span></li>`).join("");
  });
  root.querySelectorAll('[data-list="warnings"]').forEach((list) => {
    list.innerHTML = forecast.warnings.length
      ? forecast.warnings.map((warning) => `<li><strong>${warning.task}</strong><span>${warning.message}</span></li>`).join("")
      : `<li><strong>No missing data</strong><span>All scheduled tasks include estimates and assignees.</span></li>`;
  });
}

function renderTimeline(forecast, root) {
  const maxRemaining = Math.max(...forecast.openTasks.map((task) => task.remainingDays), 1);
  root.querySelectorAll('[data-timeline="default"]').forEach((timeline) => {
    timeline.innerHTML = forecast.openTasks.length ? forecast.openTasks.map((task) => {
      const width = Math.max(18, Math.round((task.remainingDays / maxRemaining) * 100));
      return `<div class="bar-row"><span>#${task.id} ${toISODate(task.finish)}</span><div class="bar-track"><div class="bar" style="width: ${width}%;">${task.remainingDays.toFixed(1)}d ${task.worker}</div></div></div>`;
    }).join("") : `<p class="empty-state">No open work remains for this scenario.</p>`;
  });
}

function renderCharts(forecast, root) {
  const totalEstimate = forecast.tasks.reduce((sum, task) => sum + task.estimateDays, 0) || 1;
  const doneDays = forecast.tasks.filter((task) => task.status === "Done").reduce((sum, task) => sum + task.estimateDays, 0);
  const inFlightDays = forecast.tasks.filter((task) => task.status === "In progress" || task.status === "In review").reduce((sum, task) => sum + task.estimateDays, 0);
  const todoDays = Math.max(0, totalEstimate - doneDays - inFlightDays);
  const doneDegrees = Math.round((doneDays / totalEstimate) * 360);
  const inFlightDegrees = Math.round((inFlightDays / totalEstimate) * 360);
  const donePercent = Math.round((doneDays / totalEstimate) * 100);

  root.querySelectorAll('[data-donut="status"]').forEach((donut) => {
    donut.style.background = `conic-gradient(var(--green) 0deg ${doneDegrees}deg, var(--blue) ${doneDegrees}deg ${doneDegrees + inFlightDegrees}deg, var(--amber) ${doneDegrees + inFlightDegrees}deg 360deg)`;
  });
  setAllText('[data-value="done-percent"]', `${donePercent}%`, root);
  root.querySelectorAll('[data-list="status-legend"]').forEach((legend) => {
    legend.innerHTML = [
      ["Done estimate", `${doneDays.toFixed(1)}d`],
      ["In progress or review", `${inFlightDays.toFixed(1)}d`],
      ["Todo estimate", `${todoDays.toFixed(1)}d`]
    ].map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`).join("");
  });

  const maxRemaining = Math.max(...forecast.tasks.map((task) => task.remainingDays), 1);
  root.querySelectorAll('[data-bars="effort"]').forEach((bars) => {
    bars.innerHTML = forecast.tasks.map((task) => {
      const width = Math.max(4, Math.round((task.remainingDays / maxRemaining) * 100));
      return `<div class="chart-bar"><span>#${task.id}</span><div class="mini-track"><div class="mini-fill" style="width: ${width}%;"></div></div><b>${task.remainingDays.toFixed(1)}d</b></div>`;
    }).join("");
  });

  const workerLoad = forecast.tasks.reduce((load, task) => {
    load.set(task.worker, (load.get(task.worker) || 0) + task.remainingDays);
    return load;
  }, new Map());
  const maxWorkerLoad = Math.max(...workerLoad.values(), 1);
  root.querySelectorAll('[data-bars="workers"]').forEach((bars) => {
    bars.innerHTML = [...workerLoad.entries()].map(([worker, days]) => {
      const width = Math.max(6, Math.round((days / maxWorkerLoad) * 100));
      return `<div class="chart-bar"><span>${worker}</span><div class="mini-track"><div class="mini-fill" style="width: ${width}%;"></div></div><b>${days.toFixed(1)}d</b></div>`;
    }).join("");
  });
  root.querySelectorAll('[data-bar="warning-meter"]').forEach((bar) => {
    bar.style.width = `${Math.min(100, forecast.warnings.length * 14)}%`;
  });
}

function renderDependency(forecast, root) {
  root.querySelectorAll('[data-flow="dependency"]').forEach((flow) => {
    flow.innerHTML = forecast.tasks.map((task) => (
      `<div class="flow-step"><b>#${task.id}</b><span>${task.dependency ? `after #${task.dependency}` : "no predecessor"}</span><span>${toISODate(task.finish)}</span></div>`
    )).join("");
  });
  const finalTask = forecast.openTasks.at(-1) || forecast.tasks.at(-1);
  root.querySelectorAll('[data-list="signals"]').forEach((signals) => {
    signals.innerHTML = [
      ["Estimated Completion Date", formatDate(forecast.completion)],
      ["Open tasks", String(forecast.openTasks.length)],
      ["Warnings", String(forecast.warnings.length)],
      ["Critical finish", finalTask ? `#${finalTask.id}` : "None"]
    ].map(([label, value]) => `<div class="signal-row"><span>${label}</span><b>${value}</b></div>`).join("");
  });
}

function renderRisk(forecast, root) {
  const rawTasks = scenarios[state.scenario];
  const unestimated = forecast.tasks.filter((task) => !rawTasks.find((raw) => raw.id === task.id).estimateDays);
  const unassigned = forecast.tasks.filter((task) => !rawTasks.find((raw) => raw.id === task.id).assignee);
  const dependencyQueue = forecast.tasks.filter((task) => task.dependency);

  root.querySelectorAll('[data-grid="risk"]').forEach((grid) => {
    grid.innerHTML = [
      ["high", "Missing data", String(forecast.warnings.length), "Resolve estimates and assignees before committing the delivery date."],
      ["medium", "Dependency queue", String(dependencyQueue.length), "Successor tasks are scheduled only after predecessor finish dates."],
      ["low", "Capacity confidence", `${state.capacityHours}h/day`, "Forecast uses a consistent weekday capacity model across workers."]
    ].map(([level, label, value, detail]) => `<div class="risk-card ${level}"><span>${label}</span><strong>${value}</strong><small>${detail}</small></div>`).join("");
  });
  root.querySelectorAll('[data-grid="review"]').forEach((grid) => {
    grid.innerHTML = [
      ["Needs estimate", unestimated.length ? unestimated.map((task) => `#${task.id}`).join(", ") : "None", "Defaulted to one day where missing."],
      ["Needs owner", unassigned.length ? unassigned.map((task) => `#${task.id}`).join(", ") : "None", "Default worker handles unassigned tasks."],
      ["Completion driver", forecast.openTasks.at(-1) ? `#${forecast.openTasks.at(-1).id}` : "None", "Last open task in the dependency-aware schedule."],
      ["Review outcome", forecast.warnings.length ? "Needs cleanup" : "Ready to trust", "Data quality determines forecast confidence."]
    ].map(([label, value, detail]) => `<div class="review-card"><span>${label}</span><strong>${value}</strong><small>${detail}</small></div>`).join("");
  });
}

function syncControls(source) {
  if (source?.classList.contains("js-start-date")) state.startDate = source.value;
  if (source?.classList.contains("js-capacity")) state.capacityHours = Number(source.value) || 6;
  if (source?.classList.contains("js-scenario")) state.scenario = source.value;
  document.querySelectorAll(".js-start-date").forEach((input) => { input.value = state.startDate; });
  document.querySelectorAll(".js-capacity").forEach((input) => { input.value = state.capacityHours; });
  document.querySelectorAll(".js-scenario").forEach((select) => { select.value = state.scenario; });
}

function render() {
  syncControls();
  const forecast = buildForecast();
  document.querySelectorAll(".design-screen").forEach((panel) => {
    renderSharedValues(forecast, panel);
    renderTasks(forecast, panel);
    renderLists(forecast, panel);
    renderTimeline(forecast, panel);
    renderCharts(forecast, panel);
    renderDependency(forecast, panel);
    renderRisk(forecast, panel);
  });
}

function activate(id, updateHash = true) {
  const next = document.querySelector(`[data-panel="${id}"]`) ? id : "executive";
  state.active = next;
  document.querySelectorAll(".switch-tab").forEach((tab) => {
    const active = tab.dataset.switch === next;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });
  document.querySelectorAll(".design-screen").forEach((panel) => {
    panel.classList.toggle("active", panel.dataset.panel === next);
  });
  if (updateHash) history.replaceState(null, "", `#${next}`);
  render();
}

document.querySelectorAll(".switch-tab").forEach((tab) => {
  tab.addEventListener("click", () => activate(tab.dataset.switch));
});
document.addEventListener("input", (event) => {
  if (event.target.matches(".js-start-date, .js-capacity, .js-scenario")) {
    syncControls(event.target);
    render();
  }
});
document.addEventListener("change", (event) => {
  if (event.target.matches(".js-start-date, .js-capacity, .js-scenario")) {
    syncControls(event.target);
    render();
  }
});
window.addEventListener("hashchange", () => activate(location.hash.replace("#", ""), false));
activate(state.active, false);
