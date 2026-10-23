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
layout: image
image: /assets/subs-price-api-value.svg
backgroundSize: contain
class: bg-black
title: Сколько по-настоящему стоит подписка
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

# Риски регуляторики и ограничений

Доступ к внешним облачным моделям находится под двойным давлением:

<div class="grid grid-cols-2 gap-4 mt-4">
  <div class="t1-card">
    <h3 class="font-bold text-base text-gray-800">🇷🇺 Внутренние ограничения (РФ, 2026)</h3>
    <ul class="text-sm mt-2 space-y-2 text-gray-700">
      <li><strong>Полномочия на запрет:</strong> закон марта 2026 расширил права регуляторов по ограничению и блокировке зарубежных AI-инструментов.</li>
      <li><strong>Безопасность данных:</strong> требования по КИИ, ФЗ-152 и защите коммерческой тайны делают внешний cloud-инференс юридически рискованным.</li>
      <li><strong>Риск непрерывности:</strong> вероятность внезапного отключения рабочих сервисов и инструментов разработки.</li>
    </ul>
  </div>
  <div class="t1-card">
    <h3 class="font-bold text-base text-gray-800">🌏 Внешние барьеры (Пекин и Запад)</h3>
    <ul class="text-sm mt-2 space-y-2 text-gray-700">
      <li><strong>Лимиты из Пекина:</strong> обсуждение мер по ограничению трансграничного доступа к передовым китайским AI-моделям (Qwen, Kimi, DeepSeek).</li>
      <li><strong>Санкционные фильтры:</strong> блокировки аккаунтов, карт и корпоративных подписок со стороны западных провайдеров.</li>
      <li><strong>Технологическая автономия:</strong> зависимость от внешнего API ставит бизнес под удар геополитики.</li>
    </ul>
  </div>
</div>

<div class="mt-4">
  <blockquote>
    <strong>Вывод:</strong> Доверять критические процессы чужому облаку нельзя. Локальный запуск open-weight моделей — единственный способ гарантировать бесперебойность.
  </blockquote>
</div>

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
layout: image
image: /assets/kimi-k3-score.png
backgroundSize: contain

layout: image
image: /assets/self-hosted-kimi.png
backgroundSize: contain
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

<!--
layout: image
image: /assets/work-hardware.png
backgroundSize: contain
title: Сравнение сборок для домашнего запуска LLM
class: bg-black
-->

---
layout: default
title: Таблица со сравнением на 2026 год
---

# Сравнение платформ для инференса (2026)

