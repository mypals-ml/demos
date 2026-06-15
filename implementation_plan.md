# Implementation and Test Plan - Task #6 Review Refinement

## Task
Demo a dashboard for a project.

## Review Notes
- Need more design patterns for review.
- In every design, do not use tabs to group sections.

## Implementation Plan
1. Refine `/Users/wanghui/coding/prj-demos/demos/demos/project-dashboard/index.html`.
2. Remove the tabbed design selector so all design patterns are visible for side-by-side review.
3. Keep the existing forecast calculation engine and shared controls.
4. Add more reviewable dashboard patterns:
   - Executive Brief
   - Operations Table
   - Chart Wall
   - Capacity Planner
   - Dependency Map
   - Risk Review Board
5. Ensure each pattern is a self-contained layout and does not use tabs to group sections.

## Test Plan
1. Check static content for the review-requested labels and confirm dashboard tab affordances were removed.
2. Parse the inline JavaScript with Node.
3. Run `git diff --check`.
4. Serve the static site locally.
5. Verify in browser that the dashboard renders all six design patterns, capacity/scenario changes recalculate visible cards/charts, and no local console errors appear.
