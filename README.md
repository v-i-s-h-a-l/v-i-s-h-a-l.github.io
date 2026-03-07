# v-i-s-h-a-l.github.io

Personal portfolio and blog — built with vanilla HTML, CSS, and JavaScript. Hosted on GitHub Pages.

**Live:** [v-i-s-h-a-l.github.io](https://v-i-s-h-a-l.github.io)

## What's here

- **Portfolio** — Hero, about, career timeline, shipped apps, skills, open-source contributions, education, and contact sections
- **Links overlay** — Animated overlay with all social/professional links (LinkedIn, GitHub, Twitter, Stack Overflow, email) and a QR code
- **Blog** — Jekyll-powered posts on topics like Swift scripting
- **Dark/light theme** — Toggle with system preference detection and smooth transitions
- **Responsive** — Mobile-first layout with adaptive navigation

## Tech stack

- Vanilla HTML/CSS/JS (no frameworks)
- CSS custom properties for theming
- CSS animations and transitions
- GitHub Pages for hosting
- Shared design system (`assets/css/shared.css`)

## Structure

```
index.html          # Main portfolio page
assets/
  css/shared.css    # Design tokens and shared styles
  js/               # JavaScript
  fonts/            # Custom fonts
_posts/             # Blog posts (Jekyll/Markdown)
_pages/             # Additional pages (404, archives)
_layouts/           # Jekyll layout templates
_includes/          # Jekyll partials
_sass/              # SCSS partials
_config.yml         # Jekyll configuration
```

## Local development

The site bypasses Jekyll and serves static HTML directly (`.nojekyll`). To run locally:

```bash
# Any static file server works
python3 -m http.server 8000
# or
npx serve .
```

## Author

**Vishal Singh** — iOS engineer and aspiring AI builder
- [GitHub](https://github.com/v-i-s-h-a-l)
- [LinkedIn](https://linkedin.com/in/v-i-s-h-a-l)
- [Twitter](https://twitter.com/v_s_h_a_l)
