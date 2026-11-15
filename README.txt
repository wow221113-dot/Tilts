TILT PROJECT  (desktop app + web version + online accounts + admin)
====================================================================

PART 1: FIREBASE  (the online part)
-----------------------------------
1. Go to https://console.firebase.google.com and click "Add project" (name it Tilt).
2. Build > Authentication > Get started > Sign-in method > turn ON "Email/Password".
3. Build > Realtime Database > Create database > pick a location > "Start in LOCKED mode".
4. In Realtime Database open the "Rules" tab, delete what is there, paste everything from
   database.rules.json (in this folder), press Publish.
5. Realtime Database > Data tab: copy the address at the top
   (looks like https://NAME-default-rtdb.firebaseio.com).
6. Project settings (gear icon) > General > "Your apps" > add a Web app (</>) > copy "apiKey".
7. Open config.js in this folder and paste both values in.

PART 2: YOUR ADMIN (OP) ACCOUNT
-------------------------------
1. Open Tilt, choose Sign up with the email wow22113@gmail.com. Pick a password.
2. Firebase emails you a verification link. Click it.
3. Back in Tilt: Settings > Email verification > "I verified".
4. A shield button appears at the top. That is the admin panel:
   - Users: every account (email, name, last active), Ban / Unban, set followers.
   - Announce: send an update message to everyone (shows as a banner + in their bell).
   - On any post or clip a shield button lets you set likes, views and comments,
     or press "Make it pop". On any profile you can set followers.
Only a VERIFIED wow22113@gmail.com account can do this. The database rules enforce it,
so nobody else can fake it by editing the app.

PART 3: GITHUB  (updates)
-------------------------
1. Create a free account at https://github.com and make a new repository named "tilt".
2. Open package.json and replace YOUR_GITHUB_USERNAME with your GitHub name.
3. Upload every file in this folder to the repository (Add file > Upload files).
4. Settings > Pages > Source: "GitHub Actions". The web version appears at
   https://YOUR_NAME.github.io/tilt/ after each upload.
5. Desktop app releases: in package.json change "version" (example 1.0.1), upload it,
   then create a Release with the tag v1.0.1 (Releases > Draft a new release > tag v1.0.1).
   GitHub builds the Windows/Mac/Linux installers for you.
6. Installed apps check for new versions on startup and update themselves.

To update Tilt later: replace index.html with the new version, raise the version number,
upload, and publish a new release tag.

PART 4: TRY IT ON YOUR COMPUTER
-------------------------------
Install Node.js (https://nodejs.org, LTS). Windows: double-click "Run Tilt now (Windows).bat".
To make the installer with the desktop icon: "Build Tilt (Windows).bat", then open the dist folder.

NOTES
-----
- Firebase Web API key and database address are public identifiers, not passwords.
- Direct messages are private between the two people (rules above). The admin cannot read them.
- Mac auto-update needs a paid Apple signing certificate; Windows and Linux work without.
- The claude.ai page version of Tilt does not use any of this. It keeps its own sharing.