<div class="overflow-x-auto mt-2">
  <table class="w-full text-xs border-collapse">
    <thead>
      <tr class="bg-gray-100 text-gray-800 border-b-2 border-blue-500">
        <th class="py-1.5 px-2 text-left font-bold">Параметр</th>
        <th class="py-1.5 px-2 text-left font-bold text-blue-600">NVIDIA RTX 4090</th>
        <th class="py-1.5 px-2 text-left font-bold">Apple Mac Mini M5 Pro</th>
        <th class="py-1.5 px-2 text-left font-bold">AMD Ryzen AI Halo</th>
        <th class="py-1.5 px-2 text-left font-bold text-orange-600">NVIDIA DGX Spark</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">Price (USD)</td>
        <td class="py-1 px-2 font-semibold">$1,599</td>
        <td class="py-1 px-2 font-semibold">$1,699</td>
        <td class="py-1 px-2 font-semibold">$3,999</td>
        <td class="py-1 px-2 font-semibold">$4,699</td>
      </tr>
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">Chip / Arch</td>
        <td class="py-1 px-2">Ada Lovelace</td>
        <td class="py-1 px-2">M5 Pro</td>
        <td class="py-1 px-2">Ryzen AI Max+ 395</td>
        <td class="py-1 px-2">GB10 Grace Blackwell</td>
      </tr>
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">Memory / Bandwidth</td>
        <td class="py-1 px-2"><strong>24GB GDDR6X</strong> / 1010 GB/s</td>
        <td class="py-1 px-2"><strong>24–64GB</strong> / 307 GB/s</td>
        <td class="py-1 px-2"><strong>128GB LPDDR5X</strong> / 256 GB/s</td>
        <td class="py-1 px-2"><strong>128GB LPDDR5X</strong> / 273 GB/s</td>
      </tr>
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">Token gen (Llama3 8B)</td>
        <td class="py-1 px-2 text-green-700 font-semibold">~105 tok/s</td>
        <td class="py-1 px-2">~45 tok/s</td>
        <td class="py-1 px-2">~45 tok/s</td>
        <td class="py-1 px-2 font-semibold">~55 tok/s</td>
      </tr>
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">Token gen (gpt-oss 120B)</td>
        <td class="py-1 px-2 text-red-500 font-semibold">No Fit (мало VRAM)</td>
        <td class="py-1 px-2 text-red-500 font-semibold">No Fit (&lt;120GB)</td>
        <td class="py-1 px-2 text-green-700 font-semibold">~34 tok/s</td>
        <td class="py-1 px-2 text-green-700 font-semibold">~39 tok/s</td>
      </tr>
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">Latency (TTFT)</td>
        <td class="py-1 px-2 font-semibold text-green-700">~35 мс</td>
        <td class="py-1 px-2">~120 мс</td>
        <td class="py-1 px-2">~150 мс</td>
        <td class="py-1 px-2">~70 мс</td>
      </tr>
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">Software stack</td>
        <td class="py-1 px-2">CUDA / vLLM / SGLang</td>
        <td class="py-1 px-2">Apple MLX / Ollama</td>
        <td class="py-1 px-2">ROCm / Vulkan / llama.cpp</td>
        <td class="py-1 px-2">CUDA / vLLM / TensorRT-LLM</td>
      </tr>
      <tr>
        <td class="py-1 px-2 font-semibold text-gray-700">TDP (Потребление)</td>
        <td class="py-1 px-2 text-red-600 font-semibold">450W</td>
        <td class="py-1 px-2 text-green-700 font-semibold">145W</td>
        <td class="py-1 px-2 text-green-700 font-semibold">140W</td>
        <td class="py-1 px-2">240W</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="mt-3 text-xs text-gray-600">
  💡 <em>RTX 4090 — лидер по скорости на моделях до 32B, но для моделей 70B–120B+ уже нужно VRAM от 128 ГБ (AMD Halo, DGX Spark).</em>
</div>

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
title: "Юнит-экономика и расчеты: методика расчета стоимости 1M токенов на своем железе (RTX 4090)"
---

# Расчёт стоимости 1M токенов (On-Premise)

<div class="grid grid-cols-2 gap-3 mt-4">
<div class="flex flex-col gap-1.5">

<div class="t1-card !p-2 !h-auto">

<h4 class="!mb-1 text-gray-800">Базовая формула</h4>

$$
\text{Cost}_{1\text{M}} = \frac{\text{GPU\_hour\_price}}{\text{TPS}_{\text{peak}} \times U \times 3600} \times 10^6
$$

<div class="text-[10px] text-gray-600 mt-0.5 mb-0">

где $U$ — утилизация (доля отданных токенов от пика), $\text{TPS}_{\text{eff}} = \text{TPS}_{\text{peak}} \times U$.

</div>

</div>

<div class="t1-card !p-2 !h-auto">

<h4 class="!mb-1 text-gray-800">Стоимость GPU-часа (CAPEX)</h4>

$$
\text{GPU\_hour} = \frac{\text{CAPEX}}{\text{Life}_{\text{hours}}} + P_{\text{kW}} \times \text{Tariff}
$$

<div class="text-[10px] text-gray-600 space-y-0.5 !mt-0.5">

- **CAPEX:** 400 000 руб. за сервер RTX 4090 (24 ГБ).
- **Амортизация (2 года = 17 520 ч):** $400\,000 / 17\,520 =$ **22.83 руб./ч**.
- **Электроэнергия (TDP 450 Вт, 8 руб./кВт·ч):** $0.45 \text{ кВт} \times 8 \text{ руб.} =$ **3.60 руб./ч**.
- **Полная стоимость часа:** $22.83 + 3.60 =$ **26.43 руб./час**.

</div>

</div>

</div>

<div>

