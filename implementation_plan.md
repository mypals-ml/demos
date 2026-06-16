# Implementation and Test Plan - Task #6 Forecast-First Dashboard Pages

## Task
Refine the project dashboard pages:
- Emphasize Estimated Completion Date and make it the first section.
- Move the information in "Forecast start date" to Assumptions Used.
- Use charts and graphs where possible.

## Implementation Plan
1. Move the forecast summary metrics above the hero/controls on every separate dashboard design page.
2. Make the Estimated Completion Date card span more space and use larger type in the first section.
3. Keep start-date control copy short and put the workday normalization explanation in Assumptions Used.
4. Add graph panels to designs that were primarily card-based:
   - Executive Brief gets a Remaining Effort Graph.
   - Risk Review Board gets a Worker Load Graph.
5. Reuse `shared.js` render logic so charts continue to update from the same scenario/capacity model.

## Test Plan
1. Check that every separate design page has `metrics forecast-first` before the hero section.
2. Check that Assumptions Used still includes `Forecast start date`.
3. Parse `shared.js` with Node.
4. Run `git diff --check`.
5. Serve the site locally and verify in browser that the first section is the forecast summary, charts render, scenario changes recalculate values, and no console errors appear.
