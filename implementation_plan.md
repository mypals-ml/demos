# Implementation and Test Plan - Task #6 Whole-Page Design Switcher

## Task
Change the project dashboard design navigation so top switch buttons change the whole page content, not only a lower shared section.

## Implementation Plan
1. Make `/Users/wanghui/coding/prj-demos/demos/demos/project-dashboard/index.html` the canonical tabbed dashboard experience.
2. Add switch buttons at the top of the page for all six designs.
3. Move the forecast summary, controls, hero copy, charts, and layout inside each design panel so switching tabs changes the whole page content.
4. Add design-specific styling for Executive Brief, Operations Table, Chart Wall, Capacity Planner, Dependency Map, and Risk Review Board.
5. Add `switcher.js` to own tab state, shared forecast calculation, control synchronization, and rendering.
6. Convert old separate page URLs into redirects to the corresponding top switch tab.

## Test Plan
1. Parse `switcher.js` and `shared.js` with Node.
2. Run `git diff --check`.
3. Check that old page files redirect to hash tabs on `/demos/project-dashboard/`.
4. Serve the static site locally.
5. Verify in browser that clicking top switch buttons changes the active whole-page design screen.
6. Verify the first section remains Estimated Completion Date, scenario changes recalculate data, and no console errors appear.