<div class="t1-card !p-2">

<h4 class="!mb-1 text-gray-800">Расчёт для RTX 4090</h4>

$\text{TPS}_{\text{peak}} = 45\text{ tok/s}$

<div class="space-y-1">

<div class="bg-white p-1 rounded border border-gray-200">

**Высокая нагрузка ($U = 50\%$):** <span class="font-bold text-blue-600 float-right">~32.6 ₽ / 1M токенов</span>

$$
\frac{26.43}{45 \times 0.50 \times 3600} \times 10^6 \approx 32.63\text{ руб.}
$$

</div>

<div class="bg-white p-1 rounded border border-gray-200">

**Офисный сценарий ($U = 10\%$):** <span class="font-bold text-orange-600 float-right">~163.1 ₽ / 1M токенов</span>

$$
\frac{26.43}{45 \times 0.10 \times 3600} \times 10^6 \approx 163.15\text{ руб.}
$$

</div>

<div class="bg-white p-1 rounded border border-gray-200">

**Редкие запросы ($U = 2\%$):** <span class="font-bold text-red-600 float-right">~815.7 ₽ / 1M токенов</span>

</div>

</div>

</div>

</div>
</div>

---
layout: default
title: "Аренда выделенного GPU RTX 4090 в Selectel"
---

# Аренда GPU: стоимость 1M токенов (Dedicated)

<div class="grid grid-cols-2 gap-3">
<div class="flex flex-col gap-2">

<div class="t1-card !p-2.5 !h-auto">

<h4 class="!mb-1 text-gray-800">Параметры тарифа Selectel</h4>

<div class="text-[11px] text-gray-700 space-y-0.5">

- **Конфигурация:** Сервер с 1× RTX 4090 24 ГБ.
- **Ежемесячная стоимость:** 62 309 руб. / месяц.
- **Количество часов в месяце:** $30 \times 24 = 720\text{ часов}$.

</div>

<div class="bg-white p-1.5 rounded border border-gray-200 mt-1.5">
<div class="text-[11px] text-gray-600">Стоимость 1 часа аренды:</div>

$$
\text{GPU\_hour} = \frac{62\,309\text{ руб.}}{720\text{ ч}} \approx \mathbf{86.54\text{ руб./час}}
$$

<div class="text-[10px] text-gray-500 mt-0.5">
(включает электричество, стойку, канал, базовую поддержку)
</div>
</div>

</div>

<div class="t1-card !p-2.5 !h-auto">

<h4 class="!mb-1 text-gray-800">Входные данные для инференса</h4>

<div class="text-[11px] text-gray-600 space-y-0.5">

- Модель: **Qwen3.8-27B**.
- Пиковая скорость: $\text{TPS}_{\text{peak}} = 45\text{ tok/s}$.
- Реалистичная утилизация: $U = 10\%$.

</div>

</div>

</div>

<div>

<div class="t1-card !p-2.5 !h-auto">

#### Расчёт стоимости при $U = 10\%$

$$
\text{Cost}_{1\text{M}} = \frac{\text{GPU\_hour}}{\text{TPS}_{\text{peak}} \times U \times 3600} \times 10^6
$$

<div class="bg-white p-2 rounded border border-gray-200 my-1.5">
<div class="text-[11px] text-gray-600">Подставляем значения:</div>

$$
\text{Cost}_{1\text{M}} = \frac{86.54}{45 \times 0.10 \times 3600} \times 10^6 \approx \mathbf{534.2\text{ руб.}}
$$

<div class="text-xs font-bold text-orange-600 mt-0.5">
~534 ₽ за 1 миллион токенов
</div>
</div>

<h4 class="!text-[11px] !mb-1 text-gray-700">Сравнение при разной утилизации:</h4>

<div class="grid grid-cols-3 gap-1.5 text-center">
<div class="p-1 bg-gray-50 rounded border border-gray-200">
<div class="text-[10px] text-gray-500">Нагрузка 50%</div>
<div class="text-xs font-bold text-blue-600">~106.8 ₽</div>
</div>
<div class="p-1 bg-orange-50 rounded border border-orange-200">
<div class="text-[10px] text-gray-500">Нагрузка 10%</div>
<div class="text-xs font-bold text-orange-600">~534.2 ₽</div>
</div>
<div class="p-1 bg-red-50 rounded border border-red-200">
<div class="text-[10px] text-gray-500">Нагрузка 2%</div>
<div class="text-xs font-bold text-red-600">~2 671 ₽</div>
</div>
</div>

