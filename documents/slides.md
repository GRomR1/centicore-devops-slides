---
theme: ../themes/centicore-devops
layout: cover
title: От ноутбука до multi-GPU
info: Инфраструктура и софт для локального запуска LLM
transition: slide-left
download: '/export.pdf'
favicon: '/favicon.svg'
titleTemplate: '%s - Т1 ЛАМПА: Бэкэнд 2.0 (НН.2026)'
---

# От ноутбука до multi-GPU
## Инфраструктура и софт для локального запуска LLM

Практический алгоритм выбора инструментов для локального запуска LLM (август 2026)

- Что запускать, на чём, сколько стоит и как обслуживать

---
layout: section
---

# А зачем?

---
layout: default
---

# Где уже используется AI?

AI в 2026 году вышел далеко за пределы чата. Сценарии, которые уже работают:

<v-clicks>

- **Код** — генерация, ревью, тесты
- **Текст и документы** — чаты, ИИ-поиск и поиск по документации
- **Агенты** — автоматизация рабочих задач
- **Транскрибация и голос** — Whisper, голосовые ассистенты
- **Медиа** — фото и видео

> Кто использует AI во всех сценариях? Ежедневно?

</v-clicks>

---
layout: image
image: /assets/pay-variants.png
backgroundSize: contain
title: Варианты оплаты
---

---
layout: center
title: Когда решил оплатить подписку в ChatGPT с юридического лица
---

<v-clicks>

<div class="flex justify-center h-full items-center">
  <img src="./assets/shitup.png" alt="просто возьмите деньги" class="max-h-full rounded shadow-lg" />
</div>

</v-clicks>

---
layout: default
title: Ограничения со стороны правительства
---

<!-- TODO
отрази общую заметку касательно потенциальных ограничения со стороны властей (как нашей страны, так и зарубежных государств) на доступ к AI-инструментам. ниже детали:
Российский закон марта 2026 дал властям полномочия запрещать зарубежные AI‑инструменты, а Пекин обсуждает лимиты доступа из‑за рубежа к своим топ‑моделям. 
read https://www.reuters.com/business/russia-give-itself-sweeping-powers-ban-or-restrict-foreign-ai-tools-2026-03-20
read https://www.reuters.com/world/beijing-is-looking-curbing-overseas-access-chinas-top-ai-models-sources-say-2026-07-07
-->

---
layout: center
title: Модели за которые мы платим, оказываются не тем что есть на самом деле
---

# Советские стандарты качества

<img src="./assets/the-illusion.jpg" class="h-96 rounded shadow-lg mx-auto mt-8" alt=""/>

---
layout: image
image: /assets/abliterated-lora.png
backgroundSize: contain
title: Модели со снятыми ограничениям - потенциал для локального запуска
---

---
layout: default
---

# Зачем локально?

1. **Контроль**
   - Версия модели и квантизация
   - Без сюрпризов от провайдера
2. **Безопасность и закон**
   - ФЗ-152, КИИ, коммерческая тайна. Утечка = риск
3. **Автономность и доступность**
   - Изоляция
   - Без лимитов
   - Без риска блокировки
4. **Кастомизация**
   - Дообучение и модель под задачу

---
layout: section
---

# Выбор модели

---
layout: center
---

# Трудности выбора модели

<img src="./assets/choose-model-mem.jpg" class="h-96 rounded shadow-lg mx-auto mt-8" alt=""/>

---
layout: center
---

# Сколько всего моделей на Hugging Face?

<v-clicks>

<img src="./assets/hf-models-count.png" class="w-full h-full object-contain mt-8" alt=""/>

</v-clicks>

---
layout: image
image: /assets/model-classification.png
backgroundSize: contain
title: Классификация моделей
---

---
layout: default
---

# Где смотреть рейтинги моделей?

