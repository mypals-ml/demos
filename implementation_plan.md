# Implementation and Test Plan - Task #6 Review Refinement

## Task
Demo a dashboard for a project.

## Review Notes
- Emphasize Estimated Completion Date.
- Move the information in "Forecast start date" to section "Assumptions Used".
- Give an info button to explain what is "Capacity Timeline".
- Use multiple tabs to show more designs.
- Designs may contain charts and graphs.

## Implementation Plan
1. Refine `/Users/wanghui/coding/prj-demos/demos/demos/project-dashboard/index.html`.
2. Make the Estimated Completion Date the primary metric with stronger visual treatment.
3. Keep the start-date control editable, but move its workday explanation into Assumptions Used.
4. Add accessible info buttons on Capacity Timeline panels.
5. Add tabbed dashboard designs:
   - Operations Table
   - Charts
   - Capacity
   - Dependencies
6. Reuse one forecast calculation engine so all views update from the same start date, capacity, and scenario controls.

## Test Plan
1. Check static content for the review-requested labels and tab names.
2. Parse the inline JavaScript with Node.
3. Run `git diff --check`.
4. Serve the static site locally.
5. Verify in browser that the dashboard renders, tabs switch, capacity/scenario changes recalculate the visible charts, and no local console errors appear.
