# FNAN 883 — Student Presentations

The collection page is [`index.html`](index.html). It lists every presentation and
links to each student's own page.

```
presentations/
├── index.html          the collection page (generated from presentations.js)
├── presentations.js    the registry — one line per presentation
├── style.css           a few additions to lwarp.css; you should not need to touch it
└── <your-name>/
    ├── index.html      your presentation page
    └── your-slides.pdf your slides
```

These pages pull their styling from `lwarp.css` at the repo root — the same
stylesheet the syllabus uses — so they look like the rest of the site. Keep your
folder one level under `presentations/` and the relative paths in the template
(`../../lwarp.css`, `../style.css`) will resolve correctly.

## Adding your presentation

**1. Branch from `main`.** Name the branch after yourself.

```bash
git checkout main
git pull
git checkout -b your-name
```

**2. Make your folder** under `presentations/`, using the same name as your
branch, and put your slides in it.

```bash
mkdir presentations/your-name
cp ~/path/to/your-slides.pdf presentations/your-name/
```

**3. Copy `tan/index.html` as your starting point** and edit the title, the
presenter name, the `dl.facts` block, and the PDF filename in the two places it
appears (`<object data="...">` and the "Open slides" button).

```bash
cp presentations/tan/index.html presentations/your-name/index.html
```

**4. Register it.** Append **one line** to the bottom of `presentations.js`:

```js
PRESENTATIONS.push({ presenter: "Your Name", slug: "your-name", title: "Paper Title", authors: "Author and Author (2024)", source: "Journal of Finance 79, 1–40", date: "2026-10-15" });
```

`slug` must match your folder name — that is what the collection page links to.

**5. Commit and merge into `main`.**

```bash
git add presentations/your-name presentations/presentations.js
git commit -m "Add presentation: Your Name"
git checkout main
git merge your-name
```

## Why merges don't conflict

Everyone touches `presentations.js`, which would normally mean a conflict every
time two students add an entry. The repo's [`.gitattributes`](../.gitattributes)
sets that file to git's **union** merge strategy: when two branches both append
to it, git keeps *both* sets of lines instead of stopping at a conflict.

That guarantee holds only if you follow two rules:

- **Keep your entry on exactly one line.** A wrapped entry can be cut in half by
  a union merge and will break the page for everybody.
- **Only append. Never edit or reorder someone else's line.** Union merge cannot
  reconcile a genuine edit, and it resolves silently, so a bad edit lands
  without warning.

Everything else you add lives in your own folder, so it merges cleanly by
construction.

## Previewing locally

`index.html` reads the registry through a `<script>` tag, so it works when you
just open the file in a browser — no server needed.

```bash
open presentations/index.html
```