При выборе модели для реальных задач стоит опираться на независимые лидерборды:

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="t1-card">
    <h3 class="font-bold"><a href="https://arena.ai/leaderboard/code/webdev/fullstack" target="_blank">arena.ai</a></h3>
    <p class="text-sm mt-2 text-gray-700">
      Слепые A/B-тесты (LMSYS Chatbot Arena). Специализированный лидерборд для webdev и fullstack-разработки.
    </p>
  </div>
  <div class="t1-card">
    <h3 class="font-bold"><a href="https://llm-stats.com/leaderboards/best-ai-for-coding" target="_blank">llm-stats.com</a></h3>
    <p class="text-sm mt-2 text-gray-700">
      Сводная статистика и актуальный рейтинг лучших моделей для написания и рефакторинга кода.
    </p>
  </div>
  <div class="t1-card">
    <h3 class="font-bold"><a href="https://artificialanalysis.ai/models#intelligence-breakdown" target="_blank">artificialanalysis.ai</a></h3>
    <p class="text-sm mt-2 text-gray-700">
      Независимый бенчмарк качества (intelligence breakdown), скорости инференса (токены/сек) и стоимости.
    </p>
  </div>
</div>

<div class="mt-6 text-sm">
  <p class="font-semibold text-gray-800">На что обращать внимание:</p>
  <ul class="mt-1 space-y-1 text-gray-600">
    <li><strong>Coding & Agentic benchmarks:</strong> оценивайте тесты на реальном коде, а не синтетические метрики.</li>
    <li><strong>Соотношение качество / размер:</strong> для локального запуска критичен баланс VRAM и скорости.</li>
  </ul>
</div>

<!--
---
layout: image
image: /assets/kimi-k3-score.png
backgroundSize: contain
---

---
layout: image
image: /assets/self-hosted-kimi.png
backgroundSize: contain
---
-->

---
layout: image
image: /assets/big-isnot-better.jpg
backgroundSize: contain
class: bg-black
title: Маленькие модели могут быть не хуже
---

---
layout: section
---

# Софт

---
layout: image
image: /assets/soft-for-llm.png
backgroundSize: contain
title: Какой софт использовать для запуска LLM
---

---
layout: section
---

# Инференс

---
layout: image
image: /assets/llm-inference.webp
backgroundSize: contain
title: Как работает инференс
---

---
layout: image
image: /assets/mlm-prefill-vs-decode.png
backgroundSize: contain
title: Различия prefill и decode
---

---
layout: section
---

# Железо

---
layout: default
---

# 4 ценовые категории

1. **Ультрабюджет (до 100 тыс. ₽)**
2. **Народный (100–200 тыс. ₽)**
3. **Рабочая станция (200–600 тыс. ₽)**
4. **Enterprise (от 600 тыс. ₽)**

---
layout: image
image: /assets/work-hardware.png
backgroundSize: contain
title: Сравнение сборок для домашнего запуска LLM
class: bg-black
---

---
layout: default
title: Таблица со сравнением на 2026 год
---

<!-- TODO: отформатировать таблицу в html и проверить что она и весь контент влазит и нормально отображается
|                          | NVIDIA RTX 4090         | Apple Mac Mini M5 Pro | AMD Ryzen AI Halo        | NVIDIA DGX Spark         |
|--------------------------|-------------------------|-----------------------|--------------------------|--------------------------|
| Price                    | $1,599                  | $1,699                | $3,999                   | $4,699                   |
| Chip                     | Ada Lovelace            | M5 Pro                | Ryzen AI Max+ 395        | GB10 Grace Blackwell     |
| Memory / bandwidth       | 24GB GDDR6X / 1010 GB/s | 24-64GB / 307 GB/s    | 128GB LPDDR5X / 256 GB/s | 128GB LPDDR5x / 273 GB/s |
| Token gen (Llama3 8B)    | ~105 tok/s              | ~45 tok/s             | ~45 tok/s                | ~55 tok/s                |
| Token gen (gpt-oss 120B) | No Fit                  | No Fit                | ~34 tok/s                | ~39 tok/s                |
| Latency                  | ~35 мс                  | ~120 мс               | ~150 мс                  | ~70 мс                   |
| Software stack           | CUDA                    | Apple MLX             | ROCm / Vulkan            | CUDA                     |
| TDP                      | 450W                    | 145W                  | 140W                     | 240W                     |
-->

---
layout: center
---

# Почему не серверные GPU?

<div class="flex justify-center gap-8 mt-8">
  <img v-click src="./assets/turbina.jpg" class="h-64 rounded shadow-lg" alt=""/>
  <img v-click src="./assets/tony-stark.jpg" class="h-64 rounded shadow-lg" alt=""/>
