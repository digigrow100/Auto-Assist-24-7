# Auto Assist 24/7

An [Astro](https://astro.build) website project.

## Folder structure

```
/
├── public/
│   └── favicon.svg          # static files served as-is
├── src/
│   ├── assets/
│   │   └── images/          # content images, optimized via Astro's <Image />
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro     # shared page shell (head, favicon, global styles)
│   ├── pages/
│   │   └── index.astro      # home page (file-based routing)
│   └── styles/
│       └── global.css       # base/reset styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

See [CLAUDE.md](./CLAUDE.md) for the file map of where each type of content
change belongs.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build the production site to `./dist/`        |
| `npm run preview`   | Preview the build locally before deploying    |
