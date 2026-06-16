# Implementation and Test Plan - Task #6 Separate Dashboard Pages

## Task
Put the project dashboard designs in separate pages.

## Implementation Plan
1. Keep `/Users/wanghui/coding/prj-demos/demos/demos/project-dashboard/index.html` as a design-picker landing page.
2. Move each dashboard design pattern to its own standalone HTML page:
   - `executive-brief.html`
   - `operations-table.html`
   - `chart-wall.html`
   - `capacity-planner.html`
   - `dependency-map.html`
   - `risk-review.html`
3. Extract shared styling into `shared.css`.
4. Extract the shared forecast model and render logic into `shared.js`.
5. Keep the common forecast controls and summary metrics on each design page.
6. Add cross-links between the separate design pages.

## Test Plan
1. Check that the landing page links to all six separate design pages.
2. Parse the shared JavaScript with Node.
3. Run `git diff --check`.
4. Serve the static site locally.
5. Verify in browser that the landing page and all six design pages render without console errors.
6. Verify controls still recalculate at least one separate design page.