</div>

---
layout: collage
title: Цены на авито
---

<div class="grid grid-cols-3 grid-rows-2 w-full h-full gap-0 m-0 bg-black">
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/1-rtx-3090-24gb.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/2-mac-m1-max-32.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/3-beelink-128gb.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/4-mac-studio-m4-max-128gb.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/5-dgx-spark-128g.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/6-macbook-m5-max-128g.png')"></div>
</div>

---
layout: collage
title: Что еще продают на авито
---

<!-- TODO: -->
<div class="grid grid-cols-3 grid-rows-2 w-full h-full gap-0 m-0 bg-black">
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/avito-funs/fun1.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/avito-funs/fun2.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/avito-funs/fun3.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/avito-funs/fun4.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/avito-funs/fun5.png')"></div>
  <div v-click class="bg-contain bg-center bg-no-repeat w-full h-full" style="background-image: url('/assets/avito-funs/fun6.png')"></div>
</div>

---
layout: section
---

# Юнит-экономика

---
layout: default
title: Юнит-экономика и расчеты. Методика расчета стоимости 1 миллиона токенов на своем железе с примером RTX 4090
---

<!-- TODO: 
use https://sli.dev/features/latex
read https://www.klerk.ru/blogs/k2tex/708924 (via firecrawl)

общая методика используй ее в качестве основы для расчета стоимости для этого и двух следующих слайдов.
на этом слайде отрази общую методику (или алгорити) расчета стоимости 1 миллиона токенов на локальном железе. для своего железа на примере покупки сервера с RTX4090 TDP 450 Вт за 400000 рублей с амортизацией 2 года, с учетом электичества по ставке 8 руб./кВт*ч и без учета стоимости обслуживания и ЦОД.


## Базовая формула

Основное уравнение для выделенного GPU:

\[
\text{Cost}_{1M} = \frac{\text{GPU\_hour\_price}}{\text{TPS}_{\text{eff}} \times 3600} \times 1{,}000{,}000
\]

где:

- \(\text{GPU\_hour\_price}\) — полная стоимость часа GPU (аренда по прайсу либо амортизация + электричество + ЦОД + доля ФОТ). 
- \(\text{TPS}_{\text{eff}}\) — эффективная пропускная способность в токенах/сек. 
- 3600 — секунд в часе; множитель 1 000 000 переводит в «за миллион токенов». 

Если вы хотите явно учесть утилизацию \(U\) (доля времени под полезной нагрузкой):

\[
\text{TPS}_{\text{eff}} = \text{TPS}_{\text{peak}} \times U
\]
\[
\text{Cost}_{1M} = \frac{\text{GPU\_hour\_price}}{\text{TPS}_{\text{peak}} \times U \times 3600} \times 1{,}000{,}000
\]

## Что именно подставлять в формулу

### 1) Полная стоимость GPU‑часа

Для аренды: берёте почасовой тариф из прайса (on‑demand / spot / коммит). 

Для своего железа (CAPEX):

\[
\text{GPU\_hour\_price} = \frac{\text{CAPEX}/\text{Часы\_жизни} + \text{Мощность\_кВт} \times \text{Тариф\_электро} + \text{ЦОД} + \text{Доля\_ФОТ}}{1}
\]

На практике часто считают упрощённо:

- Амортизация: стоимость сервера / срок жизни в часах. 
- Электричество: TDP карты × коэффициент загрузки × тариф (не забывая про простой: GPU в idle тоже ест). 
- ЦОД/размещение и доля инженера (хотя бы 4–10 ч/мес на поддержку). 

### 2) Оценить утилизацию

\[
U = \frac{\text{фактические токены за период}}{\text{TPS}_{\text{peak}} \times \text{секунд в периоде}}
\]

## Пошаговый алгоритм расчёта

1. **Определите профиль нагрузки:** short/balanced/long (короткие чаты, RAG 4–8K, агенты с 32K+). Это задаст лимиты max_context/max_tokens и пулы. 
2. **Посчитайте полную стоимость GPU‑часа** (аренда или CAPEX+OPEX). 
3. **Вычислите эффективный TPS**:
   - \(\text{TPS}_{\text{eff}} = \frac{\text{токены за период}}{\text{секунд в периоде}}\).
