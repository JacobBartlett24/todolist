import {
  Form,
  useLoaderData
} from "/build/_shared/chunk-3UWPWFUS.js";
import {
  Box,
  Button,
  Input,
  Text
} from "/build/_shared/chunk-I534BYEB.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-BNIZYPYA.js";

// browser-route-module:routes/main/index.tsx?browser
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MainIndex() {
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDir: "row", marginTop: "2rem", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDir: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, { name: "todo", color: "white", placeholder: "Title", required: true }, void 0, false, {
        fileName: "browser-route-module:routes/main/index.tsx?browser",
        lineNumber: 16,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "browser-route-module:routes/main/index.tsx?browser",
        lineNumber: 15,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { type: "submit", children: "Submit" }, void 0, false, {
        fileName: "browser-route-module:routes/main/index.tsx?browser",
        lineNumber: 18,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:routes/main/index.tsx?browser",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "browser-route-module:routes/main/index.tsx?browser",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDir: "column", children: data.todos.map((todo) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDir: "row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "white", children: todo.todo }, todo.id, false, {
        fileName: "browser-route-module:routes/main/index.tsx?browser",
        lineNumber: 24,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { children: "X" }, void 0, false, {
        fileName: "browser-route-module:routes/main/index.tsx?browser",
        lineNumber: 25,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "browser-route-module:routes/main/index.tsx?browser",
      lineNumber: 23,
      columnNumber: 11
    }, this)) }, void 0, false, {
      fileName: "browser-route-module:routes/main/index.tsx?browser",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "browser-route-module:routes/main/index.tsx?browser",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  MainIndex as default
};
//# sourceMappingURL=/build/routes/main/index-MOTWO2WU.js.map
