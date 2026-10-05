# Презентация на Slidev

## Быстрый старт

```bash
pnpm install
pnpm run dev      # http://localhost:3000
```

## Команды

| Команда | Описание |
|---------|----------|
| `pnpm run dev` | Dev-сервер Slidev (порт 3000) |
| `pnpm run build` | Статическая сборка в `documents/dist/` |
| `pnpm run build:pages` | Продакшен-сборка под GitHub Pages (`--base / --without-notes`) |
| `pnpm run preview` | Локальный предпросмотр продакшен-сборки (`documents/dist/`) |
| `pnpm run export` | Экспорт PDF → `documents/export.pdf` |

### PDF-экспорт

Требуется Playwright Chromium:

```bash
pnpm exec playwright install chromium
pnpm run export
```

При ошибках с emoji в PDF см. [Broken Emojis — Slidev](https://sli.dev/guide/exporting#broken-emojis). В презентации emoji заменены на MDI-иконки (`@iconify-json/mdi`).

## Структура проекта

```
documents/
  slides.md                          # Исходник презентации
  export.pdf                         # Экспортированный PDF
  assets/                            # Изображения и ассеты презентации
  public/                            # Публичные файлы для раздачи без хэшей (favicon.svg, симлинк assets)
```

AGENTS.md                            # Инструкции для ИИ-агентов в этом репо
## Редактирование слайдов

Презентация в формате [Slidev](https://sli.dev): Markdown + `---` между слайдами, Mermaid-диаграммы, `v-click` анимации, presenter notes в HTML-комментариях.

Навигация в dev-режиме: стрелки ←/→, `g` + номер слайда.