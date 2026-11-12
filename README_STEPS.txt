CMLD KEYBOARD TRAINER - BUILD THE WINDOWS APP ONLINE (GitHub Actions, free)

BEFORE YOU START (2 minutes)
- Open index.html in Notepad, press Ctrl+F, search for  CHANGE-ME@example.org
  and replace it with the admin email that should receive results and reset requests.
  (You can also set it later inside the app: Admin > Online service > Admin email.)

1. On github.com create a NEW repository (e.g. cmld-typing-tool). Private is fine.
2. Add file > Upload files: upload  index.html, main.js, package.json, icon.ico, icon.png  > Commit changes.
3. Add file > Create new file. Name it exactly:   .github/workflows/build.yml
   (typing the slashes creates the folders). Open the file "build.yml" from this folder, copy everything,
   paste it in and click Commit changes.
   NOTE: the .github folder is hidden on your computer, so use the copy named build.yml.
4. Actions tab > "Build CMLD Windows app" > Run workflow (green button). Wait about 3-5 minutes.
   - Red cross on "Check index.html..."  = the upload of index.html did not work; upload it again.
   - Never use "Re-run all jobs" after changing files. Always use Run workflow.
5. Open the finished run > Artifacts > download  CMLD-Keyboard-Trainer-Windows-runN > Extract All.
   - CMLD Keyboard Trainer Setup 1.1.0.exe  = installer (desktop icon + Start menu)
   - CMLD Keyboard Trainer 1.1.0.exe        = portable, runs from a USB stick
6. Install on each Windows computer. If Windows shows "Windows protected your PC": More info > Run anyway.
7. First time on each computer: start screen > Admin > set the admin passcode.

The start screen shows "Version 1.1 - CMLD" under the title so you know you have the right build.
EMAIL FEATURES (reset code + cloud backup) need the online service: see CMLD_ONLINE_SETUP.txt.
