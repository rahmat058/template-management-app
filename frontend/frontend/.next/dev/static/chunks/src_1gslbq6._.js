(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/editor/Canvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Canvas",
    ()=>Canvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.mjs [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$CanvasPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/CanvasPage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/ui.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Canvas({ interactive = true }) {
    _s();
    const zoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "Canvas.useUiStore[zoom]": (state)=>state.zoom
    }["Canvas.useUiStore[zoom]"]);
    const setZoom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "Canvas.useUiStore[setZoom]": (state)=>state.setZoom
    }["Canvas.useUiStore[setZoom]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative flex min-w-0 flex-1 flex-col bg-workspace",
        children: [
            interactive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-4 top-4 z-10 flex items-center gap-1 rounded-[8px] border border-border bg-surface px-1 py-1 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Zoom out",
                        className: "flex h-7 w-7 items-center justify-center rounded-[6px] text-muted hover:bg-surface-muted hover:text-foreground",
                        onClick: ()=>setZoom(Math.max(0.5, Number((zoom - 0.1).toFixed(1)))),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/Canvas.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/Canvas.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "min-w-[48px] text-center text-[12px] font-medium text-foreground",
                        children: [
                            Math.round(zoom * 100),
                            "%"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/Canvas.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Zoom in",
                        className: "flex h-7 w-7 items-center justify-center rounded-[6px] text-muted hover:bg-surface-muted hover:text-foreground",
                        onClick: ()=>setZoom(Math.min(1.5, Number((zoom + 0.1).toFixed(1)))),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "h-3.5 w-3.5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/Canvas.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/Canvas.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/Canvas.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 items-start justify-center overflow-auto p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        transform: `scale(${zoom})`,
                        transformOrigin: "top center"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$CanvasPage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasPage"], {
                        interactive: interactive
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/Canvas.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/Canvas.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/Canvas.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/Canvas.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Canvas, "t+/mZUxFJtoKH+7ExQ6xoVON4xw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = Canvas;
var _c;
__turbopack_context__.k.register(_c, "Canvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/CanvasPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasPage",
    ()=>CanvasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$ElementRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/ElementRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CanvasPage({ interactive }) {
    _s();
    const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "CanvasPage.useEditorStore[page]": (state)=>state.getActivePage()
    }["CanvasPage.useEditorStore[page]"]);
    const selectElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "CanvasPage.useEditorStore[selectElement]": (state)=>state.selectElement
    }["CanvasPage.useEditorStore[selectElement]"]);
    if (!page) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-[640px] w-[480px] items-center justify-center rounded-[8px] bg-white text-sm text-muted shadow-sm",
            children: "No page selected"
        }, void 0, false, {
            fileName: "[project]/src/components/editor/CanvasPage.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative shrink-0 overflow-hidden rounded-[2px] shadow-[0_18px_50px_rgba(15,23,42,0.12)]",
        style: {
            width: page.width,
            height: page.height,
            background: page.background
        },
        onClick: ()=>{
            if (interactive) {
                selectElement(null);
            }
        },
        children: page.elements.map((element)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$ElementRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementRenderer"], {
                elementId: element.id,
                interactive: interactive
            }, element.id, false, {
                fileName: "[project]/src/components/editor/CanvasPage.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/editor/CanvasPage.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(CanvasPage, "n/r0C2cjbmphCmzMnpPoYdw2+D4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
});
_c = CanvasPage;
var _c;
__turbopack_context__.k.register(_c, "CanvasPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/EditorHeader.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorHeader",
    ()=>EditorHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.mjs [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/redo-2.mjs [app-client] (ecmascript) <export default as Redo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.mjs [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/undo-2.mjs [app-client] (ecmascript) <export default as Undo2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSaveTemplate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/history.store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/ui.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function EditorHeader() {
    _s();
    const name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "EditorHeader.useEditorStore[name]": (state)=>state.getActiveTab()?.name ?? ""
    }["EditorHeader.useEditorStore[name]"]);
    const isDirty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "EditorHeader.useEditorStore[isDirty]": (state)=>state.getActiveTab()?.isDirty ?? false
    }["EditorHeader.useEditorStore[isDirty]"]);
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "EditorHeader.useEditorStore[mode]": (state)=>state.mode
    }["EditorHeader.useEditorStore[mode]"]);
    const setTabName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "EditorHeader.useEditorStore[setTabName]": (state)=>state.setTabName
    }["EditorHeader.useEditorStore[setTabName]"]);
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "EditorHeader.useEditorStore[setMode]": (state)=>state.setMode
    }["EditorHeader.useEditorStore[setMode]"]);
    const canUndo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "EditorHeader.useHistoryStore[canUndo]": (state)=>state.canUndo
    }["EditorHeader.useHistoryStore[canUndo]"]);
    const canRedo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "EditorHeader.useHistoryStore[canRedo]": (state)=>state.canRedo
    }["EditorHeader.useHistoryStore[canRedo]"]);
    const undo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "EditorHeader.useHistoryStore[undo]": (state)=>state.undo
    }["EditorHeader.useHistoryStore[undo]"]);
    const redo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "EditorHeader.useHistoryStore[redo]": (state)=>state.redo
    }["EditorHeader.useHistoryStore[redo]"]);
    const saveStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "EditorHeader.useUiStore[saveStatus]": (state)=>state.saveStatus
    }["EditorHeader.useUiStore[saveStatus]"]);
    const saveMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "EditorHeader.useUiStore[saveMessage]": (state)=>state.saveMessage
    }["EditorHeader.useUiStore[saveMessage]"]);
    const saveTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveTemplate"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "flex h-[60px] shrink-0 items-center justify-between gap-4 border-b border-border bg-surface px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary text-white shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/EditorHeader.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[15px] font-semibold leading-none text-foreground",
                                children: "Document Editor (PoC)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] text-muted",
                                children: saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved" : saveStatus === "error" ? saveMessage : isDirty ? "Unsaved changes" : "Desktop visual editor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "ml-4 flex min-w-[240px] max-w-sm items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "whitespace-nowrap text-[12px] font-medium text-muted",
                                children: "Project Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                "aria-label": "Project name",
                                value: name,
                                onChange: (event)=>setTabName(event.target.value),
                                className: "h-9 w-full rounded-[8px] border border-border bg-surface-muted px-3 text-[13px] font-medium text-foreground outline-none transition-colors focus:border-primary focus:bg-surface focus:ring-2 focus:ring-primary/20"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        label: "Undo",
                        shortcut: "Ctrl+Z",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "icon",
                            variant: "ghost",
                            "aria-label": "Undo",
                            disabled: !canUndo,
                            onClick: undo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$undo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Undo2$3e$__["Undo2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/EditorHeader.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        label: "Redo",
                        shortcut: "Ctrl+Shift+Z",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            size: "icon",
                            variant: "ghost",
                            "aria-label": "Redo",
                            disabled: !canRedo,
                            onClick: redo,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$redo$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Redo2$3e$__["Redo2"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/editor/EditorHeader.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        label: "Preview",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            "aria-label": "Preview",
                            variant: mode === "preview" ? "primary" : "secondary",
                            onClick: ()=>setMode(mode === "preview" ? "edit" : "preview"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this),
                                "Preview"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/editor/EditorHeader.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        label: "Save",
                        shortcut: "Ctrl+S",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "primary",
                            "aria-label": "Save template",
                            isLoading: saveTemplate.isPending,
                            onClick: ()=>saveTemplate.mutate(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                "Save"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/editor/EditorHeader.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        label: "Download PDF",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            "aria-label": "Download PDF",
                            disabled: true,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/EditorHeader.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                "Download PDF"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/editor/EditorHeader.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorHeader.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorHeader.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/EditorHeader.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(EditorHeader, "WyaUnDAWffIMKybp9sYROV1AMm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$history$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveTemplate"]
    ];
});
_c = EditorHeader;
var _c;
__turbopack_context__.k.register(_c, "EditorHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/EditorShell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorShell",
    ()=>EditorShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/Canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/EditorHeader.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$PreviewMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/PreviewMode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$PropertiesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/PropertiesPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$SavedTemplates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/SavedTemplates.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$TemplateTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/TemplateTabs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$Toolbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/Toolbox.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useKeyboardShortcuts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function EditorShell() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"])();
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "EditorShell.useEditorStore[mode]": (state)=>state.mode
    }["EditorShell.useEditorStore[mode]"]);
    if (mode === "preview") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen flex-col overflow-hidden bg-background",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$PreviewMode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewMode"], {}, void 0, false, {
                fileName: "[project]/src/components/editor/EditorShell.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/editor/EditorShell.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen flex-col overflow-hidden bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$EditorHeader$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditorHeader"], {}, void 0, false, {
                fileName: "[project]/src/components/editor/EditorShell.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$TemplateTabs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TemplateTabs"], {}, void 0, false, {
                fileName: "[project]/src/components/editor/EditorShell.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$Toolbox$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toolbox"], {}, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorShell.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Canvas"], {}, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorShell.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$PropertiesPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertiesPanel"], {}, void 0, false, {
                        fileName: "[project]/src/components/editor/EditorShell.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/EditorShell.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$SavedTemplates$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SavedTemplates"], {}, void 0, false, {
                fileName: "[project]/src/components/editor/EditorShell.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/EditorShell.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(EditorShell, "mS+SuLd8FUifzTwrtHQT3xSMczU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useKeyboardShortcuts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useKeyboardShortcuts"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
});
_c = EditorShell;
var _c;
__turbopack_context__.k.register(_c, "EditorShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/ElementRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementRenderer",
    ()=>ElementRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$ImageElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/elements/ImageElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$ShapeElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/elements/ShapeElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$TableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/elements/TableElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/elements/TextElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/document-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const ElementRenderer = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = _s(function ElementRenderer({ elementId, interactive }) {
    _s();
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "ElementRenderer.ElementRenderer.useEditorStore[element]": (state)=>{
            const tab = state.tabs.find({
                "ElementRenderer.ElementRenderer.useEditorStore[element].tab": (item)=>item.id === state.activeTabId
            }["ElementRenderer.ElementRenderer.useEditorStore[element].tab"]);
            if (!tab) {
                return null;
            }
            const page = tab.document.pages.find({
                "ElementRenderer.ElementRenderer.useEditorStore[element].page": (item)=>item.id === tab.activePageId
            }["ElementRenderer.ElementRenderer.useEditorStore[element].page"]);
            return page?.elements.find({
                "ElementRenderer.ElementRenderer.useEditorStore[element]": (item)=>item.id === elementId
            }["ElementRenderer.ElementRenderer.useEditorStore[element]"]) ?? null;
        }
    }["ElementRenderer.ElementRenderer.useEditorStore[element]"]);
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "ElementRenderer.ElementRenderer.useEditorStore[selected]": (state)=>{
            const tab = state.tabs.find({
                "ElementRenderer.ElementRenderer.useEditorStore[selected].tab": (item)=>item.id === state.activeTabId
            }["ElementRenderer.ElementRenderer.useEditorStore[selected].tab"]);
            return tab?.selectedElementId === elementId;
        }
    }["ElementRenderer.ElementRenderer.useEditorStore[selected]"]);
    const selectElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "ElementRenderer.ElementRenderer.useEditorStore[selectElement]": (state)=>state.selectElement
    }["ElementRenderer.ElementRenderer.useEditorStore[selectElement]"]);
    if (!element || !element.visible) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: interactive ? "button" : undefined,
        tabIndex: interactive ? 0 : undefined,
        onClick: (event)=>{
            if (!interactive) {
                return;
            }
            event.stopPropagation();
            selectElement(element.id);
        },
        onKeyDown: (event)=>{
            if (!interactive) {
                return;
            }
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                selectElement(element.id);
            }
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute", interactive && "cursor-pointer", selected && interactive && "ring-2 ring-primary ring-offset-2"),
        style: {
            left: element.x,
            top: element.y,
            width: element.width,
            height: element.height,
            zIndex: element.zIndex
        },
        children: [
            element.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextElement"], {
                element: element
            }, void 0, false, {
                fileName: "[project]/src/components/editor/ElementRenderer.tsx",
                lineNumber: 75,
                columnNumber: 34
            }, this) : null,
            element.type === "table" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$TableElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableElement"], {
                element: element,
                interactive: interactive,
                selected: selected,
                onAddRow: ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].getState().updateElement(element.id, (current)=>current.type === "table" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTableRow"])(current) : current);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/editor/ElementRenderer.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this) : null,
            element.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$ImageElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageElement"], {
                element: element
            }, void 0, false, {
                fileName: "[project]/src/components/editor/ElementRenderer.tsx",
                lineNumber: 88,
                columnNumber: 35
            }, this) : null,
            element.type === "shape" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$elements$2f$ShapeElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShapeElement"], {
                element: element
            }, void 0, false, {
                fileName: "[project]/src/components/editor/ElementRenderer.tsx",
                lineNumber: 89,
                columnNumber: 35
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/ElementRenderer.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}, "tKXyFxrsAzQ3aJ6x0VZcVXWaT2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
})), "tKXyFxrsAzQ3aJ6x0VZcVXWaT2Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
});
_c1 = ElementRenderer;
var _c, _c1;
__turbopack_context__.k.register(_c, "ElementRenderer$memo");
__turbopack_context__.k.register(_c1, "ElementRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/PreviewMode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreviewMode",
    ()=>PreviewMode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/editor/Canvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PreviewMode() {
    _s();
    const setMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "PreviewMode.useEditorStore[setMode]": (state)=>state.setMode
    }["PreviewMode.useEditorStore[setMode]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-0 flex-1 flex-col bg-workspace",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-border bg-surface px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[16px] font-semibold text-foreground",
                        children: "Preview"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/PreviewMode.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: ()=>setMode("edit"),
                        children: "Back to Edit"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/PreviewMode.tsx",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/PreviewMode.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$editor$2f$Canvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Canvas"], {
                interactive: false
            }, void 0, false, {
                fileName: "[project]/src/components/editor/PreviewMode.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/PreviewMode.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(PreviewMode, "FfxMcPMcZjF1p1avtDe/5nbo1zU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
});
_c = PreviewMode;
var _c;
__turbopack_context__.k.register(_c, "PreviewMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/PropertiesPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertiesPanel",
    ()=>PropertiesPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-center.mjs [app-client] (ecmascript) <export default as AlignCenter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-start.mjs [app-client] (ecmascript) <export default as AlignLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/text-align-end.mjs [app-client] (ecmascript) <export default as AlignRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/columns-3.mjs [app-client] (ecmascript) <export default as Columns3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rows$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rows3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rows-3.mjs [app-client] (ecmascript) <export default as Rows3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.mjs [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$element$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/element.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEditorSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useEditorSelection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/document-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function PropertiesPanel() {
    _s();
    const element = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEditorSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSelection"])();
    const updateElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "PropertiesPanel.useEditorStore[updateElement]": (state)=>state.updateElement
    }["PropertiesPanel.useEditorStore[updateElement]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex w-[320px] shrink-0 flex-col overflow-y-auto border-l border-border bg-surface",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 border-b border-border px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                        className: "h-4 w-4 text-primary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[13px] font-semibold text-foreground",
                        children: "Properties & Data"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col gap-4 p-4",
                children: [
                    !element ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "rounded-[10px] border border-dashed border-border bg-surface-muted px-4 py-6 text-center text-[13px] leading-6 text-muted",
                        children: [
                            "Select an element",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            "to edit its properties."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : null,
                    element?.type === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-[12px] border border-border p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                    lineNumber: 57,
                                    columnNumber: 33
                                }, this),
                                title: "Text Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 grid grid-cols-2 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        label: "Font Family",
                                        value: element.text.fontFamily,
                                        onChange: (event)=>updateElement(element.id, (current)=>current.type === "text" ? {
                                                    ...current,
                                                    text: {
                                                        ...current.text,
                                                        fontFamily: event.target.value
                                                    }
                                                } : current),
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$element$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONT_FAMILIES"].map((font)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: font,
                                                children: font
                                            }, font, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 77,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        label: "Font Size",
                                        type: "number",
                                        min: 8,
                                        max: 96,
                                        value: element.text.fontSize,
                                        onChange: (event)=>updateElement(element.id, (current)=>current.type === "text" ? {
                                                    ...current,
                                                    text: {
                                                        ...current.text,
                                                        fontSize: Number(event.target.value) || 12
                                                    }
                                                } : current)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        label: "Font Weight",
                                        value: String(element.text.fontWeight),
                                        onChange: (event)=>updateElement(element.id, (current)=>current.type === "text" ? {
                                                    ...current,
                                                    text: {
                                                        ...current.text,
                                                        fontWeight: Number(event.target.value)
                                                    }
                                                } : current),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "400",
                                                children: "Regular"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "500",
                                                children: "Medium"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "600",
                                                children: "Semibold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "700",
                                                children: "Bold"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex flex-col gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[12px] font-medium text-muted",
                                                children: "Text Color"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-9 items-center gap-2 rounded-[8px] border border-border px-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "color",
                                                        value: toColorInput(element.text.color),
                                                        onChange: (event)=>updateElement(element.id, (current)=>current.type === "text" ? {
                                                                    ...current,
                                                                    text: {
                                                                        ...current.text,
                                                                        color: event.target.value
                                                                    }
                                                                } : current),
                                                        className: "h-5 w-5 cursor-pointer rounded border-0 bg-transparent p-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[12px] text-foreground",
                                                        children: element.text.color
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-1.5 text-[12px] font-medium text-muted",
                                        children: "Alignment"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex overflow-hidden rounded-[8px] border border-border",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$element$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TEXT_ALIGNS"].map((align)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": `Align ${align}`,
                                                onClick: ()=>updateElement(element.id, (current)=>current.type === "text" ? {
                                                            ...current,
                                                            text: {
                                                                ...current.text,
                                                                align
                                                            }
                                                        } : current),
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 flex-1 items-center justify-center text-muted hover:bg-surface-muted", element.text.align === align && "bg-primary/10 text-primary"),
                                                children: [
                                                    align === "left" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$start$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignLeft$3e$__["AlignLeft"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 23
                                                    }, this) : null,
                                                    align === "center" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$center$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignCenter$3e$__["AlignCenter"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 23
                                                    }, this) : null,
                                                    align === "right" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$text$2d$align$2d$end$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlignRight$3e$__["AlignRight"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 23
                                                    }, this) : null
                                                ]
                                            }, align, true, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mt-3 flex flex-col gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[12px] font-medium text-muted",
                                        children: "Content"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: element.text.content,
                                        onChange: (event)=>updateElement(element.id, (current)=>current.type === "text" ? {
                                                    ...current,
                                                    text: {
                                                        ...current.text,
                                                        content: event.target.value
                                                    }
                                                } : current),
                                        className: "min-h-[72px] rounded-[8px] border border-border bg-surface px-3 py-2 text-[13px] outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 191,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this) : null,
                    element?.type === "table" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-[12px] border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                        title: "Table Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Width",
                                                type: "number",
                                                value: element.width,
                                                onChange: (event)=>updateElement(element.id, (current)=>({
                                                            ...current,
                                                            width: Number(event.target.value) || current.width
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 214,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Borders",
                                                value: `${element.table.borderWidth}px`,
                                                onChange: (event)=>{
                                                    const value = Number.parseInt(event.target.value, 10);
                                                    updateElement(element.id, (current)=>current.type === "table" ? {
                                                            ...current,
                                                            table: {
                                                                ...current.table,
                                                                borderWidth: Number.isNaN(value) ? 0 : value
                                                            }
                                                        } : current);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Padding",
                                                type: "number",
                                                min: 0,
                                                value: element.table.cellPadding,
                                                onChange: (event)=>updateElement(element.id, (current)=>current.type === "table" ? {
                                                            ...current,
                                                            table: {
                                                                ...current.table,
                                                                cellPadding: Number(event.target.value) || 0
                                                            }
                                                        } : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 243,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Row Spacing",
                                                type: "number",
                                                min: 0,
                                                value: element.table.rowSpacing,
                                                onChange: (event)=>updateElement(element.id, (current)=>current.type === "table" ? {
                                                            ...current,
                                                            table: {
                                                                ...current.table,
                                                                rowSpacing: Number(event.target.value) || 0
                                                            }
                                                        } : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 211,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-[12px] border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$columns$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Columns3$3e$__["Columns3"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                            lineNumber: 285,
                                            columnNumber: 35
                                        }, this),
                                        title: "Column Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelAction, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Add Column",
                                                onClick: ()=>updateElement(element.id, (current)=>current.type === "table" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTableColumn"])(current) : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 287,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelAction, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Delete Column",
                                                danger: true,
                                                onClick: ()=>updateElement(element.id, (current)=>current.type === "table" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTableColumn"])(current) : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 296,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 286,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 284,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "rounded-[12px] border border-border p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rows$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rows3$3e$__["Rows3"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                            lineNumber: 312,
                                            columnNumber: 35
                                        }, this),
                                        title: "Row Management"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 312,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelAction, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                    lineNumber: 315,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Add Row",
                                                onClick: ()=>updateElement(element.id, (current)=>current.type === "table" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addTableRow"])(current) : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelAction, {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "h-3.5 w-3.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 25
                                                }, this),
                                                label: "Delete Row",
                                                danger: true,
                                                onClick: ()=>updateElement(element.id, (current)=>current.type === "table" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteTableRow"])(current) : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 323,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 313,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                        lineNumber: 210,
                        columnNumber: 11
                    }, this) : null,
                    element?.type === "image" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-[12px] border border-border p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                title: "Image Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        label: "Image URL",
                                        value: element.image.src,
                                        onChange: (event)=>updateElement(element.id, (current)=>current.type === "image" ? {
                                                    ...current,
                                                    image: {
                                                        ...current.image,
                                                        src: event.target.value
                                                    }
                                                } : current)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 342,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                        label: "Alt text",
                                        value: element.image.alt ?? "",
                                        onChange: (event)=>updateElement(element.id, (current)=>current.type === "image" ? {
                                                    ...current,
                                                    image: {
                                                        ...current.image,
                                                        alt: event.target.value
                                                    }
                                                } : current)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Width",
                                                type: "number",
                                                value: element.width,
                                                onChange: (event)=>updateElement(element.id, (current)=>({
                                                            ...current,
                                                            width: Number(event.target.value) || current.width
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 371,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Height",
                                                type: "number",
                                                value: element.height,
                                                onChange: (event)=>updateElement(element.id, (current)=>({
                                                            ...current,
                                                            height: Number(event.target.value) || current.height
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 370,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 341,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this) : null,
                    element?.type === "shape" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "rounded-[12px] border border-border p-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                                title: "Shape Settings"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 400,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        label: "Shape",
                                        value: element.shape.kind,
                                        onChange: (event)=>{
                                            const kind = toShapeKind(event.target.value);
                                            if (!kind) {
                                                return;
                                            }
                                            updateElement(element.id, (current)=>current.type === "shape" ? {
                                                    ...current,
                                                    shape: {
                                                        ...current.shape,
                                                        kind
                                                    }
                                                } : current);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "rectangle",
                                                children: "Rectangle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 421,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "circle",
                                                children: "Circle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "line",
                                                children: "Line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 423,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 402,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Fill",
                                                type: "color",
                                                value: toColorInput(element.shape.fill),
                                                onChange: (event)=>updateElement(element.id, (current)=>current.type === "shape" ? {
                                                            ...current,
                                                            shape: {
                                                                ...current.shape,
                                                                fill: event.target.value
                                                            }
                                                        } : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 426,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Border",
                                                type: "color",
                                                value: toColorInput(element.shape.borderColor),
                                                onChange: (event)=>updateElement(element.id, (current)=>current.type === "shape" ? {
                                                            ...current,
                                                            shape: {
                                                                ...current.shape,
                                                                borderColor: event.target.value
                                                            }
                                                        } : current)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 441,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Width",
                                                type: "number",
                                                value: element.width,
                                                onChange: (event)=>updateElement(element.id, (current)=>({
                                                            ...current,
                                                            width: Number(event.target.value) || current.width
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 459,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "Height",
                                                type: "number",
                                                value: element.height,
                                                onChange: (event)=>updateElement(element.id, (current)=>({
                                                            ...current,
                                                            height: Number(event.target.value) || current.height
                                                        }))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                                lineNumber: 470,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                        lineNumber: 399,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(PropertiesPanel, "ouIpbP0fCFZLqJyWb0J8qqDUhcg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useEditorSelection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorSelection"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
});
_c = PropertiesPanel;
function SectionTitle({ icon, title }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-[13px] font-semibold text-foreground",
        children: [
            icon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-primary",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
                lineNumber: 499,
                columnNumber: 15
            }, this) : null,
            title
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
        lineNumber: 498,
        columnNumber: 5
    }, this);
}
_c1 = SectionTitle;
function PanelAction({ icon, label, onClick, danger = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-9 items-center justify-center gap-1.5 rounded-[8px] border text-[12px] font-medium", danger ? "border-border text-muted hover:border-danger hover:text-danger" : "border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"),
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/PropertiesPanel.tsx",
        lineNumber: 517,
        columnNumber: 5
    }, this);
}
_c2 = PanelAction;
function toColorInput(value) {
    return /^#([0-9a-fA-F]{6})$/.test(value) ? value : "#2563EB";
}
function toShapeKind(value) {
    for (const kind of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$element$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHAPE_KINDS"]){
        if (kind === value) {
            return kind;
        }
    }
    return null;
}
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "PropertiesPanel");
__turbopack_context__.k.register(_c1, "SectionTitle");
__turbopack_context__.k.register(_c2, "PanelAction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/SavedTemplates.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SavedTemplates",
    ()=>SavedTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.mjs [app-client] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.mjs [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSaveTemplate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useTemplates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function SavedTemplates() {
    _s();
    const { data, isLoading, isError, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplates"])();
    const openTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "SavedTemplates.useEditorStore[openTemplate]": (state)=>state.openTemplate
    }["SavedTemplates.useEditorStore[openTemplate]"]);
    const saveTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveTemplate"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [pendingDelete, setPendingDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const deleteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "SavedTemplates.useMutation[deleteMutation]": (id)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].deleteTemplate(id)
        }["SavedTemplates.useMutation[deleteMutation]"],
        onSuccess: {
            "SavedTemplates.useMutation[deleteMutation]": async ()=>{
                await queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateKeys"].all
                });
                setPendingDelete(null);
            }
        }["SavedTemplates.useMutation[deleteMutation]"]
    });
    const handleOpen = async (templateId)=>{
        const template = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].getTemplate(templateId);
        openTemplate(template);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "h-[168px] shrink-0 border-t border-border bg-surface px-4 py-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-3 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                className: "h-4 w-4 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-[13px] font-semibold text-foreground",
                                        children: "Saved Templates"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[11px] text-muted",
                                        children: "Access and manage your saved templates."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                        lineNumber: 47,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        size: "sm",
                        isLoading: saveTemplate.isPending,
                        onClick: ()=>saveTemplate.mutate(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "h-3.5 w-3.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            "Save Current as Template"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 overflow-hidden",
                children: Array.from({
                    length: 3
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[88px] w-full max-w-xl shrink-0 animate-pulse rounded-[10px] border border-border bg-surface-muted"
                    }, index, false, {
                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                        lineNumber: 66,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this) : null,
            isError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[88px] items-center justify-between rounded-[10px] border border-border px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] text-muted",
                        children: "We couldn't load your templates."
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "sm",
                        onClick: ()=>void refetch(),
                        children: "Try Again"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this) : null,
            !isLoading && !isError && (data?.length ?? 0) === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex h-[88px] items-center rounded-[10px] border border-dashed border-border px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[13px] text-muted",
                    children: "No saved templates yet. Save your current document to create your first reusable template."
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : null,
            !isLoading && !isError && data && data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3 overflow-x-auto pb-1",
                children: data.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "flex h-[88px] min-w-[420px] flex-1 items-center justify-between rounded-[10px] border border-border bg-surface px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-9 w-9 items-center justify-center rounded-[8px] bg-primary/10 text-primary",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                            lineNumber: 103,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-[13px] font-semibold text-foreground",
                                                children: template.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[11px] text-muted",
                                                children: [
                                                    "Saved on ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(template.updatedAt), "yyyy-MM-dd"),
                                                    " ",
                                                    "| ",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(template.updatedAt), "h:mm a")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        size: "sm",
                                        onClick: ()=>void handleOpen(template.id),
                                        children: "Open"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-label": `Delete ${template.name}`,
                                        className: "rounded-[6px] p-1 text-muted hover:bg-surface-muted hover:text-danger",
                                        onClick: ()=>setPendingDelete(template),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this)
                        ]
                    }, template.id, true, {
                        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                open: pendingDelete !== null,
                title: "Delete template",
                confirmLabel: "Delete",
                danger: true,
                onClose: ()=>setPendingDelete(null),
                onConfirm: ()=>{
                    if (pendingDelete) {
                        deleteMutation.mutate(pendingDelete.id);
                    }
                },
                children: pendingDelete ? `Delete “${pendingDelete.name}”? This cannot be undone.` : null
            }, void 0, false, {
                fileName: "[project]/src/components/editor/SavedTemplates.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/SavedTemplates.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(SavedTemplates, "mQFWGc0xDTIsJyfzVIzmrFxUpvM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useTemplates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplates"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveTemplate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = SavedTemplates;
var _c;
__turbopack_context__.k.register(_c, "SavedTemplates");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/TemplateTabs.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TemplateTabs",
    ()=>TemplateTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TemplateTabs() {
    _s();
    const tabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "TemplateTabs.useEditorStore[tabs]": (state)=>state.tabs
    }["TemplateTabs.useEditorStore[tabs]"]);
    const activeTabId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "TemplateTabs.useEditorStore[activeTabId]": (state)=>state.activeTabId
    }["TemplateTabs.useEditorStore[activeTabId]"]);
    const setActiveTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "TemplateTabs.useEditorStore[setActiveTab]": (state)=>state.setActiveTab
    }["TemplateTabs.useEditorStore[setActiveTab]"]);
    const createTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "TemplateTabs.useEditorStore[createTab]": (state)=>state.createTab
    }["TemplateTabs.useEditorStore[createTab]"]);
    const closeTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "TemplateTabs.useEditorStore[closeTab]": (state)=>state.closeTab
    }["TemplateTabs.useEditorStore[closeTab]"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-[44px] shrink-0 items-center gap-1 border-b border-border bg-surface px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-w-0 flex-1 items-center gap-1 overflow-x-auto",
                children: tabs.map((tab)=>{
                    const active = tab.id === activeTabId;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-8 shrink-0 items-center rounded-[8px] px-1.5", active ? "bg-primary/10 text-primary" : "text-muted hover:bg-surface-muted hover:text-foreground"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setActiveTab(tab.id),
                                className: "flex max-w-[180px] items-center gap-1.5 truncate px-2 text-[13px] font-medium",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                        className: "h-3.5 w-3.5 shrink-0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this),
                                    tab.name,
                                    tab.isDirty ? " •" : ""
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                                lineNumber: 30,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": `Close ${tab.name}`,
                                onClick: ()=>closeTab(tab.id),
                                className: "rounded-[6px] p-1 text-muted hover:bg-white/70 hover:text-foreground",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                                    lineNumber: 45,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Create new template tab",
                onClick: ()=>createTab(),
                className: "flex h-8 w-8 items-center justify-center rounded-[8px] text-muted hover:bg-surface-muted hover:text-foreground",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                    className: "h-4 w-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/TemplateTabs.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/TemplateTabs.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(TemplateTabs, "bBsDR9WBKJOVyouNCOgE3RFFftM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
});
_c = TemplateTabs;
var _c;
__turbopack_context__.k.register(_c, "TemplateTabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/editor/Toolbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toolbox",
    ()=>Toolbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.mjs [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mouse-pointer-2.mjs [app-client] (ecmascript) <export default as MousePointer2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square.mjs [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/table-2.mjs [app-client] (ecmascript) <export default as Table2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/type.mjs [app-client] (ecmascript) <export default as Type>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/document-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/ui.store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Toolbox() {
    _s();
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "Toolbox.useEditorStore[pages]": (state)=>state.getActiveTab()?.document.pages ?? []
    }["Toolbox.useEditorStore[pages]"]);
    const activePageId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "Toolbox.useEditorStore[activePageId]": (state)=>state.getActiveTab()?.activePageId
    }["Toolbox.useEditorStore[activePageId]"]);
    const addElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "Toolbox.useEditorStore[addElement]": (state)=>state.addElement
    }["Toolbox.useEditorStore[addElement]"]);
    const addPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "Toolbox.useEditorStore[addPage]": (state)=>state.addPage
    }["Toolbox.useEditorStore[addPage]"]);
    const setActivePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "Toolbox.useEditorStore[setActivePage]": (state)=>state.setActivePage
    }["Toolbox.useEditorStore[setActivePage]"]);
    const selectElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "Toolbox.useEditorStore[selectElement]": (state)=>state.selectElement
    }["Toolbox.useEditorStore[selectElement]"]);
    const activeTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "Toolbox.useUiStore[activeTool]": (state)=>state.activeTool
    }["Toolbox.useUiStore[activeTool]"]);
    const setActiveTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"])({
        "Toolbox.useUiStore[setActiveTool]": (state)=>state.setActiveTool
    }["Toolbox.useUiStore[setActiveTool]"]);
    const activePage = pages.find((page)=>page.id === activePageId);
    const addWithOffset = (tool, factory)=>{
        const offset = activePage ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextElementOffset"])(activePage) : {
            x: 80,
            y: 80
        };
        setActiveTool(tool);
        addElement(factory(offset));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "flex w-[240px] shrink-0 flex-col overflow-y-auto bg-toolbox text-toolbox-text",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-toolbox-subtle",
                        children: "Components"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/Toolbox.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolboxItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mouse$2d$pointer$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MousePointer2$3e$__["MousePointer2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, this),
                                label: "Select",
                                active: activeTool === "select",
                                onClick: ()=>{
                                    setActiveTool("select");
                                    selectElement(null);
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolboxItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$type$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Type$3e$__["Type"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 72,
                                    columnNumber: 19
                                }, this),
                                label: "Text Block",
                                active: activeTool === "text",
                                onClick: ()=>addWithOffset("text", (offset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextElement"])(offset))
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolboxItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$table$2d$2$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Table2$3e$__["Table2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 80,
                                    columnNumber: 19
                                }, this),
                                label: "Simple Table",
                                active: activeTool === "table",
                                onClick: ()=>addWithOffset("table", (offset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTableElement"])(offset))
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolboxItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 88,
                                    columnNumber: 19
                                }, this),
                                label: "Image",
                                active: activeTool === "image",
                                onClick: ()=>addWithOffset("image", (offset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createImageElement"])(offset))
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToolboxItem, {
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 96,
                                    columnNumber: 19
                                }, this),
                                label: "Shape",
                                active: activeTool === "shape",
                                onClick: ()=>addWithOffset("shape", (offset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createShapeElement"])(offset))
                            }, void 0, false, {
                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/Toolbox.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/Toolbox.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-3 pb-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-toolbox-border text-[12px] font-medium text-toolbox-text hover:bg-toolbox-muted",
                            onClick: ()=>addWithOffset("table", (offset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTableElement"])(offset)),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                "Add Simple Table"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/editor/Toolbox.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-toolbox-border text-[12px] font-medium text-toolbox-text hover:bg-toolbox-muted",
                            onClick: ()=>addWithOffset("text", (offset)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextElement"])({
                                        ...offset,
                                        width: 420,
                                        height: 28,
                                        text: {
                                            content: "New text line"
                                        }
                                    })),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "h-3.5 w-3.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                "Add New Text Line"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/editor/Toolbox.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/editor/Toolbox.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex-1 border-t border-toolbox-border p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-2 px-2 text-[11px] font-semibold uppercase tracking-wide text-toolbox-subtle",
                        children: "Pages"
                    }, void 0, false, {
                        fileName: "[project]/src/components/editor/Toolbox.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            pages.map((page, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setActivePage(page.id),
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-[10px] border p-2 text-left transition-colors", page.id === activePageId ? "border-primary bg-primary/20" : "border-toolbox-border hover:bg-toolbox-muted"),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-2 h-[72px] overflow-hidden rounded-[6px] bg-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "origin-top-left bg-white",
                                                style: {
                                                    width: page.width,
                                                    height: page.height,
                                                    transform: `scale(${72 / page.height})`
                                                },
                                                children: page.elements.slice(0, 8).map((element)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bg-slate-200",
                                                        style: {
                                                            left: element.x,
                                                            top: element.y,
                                                            width: element.width,
                                                            height: Math.min(element.height, 48)
                                                        }
                                                    }, element.id, false, {
                                                        fileName: "[project]/src/components/editor/Toolbox.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute bottom-1 left-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[9px] font-semibold text-white",
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/editor/Toolbox.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                }, page.id, false, {
                                    fileName: "[project]/src/components/editor/Toolbox.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addPage,
                                className: "flex h-9 w-full items-center justify-center gap-1.5 rounded-full border border-toolbox-border text-[12px] font-medium text-toolbox-text hover:bg-toolbox-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "h-3.5 w-3.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/editor/Toolbox.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, this),
                                    "Add Page"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/editor/Toolbox.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/editor/Toolbox.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/editor/Toolbox.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/Toolbox.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_s(Toolbox, "cpE+XAf/tRe8taoZqwFJcHpcgdM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"]
    ];
});
_c = Toolbox;
function ToolboxItem({ icon, label, active, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 items-center gap-3 rounded-[8px] px-3 text-[13px] font-medium transition-colors", active ? "bg-primary text-white" : "text-toolbox-text hover:bg-toolbox-muted"),
        children: [
            icon,
            label
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/editor/Toolbox.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_c1 = ToolboxItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "Toolbox");
__turbopack_context__.k.register(_c1, "ToolboxItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/elements/ImageElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageElement",
    ()=>ImageElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const ImageElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function ImageElement({ element }) {
    if (!element.image.src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-full w-full items-center justify-center rounded-[8px] border border-dashed border-border-strong bg-surface-muted text-[12px] text-muted",
            children: element.image.alt || "Image placeholder"
        }, void 0, false, {
            fileName: "[project]/src/components/elements/ImageElement.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return(// eslint-disable-next-line @next/next/no-img-element
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: element.image.src,
        alt: element.image.alt ?? "",
        className: "h-full w-full",
        style: {
            objectFit: element.image.objectFit
        }
    }, void 0, false, {
        fileName: "[project]/src/components/elements/ImageElement.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this));
});
_c1 = ImageElement;
var _c, _c1;
__turbopack_context__.k.register(_c, "ImageElement$memo");
__turbopack_context__.k.register(_c1, "ImageElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/elements/ShapeElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShapeElement",
    ()=>ShapeElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const ShapeElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function ShapeElement({ element }) {
    const { shape } = element;
    if (shape.kind === "line") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full",
            style: {
                background: shape.fill,
                borderRadius: shape.borderRadius
            }
        }, void 0, false, {
            fileName: "[project]/src/components/elements/ShapeElement.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    if (shape.kind === "circle") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-full",
            style: {
                background: shape.fill,
                border: `${shape.borderWidth}px solid ${shape.borderColor}`,
                borderRadius: "999px"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/elements/ShapeElement.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full",
        style: {
            background: shape.fill,
            border: `${shape.borderWidth}px solid ${shape.borderColor}`,
            borderRadius: shape.borderRadius
        }
    }, void 0, false, {
        fileName: "[project]/src/components/elements/ShapeElement.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
});
_c1 = ShapeElement;
var _c, _c1;
__turbopack_context__.k.register(_c, "ShapeElement$memo");
__turbopack_context__.k.register(_c1, "ShapeElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/elements/TableElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TableElement",
    ()=>TableElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.mjs [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const TableElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function TableElement({ element, interactive, selected, onAddRow }) {
    const { table } = element;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full w-full flex-col overflow-hidden rounded-[12px] bg-[#F8FBFF] p-3",
        children: [
            selected && interactive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between rounded-[10px] bg-primary px-3 py-2 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[12px] font-semibold tracking-wide",
                        children: "QUOTATION ITEMS"
                    }, void 0, false, {
                        fileName: "[project]/src/components/elements/TableElement.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] opacity-80",
                        children: "Table"
                    }, void 0, false, {
                        fileName: "[project]/src/components/elements/TableElement.tsx",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/elements/TableElement.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-0 flex-1 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full border-separate text-left text-[12px] text-foreground",
                    style: {
                        borderSpacing: `0 ${table.rowSpacing}px`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: table.rows.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    interactive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "w-6 pr-1 align-middle text-muted-foreground",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/elements/TableElement.tsx",
                                            lineNumber: 40,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/elements/TableElement.tsx",
                                        lineNumber: 39,
                                        columnNumber: 19
                                    }, this) : null,
                                    row.cells.map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("align-middle", rowIndex === 0 ? "font-semibold text-muted" : "bg-white text-foreground"),
                                            style: {
                                                padding: table.cellPadding,
                                                borderRadius: rowIndex === 0 ? 0 : 10,
                                                width: `${100 / table.columns}%`
                                            },
                                            children: cell.value
                                        }, cell.id, false, {
                                            fileName: "[project]/src/components/elements/TableElement.tsx",
                                            lineNumber: 44,
                                            columnNumber: 19
                                        }, this))
                                ]
                            }, row.id, true, {
                                fileName: "[project]/src/components/elements/TableElement.tsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/elements/TableElement.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/elements/TableElement.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/elements/TableElement.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            interactive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "mt-2 inline-flex h-8 items-center justify-center gap-1 self-start rounded-full bg-primary px-3 text-[12px] font-medium text-white hover:bg-primary-hover",
                onClick: (event)=>{
                    event.stopPropagation();
                    onAddRow?.();
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "h-3.5 w-3.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/elements/TableElement.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    "Add Row"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/elements/TableElement.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/elements/TableElement.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
});
_c1 = TableElement;
var _c, _c1;
__turbopack_context__.k.register(_c, "TableElement$memo");
__turbopack_context__.k.register(_c1, "TableElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/elements/TextElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextElement",
    ()=>TextElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const TextElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])(_c = function TextElement({ element }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full overflow-hidden whitespace-pre-wrap break-words",
        style: {
            fontFamily: element.text.fontFamily,
            fontSize: element.text.fontSize,
            fontWeight: element.text.fontWeight,
            color: element.text.color,
            textAlign: element.text.align,
            lineHeight: 1.4
        },
        children: element.text.content
    }, void 0, false, {
        fileName: "[project]/src/components/elements/TextElement.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
});
_c1 = TextElement;
var _c, _c1;
__turbopack_context__.k.register(_c, "TextElement$memo");
__turbopack_context__.k.register(_c1, "TextElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
;
const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-hover disabled:bg-primary/50",
    secondary: "border border-border bg-surface text-foreground hover:bg-surface-muted",
    outline: "border border-primary bg-surface text-primary hover:bg-primary/5",
    ghost: "text-muted hover:bg-surface-muted hover:text-foreground",
    danger: "bg-danger text-white hover:bg-danger/90"
};
const sizeClasses = {
    sm: "h-8 px-3 text-[13px]",
    md: "h-9 px-3.5 text-[13px]",
    icon: "h-9 w-9 p-0"
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function Button({ className, variant = "secondary", size = "md", isLoading = false, disabled, children, type = "button", ...props }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        type: type,
        disabled: disabled || isLoading,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-1.5 rounded-[8px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60", variantClasses[variant], sizeClasses[size], className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Button.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
});
_c1 = Button;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function Input({ className, label, id, ...props }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex flex-col gap-1.5",
        children: [
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[12px] font-medium text-muted",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                id: id,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 w-full rounded-[8px] border border-border bg-surface px-3 text-[13px] text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Input.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Input.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, this);
});
_c1 = Input;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Modal({ open, title, children, confirmLabel = "Confirm", cancelLabel = "Cancel", danger = false, onConfirm, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (!open) {
                return;
            }
            const onKeyDown = {
                "Modal.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        onClose();
                    }
                }
            }["Modal.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "Modal.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        open,
        onClose
    ]);
    if (!open) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": "modal-title",
            className: "w-full max-w-md rounded-[12px] border border-border bg-surface p-5 shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "modal-title",
                    className: "text-[16px] font-semibold text-foreground",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-[13px] text-muted",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 flex justify-end gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: onClose,
                            children: cancelLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        onConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: danger ? "danger" : "primary",
                            onClick: onConfirm,
                            children: confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Modal.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Modal.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Modal.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Modal.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
;
const Select = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = function Select({ className, label, children, ...props }, ref) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "flex flex-col gap-1.5",
        children: [
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[12px] font-medium text-muted",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Select.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-9 w-full rounded-[8px] border border-border bg-surface px-3 text-[13px] text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20", className),
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/Select.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Select.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, this);
});
_c1 = Select;
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cn.ts [app-client] (ecmascript)");
"use client";
;
;
function Tooltip({ label, shortcut, children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative inline-flex group", className),
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-[6px] bg-foreground px-2 py-1 text-[11px] text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-within:opacity-100",
                children: [
                    label,
                    shortcut ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1.5 text-white/70",
                        children: shortcut
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/Tooltip.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/Tooltip.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Tooltip.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Tooltip;
var _c;
__turbopack_context__.k.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useEditorSelection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEditorSelection",
    ()=>useEditorSelection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useEditorSelection() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"])({
        "useEditorSelection.useEditorStore": (state)=>state.getSelectedElement()
    }["useEditorSelection.useEditorStore"]);
}
_s(useEditorSelection, "3PMkIwH/4bUxeFEVgZCT1SukhdU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useKeyboardShortcuts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useKeyboardShortcuts",
    ()=>useKeyboardShortcuts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/document-utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useSaveTemplate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
function useKeyboardShortcuts() {
    _s();
    const saveTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveTemplate"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useKeyboardShortcuts.useEffect": ()=>{
            const onKeyDown = {
                "useKeyboardShortcuts.useEffect.onKeyDown": (event)=>{
                    const isMeta = event.metaKey || event.ctrlKey;
                    if (isMeta && event.key.toLowerCase() === "s") {
                        event.preventDefault();
                        saveTemplate.mutate();
                        return;
                    }
                    if (event.key === "Escape") {
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].getState().selectElement(null);
                        return;
                    }
                    if (event.key === "Delete" || event.key === "Backspace") {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$document$2d$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEditableTarget"])(event.target)) {
                            return;
                        }
                        event.preventDefault();
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].getState().removeSelectedElement();
                    }
                }
            }["useKeyboardShortcuts.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "useKeyboardShortcuts.useEffect": ()=>window.removeEventListener("keydown", onKeyDown)
            })["useKeyboardShortcuts.useEffect"];
        }
    }["useKeyboardShortcuts.useEffect"], [
        saveTemplate
    ]);
}
_s(useKeyboardShortcuts, "cXlZ5iJH/11nyWEBypzH4m0H9HE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useSaveTemplate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveTemplate"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useSaveTemplate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSaveTemplate",
    ()=>useSaveTemplate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/editor.store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/store/ui.store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useSaveTemplate() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useSaveTemplate.useMutation": async ()=>{
                const tab = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].getState().getActiveTab();
                if (!tab) {
                    throw new Error("No active template to save");
                }
                const payload = {
                    name: tab.name.trim() || "Untitled template",
                    pages: tab.document.pages,
                    version: tab.document.version
                };
                if (tab.templateId) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].updateTemplate(tab.templateId, payload);
                }
                return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].createTemplate(payload);
            }
        }["useSaveTemplate.useMutation"],
        onMutate: {
            "useSaveTemplate.useMutation": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"].getState().setSaveStatus("saving");
            }
        }["useSaveTemplate.useMutation"],
        onSuccess: {
            "useSaveTemplate.useMutation": (template)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$editor$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEditorStore"].getState().markSaved(template.id, template.name);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"].getState().setSaveStatus("saved", "Saved");
                void queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateKeys"].all
                });
                void queryClient.invalidateQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateKeys"].detail(template.id)
                });
            }
        }["useSaveTemplate.useMutation"],
        onError: {
            "useSaveTemplate.useMutation": (error)=>{
                const message = error instanceof Error ? error.message : "Save failed";
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$ui$2e$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUiStore"].getState().setSaveStatus("error", message);
            }
        }["useSaveTemplate.useMutation"]
    });
}
_s(useSaveTemplate, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useTemplates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTemplates",
    ()=>useTemplates
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/query-keys.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useTemplates() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["templateKeys"].all,
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].listTemplates
    });
}
_s(useTemplates, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiClientError",
    ()=>ApiClientError,
    "api",
    ()=>api
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:4000/api") ?? "http://localhost:4000/api";
class ApiClientError extends Error {
    status;
    code;
    details;
    constructor(message, status, code = "REQUEST_FAILED", details){
        super(message);
        this.name = "ApiClientError";
        this.status = status;
        this.code = code;
        this.details = details;
    }
}
function isRecord(value) {
    return typeof value === "object" && value !== null;
}
function isApiErrorResponse(value) {
    if (!isRecord(value) || !isRecord(value.error)) {
        return false;
    }
    return typeof value.error.message === "string";
}
async function request(path, init) {
    const response = await fetch(`${API_BASE_URL}${path}`, {
        ...init,
        headers: {
            "Content-Type": "application/json",
            ...init?.headers
        }
    });
    if (response.status === 204) {
        return undefined;
    }
    const payload = await response.json().catch(()=>null);
    if (!response.ok) {
        if (isApiErrorResponse(payload)) {
            throw new ApiClientError(payload.error.message, response.status, payload.error.code, payload.error.details);
        }
        throw new ApiClientError("Request failed", response.status);
    }
    const success = payload;
    return success.data;
}
const api = {
    getHealth: ()=>request("/health"),
    listTemplates: ()=>request("/templates"),
    getTemplate: (id)=>request(`/templates/${id}`),
    createTemplate: (input)=>request("/templates", {
            method: "POST",
            body: JSON.stringify(input)
        }),
    updateTemplate: (id, input)=>request(`/templates/${id}`, {
            method: "PATCH",
            body: JSON.stringify(input)
        }),
    deleteTemplate: (id)=>request(`/templates/${id}`, {
            method: "DELETE"
        })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/default-document.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDefaultPages",
    ()=>createDefaultPages,
    "createId",
    ()=>createId,
    "createPage",
    ()=>createPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/document.ts [app-client] (ecmascript)");
;
;
function createId(prefix) {
    return `${prefix}-${crypto.randomUUID()}`;
}
function createPage(overrides) {
    return {
        id: createId("page"),
        order: 0,
        width: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A4_PORTRAIT"].width,
        height: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["A4_PORTRAIT"].height,
        background: "#ffffff",
        elements: [],
        ...overrides
    };
}
function createDefaultPages() {
    return [
        createPage({
            id: "page-1",
            order: 0,
            elements: createDefaultElements()
        })
    ];
}
function createDefaultElements() {
    return [
        {
            id: "shape-logo",
            type: "shape",
            x: 56,
            y: 44,
            width: 40,
            height: 40,
            zIndex: 1,
            locked: false,
            visible: true,
            shape: {
                kind: "rectangle",
                fill: "#2563EB",
                borderColor: "#2563EB",
                borderWidth: 0,
                borderRadius: 12
            }
        },
        {
            id: "text-company",
            type: "text",
            x: 108,
            y: 42,
            width: 280,
            height: 24,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "Your Company",
                fontFamily: "Inter",
                fontSize: 20,
                fontWeight: 700,
                color: "#0F172A",
                align: "left"
            }
        },
        {
            id: "text-tagline",
            type: "text",
            x: 108,
            y: 66,
            width: 280,
            height: 18,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "Better Documents, Better Business",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 400,
                color: "#64748B",
                align: "left"
            }
        },
        {
            id: "text-document-title",
            type: "text",
            x: 390,
            y: 46,
            width: 348,
            height: 32,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "VISUAL DOCUMENT",
                fontFamily: "Inter",
                fontSize: 26,
                fontWeight: 800,
                color: "#0F172A",
                align: "right"
            }
        },
        {
            id: "text-issuer-label",
            type: "text",
            x: 56,
            y: 118,
            width: 200,
            height: 18,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "ISSUER/",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 700,
                color: "#2563EB",
                align: "left"
            }
        },
        {
            id: "text-issuer",
            type: "text",
            x: 56,
            y: 136,
            width: 200,
            height: 20,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "Issuer Details",
                fontFamily: "Inter",
                fontSize: 12,
                fontWeight: 400,
                color: "#64748B",
                align: "left"
            }
        },
        {
            id: "text-client-label",
            type: "text",
            x: 280,
            y: 118,
            width: 200,
            height: 18,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "Client Details",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 700,
                color: "#2563EB",
                align: "left"
            }
        },
        {
            id: "text-date-label",
            type: "text",
            x: 500,
            y: 118,
            width: 238,
            height: 18,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "No/Date:  C-2026-061",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 700,
                color: "#0F172A",
                align: "right"
            }
        },
        {
            id: "text-date",
            type: "text",
            x: 500,
            y: 136,
            width: 238,
            height: 18,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "2026-09-14",
                fontFamily: "Inter",
                fontSize: 12,
                fontWeight: 400,
                color: "#64748B",
                align: "right"
            }
        },
        {
            id: "table-quotation",
            type: "table",
            x: 56,
            y: 188,
            width: 682,
            height: 360,
            zIndex: 2,
            locked: false,
            visible: true,
            table: {
                columns: 5,
                borderWidth: 0,
                borderColor: "#DBEAFE",
                cellPadding: 10,
                rowSpacing: 6,
                rows: [
                    {
                        id: "row-header",
                        cells: [
                            {
                                id: "c-h-1",
                                value: "#"
                            },
                            {
                                id: "c-h-2",
                                value: "Item Detail"
                            },
                            {
                                id: "c-h-3",
                                value: "Qty"
                            },
                            {
                                id: "c-h-4",
                                value: "Unit Price"
                            },
                            {
                                id: "c-h-5",
                                value: "Amount"
                            }
                        ]
                    },
                    {
                        id: "row-1",
                        cells: [
                            {
                                id: "c-1-1",
                                value: "1"
                            },
                            {
                                id: "c-1-2",
                                value: "Product A"
                            },
                            {
                                id: "c-1-3",
                                value: "2"
                            },
                            {
                                id: "c-1-4",
                                value: "$10.00"
                            },
                            {
                                id: "c-1-5",
                                value: "$20.00"
                            }
                        ]
                    },
                    {
                        id: "row-2",
                        cells: [
                            {
                                id: "c-2-1",
                                value: "2"
                            },
                            {
                                id: "c-2-2",
                                value: "Product B"
                            },
                            {
                                id: "c-2-3",
                                value: "3"
                            },
                            {
                                id: "c-2-4",
                                value: "$10.00"
                            },
                            {
                                id: "c-2-5",
                                value: "$45.00"
                            }
                        ]
                    },
                    {
                        id: "row-3",
                        cells: [
                            {
                                id: "c-3-1",
                                value: "3"
                            },
                            {
                                id: "c-3-2",
                                value: "Product B"
                            },
                            {
                                id: "c-3-3",
                                value: "1"
                            },
                            {
                                id: "c-3-4",
                                value: "$15.00"
                            },
                            {
                                id: "c-3-5",
                                value: "$45.00"
                            }
                        ]
                    },
                    {
                        id: "row-4",
                        cells: [
                            {
                                id: "c-4-1",
                                value: "4"
                            },
                            {
                                id: "c-4-2",
                                value: "Product C"
                            },
                            {
                                id: "c-4-3",
                                value: "1"
                            },
                            {
                                id: "c-4-4",
                                value: "$50.00"
                            },
                            {
                                id: "c-4-5",
                                value: "$50.00"
                            }
                        ]
                    },
                    {
                        id: "row-5",
                        cells: [
                            {
                                id: "c-5-1",
                                value: "5"
                            },
                            {
                                id: "c-5-2",
                                value: "Product D"
                            },
                            {
                                id: "c-5-3",
                                value: "5"
                            },
                            {
                                id: "c-5-4",
                                value: "$8.00"
                            },
                            {
                                id: "c-5-5",
                                value: "$40.00"
                            }
                        ]
                    }
                ]
            }
        },
        {
            id: "text-notes",
            type: "text",
            x: 56,
            y: 568,
            width: 500,
            height: 20,
            zIndex: 2,
            locked: false,
            visible: true,
            text: {
                content: "Note: Full PDF layout rendered only upon export.",
                fontFamily: "Inter",
                fontSize: 11,
                fontWeight: 400,
                color: "#94A3B8",
                align: "left"
            }
        },
        {
            id: "shape-footer",
            type: "shape",
            x: 620,
            y: 1048,
            width: 118,
            height: 18,
            zIndex: 1,
            locked: false,
            visible: true,
            shape: {
                kind: "rectangle",
                fill: "#2563EB",
                borderColor: "#2563EB",
                borderWidth: 0,
                borderRadius: 999
            }
        }
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/document-utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addTableColumn",
    ()=>addTableColumn,
    "addTableRow",
    ()=>addTableRow,
    "createImageElement",
    ()=>createImageElement,
    "createShapeElement",
    ()=>createShapeElement,
    "createTableElement",
    ()=>createTableElement,
    "createTextElement",
    ()=>createTextElement,
    "deleteTableColumn",
    ()=>deleteTableColumn,
    "deleteTableRow",
    ()=>deleteTableRow,
    "findElement",
    ()=>findElement,
    "findPage",
    ()=>findPage,
    "isEditableTarget",
    ()=>isEditableTarget,
    "nextElementOffset",
    ()=>nextElementOffset
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/default-document.ts [app-client] (ecmascript) <locals>");
;
function createTextElement(overrides) {
    const { text, ...rest } = overrides ?? {};
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("text"),
        type: "text",
        x: 80,
        y: 80,
        width: 280,
        height: 40,
        zIndex: 2,
        locked: false,
        visible: true,
        ...rest,
        text: {
            content: "New text",
            fontFamily: "Inter",
            fontSize: 16,
            fontWeight: 400,
            color: "#111827",
            align: "left",
            ...text
        }
    };
}
function createTableElement(overrides) {
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("table"),
        type: "table",
        x: 56,
        y: 180,
        width: 682,
        height: 180,
        zIndex: 2,
        locked: false,
        visible: true,
        table: {
            columns: 4,
            borderWidth: 1,
            borderColor: "#D1D5DB",
            cellPadding: 8,
            rowSpacing: 0,
            rows: [
                {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("row"),
                    cells: [
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: "Column 1"
                        },
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: "Column 2"
                        },
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: "Column 3"
                        },
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: "Column 4"
                        }
                    ]
                },
                {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("row"),
                    cells: [
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: ""
                        },
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: ""
                        },
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: ""
                        },
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: ""
                        }
                    ]
                }
            ]
        },
        ...overrides
    };
}
function createImageElement(overrides) {
    const { image, ...rest } = overrides ?? {};
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("image"),
        type: "image",
        x: 80,
        y: 80,
        width: 220,
        height: 120,
        zIndex: 2,
        locked: false,
        visible: true,
        ...rest,
        image: {
            src: "",
            alt: "Image",
            objectFit: "contain",
            ...image
        }
    };
}
function createShapeElement(overrides) {
    const { shape, ...rest } = overrides ?? {};
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("shape"),
        type: "shape",
        x: 80,
        y: 80,
        width: 180,
        height: 80,
        zIndex: 1,
        locked: false,
        visible: true,
        ...rest,
        shape: {
            kind: "rectangle",
            fill: "#EFF6FF",
            borderColor: "#2563EB",
            borderWidth: 1,
            borderRadius: 8,
            ...shape
        }
    };
}
function nextElementOffset(page) {
    const count = page.elements.length;
    return {
        x: 72 + count % 4 * 16,
        y: 72 + count % 4 * 16
    };
}
function addTableRow(element) {
    const cells = Array.from({
        length: element.table.columns
    }, ()=>({
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
            value: ""
        }));
    return {
        ...element,
        height: element.height + 44,
        table: {
            ...element.table,
            rows: [
                ...element.table.rows,
                {
                    id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("row"),
                    cells
                }
            ]
        }
    };
}
function deleteTableRow(element) {
    if (element.table.rows.length <= 1) {
        return element;
    }
    return {
        ...element,
        height: Math.max(80, element.height - 44),
        table: {
            ...element.table,
            rows: element.table.rows.slice(0, -1)
        }
    };
}
function addTableColumn(element) {
    const nextIndex = element.table.columns + 1;
    return {
        ...element,
        table: {
            ...element.table,
            columns: nextIndex,
            rows: element.table.rows.map((row, rowIndex)=>({
                    ...row,
                    cells: [
                        ...row.cells,
                        {
                            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("cell"),
                            value: rowIndex === 0 ? `Column ${nextIndex}` : ""
                        }
                    ]
                }))
        }
    };
}
function deleteTableColumn(element) {
    if (element.table.columns <= 1) {
        return element;
    }
    return {
        ...element,
        table: {
            ...element.table,
            columns: element.table.columns - 1,
            rows: element.table.rows.map((row)=>({
                    ...row,
                    cells: row.cells.slice(0, -1)
                }))
        }
    };
}
function isEditableTarget(target) {
    if (!(target instanceof HTMLElement)) {
        return false;
    }
    const tag = target.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}
