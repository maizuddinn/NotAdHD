≠AdHD v2.1.1 - GitHub Pages bundle
================================

Files (keep this exact layout, everything uses relative paths):
  index.html             the app
  manifest.webmanifest   makes it installable (name, colours, icons)
  sw.js                  offline support (service worker)
  icons/                 app icons (192, 512, maskable, svg)

Put it online (GitHub Pages)
  1. Create a new GitHub repository (public or private with Pages enabled).
  2. Upload ALL files above to the root of the repository (keep the icons folder).
  3. Settings > Pages > Build and deployment > Deploy from a branch > main / (root) > Save.
  4. After a minute open  https://<your-name>.github.io/<repository>/

Install as an app (Edge)
  Open the address above, then  ... > Apps > Install this site as an app.
  It gets its own window and the dHD icon on the taskbar. It also opens offline.

Updating later
  Replace index.html with the newer build. If sw.js changed, bump VERSION inside it.
  Online, the app always loads the newest page. Offline, it loads the last copy it saw.

Important: your notes are NOT uploaded
  Notes live in the browser storage of the address you open, and in your save folder.
  The hosted app (github.io) is a different place from a local AdHD.html file, so it
  starts empty. To bring your notes over: open the hosted app, choose the SAME save
  folder (Save folder > Choose folder), then press "Restore all notes from a save folder".
