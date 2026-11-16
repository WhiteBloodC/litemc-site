# LiteMC · Product website

An English-first, bilingual product introduction for LiteMC. Switch between English and simplified Chinese in the navigation. An explicit language choice is remembered locally; new visitors see English.

## Preview

Open `index.html` directly. No build or dependencies are required.

## Publish on GitHub Pages

Upload `index.html`, `styles.css`, `script.js`, `site.config.js`, `.nojekyll`, and `assets/` to your website repository. Keep their relative structure intact.

In **Settings → Pages**, choose **Deploy from a branch**, your website branch, and **/(root)**. If the website lives in `docs/`, select **/docs** instead. After setup, push changes to that source to update the same website.

## Edit

- Text and translations: `script.js` (`copy.en` and `copy.zh`). Keep English fallback content in `index.html` in sync.
- Layout and appearance: `styles.css`.
- Optional GitHub link: `site.config.js`. Leave the repository empty to hide it.

Public availability is deliberately shown as **Coming soon / 敬请期待**. There are no download links or platform download cards, even when a repository is configured.

The launcher preview is an interactive concept, not a running app. It supports navigation and five theme colors. Content is based on the LiteMC v20 delivery notes; backgrounds come from the existing launcher assets. No third-party scripts, fonts, analytics, or remote dependencies are used.
