import { copyFileSync, writeFileSync } from 'node:fs';
import { assembleVegaLite } from 'flint-chart';
import * as vega from 'vega';
import { compile } from 'vega-lite';

const data = [
  { plan: '$200/mo', vendor: 'OpenAI · GPT-6.1 Sol', api_value: 2084 },
  { plan: '$200/mo', vendor: 'Anthropic · Claude Opus 5.5', api_value: 11726 },
  { plan: '$100/mo', vendor: 'OpenAI · GPT-6.1 Sol', api_value: 1055 },
  { plan: '$100/mo', vendor: 'Anthropic · Claude Opus 5.5', api_value: 5725 },
  { plan: '$20/mo', vendor: 'OpenAI · GPT-6.1 Sol', api_value: 211 },
  { plan: '$20/mo', vendor: 'Anthropic · Claude Opus 5.5', api_value: 1178 },
];

const input = {
  data: { values: data },
  semantic_types: {
    plan: 'Category',
    vendor: 'Category',
    api_value: { semanticType: 'Amount', unit: 'USD' },
  },
  chart_spec: {
    chartType: 'Grouped Bar Chart',
    title: 'Сколько по-настоящему стоит подписка',
    subtitle: 'API-эквивалент месячной ценности, agentic workload, $',
    source: 'Semianalysis',
    encodings: {
      y: { field: 'plan' },
      x: { field: 'api_value', title: null },
      group: { field: 'vendor' },
    },
    baseSize: { width: 1000, height: 560 },
    canvasSize: { width: 1080, height: 640 },
    chartProperties: { showValueLabels: true },
  },
  field_display_names: {
    plan: 'План',
    vendor: 'Модель',
  },
  theme_spec: {
    extends: 'economist',
    id: 'semianalysis-dark',
    type: {
      headline: { size: 22, weight: 'bold' },
      deck: { size: 14 },
      valueLabel: { size: 13, weight: 'bold' },
      axisLabel: { size: 13 },
      keyLabel: { size: 13 },
    },
    ink: {
      surface: { canvas: '#171a1f', plot: '#171a1f' },
      text: { primary: '#f5f6f7', secondary: '#b8bcc4', muted: '#8a9099' },
      structure: { axis: '#5a616c', grid: '#2e343d', frame: '#2e343d', rule: '#2e343d' },
      series: {
        single: '#2FBFA0',
        categorical: ['#2FBFA0', '#F5A03A'],
        categoricalExtended: ['#2FBFA0', '#F5A03A'],
      },
    },
  },
};

const vlSpec = assembleVegaLite(input);
vlSpec.transform = (vlSpec.transform || []).map((t) =>
  t.calculate ? { ...t, calculate: t.calculate.replace('.3~s', ',d') } : t,
);
const vgSpec = compile(vlSpec).spec;
const view = new vega.View(vega.parse(vgSpec), { renderer: 'none' });
await view.runAsync();
const svg = await view.toSVG();
const asset = new URL('../documents/assets/subs-price-api-value.svg', import.meta.url);
writeFileSync(asset, svg);
copyFileSync(asset, new URL('../documents/public/assets/subs-price-api-value.svg', import.meta.url));
console.log('SVG bytes:', svg.length);
