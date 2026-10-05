# T1 Лампа — design tokens

Extracted from `template_t1_lampa.pptx` (theme part + 33 layouts + slide geometry).
Canvas: 13.333"×7.5" (16:9) → Slidev 960×540 px. Template geometry was dumped at
1920×1080 (2×); all coordinates below are divided by 2 into 960×540 space.

## Colors (pptx theme color scheme «Т1 Лампа»)

| Token             | Hex      | Role in template                                    | Theme var           |
|-------------------|----------|-----------------------------------------------------|---------------------|
| dk1 / ink         | `#2A2D30`| body text                                           | `--t1-ink`          |
| lt1 / white       | `#FFFFFF`| background                                          | —                   |
| dk2 / lt2 / blue  | `#1DAFF7`| brand primary, links, bullets, logo, blue layouts   | `--t1-blue`         |
| accent1 / deep    | `#0082B0`| deep blue accents                                   | `--t1-deep`         |
| accent2 / navy    | `#004574`| dark text on light blue                             | `--t1-navy`         |
| accent3 / gray    | `#AEB1B7`| neutral gray                                        | `--t1-gray`         |
| accent4 / orange  | `#F16108`| alert / hot accent (rare)                           | `--t1-orange`       |
| accent5 / mist    | `#EBF2FA`| card background («плашки»), light panels            | `--t1-mist`         |
| accent6 / gold    | `#F6AF3C`| gold background (Q&A / highlight layouts)           | `--t1-gold`         |
| hlink             | `#1DAFF7`| same as brand blue                                  | —                   |
| folHlink          | `#0F5895`| visited links (unused in deck)                      | —                   |

Section-divider gradient (slideLayout9, radial): `#1DAFF7 → #F6AF3C → #DD2C19`.

## Fonts (scheme «Другая 1»)

- Headings/body: **Calibri** with CJK fallbacks (`'PingFang SC','Hiragino Sans',…`).
  Slidev default sans set to `Arial, Helvetica, sans-serif` (Calibri metric-compatible).
- Code: **Courier New**, bold, 18pt ≈ 13px on slide (per «Слайд с кодом» layout).

## Master geometry (960×540 px)

| Element            | Template pos (960×540)      | Notes                          |
|--------------------|-----------------------------|--------------------------------|
| Content left       | x ≈ 34 px (0.47")           | master margin left/right 0.47" |
| Content top        | y ≈ 35 px (0.46")           | title start                      |
| Content bottom     | y ≈ 457 px (6.35")          | footer hairline y                  |
| Logo «Т+» top-right| x ≈ 882, y ≈ 35, 44×32 px   | path viewBox 0 0 88.65 63.16     |
| Footer hairline    | x 34→766 px, y ≈ 457 px     | thin line, ink @ low opacity      |

## Type scale (template pt → slide px, ×0.72)

| Role                    | Template | px    |
|-------------------------|----------|-------|
| Cover title             | 80 pt    | ~58   |
| Section title           | 60 pt    | ~43   |
| Content title           | 44 pt    | ~32   |
| Content small title     | 16 pt    | ~12   |
| Body                    | 18 pt    | ~13   |
| Subtitle                | 20 pt    | ~14   |
| Code                    | 18 pt    | ~13   |
| Source line             | 8 pt     | ~6    |

Theme uses a slightly enlarged, readable scale (h1 37px, cover h1 64px,
body 16.5px) — chosen in the previous session for legibility at projection
distance; token ratios preserved.

## Layouts → theme mapping (33 template layouts)

| Template layout                          | Theme layout | Notes                                  |
|------------------------------------------|--------------|----------------------------------------|
| Титульный с плюсом (2/3 строки)          | `cover`      | `t1-blue-bg`, white type, logo white    |
| Титульный с пузырями                     | —            | bubbles = cards grid                    |
| 1_Содержание                             | `intro`      | agenda                                  |
| 1_Разделитель синий                      | `section`    | `t1-blue-bg`                            |
| 2_Разделитель с градиентом               | `section`    | blue bg (gradient optional)             |
| Контентный слайд (+подзаголовок, 2 строки)| `intro`/base | ink title top-left                     |
| Контентный слайд синий                   | any + `t1-blue-bg` | `background` prop or class    |
| Слайд с кодом                            | base + `pre` | Courier New bold on dark panel          |
| 3 плашки одинакового размера             | `cards`      | `t1-card` (mist) + `accent` (blue)     |
| Спикер на синем/белом фоне               | `end`        | speaker/contact card                    |
| Q&A                                      | `q-and-a`    | `t1-gold-bg`, huge centered title       |
| Фото кружки / с цитатой                  | `quote`      | blockquote mist panel                   |

Logo mark: `T+` monogram — T with an extra vertical bar on the right (the
「plus」). Rendered as a CSS `-webkit-mask` SVG in `styles/layout.css`
(`.slidev-layout::before`), so it recolors via `currentColor` (blue on light,
white on `t1-blue-bg`/`t1-gold-bg`).