function findPage(pages, pageId) {
    return pages.find((page)=>page.id === pageId);
}
function findElement(pages, pageId, elementId) {
    return findPage(pages, pageId)?.elements.find((element)=>element.id === elementId);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/query-keys.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "templateKeys",
    ()=>templateKeys
]);
const templateKeys = {
    all: [
        "templates"
    ],
    detail: (id)=>[
            "templates",
            id
        ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/editor.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEditorStore",
    ()=>useEditorStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/default-document.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/document.ts [app-client] (ecmascript)");
;
;
function createUntitledTab(name = "New-Template") {
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createDefaultPages"])();
    const firstPage = pages[0];
    return {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("tab"),
        name,
        templateId: null,
        document: {
            pages,
            version: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOCUMENT_VERSION"]
        },
        activePageId: firstPage?.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("page"),
        selectedElementId: null,
        isDirty: false
    };
}
function replaceActiveTab(tabs, activeTabId, updater) {
    return tabs.map((tab)=>tab.id === activeTabId ? updater(tab) : tab);
}
function updateActivePage(tab, updater) {
    return {
        ...tab,
        isDirty: true,
        document: {
            ...tab.document,
            pages: tab.document.pages.map((page)=>page.id === tab.activePageId ? updater(page) : page)
        }
    };
}
const useEditorStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>{
    const initialTab = createUntitledTab();
    return {
        tabs: [
            initialTab
        ],
        activeTabId: initialTab.id,
        mode: "edit",
        getActiveTab: ()=>{
            const { tabs, activeTabId } = get();
            return tabs.find((tab)=>tab.id === activeTabId);
        },
        getActivePage: ()=>{
            const tab = get().getActiveTab();
            if (!tab) {
                return undefined;
            }
            return tab.document.pages.find((page)=>page.id === tab.activePageId);
        },
        getSelectedElement: ()=>{
            const tab = get().getActiveTab();
            if (!tab?.selectedElementId) {
                return null;
            }
            const page = tab.document.pages.find((item)=>item.id === tab.activePageId);
            return page?.elements.find((element)=>element.id === tab.selectedElementId) ?? null;
        },
        setActiveTab: (tabId)=>{
            set({
                activeTabId: tabId,
                mode: "edit"
            });
        },
        setTabName: (name)=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>({
                            ...tab,
                            name,
                            isDirty: true
                        }))
                }));
        },
        createTab: (name)=>{
            const tab = createUntitledTab(name);
            set((state)=>({
                    tabs: [
                        ...state.tabs,
                        tab
                    ],
                    activeTabId: tab.id,
                    mode: "edit"
                }));
        },
        closeTab: (tabId)=>{
            set((state)=>{
                if (state.tabs.length === 1) {
                    const tab = createUntitledTab();
                    return {
                        tabs: [
                            tab
                        ],
                        activeTabId: tab.id,
                        mode: "edit"
                    };
                }
                const remaining = state.tabs.filter((tab)=>tab.id !== tabId);
                const fallbackTab = remaining[remaining.length - 1] ?? remaining[0];
                const activeTabId = state.activeTabId === tabId && fallbackTab ? fallbackTab.id : state.activeTabId;
                return {
                    tabs: remaining,
                    activeTabId
                };
            });
        },
        openTemplate: (template)=>{
            const existing = get().tabs.find((tab)=>tab.templateId === template.id);
            if (existing) {
                set({
                    activeTabId: existing.id,
                    mode: "edit"
                });
                return;
            }
            const firstPage = template.pages[0];
            const tab = {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("tab"),
                name: template.name,
                templateId: template.id,
                document: {
                    pages: template.pages,
                    version: template.version
                },
                activePageId: firstPage?.id ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createId"])("page"),
                selectedElementId: null,
                isDirty: false
            };
            set((state)=>({
                    tabs: [
                        ...state.tabs,
                        tab
                    ],
                    activeTabId: tab.id,
                    mode: "edit"
                }));
        },
        markSaved: (templateId, name)=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>({
                            ...tab,
                            templateId,
                            name,
                            isDirty: false
                        }))
                }));
        },
        setMode: (mode)=>{
            set({
                mode
            });
        },
        setActivePage: (pageId)=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>({
                            ...tab,
                            activePageId: pageId,
                            selectedElementId: null
                        }))
                }));
        },
        addPage: ()=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>{
                        const page = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$default$2d$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPage"])({
                            order: tab.document.pages.length
                        });
                        return {
                            ...tab,
                            isDirty: true,
                            activePageId: page.id,
                            selectedElementId: null,
                            document: {
                                ...tab.document,
                                pages: [
                                    ...tab.document.pages,
                                    page
                                ]
                            }
                        };
                    })
                }));
        },
        selectElement: (elementId)=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>({
                            ...tab,
                            selectedElementId: elementId
                        }))
                }));
        },
        addElement: (element)=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>updateActivePage(tab, (page)=>({
                                ...page,
                                elements: [
                                    ...page.elements,
                                    element
                                ]
                            })))
                }));
            get().selectElement(element.id);
        },
        updateElement: (elementId, updater)=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>updateActivePage(tab, (page)=>({
                                ...page,
                                elements: page.elements.map((element)=>element.id === elementId ? updater(element) : element)
                            })))
                }));
        },
        removeSelectedElement: ()=>{
            set((state)=>({
                    tabs: replaceActiveTab(state.tabs, state.activeTabId, (tab)=>{
                        if (!tab.selectedElementId) {
                            return tab;
                        }
                        return {
                            ...updateActivePage(tab, (page)=>({
                                    ...page,
                                    elements: page.elements.filter((element)=>element.id !== tab.selectedElementId)
                                })),
                            selectedElementId: null
                        };
                    })
                }));
        }
    };
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/history.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHistoryStore",
    ()=>useHistoryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useHistoryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])(()=>({
        canUndo: false,
        canRedo: false,
        undo: ()=>undefined,
        redo: ()=>undefined
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/store/ui.store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUiStore",
    ()=>useUiStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useUiStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        saveStatus: "idle",
        saveMessage: null,
        zoom: 1,
        activeTool: "select",
        setSaveStatus: (status, message = null)=>{
            set({
                saveStatus: status,
                saveMessage: message
            });
        },
        setZoom: (zoom)=>{
            set({
                zoom
            });
        },
        setActiveTool: (tool)=>{
            set({
                activeTool: tool
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/document.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A4_PORTRAIT",
    ()=>A4_PORTRAIT,
    "DOCUMENT_VERSION",
    ()=>DOCUMENT_VERSION
]);
const A4_PORTRAIT = {
    width: 794,
    height: 1123
};
const DOCUMENT_VERSION = 1;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/types/element.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ELEMENT_TYPES",
    ()=>ELEMENT_TYPES,
    "FONT_FAMILIES",
    ()=>FONT_FAMILIES,
    "IMAGE_OBJECT_FITS",
    ()=>IMAGE_OBJECT_FITS,
    "SHAPE_KINDS",
    ()=>SHAPE_KINDS,
    "TEXT_ALIGNS",
    ()=>TEXT_ALIGNS
]);
const ELEMENT_TYPES = [
    "text",
    "table",
    "image",
    "shape"
];
const TEXT_ALIGNS = [
    "left",
    "center",
    "right"
];
const IMAGE_OBJECT_FITS = [
    "contain",
    "cover",
    "fill"
];
const SHAPE_KINDS = [
    "rectangle",
    "circle",
    "line"
];
const FONT_FAMILIES = [
    "Inter",
    "Arial",
    "Helvetica",
    "Georgia",
    "Times New Roman"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1gslbq6._.js.map