4. **Подставьте в формулу**:

\[
\text{Cost}_{1M} = \frac{\text{GPU\_hour\_price}}{\text{TPS}_{\text{eff}} \times 3600} \times 1{,}000{,}000
\]


## Структура полной стоимости GPU‑часа

### 1) Амортизация (CAPEX)

Считаете стоимость сервера и раскладываете на часы жизни:

\[
\text{Amort}_{\text{hour}} = \frac{\text{Capex}_{\text{server}}}{\text{Life}_{\text{hours}}}
\]

- \(\text{Capex}_{\text{server}}\) — полная стоимость сервера (GPU + CPU + RAM + NVMe + корпус + PSU + доставка + НДС). 
- \(\text{Life}_{\text{hours}}\) — срок жизни в часах (обычно 3 года ≈ 26 280 ч, иногда 4–5 лет для «железа в стойке»). 

### 2) Электричество

\[
\text{Power}_{\text{hour}} = \text{Power}_{\text{kW}} \times \text{Tariff}_{\text{rub/kWh}}
\]

- \(\text{Power}_{\text{kW}}\) — средняя мощность сервера под нагрузкой (не TDP одной карты, а всего шасси: GPU + CPU + RAM + диски + PSU losses). 
- \(\text{Tariff}\) — тариф на электроэнергию (для ЦОД обычно выше, чем «домашний»). 

Типичные цифры:

- 1×RTX 4090/5090 система: 0.6–1.2 кВт под нагрузкой.

### 3) ЦОД / размещение

\[
\text{DC}_{\text{hour}} = \frac{\text{Rack\_price\_per\_month}}{\text{Hours\_per\_month}} \times \text{Rack\_share}
\]

Или по юнитам/кВт, если тарификация за мощность:

- Фикс за юнит/стойку + доплата за кВт.
- Плюс cross‑connect, IP‑адреса, DDoS, remote hands. 

На практике для 1–2 юнитов в хорошем московском ЦОД это может быть 10–30k ₽/мес за стойку/юнит, что в пересчёте на 1 сервер даёт несколько $/час. 

### 4) Доля ФОТ / эксплуатация

Самый часто забываемый, но критичный компонент:

\[
\text{Ops}_{\text{hour}} = \frac{\text{Monthly\_Ops\_Cost}}{\text{Hours\_per\_month}} \times \text{Share\_for\_this\_GPU}
\]

Включает:

- Зарплата инженеров (MLOps/SRE/DevOps), которые поддерживают кластер, драйверы, CUDA, vLLM/SGLang, мониторинг, алерты, инциденты. 
- Время на установку, замену, диагностику железа, RMA, переустановку образов, обновления BIOS/firmware. 
- Дежурства, on‑call, постмортемы.

Даже если «один сервер», на него всё равно тратится 4–10 ч/мес инженера; при зарплате 300–500k ₽/мес это уже ощутимая добавка к GPU‑часу. 

утилизацию GPU для инференса считают не как «GPU util из nvidia‑smi», а как **долю времени, когда карта реально генерирует токены (decode) или делает prefill**, либо через **отношение фактически отданных токенов к максимально возможным за тот же период**. Типичные цифры в продакшене: **20–60% по времени** и **10–40% по токенам** от «пикового» TPS; ниже 10% — почти всегда экономически плохо, выше 60–70% — уже близко к пределу для интерактивных сценариев без очередей. 

## Что именно считать «утилизацией»

Для LLM‑инференса полезно различать три метрики:

1. **GPU time utilization (по времени)**  
   $$
   U_{\text{time}} = \frac{\text{секунды с активным prefill/decode}}{\text{всего секунд в периоде}}
   $$
   - «Активный» = когда на GPU идёт prefill или decode, а не idle / ожидание сети / ожидание токенов от пользователя. 

2. **Throughput utilization (по токенам)**  
   $$
   U_{\text{tokens}} = \frac{\text{фактические токены за период}}{\text{TPS}_{\text{peak}} \times \text{секунд в периоде}}
   $$
   - $$\text{TPS}_{\text{peak}}$$ — пиковая пропускная способность вашей конфигурации (модель + квант + батч + стек) на длинном устойчивом прогоне. 

