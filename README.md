# HTML Demo Shelf

A static Vercel-ready repository that lists standalone HTML demos.

## Structure

- `index.html` is the public demo index.
- `demos/<demo-name>/index.html` contains each standalone demo.
- `styles.css` contains shared index-page styling.
- `vercel.json` enables clean static URLs on Vercel.

## Local preview

Open `index.html` directly, or run any static server from the repository root:

```sh
python3 -m http.server 3000
```

Then visit `http://localhost:3000`.
