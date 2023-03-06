import {
  RemixBrowser
} from "/build/_shared/chunk-3UWPWFUS.js";
import {
  CacheProvider,
  __toESM,
  emotion_cache_browser_esm_default,
  require_jsx_dev_runtime,
  require_react,
  require_react_dom
} from "/build/_shared/chunk-BNIZYPYA.js";

// app/entry.client.tsx
var import_react2 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// app/context.tsx
var import_react = __toESM(require_react());
var ServerStyleContext = (0, import_react.createContext)(null);
var ClientStyleContext = (0, import_react.createContext)(null);

// app/createEmotionCache.ts
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return emotion_cache_browser_esm_default({ key: "cha" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientCacheProvider({ children }) {
  const [cache, setCache] = (0, import_react2.useState)(defaultCache);
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, { value: { reset }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}
(0, import_react_dom.hydrate)(
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 29,
    columnNumber: 3
  }, this),
  document
);
//# sourceMappingURL=/build/entry.client-VBOTNMF5.js.map
