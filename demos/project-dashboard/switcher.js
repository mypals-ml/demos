const scenarios = {
  current: [
    { id: 1, title: "Discovery workshop", status: "Done", estimateDays: 2, assignee: "Hui", dependency: null, doneDate: "2026-06-02" },
    { id: 2, title: "Project plan and milestones", status: "Done", estimateDays: 1.5, assignee: "Mina", dependency: 1, doneDate: "2026-06-04" },
    { id: 3, title: "Data contract audit", status: "Done", estimateDays: 2, assignee: "Ken", dependency: 1, doneDate: "2026-06-05" },
    { id: 4, title: "GitHub project ingestion", status: "Done", estimateDays: 3, assignee: "Hui", dependency: 3, doneDate: "2026-06-10" },
    { id: 5, title: "Forecast rules baseline", status: "Done", estimateDays: 2, assignee: "Mina", dependency: 4, doneDate: "2026-06-16" },
    { id: 6, title: "Dashboard information architecture", status: "In review", estimateDays: 4, assignee: "Aki", dependency: 5 },
    { id: 7, title: "Executive brief layout", status: "In progress", estimateDays: 5, assignee: "Aki", dependency: 6 },
    { id: 8, title: "Operations table behavior", status: "In progress", estimateDays: 4, assignee: "Hui", dependency: 5 },
    { id: 9, title: "Capacity planner model", status: "Todo", estimateDays: 6, assignee: "Ken", dependency: 8 },
    { id: 10, title: "Dependency map interactions", status: "Todo", estimateDays: 5, assignee: "Mina", dependency: 8 },
    { id: 11, title: "Risk review workflow", status: "Todo", estimateDays: 4, assignee: "", dependency: 10 },
    { id: 12, title: "Chart wall analytics", status: "Todo", estimateDays: 7, assignee: "Hui", dependency: 9 },
    { id: 13, title: "Burndown chart polish", status: "Todo", estimateDays: 4, assignee: "Aki", dependency: 12 },
    { id: 14, title: "Scenario sync QA", status: "Todo", estimateDays: 3, assignee: "Ken", dependency: 13 },
    { id: 15, title: "Accessibility pass", status: "Todo", estimateDays: 2, assignee: "", dependency: 14 },
    { id: 16, title: "Stakeholder signoff pack", status: "Todo", estimateDays: 3, assignee: "Mina", dependency: 15 },
    { id: 17, title: "Launch rehearsal", status: "Todo", estimateDays: 2, assignee: "Hui", dependency: 16 },
    { id: 18, title: "Production handoff", status: "Todo", estimateDays: 6, assignee: "Hui", dependency: 17 }
  ],
  clean: [
    { id: 1, title: "Discovery workshop", status: "Done", estimateDays: 2, assignee: "Hui", dependency: null, doneDate: "2026-06-02" },
    { id: 2, title: "Project plan and milestones", status: "Done", estimateDays: 1.5, assignee: "Mina", dependency: 1, doneDate: "2026-06-04" },
    { id: 3, title: "Data contract audit", status: "Done", estimateDays: 2, assignee: "Ken", dependency: 1, doneDate: "2026-06-05" },
    { id: 4, title: "GitHub project ingestion", status: "Done", estimateDays: 3, assignee: "Hui", dependency: 3, doneDate: "2026-06-10" },
    { id: 5, title: "Forecast rules baseline", status: "Done", estimateDays: 2, assignee: "Mina", dependency: 4, doneDate: "2026-06-16" },
    { id: 6, title: "Dashboard information architecture", status: "In review", estimateDays: 4, assignee: "Aki", dependency: 5 },
    { id: 7, title: "Executive brief layout", status: "In progress", estimateDays: 5, assignee: "Aki", dependency: 6 },
    { id: 8, title: "Operations table behavior", status: "In progress", estimateDays: 4, assignee: "Hui", dependency: 5 },
    { id: 9, title: "Capacity planner model", status: "Todo", estimateDays: 6, assignee: "Ken", dependency: 8 },
    { id: 10, title: "Dependency map interactions", status: "Todo", estimateDays: 5, assignee: "Mina", dependency: 8 },
    { id: 11, title: "Risk review workflow", status: "Todo", estimateDays: 4, assignee: "Aki", dependency: 10 },
    { id: 12, title: "Chart wall analytics", status: "Todo", estimateDays: 7, assignee: "Hui", dependency: 9 },
    { id: 13, title: "Burndown chart polish", status: "Todo", estimateDays: 4, assignee: "Aki", dependency: 12 },
    { id: 14, title: "Scenario sync QA", status: "Todo", estimateDays: 3, assignee: "Ken", dependency: 13 },
    { id: 15, title: "Accessibility pass", status: "Todo", estimateDays: 2, assignee: "Mina", dependency: 14 },
    { id: 16, title: "Stakeholder signoff pack", status: "Todo", estimateDays: 3, assignee: "Mina", dependency: 15 },
    { id: 17, title: "Launch rehearsal", status: "Todo", estimateDays: 2, assignee: "Hui", dependency: 16 },
    { id: 18, title: "Production handoff", status: "Todo", estimateDays: 6, assignee: "Hui", dependency: 17 }
  ],
  blocked: [
    { id: 1, title: "Discovery workshop", status: "Done", estimateDays: 2, assignee: "Hui", dependency: null, doneDate: "2026-06-02" },
    { id: 2, title: "Project plan and milestones", status: "Done", estimateDays: 1.5, assignee: "Mina", dependency: 1, doneDate: "2026-06-04" },
    { id: 3, title: "Data contract audit", status: "Done", estimateDays: null, assignee: "Ken", dependency: 1, doneDate: "2026-06-05" },
    { id: 4, title: "GitHub project ingestion", status: "Done", estimateDays: 3, assignee: "", dependency: 3, doneDate: "2026-06-10" },
    { id: 5, title: "Forecast rules baseline", status: "Done", estimateDays: 2, assignee: "Mina", dependency: 4, doneDate: "2026-06-16" },
    { id: 6, title: "Dashboard information architecture", status: "Todo", estimateDays: null, assignee: "Aki", dependency: 5 },
    { id: 7, title: "Executive brief layout", status: "Todo", estimateDays: 5, assignee: "Aki", dependency: 6 },
    { id: 8, title: "Operations table behavior", status: "Todo", estimateDays: 4, assignee: "", dependency: 5 },
    { id: 9, title: "Capacity planner model", status: "Todo", estimateDays: 6, assignee: "Ken", dependency: 8 },
    { id: 10, title: "Dependency map interactions", status: "Todo", estimateDays: null, assignee: "Mina", dependency: 8 },
    { id: 11, title: "Risk review workflow", status: "Todo", estimateDays: 4, assignee: "", dependency: 10 },
    { id: 12, title: "Chart wall analytics", status: "Todo", estimateDays: 7, assignee: "Hui", dependency: 9 },
    { id: 13, title: "Burndown chart polish", status: "Todo", estimateDays: 4, assignee: "Aki", dependency: 12 },
    { id: 14, title: "Scenario sync QA", status: "Todo", estimateDays: 3, assignee: "Ken", dependency: 13 },
    { id: 15, title: "Accessibility pass", status: "Todo", estimateDays: null, assignee: "", dependency: 14 },
    { id: 16, title: "Stakeholder signoff pack", status: "Todo", estimateDays: 3, assignee: "Mina", dependency: 15 },
    { id: 17, title: "Launch rehearsal", status: "Todo", estimateDays: 2, assignee: "Hui", dependency: 16 },
    { id: 18, title: "Production handoff", status: "Todo", estimateDays: 6, assignee: "Hui", dependency: 17 }
  ]
};

