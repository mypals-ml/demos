# Implementation and Test Plan - Task #6

## Task
Demo a dashboard for a project.

## Requirements
Build a project dashboard demo that consumes GitHub Project-style task data with estimates, status, assignee, and dependency links. It must show estimated completion date, total remaining effort, assumptions used, and missing data warnings.

## Implementation Plan
1. Add `/Users/wanghui/coding/prj-demos/demos/demos/project-dashboard/index.html` as a standalone static dashboard demo.
2. Include a GitHub Project-style input table with status, estimate, assignee, and dependency data.
3. Implement deterministic browser-side scheduling rules:
   - Done tasks contribute 0 remaining effort.
   - In progress tasks contribute 50% remaining effort.
   - Todo / Not Started / Draft tasks contribute 100% remaining effort.
   - Missing estimates warn and default to 1 day.
   - Missing assignees warn and schedule against a default worker.
   - Capacity defaults to 6 hours/day, Monday-Friday.
   - Dependencies must finish before successors start.
4. Render the required outputs as dashboard metrics, assumptions, warnings, and a schedule table.
5. Add the demo to the root HTML Demo Shelf.

## Test Plan
1. Run a content check for the required output labels, assumptions, warnings, and project-dashboard index link.
2. Run an inline JavaScript syntax check for the demo script.
3. Serve the static site locally and inspect `/demos/project-dashboard/` in a browser.
4. Verify the dashboard renders a completion date, total remaining effort, warning rows, and scheduled task rows.
5. Change dashboard controls in the browser and verify metrics recalculate without console errors.
