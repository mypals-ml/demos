# Implementation and Test Plan - Task #7

## Task
Refine: Gantt Hover Interactions — 4 UI Designs.

## Requirements
Compare four hover affordances for drag-to-resize duration and drag-to-link dependencies on Gantt bars. The visual should show a draggable right-end handle block and a bottom-right dot/port that can pull out a dependency link.

## Implementation Plan
1. Refine `/Users/wanghui/coding/prj-demos/demos/demos/gantt-chart/hover-features.html`.
2. Keep the existing four-design comparison and shared interaction engine.
3. Make each hover variant visibly expose a right-end resize handle/block.
4. Move or add dependency link dots/ports to the bottom-right of that handle/block.
5. Start new link rubber-band drags from the actual clicked dot/port coordinate.
6. Keep the root demo shelf link pointing at the hover-features demo.

## Test Plan
1. Run a content check for the required variant labels and bottom-right dot language.
2. Run an inline JavaScript syntax check for the hover-features script.
3. Serve the static site locally and inspect `/demos/gantt-chart/hover-features.html` in a browser.
4. Verify the four cards render, hover affordances appear, reset/theme controls work, and no console errors are present.
