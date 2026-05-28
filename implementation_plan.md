# Implementation and Test Plan - Task Board & Codebase Automation

## 1. Objectives
1. **Automation Setup & Validation**: Launch or connect to a Google Chrome instance using the `agy` profile (`Profile 2` inside `/Users/wanghui/.gemini/antigravity-browser-profile`), verifying that the Codex extension (ID: `hehggadaopoacecdllhhajmbjkdcmajg`) is active.
2. **Task Board Ingestion**:
   - Navigate to the task board: `https://glidelines.vercel.app/?project=PVT_kwDODNQhvs4BY49y&account=10445658`
   - Sync the task board with GitHub (click sync button, reload).
   - Find the first task with status `Todo`. If none, cleanly terminate.
   - Transition status of the task to `In progress`.
   - Post comment: `Google Antigravity Automation is working on it <current datetime>`.
   - Read the task title, description, and comments, and save them.
3. **Task Execution**:
   - Inspect the task's requirements.
   - Implement the requirements within the workspace `/Users/wanghui/coding/prj-demos/demos`.
   - Test/verify the implementation.
4. **Task Completion Workflow**:
   - Add completion comment: `Google Antigravity Automation committed the changes <current datetime> | <brief execution walkthrough>` (total length < 220 characters).
   - Git commit with the task ID in the message, and push the changes.
   - Change task state to `In review` on the board.
   - Re-run for the next `Todo` task if context and time permit.

---

## 2. Browser, Profile, & Extension Verification
- **Path**: `/Users/wanghui/.gemini/antigravity-browser-profile`
- **Sub-profile**: `Profile 2` (profile name: `agy`)
- **Verification checks**:
  - Read `Local State` and `Preferences` files to verify that profile name is indeed `agy` and the profile directory matches.
  - Connect to port 9222 or launch Chrome if not running.
  - Call `http://127.0.0.1:9222/json` to query list of active targets, verifying that the Codex extension with ID `hehggadaopoacecdllhhajmbjkdcmajg` is present and active.
- **Focus Management**:
  - Before launching, retrieve frontmost application via AppleScript.
  - After launch, reactivate the stored application to restore focus, keeping headful Chrome in the background.

---

## 3. Automation Verification & Risk Mitigation
- **Risk**: Chrome instance unclean shutdown, causing browser profile corruption or purging extensions.
  - **Mitigation**: Never `kill` or `pkill` the browser forcefully. Reuse the existing browser session via remote debugging (port 9222) if available. When launching, cleanly disconnect or close using `await browser.close()`.
- **Risk**: Finding no `Todo` tasks.
  - **Mitigation**: Cleanly output a termination message, disconnect/close browser, and exit.
- **Risk**: Task comment exceeds length limit.
  - **Mitigation**: Keep the completion comment strictly under 220 characters by programmatically verifying string length.

---

## 4. Test & Implementation Strategy
1. **Fetch & Open**: Run `node /Users/wanghui/.gemini/antigravity/scratch/start_task.js` (or a refined version) to sync, identify, start, and retrieve details.
2. **Analysis**: Read the JSON outputs of task details.
3. **Execution**: Implement the changes in `demos/`.
4. **Verification**: Run/verify locally.
5. **Closeout**: Run a closeout script or commands to transition status to `In review` and push git changes.
