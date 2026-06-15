# Implementation and Test Plan - Task #5

## Task
Demo handle designs for a vertically resizable edit box.

## Reopened Review Request
Add a design treatment where the right end shows a draggable handle block, with a dot on the bottom-right of the block that can drag out a link line.

## Implementation Plan
1. Update `/Users/wanghui/coding/prj-demos/demos/demos/resizable-edit-box/index.html` in place.
2. Add visible lower-right handle blocks to the editor treatments, including grip texture, a connector dot, and a link-line preview affordance.
3. Preserve pointer-driven vertical resizing on the lower-border handle.
4. Add dot-specific pointer interaction that draws a temporary line from the bottom-right dot without interfering with resize.

## Test Plan
1. Run an HTML/content check that the demo includes handle blocks, connector dots, and link-line elements for all variants.
2. Run an inline JavaScript syntax check for the demo script.
3. Serve the static site locally and inspect the demo in a browser.
4. Verify dragging a lower-border handle changes an edit box height.
5. Verify dragging a connector dot renders an active link line and leaves no console errors.