const state = {
  active: location.hash.replace("#", "") || "executive",
  startDate: "2026-06-01",
  capacityHours: 6,
  humanCount: 5,
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

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
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

function eachDate(start, end) {
  const dates = [];
  const cursor = new Date(start);
  while (cursor <= end) {
    dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

function dateWindow(start, daysAhead) {
  const dates = [];
  const cursor = startOfDay(start);
  for (let offset = 0; offset <= daysAhead; offset += 1) {
    dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

function workdayIndex(start, target) {
  let index = 0;
  const cursor = startOfDay(start);
  const targetDay = startOfDay(target);
  while (cursor < targetDay) {
    if (isWorkday(cursor)) index += 1;
    cursor.setDate(cursor.getDate() + 1);
  }
  return index;
}

function taskLoadOnDate(task, date) {
  const day = startOfDay(date);
  if (task.remainingDays <= 0 || !isWorkday(day) || day < startOfDay(task.start) || day > startOfDay(task.finish)) {
    return 0;
  }
  const assignedBeforeDate = workdayIndex(task.start, day);
  return Math.max(0, Math.min(1, task.remainingDays - assignedBeforeDate));
}

function effortMultiplier(status) {
  if (status === "Done") return 0;
  if (status === "In progress") return 0.5;
  if (status === "In review") return 0.25;
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
    const estimateDefaulted = !Number.isFinite(task.estimateDays);
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
    return { ...task, estimateDays, estimateDefaulted, worker, remainingDays, start: earliest, finish };
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
  const criticalTask = forecast.openTasks.reduce((latest, task) => task.finish > latest.finish ? task : latest, forecast.openTasks[0] || forecast.tasks.at(-1));
  const confidence = forecast.warnings.length >= 5 ? "Low" : forecast.warnings.length ? "Medium" : "High";
  const nextAction = forecast.warnings.length
    ? "Fill missing estimates and owners"
    : forecast.openTasks.length
      ? "Watch critical dependency"
      : "No open work";
  setAllText('[data-value="completion"]', formatDate(forecast.completion), root);
  setAllText('[data-value="completion-note"]', `${workdayNames[forecast.completion.getDay()]} finish after dependency and capacity checks.`, root);
  setAllText('[data-value="remaining"]', `${forecast.remainingDays.toFixed(1)}d`, root);
  setAllText('[data-value="warnings"]', String(forecast.warnings.length), root);
  setAllText('[data-value="workers"]', String(state.humanCount), root);
  setAllText('[data-value="task-count"]', `${forecast.tasks.length} tasks`, root);
  setAllText('[data-value="warning-label"]', `${forecast.warnings.length} warnings`, root);
  setAllText('[data-value="confidence"]', confidence, root);
  setAllText('[data-value="confidence-note"]', confidence === "High" ? "All core data is present." : "Forecast depends on defaulted data.", root);
  setAllText('[data-value="next-action"]', nextAction, root);
  setAllText('[data-value="critical-task"]', criticalTask ? `#${criticalTask.id}` : "None", root);
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
      const estimate = task.estimateDefaulted ? `${task.estimateDays}d default` : `${task.estimateDays}d`;
      return `
        <tr>
          <td class="task-title">#${task.id} ${task.title}</td>
          <td><span class="status ${statusKey}">${task.status}</span></td>
          <td>${estimate}</td>
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
    ["In Progress = 50% remaining", "Active work keeps half its estimate."],
    ["In Review = 25% remaining", "Review work keeps a small completion buffer."],
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
  root.querySelectorAll('[data-list="operations-focus"]').forEach((list) => {
    const criticalTask = forecast.openTasks.reduce((latest, task) => task.finish > latest.finish ? task : latest, forecast.openTasks[0] || forecast.tasks.at(-1));
    list.innerHTML = [
      ["Clean data first", forecast.warnings.length ? `${forecast.warnings.length} warnings need owner/estimate cleanup` : "No cleanup required"],
      ["Critical finish", criticalTask ? `#${criticalTask.id} finishes ${formatDate(criticalTask.finish)}` : "No open critical task"],
      ["Capacity model", `${state.capacityHours}h/day across ${state.humanCount} human(s)`]
    ].map(([label, value]) => `<div class="signal-row"><span>${label}</span><b>${value}</b></div>`).join("");
  });
  root.querySelectorAll('[data-list="actions"]').forEach((list) => {
    const estimateCount = forecast.tasks.filter((task) => task.estimateDefaulted).length;
    const defaultWorkerCount = forecast.tasks.filter((task) => task.worker === "Default worker").length;
    list.innerHTML = [
      ["1", "Replace default estimates", estimateCount ? `${estimateCount} task(s) still use 1d default estimates.` : "All tasks have estimates."],
      ["2", "Assign owners", defaultWorkerCount ? `${defaultWorkerCount} task(s) use the default worker bucket.` : "All tasks have owners."],
      ["3", "Confirm predecessor finish", "Critical chain dates should be confirmed before sharing the forecast."]
    ].map(([step, title, detail]) => `<div class="action-item"><b>${step}</b><span><strong>${title}</strong><small>${detail}</small></span></div>`).join("");
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

function doneDaysAtDate(forecast, date, today) {
  const chartDate = startOfDay(date);
  return forecast.tasks.reduce((sum, task) => {
    if (task.status === "Done") {
      const doneDate = task.doneDate ? parseDate(task.doneDate) : task.finish;
      return startOfDay(doneDate) <= chartDate ? sum + task.estimateDays : sum;
    }
    if (chartDate > today && startOfDay(task.finish) <= chartDate) {
      return sum + task.estimateDays;
    }
    return sum;
  }, 0);
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
      ["Done", doneDays, "status-done"],
      ["In progress or review", inFlightDays, "status-progress"],
      ["Todo", todoDays, "status-todo"]
    ].map(([label, days, colorClass]) => {
      const percentage = Math.round((days / totalEstimate) * 100);
      return `<li class="${colorClass}"><span>${label}</span><b>${percentage}% / ${days.toFixed(1)}d</b></li>`;
    }).join("");
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
  const totalWorkerLoad = [...workerLoad.values()].reduce((sum, days) => sum + days, 0) || 1;
  root.querySelectorAll('[data-bars="workers"]').forEach((bars) => {
    const useDailyColumns = bars.dataset.unit === "daily";
    if (useDailyColumns) {
      const dates = dateWindow(new Date(), 10);
      const workerRows = [...forecast.workers].map((worker) => {
        const dailyLoads = dates.map((date) => (
          forecast.tasks
            .filter((task) => task.worker === worker)
            .reduce((sum, task) => sum + taskLoadOnDate(task, date), 0)
        ));
        return { worker, dailyLoads };
      }).sort((left, right) => (
        right.dailyLoads.reduce((sum, load) => sum + load, 0) -
        left.dailyLoads.reduce((sum, load) => sum + load, 0)
      )).slice(0, 5);
      const maxDailyLoad = Math.max(...workerRows.flatMap((row) => row.dailyLoads), 1);
      bars.innerHTML = `
        <div class="worker-load-date-axis">
          ${dates.map((date) => `<span>${date.getMonth() + 1}/${date.getDate()}</span>`).join("")}
        </div>
        ${workerRows.map(({ worker, dailyLoads }) => `
          <div class="worker-load-chart-row">
            <strong>${worker}</strong>
            <div class="worker-load-columns">
              ${dailyLoads.map((load, index) => {
                const height = Math.round((load / maxDailyLoad) * 100);
                const percentage = Math.round(load * 100);
                return `
                  <span class="worker-load-column" title="${worker} ${toISODate(dates[index])}: ${percentage}% workload (${load.toFixed(1)}d)">
                    <i style="height: ${height}%;"></i>
                    <b>${percentage}%</b>
                  </span>
                `;
              }).join("")}
            </div>
          </div>
        `).join("")}
      `;
      return;
    }
    const usePercent = bars.dataset.unit === "percent";
    bars.innerHTML = [...workerLoad.entries()].map(([worker, days]) => {
      const percentage = Math.round((days / totalWorkerLoad) * 100);
      const width = usePercent ? percentage : Math.max(6, Math.round((days / maxWorkerLoad) * 100));
      const value = usePercent ? `${percentage}%` : `${days.toFixed(1)}d`;
      return `<div class="chart-bar"><span>${worker}</span><div class="mini-track"><div class="mini-fill" style="width: ${width}%;"></div></div><b>${value}</b></div>`;
    }).join("");
  });
  root.querySelectorAll('[data-bar="warning-meter"]').forEach((bar) => {
    bar.style.width = `${Math.min(100, forecast.warnings.length * 14)}%`;
  });
  root.querySelectorAll('[data-chart="trend"]').forEach((chart) => {
    const maxDays = forecast.tasks.reduce((sum, task) => sum + task.estimateDays, 0) || 1;
    const dates = eachDate(forecast.startDate, forecast.completion);
    const today = startOfDay(new Date());
    chart.innerHTML = `
      <div class="burndown-axis"><span>${maxDays.toFixed(1)}d</span><span>0d</span></div>
      <div class="burndown-columns">
        ${dates.map((date) => {
          const chartDate = startOfDay(date);
          const dailyDoneDays = Math.min(maxDays, doneDaysAtDate(forecast, chartDate, today));
          const remainingDays = Math.max(0, maxDays - dailyDoneDays);
          const doneHeight = Math.round((dailyDoneDays / maxDays) * 100);
          const remainingHeight = 100 - doneHeight;
          const basis = chartDate > today ? "projected from assumptions" : "actual completed";
          return `
            <div class="trend-column" title="${toISODate(date)}: ${dailyDoneDays.toFixed(1)}d done, ${remainingDays.toFixed(1)}d remaining (${basis})">
              <div class="burndown-stack" aria-label="${toISODate(date)} ${dailyDoneDays.toFixed(1)} days done ${remainingDays.toFixed(1)} days remaining ${basis}">
                <span class="done-segment" style="height: ${doneHeight}%;"></span>
                <span class="remaining-segment" style="height: ${remainingHeight}%;"></span>
              </div>
              <b>${date.getMonth() + 1}/${date.getDate()}</b>
            </div>
          `;
        }).join("")}
      </div>
    `;
  });
  root.querySelectorAll('[data-chart="trend-line"]').forEach((chart) => {
    const maxDays = forecast.tasks.reduce((sum, task) => sum + task.estimateDays, 0) || 1;
    const dates = eachDate(forecast.startDate, forecast.completion);
    const today = startOfDay(new Date());
    const panelId = chart.closest("[data-panel]")?.dataset.panel || "charts2";
    const styleKey = chart.dataset.style || "simple";
    const width = 1000;
    const height = 220;
    const top = 12;
    const plotHeight = 184;
    const bottom = top + plotHeight;
    const lastIndex = Math.max(1, dates.length - 1);
    const points = dates.map((date, index) => {
      const chartDate = startOfDay(date);
      const dailyDoneDays = Math.min(maxDays, doneDaysAtDate(forecast, chartDate, today));
      const remainingDays = Math.max(0, maxDays - dailyDoneDays);
      return {
        date,
        future: chartDate > today,
        doneDays: dailyDoneDays,
        remainingDays,
        x: (index / lastIndex) * width,
        y: top + (1 - remainingDays / maxDays) * plotHeight
      };
    });
    const actualPoints = points.filter((point) => !point.future);
    const projectedPoints = points.filter((point) => point.future);
    if (actualPoints.length && projectedPoints.length) projectedPoints.unshift(actualPoints.at(-1));
    const pointList = (items) => items.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(" ");
    const areaPath = (items) => {
      if (items.length < 2) return "";
      const line = items.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
      const first = items[0];
      const last = items.at(-1);
      return `${line} L ${last.x.toFixed(1)} ${bottom} L ${first.x.toFixed(1)} ${bottom} Z`;
    };
    chart.innerHTML = `
      <div class="burndown-axis"><span>${maxDays.toFixed(1)}d</span><span>0d</span></div>
      <div class="line-burndown-plot">
        <svg class="line-burndown-svg line-style-${styleKey}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Remaining task days by date" data-panel-id="${panelId}">
          <line class="line-grid" x1="0" y1="${top}" x2="${width}" y2="${top}"></line>
          <line class="line-grid line-grid-mid" x1="0" y1="${top + plotHeight * 0.5}" x2="${width}" y2="${top + plotHeight * 0.5}"></line>
          <line class="line-grid" x1="0" y1="${bottom}" x2="${width}" y2="${bottom}"></line>
          <path class="line-area line-area-actual" d="${areaPath(actualPoints)}"></path>
          <path class="line-area line-area-projected" d="${areaPath(projectedPoints)}"></path>
          <polyline class="line-actual" points="${pointList(actualPoints)}"></polyline>
          <polyline class="line-projected" points="${pointList(projectedPoints)}"></polyline>
          ${points.map((point) => `
            <circle class="${point.future ? "dot-projected" : "dot-actual"}" cx="${point.x.toFixed(1)}" cy="${point.y.toFixed(1)}" r="5" data-remaining-days="${point.remainingDays.toFixed(1)}" data-done-days="${point.doneDays.toFixed(1)}">
              <title>${toISODate(point.date)}: ${maxDays.toFixed(1)}d total - ${point.doneDays.toFixed(1)}d done = ${point.remainingDays.toFixed(1)}d remaining</title>
            </circle>
          `).join("")}
        </svg>
        <div class="line-date-axis">
          ${dates.map((date) => `<span>${date.getMonth() + 1}/${date.getDate()}</span>`).join("")}
        </div>
      </div>
    `;
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
  root.querySelectorAll('[data-flow="chain"]').forEach((chain) => {
    chain.innerHTML = forecast.tasks.map((task, index) => (
      `<div class="chain-node ${task.remainingDays > 0 ? "open" : "done"}"><span>#${task.id}</span><strong>${task.status}</strong><small>${index === 0 ? "Start" : task.dependency ? `After #${task.dependency}` : "Parallel"}</small></div>`
    )).join("");
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
  root.querySelectorAll('[data-grid="capacity-days"]').forEach((grid) => {
    grid.innerHTML = forecast.openTasks.map((task) => (
      `<div class="day-bucket"><span>${toISODate(task.finish)}</span><strong>#${task.id}</strong><small>${task.remainingDays.toFixed(1)}d ${task.worker}</small></div>`
    )).join("") || `<p class="empty-state">No capacity buckets remain.</p>`;
  });
}

function syncControls(source) {
  if (source?.classList.contains("js-start-date")) state.startDate = source.value;
  if (source?.classList.contains("js-capacity")) state.capacityHours = Number(source.value) || 6;
  if (source?.classList.contains("js-human-count")) state.humanCount = Math.max(1, Math.round(Number(source.value) || 1));
  if (source?.classList.contains("js-scenario")) state.scenario = source.value;
  document.querySelectorAll(".js-start-date").forEach((input) => { input.value = state.startDate; });
  document.querySelectorAll(".js-capacity").forEach((input) => { input.value = state.capacityHours; });
  document.querySelectorAll(".js-human-count").forEach((input) => { input.value = state.humanCount; });
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
  if (event.target.matches(".js-start-date, .js-capacity, .js-human-count, .js-scenario")) {
    syncControls(event.target);
    render();
  }
});
document.addEventListener("change", (event) => {
  if (event.target.matches(".js-start-date, .js-capacity, .js-human-count, .js-scenario")) {
    syncControls(event.target);
    render();
  }
});
window.addEventListener("hashchange", () => activate(location.hash.replace("#", ""), false));
activate(state.active, false);
