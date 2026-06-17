# Implementation and Test Plan - Task #6 Dashboard Design Review

## Task
Review all project-dashboard designs and make them more reasonable, logically correct, organized, beautiful, and well designed using current dashboard-design references.

## Reference Concepts
- Put the most important KPI first and make secondary metrics clearly subordinate.
- Prefer low-clutter charts that use length, position, and contrast for fast comparison.
- Tailor dashboard views to the audience: executive decision, operations detail, visual analysis, capacity planning, dependency reasoning, and risk mitigation.
- Surface risks, dependencies, missing data, and next actions, not just raw metrics.
- Keep the forecast model explicit so the dashboard is trustworthy.

## Implementation Plan
1. Keep the top switcher interaction, but make each tab more purpose-specific.
2. Make the forecast logic more reasonable:
   - Done = 0% remaining.
   - In Progress = 50% remaining.
   - In Review = 25% remaining.
   - Todo/Draft = 100% remaining.
   - Missing estimate = 1 day default with visible warning.
3. Improve the Operations table so defaulted estimates are labeled.
4. Add more meaningful supporting components:
   - Executive decision/forecast-confidence/critical-driver cards.
   - Operations focus signals.
   - Chart Wall forecast trend graph.
   - Capacity Planner scheduled workday buckets.
   - Dependency Map critical chain graph.
   - Risk Review mitigation action list.
5. Keep the first section focused on Estimated Completion Date.
6. Preserve responsive behavior and full interactivity.

## Test Plan
1. Run `node --check` for `switcher.js` and `shared.js`.
2. Run `git diff --check`.
3. Run static checks for the new panels and updated assumptions.
4. Serve the site locally.
5. Verify in browser that every tab switches to a distinct full-page design, charts render, assumptions are present, scenario recalculation works, and no console errors appear.