3. **Compute utilization (из метрик GPU)**  
   - `gpu_util` из nvidia‑smi / DCGM / Prometheus: доля времени, когда хотя бы один ядро/тензор‑ядро был занят.  
   - Полезно, но для инференса часто **завышает** «полезную» утилизацию: карта может быть «занята» короткими префиллами, копированием, простоями в очереди. 

Для экономики токена ключевая — **$$U_{\text{tokens}}$$**, потому что именно она напрямую влияет на стоимость 1M токенов:

$$
\text{Cost}_{1M} = \frac{\text{GPU\_hour\_price}}{\text{TPS}_{\text{peak}} \times U_{\text{tokens}} \times 3600} \times 1{,}000{,}000
$$

**сколько токенов вы реально отдаёте относительно пикового TPS**. 

## Как использовать утилизацию в расчётах

1. **Сначала замеряете $$\text{TPS}_{\text{peak}}$$** для вашей конфигурации:
   - Модель + квант (FP16/FP8/INT4).
   - Контекст (4K/8K/32K).
   - Батч и параметры scheduler’а (vLLM/SGLang). 

2. **Собираете метрики за репрезентативный период** (минимум неделя):
   - Суммарные токены (input + output).
   - Часы работы инференс‑сервера.

3. **Считаете $$U_{\text{tokens}}$$** и подставляете в формулу стоимости 1M токенов. 

4. **Делаете «what‑if»**:
   - Что будет, если:
     - Ужесточить `max_tokens`?
     - Ввести long‑пул и short‑пул?
     - Увеличить батч / включить prefix caching?
     - Перейти на более агрессивный квант?
   - Это покажет, как вырастет утилизация и упадёт цена токена. 

-->

---
layout: default
title: Юнит-экономика и расчеты. Тот же расчет стоимости 1 миллиона токенов но в случае аренды RTX 4090 в облаке Selectel
---

<!-- TODO: 

на этом слайде посчитай стоимость 1 миллиона токенов для выделенного GPU с арендой и известной стоимостью часа (на примере аренды сервера RTX4090 на месяц в selectel за 62309 ₽/‍мес) с учетом утилизации 10%.

use latex
-->

---
layout: default
title: Юнит-экономика и расчеты. Сравнение стоимости 1 миллиона токенов в случае использования своего железа, облака, оплаты за токены
---

<!-- TODO: 
на этом слайде сравни два предыдущих расчет со стоимостью для оплаты за токены в cloud.ru (модель Qwen3 32B входные/генерируемые токены, с НДС): 43 рубля за 1 млн. входных токенов, 173 рубля - за 1 млн. генерируемых (выходных).

use latex
-->

---
layout: default
---

# Краткие рекомендации

- **Один человек:**
  - Mac (mini) M5 Pro 24+ ГБ + Qwen3.6-35B-A3B + MLX/Ollama
- **Команда / небольшая компания:**
  - 1–2× RTX 4090 24 ГБ + Qwen3.8-27B + vLLM/SGLang
- **Корпоративный контур / десятки-сотни пользователей:**
  - multi-GPU NVIDIA H100 80 ГБ + ... + vLLM/SGLang
  - multi-GPU MetaX C550 64 ГБ + ... + vLLM/SGLang

---
layout: section
---

# Итоги

---
layout: default
---

# Итоги

- Локальный LLM — это про **контроль, безопасность и предсказуемость**, а не про «максимальное качество любой ценой».
- В 2026 году открытые модели уже закрывают **80% повседневных IT-задач** (см. `harness`).
- Главное — считать экономику и выбирать стек под реальную нагрузку.

---
layout: image
image: /assets/the-end-qr.png
backgroundSize: contain
class: bg-black
title: Спасибо за внимание
---

<div class="t1-card" style="position: relative; 
                            background: rgba(255, 255, 255, 0.0);">
  <h2 class="font-bold">
    <a href="http://centicore-devops.gainanov.pro/"
       target="_blank"
       style="position: absolute; top: 400px; left: 65px;">
      centicore-devops.gainanov.pro
    </a>
  </h2>
</div>

---
layout: q-and-a
title: Вопросы
---
