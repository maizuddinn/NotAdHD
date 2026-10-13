≠AdHD v2.5.0 - GitHub Pages bundle
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

What changed in 2.5.0
  - Linked folders: right-click a project or folder > "Link folder" and pick a folder
    (OneDrive or local). A "Files" page then lists it: create folders/files, rename,
    move, copy, paste, delete, open, edit text files, drag files in. Links belong to
    the project/folder item, so moving it in Folder management keeps the link; a
    sub-folder inherits its parent's link unless it has its own.
  - Snapshots: screenshots/pasted pictures are also saved into an auto-created
    "Snapshot" folder inside the linked folder. On/off per project or folder.
  - Favourite Web and Favourite Folder icons beside Favourite Apps.
  - Top-bar buttons (Add page, Copy for AI, Favourites) are icon-only.
  - Right pane collapses/opens like the left pane (edge handle, click blank area).
  - New skins: Liquid Glass (light) and Liquid Glass night (dark).
  - Launcher v2: re-save the launcher files from Favourite Apps and run the .vbs once
    again, to let the app open folders/files in Windows.
  Limits: browsers never reveal real folder paths; delete from the Files page is
  permanent (no Recycle Bin); after restarting the browser press "Reconnect" to
  re-grant folder access; works in Edge/Chrome only; HTML files preview without
  scripts; programs/scripts are never started from the file list.

What changed in 2.4.0
- PDF study (new). Add PDFs from Library > Add PDF, the "+" next to PDFS in the left pane, Ctrl K, or by dropping a file on the Library.
  PDFs sit in the Library, projects and folders next to your notes (drag, Move, pin, rename, Trash). They are not note attachments.
  The PDF is the canvas: Highlight, underline, strike through (select text, or pick the tool), pen, marker, rectangle, circle, line, arrow,
  text box, comment pins, eraser, move and resize. Undo and redo. Bookmarks, contents, search, per-page study notes, a summary note,
  night reading mode, fit width or page, Ctrl+wheel zoom, reading time and a progress bar on each library card.
  Extras: snip an area of a page into a note, send all marks (highlights, comments, bookmarks) to a new note, copy marks as Markdown,
  and export a copy of the PDF with your marks burned in (comments become real PDF notes). The original is never changed.
  Marks and PDFs are stored in this browser (IndexedDB). Use Export to keep a copy outside the browser.
- Back and forward buttons beside the tabs (also the mouse back button, and Alt+Left / Alt+Right).
- Alarms for MindSpace stickies: bell on any sticky, date and time, repeat, sound, desktop notification, snooze, .ics export. The app must be open.
- Favourite apps (Apps button at the top): programs, .hta files, scripts, folders or web addresses from this PC. Browsers cannot start programs,
  so run Launcher setup once (it writes AdHD-Launcher\AdHD-Launcher.vbs into your save folder; double-click it one time). It only opens items you listed.
- Screenshot shortcut is one key by default: F8 (Alt+S before). Change it in Settings > Capture shortcut: one key, or Ctrl/Alt/Shift plus a key.
- Fixed: Esc in a sticky note keeps it selected, so Delete works without right-click.
- Fixed: doodles and strokes on a picture can be selected and deleted after pressing Done (double-click the picture, or "Edit doodles").
- Removed the sun and moon toggle. Use the palette button to pick a theme.
- Third-party code, embedded so PDFs work offline: pdf.js 3.11 (Apache-2.0) and pdf-lib 1.17 (MIT).

What changed in 2.3.0
- Themes. Light and Dark are unchanged. Six new looks: Studio, Ocean mint, Tea house, Washi, Strawberry matcha, Terminal.
- Pick one in Settings > Appearance, with the palette button next to the sun and moon at the top right, or Ctrl K > "Theme: ...".
- The sun and moon buttons still switch between plain Light and Dark. Your choice is remembered on this device.
- Colours only. Layout, notes and the save folder are untouched.

What changed in 2.2.1 and 2.2.0
  - 2.2.1: Delete now removes a picture you just pasted or added, even while the text cursor is still blinking. Typing a letter then returns to the text.
  - Deleting a page now removes the page you chose, and default page names renumber (Page 1, Page 2...).
  - Click an empty part of the left pane, or its edge, to collapse or open it.
  - The window title no longer repeats the app name.
  - Delete works on a selected photo, sticky or shape even right after typing.
  - New "Files and folders" page (left pane, bottom): browse, rename, delete and add folders in your save folder.
  - New "List" mode at the top of the left pane: notes as an inbox list, grouped by date, folder or project.
  Your notes and the save-folder format are unchanged.
