// Slidev v52 loads and merges this config (see resolveViteConfigs in @slidev/cli).
// Silence Rolldown INVALID_ANNOTATION noise: @vueuse/core (vendored by
// @slidev/client) ships `/* #__PURE__ */` in positions rolldown can't parse.
// Known upstream issue (vueuse 14.x + rolldown/Vite 7+); the build output is
// unaffected, but the warnings are pure noise.
import type { LogLevel, RollupLog } from 'vite'

export default {
  build: {
    rolldownOptions: {
      onLog: (level: LogLevel, log: RollupLog, defaultLog: (...a: any[]) => void) => {
        if (log.code === 'INVALID_ANNOTATION')
          return
        defaultLog(level, log)
      },
    },
  },
}
