# Implementation and Test Plan - Task #4

## Task
Add a design update for `Task List View V2`.

## Implementation Plan
1. Update `/Users/wanghui/coding/prj-demos/demos/demos/task-list-view-v2/index.html` only for the V2 demo behavior.
2. Add six sample tasks with exact title lengths of 10, 20, 30, 40, 50, and 100 characters.
3. Clamp task titles to a maximum of two visible lines with overflow truncation across every V2 design.
4. Adjust the Mini design so each task card shows status, assignee, start date, and target date in one metadata row.

## Test Plan
1. Run a script check that the six required title lengths are present exactly once.
2. Run an inline JavaScript syntax check for the demo script.
3. Serve the static site locally and inspect the V2 page in a browser.
4. Verify the Mini view includes one-line metadata and the page reports no console errors.