<div class="mt-2 text-[10px] text-gray-500">

📌 *Облачный dedicated GPU снимает CAPEX, но час в ~3.3 раза дороже своего железа.*

</div>

</div>

</div>
</div>

---
layout: default
title: "Сравнение экономики 1M токенов: On-Premise, Selectel и Cloud.ru"
---

# Сравнение стоимости 1M токенов

<div class="grid grid-cols-3 gap-3 mt-2">
<div class="t1-card !p-3">

<div class="text-xs uppercase tracking-wide font-bold text-blue-600">Вариант 1</div>
<h3 class="font-bold text-sm text-gray-800 mt-1 mb-2">Своё железо (CAPEX)</h3>

- **Сервер:** 1× RTX 4090 (400k ₽)
- **Час работы:** ~26.4 ₽/час

<hr class="my-2 border-gray-200" />

- При $U = 50\%$: **~33 ₽**
- При $U = 10\%$: **~163 ₽**
- При $U = 2\%$: **~816 ₽**

<div class="mt-3 text-[10px] text-gray-500 bg-white p-1.5 rounded border border-gray-200">
✅ Мин. цена при нагрузке<br/>
⚠️ Нужен начальный бюджет
</div>

</div>

<div class="t1-card !p-3">

<div class="text-xs uppercase tracking-wide font-bold text-orange-600">Вариант 2</div>
<h3 class="font-bold text-sm text-gray-800 mt-1 mb-2">Selectel (Dedicated)</h3>

- **Аренда:** 1× RTX 4090 (62.3k ₽/мес)
- **Час работы:** ~86.5 ₽/час

<hr class="my-2 border-gray-200" />

- При $U = 50\%$: **~107 ₽**
- При $U = 10\%$: **~534 ₽**
- При $U = 2\%$: **~2 671 ₽**

<div class="mt-3 text-[10px] text-gray-500 bg-white p-1.5 rounded border border-gray-200">
✅ Быстрый старт без покупки<br/>
⚠️ Оплата за всё время (24/7)
</div>

</div>

<div class="t1-card !p-3">

<div class="text-xs uppercase tracking-wide font-bold text-purple-600">Вариант 3</div>
<h3 class="font-bold text-sm text-gray-800 mt-1 mb-2">Cloud.ru (Pay-as-you-go)</h3>

- **Модель:** Qwen3 (Models API)
- **Тариф:** 43 ₽ вх. / 173 ₽ вых.

<hr class="my-2 border-gray-200" />

<div class="text-xs mt-3">
Средневзвешенная смесь ($3:1$ in/out):

$$
\text{Cost}_{1\text{M}} = \frac{3 \times 43 + 1 \times 173}{4} \approx \mathbf{75.5\text{ руб.}}
$$

</div>

<div class="mt-2 text-[10px] text-gray-500 bg-white p-1.5 rounded border border-gray-200">
✅ 0 ₽ в моменты простоя<br/>
⚠️ Растет линейно с трафиком
</div>

</div>
</div>

<div class="mt-3 text-xs">

> **Точка безубыточности:** Если утилизация ниже ~15–20%, Pay-as-you-go (75–100 ₽/1M) выгоднее аренды GPU в облаке. Но если у вас стабильный поток (U > 30%) — своё железо выигрывает у всех в 2–5 раз (~33 ₽/1M).

</div>

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
- В 2026 году открытые модели уже закрывают **80% повседневных IT-задач** (см. [`harness`](https://en.wikipedia.org/wiki/Agent_harness)).
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
    <a href="https://centi-conf.gainanov.pro/"
       target="_blank"
       style="position: absolute; top: 400px; left: 65px;">
      centi-conf.gainanov.pro
    </a>
  </h2>
</div>

---
layout: q-and-a
title: Вопросы
---
