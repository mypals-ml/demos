const scenarios = {
        current: [
          { id: 1, title: "Discovery workshop", status: "Done", estimateDays: 2, assignee: "Hui", dependency: null },
          { id: 2, title: "Project plan and milestones", status: "Done", estimateDays: 1.5, assignee: "Mina", dependency: 1 },
          { id: 3, title: "Data contract audit", status: "Done", estimateDays: 2, assignee: "Ken", dependency: 1 },
          { id: 4, title: "GitHub project ingestion", status: "Done", estimateDays: 3, assignee: "Hui", dependency: 3 },
          { id: 5, title: "Forecast rules baseline", status: "Done", estimateDays: 2, assignee: "Mina", dependency: 4 },
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
          { id: 1, title: "Discovery workshop", status: "Done", estimateDays: 2, assignee: "Hui", dependency: null },
          { id: 2, title: "Project plan and milestones", status: "Done", estimateDays: 1.5, assignee: "Mina", dependency: 1 },
          { id: 3, title: "Data contract audit", status: "Done", estimateDays: 2, assignee: "Ken", dependency: 1 },
          { id: 4, title: "GitHub project ingestion", status: "Done", estimateDays: 3, assignee: "Hui", dependency: 3 },
          { id: 5, title: "Forecast rules baseline", status: "Done", estimateDays: 2, assignee: "Mina", dependency: 4 },
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
          { id: 1, title: "Discovery workshop", status: "Done", estimateDays: 2, assignee: "Hui", dependency: null },
          { id: 2, title: "Project plan and milestones", status: "Done", estimateDays: 1.5, assignee: "Mina", dependency: 1 },
          { id: 3, title: "Data contract audit", status: "Done", estimateDays: null, assignee: "Ken", dependency: 1 },
          { id: 4, title: "GitHub project ingestion", status: "Done", estimateDays: 3, assignee: "", dependency: 3 },
          { id: 5, title: "Forecast rules baseline", status: "Done", estimateDays: 2, assignee: "Mina", dependency: 4 },
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
        startDate: "2026-06-01",
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

      const elements = {
        startDate: document.querySelector("#start-date"),
        capacity: document.querySelector("#capacity"),
        scenario: document.querySelector("#scenario"),
        completionDate: document.querySelector("#completion-date"),
        completionNote: document.querySelector("#completion-note"),
        remainingEffort: document.querySelector("#remaining-effort"),
        warningCount: document.querySelector("#warning-count"),
        warningLabel: document.querySelector("#warning-label"),
        workerCount: document.querySelector("#worker-count"),
        briefDate: document.querySelector("#brief-date"),
        briefSummary: document.querySelector("#brief-summary"),
        briefEffort: document.querySelector("#brief-effort"),
        briefWarnings: document.querySelector("#brief-warnings"),
        briefWorkers: document.querySelector("#brief-workers"),
        taskCount: document.querySelector("#task-count"),
        taskBody: document.querySelector("#task-body"),
        assumptionsList: document.querySelector("#assumptions-list"),
        warningsList: document.querySelector("#warnings-list"),
        timeline: document.querySelector("#timeline"),
        capacityTimeline: document.querySelector("#capacity-timeline"),
        statusDonut: document.querySelector("#status-donut"),
        donePercent: document.querySelector("#done-percent"),
        statusLegend: document.querySelector("#status-legend"),
        effortBars: document.querySelector("#effort-bars"),
        workerBars: document.querySelector("#worker-bars"),
        dependencyFlow: document.querySelector("#dependency-flow"),
        signalList: document.querySelector("#signal-list"),
        riskGrid: document.querySelector("#risk-grid"),
        reviewGrid: document.querySelector("#review-grid")
      };

      function parseDate(value) {
        const [year, month, day] = value.split("-").map(Number);
        return new Date(year, month - 1, day);
      }

      function formatDate(date) {
        return new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          year: "numeric"
        }).format(date);
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
        while (!isWorkday(candidate)) {
          candidate.setDate(candidate.getDate() + 1);
        }
        return candidate;
      }

      function addWorkdays(date, days) {
        let remaining = Math.max(0, Math.ceil(days));
        const cursor = nextWorkday(date);
        if (remaining === 0) {
          return cursor;
        }

        while (remaining > 1) {
          cursor.setDate(cursor.getDate() + 1);
          if (isWorkday(cursor)) {
            remaining -= 1;
          }
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
          const nextIndex = index === -1 ? 0 : index;
          const [task] = pending.splice(nextIndex, 1);
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
            warnings.push({
              task: `#${task.id} ${task.title}`,
              message: "Missing estimate. Defaulted to 1 day."
            });
          }

          if (!task.assignee) {
            warnings.push({
              task: `#${task.id} ${task.title}`,
              message: "Missing assignee. Scheduled against Default worker."
            });
          }

          finishByTask.set(task.id, finish);
          if (remainingDays > 0) {
            const nextAvailable = new Date(finish);
            nextAvailable.setDate(nextAvailable.getDate() + 1);
            workerAvailability.set(worker, nextWorkday(nextAvailable));
          }

          return {
            ...task,
            estimateDays,
            worker,
            remainingDays,
            start: earliest,
            finish
          };
        });

        const openTasks = scheduled.filter((task) => task.remainingDays > 0);
        const completion = openTasks.reduce((latest, task) => {
          return task.finish > latest ? task.finish : latest;
        }, startDate);

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

      function renderMetrics(forecast) {
        if (elements.completionDate) elements.completionDate.textContent = formatDate(forecast.completion);
        if (elements.completionNote) elements.completionNote.textContent = `${workdayNames[forecast.completion.getDay()]} finish after dependency and capacity checks.`;
        if (elements.remainingEffort) elements.remainingEffort.textContent = `${forecast.remainingDays.toFixed(1)}d`;
        if (elements.warningCount) elements.warningCount.textContent = String(forecast.warnings.length);
        if (elements.warningLabel) elements.warningLabel.textContent = `${forecast.warnings.length} warnings`;
        if (elements.workerCount) elements.workerCount.textContent = String(forecast.workers.size);
        if (elements.taskCount) elements.taskCount.textContent = `${forecast.tasks.length} tasks`;
      }

      function renderBrief(forecast) {
        const openTaskCopy = forecast.openTasks.length === 1 ? "open task" : "open tasks";
        if (!elements.briefDate) return;
        elements.briefDate.textContent = formatDate(forecast.completion);
        elements.briefSummary.textContent = `${forecast.openTasks.length} ${openTaskCopy} remain after applying status, estimates, missing-data defaults, dependencies, and ${state.capacityHours}h/day capacity.`;
        elements.briefEffort.textContent = `${forecast.remainingDays.toFixed(1)}d`;
        elements.briefWarnings.textContent = String(forecast.warnings.length);
        elements.briefWorkers.textContent = String(forecast.workers.size);
      }

      function renderTasks(forecast) {
        if (!elements.taskBody) return;
        elements.taskBody.innerHTML = forecast.tasks.map((task) => {
          const statusKey = statusClass[task.status] || "todo";
          const dependency = task.dependency ? `#${task.dependency}` : "None";
          const estimate = Number.isFinite(task.estimateDays) ? `${task.estimateDays}d` : "1d default";
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
      }

      function renderAssumptions(forecast) {
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

        if (!elements.assumptionsList) return;
        elements.assumptionsList.innerHTML = assumptions.map(([title, detail]) => `
          <li>
            <strong>${title}</strong>
            <span>${detail}</span>
          </li>
        `).join("");
      }

      function renderWarnings(forecast) {
        if (!elements.warningsList) return;

        if (!forecast.warnings.length) {
          elements.warningsList.innerHTML = `
            <li>
              <strong>No missing data</strong>
              <span>All scheduled tasks include estimates and assignees.</span>
            </li>
          `;
          return;
        }

        elements.warningsList.innerHTML = forecast.warnings.map((warning) => `
          <li>
            <strong>${warning.task}</strong>
            <span>${warning.message}</span>
          </li>
        `).join("");
      }

      function renderTimelineInto(container, forecast) {
        if (!container) return;

        if (!forecast.openTasks.length) {
          container.innerHTML = `<p class="empty-state">No open work remains for this scenario.</p>`;
          return;
        }

        const maxRemaining = Math.max(...forecast.openTasks.map((task) => task.remainingDays), 1);
        container.innerHTML = forecast.openTasks.map((task) => {
          const width = Math.max(18, Math.round((task.remainingDays / maxRemaining) * 100));
          return `
            <div class="bar-row">
              <span>#${task.id} ${toISODate(task.finish)}</span>
              <div class="bar-track">
                <div class="bar" style="width: ${width}%;">${task.remainingDays.toFixed(1)}d ${task.worker}</div>
              </div>
            </div>
          `;
        }).join("");
      }

      function renderCharts(forecast) {
        const totalEstimate = forecast.tasks.reduce((sum, task) => sum + task.estimateDays, 0) || 1;
        const doneDays = forecast.tasks
          .filter((task) => task.status === "Done")
          .reduce((sum, task) => sum + task.estimateDays, 0);
        const inFlightDays = forecast.tasks
          .filter((task) => task.status === "In progress" || task.status === "In review")
          .reduce((sum, task) => sum + task.estimateDays, 0);
        const todoDays = Math.max(0, totalEstimate - doneDays - inFlightDays);
        const doneDegrees = Math.round((doneDays / totalEstimate) * 360);
        const inFlightDegrees = Math.round((inFlightDays / totalEstimate) * 360);
        const donePercent = Math.round((doneDays / totalEstimate) * 100);

        if (elements.statusDonut) {
          elements.statusDonut.style.background = `conic-gradient(var(--green) 0deg ${doneDegrees}deg, var(--blue) ${doneDegrees}deg ${doneDegrees + inFlightDegrees}deg, var(--amber) ${doneDegrees + inFlightDegrees}deg 360deg)`;
          elements.donePercent.textContent = `${donePercent}%`;
          elements.statusLegend.innerHTML = [
            ["Done estimate", `${doneDays.toFixed(1)}d`],
            ["In progress or review", `${inFlightDays.toFixed(1)}d`],
            ["Todo estimate", `${todoDays.toFixed(1)}d`]
          ].map(([label, value]) => `<li><span>${label}</span><b>${value}</b></li>`).join("");
        }

        const maxRemaining = Math.max(...forecast.tasks.map((task) => task.remainingDays), 1);
        if (elements.effortBars) {
          elements.effortBars.innerHTML = forecast.tasks.map((task) => {
            const width = Math.max(4, Math.round((task.remainingDays / maxRemaining) * 100));
            return `
              <div class="chart-bar">
                <span>#${task.id}</span>
                <div class="mini-track"><div class="mini-fill" style="width: ${width}%;"></div></div>
                <b>${task.remainingDays.toFixed(1)}d</b>
              </div>
            `;
          }).join("");
        }

        const workerLoad = forecast.tasks.reduce((load, task) => {
          load.set(task.worker, (load.get(task.worker) || 0) + task.remainingDays);
          return load;
        }, new Map());
        const maxWorkerLoad = Math.max(...workerLoad.values(), 1);
        if (elements.workerBars) {
          elements.workerBars.innerHTML = [...workerLoad.entries()].map(([worker, days]) => {
            const width = Math.max(6, Math.round((days / maxWorkerLoad) * 100));
            return `
              <div class="chart-bar">
                <span>${worker}</span>
                <div class="mini-track"><div class="mini-fill" style="width: ${width}%;"></div></div>
                <b>${days.toFixed(1)}d</b>
              </div>
            `;
          }).join("");
        }
      }

      function renderDependencyDesign(forecast) {
        if (!elements.dependencyFlow) return;
        elements.dependencyFlow.innerHTML = forecast.tasks.map((task) => {
          const dependency = task.dependency ? `after #${task.dependency}` : "no predecessor";
          return `
            <div class="flow-step">
              <b>#${task.id}</b>
              <span>${dependency}</span>
              <span>${toISODate(task.finish)}</span>
            </div>
          `;
        }).join("");

        const finalTask = forecast.openTasks.at(-1) || forecast.tasks.at(-1);
        if (elements.signalList) {
          elements.signalList.innerHTML = [
            ["Estimated Completion Date", formatDate(forecast.completion)],
            ["Open tasks", String(forecast.openTasks.length)],
            ["Warnings", String(forecast.warnings.length)],
            ["Critical finish", finalTask ? `#${finalTask.id}` : "None"]
          ].map(([label, value]) => `
            <div class="signal-row">
              <span>${label}</span>
              <b>${value}</b>
            </div>
          `).join("");
        }
      }

      function renderRiskReview(forecast) {
        const unestimated = forecast.tasks.filter((task) => !scenarios[state.scenario].find((raw) => raw.id === task.id).estimateDays);
        const unassigned = forecast.tasks.filter((task) => !scenarios[state.scenario].find((raw) => raw.id === task.id).assignee);
        const dependencyQueue = forecast.tasks.filter((task) => task.dependency);
        const riskCards = [
          ["high", "Missing data", String(forecast.warnings.length), "Resolve estimates and assignees before committing the delivery date."],
          ["medium", "Dependency queue", String(dependencyQueue.length), "Successor tasks are scheduled only after predecessor finish dates."],
          ["low", "Capacity confidence", `${state.capacityHours}h/day`, "Forecast uses a consistent weekday capacity model across workers."]
        ];

        if (!elements.riskGrid) return;
        elements.riskGrid.innerHTML = riskCards.map(([level, label, value, detail]) => `
          <div class="risk-card ${level}">
            <span>${label}</span>
            <strong>${value}</strong>
            <small>${detail}</small>
          </div>
        `).join("");

        const reviewCards = [
          ["Needs estimate", unestimated.length ? unestimated.map((task) => `#${task.id}`).join(", ") : "None", "Defaulted to one day where missing."],
          ["Needs owner", unassigned.length ? unassigned.map((task) => `#${task.id}`).join(", ") : "None", "Default worker handles unassigned tasks."],
          ["Completion driver", forecast.openTasks.at(-1) ? `#${forecast.openTasks.at(-1).id}` : "None", "Last open task in the dependency-aware schedule."],
          ["Review outcome", forecast.warnings.length ? "Needs cleanup" : "Ready to trust", "Data quality determines forecast confidence."]
        ];

        if (elements.reviewGrid) {
          elements.reviewGrid.innerHTML = reviewCards.map(([label, value, detail]) => `
            <div class="review-card">
              <span>${label}</span>
              <strong>${value}</strong>
              <small>${detail}</small>
            </div>
          `).join("");
        }
      }

      function render() {
        state.startDate = elements.startDate?.value || state.startDate;
        state.capacityHours = Number(elements.capacity?.value) || 6;
        state.scenario = elements.scenario?.value || state.scenario;

        const forecast = buildForecast();
        renderMetrics(forecast);
        renderBrief(forecast);
        renderTasks(forecast);
        renderAssumptions(forecast);
        renderWarnings(forecast);
        renderTimelineInto(elements.timeline, forecast);
        renderTimelineInto(elements.capacityTimeline, forecast);
        renderCharts(forecast);
        renderDependencyDesign(forecast);
        renderRiskReview(forecast);
      }

      elements.startDate?.addEventListener("change", render);
      elements.capacity?.addEventListener("input", render);
      elements.scenario?.addEventListener("change", render);

      render();
