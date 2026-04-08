module.exports = [
"[project]/src/data/dummyData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FormCards",
    ()=>FormCards,
    "TodoItems_1",
    ()=>TodoItems_1
]);
const FormCards = [
    {
        id: 1,
        title: 'Simple Button',
        code: `const Button = () => {\n  return (\n    <button style={{\n      padding: '10px 20px',\n      backgroundColor: '#61dafb',\n      color: '#282c34',\n      border: 'none',\n      borderRadius: '4px',\n      cursor: 'pointer',\n      fontSize: '16px',\n      fontWeight: 500,\n    }}>\n      Click Me\n    </button>\n  );\n};`,
        style: `.button {\n  padding: 10px 20px;\n  background-color: #61dafb;\n  color: #282c34;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}`
    },
    {
        id: 2,
        title: 'Input Field',
        code: `const Input = () => {\n  return (\n    <input\n      type="text"\n      placeholder="Enter text..."\n      style={{\n        padding: '10px',\n        border: '2px solid #61dafb',\n        borderRadius: '4px',\n        fontSize: '16px',\n        width: '100%',\n        boxSizing: 'border-box',\n        backgroundColor: '#f7f7f7',\n        color: '#282c34',\n      }}\n    />\n  );\n};`,
        style: `.input {\n  padding: 10px;\n  border: 2px solid #61dafb;\n  border-radius: 4px;\n  font-size: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #f7f7f7;\n  color: #282c34;\n}`
    }
];
const TodoItems_1 = [
    {
        name: 'TodoItems-1',
        desc: 'loram ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];
}),
"[project]/src/components/PopupModal.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "activeTab": "PopupModal-module__H8slma__activeTab",
  "body": "PopupModal-module__H8slma__body",
  "close": "PopupModal-module__H8slma__close",
  "code": "PopupModal-module__H8slma__code",
  "header": "PopupModal-module__H8slma__header",
  "modal": "PopupModal-module__H8slma__modal",
  "overlay": "PopupModal-module__H8slma__overlay",
  "pre": "PopupModal-module__H8slma__pre",
  "tab": "PopupModal-module__H8slma__tab",
  "tabs": "PopupModal-module__H8slma__tabs",
  "title": "PopupModal-module__H8slma__title",
});
}),
"[project]/src/components/PopupModal.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/PopupModal.module.css [ssr] (css module)");
;
;
const PopupModal = ({ isOpen, card, activeTab, onTabChange, onClose })=>{
    if (!isOpen || !card) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].overlay,
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].modal,
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].header,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].title,
                            children: card.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/PopupModal.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].close,
                            onClick: onClose,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PopupModal.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PopupModal.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tabs,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: activeTab === 'code' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeTab : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tab,
                            onClick: ()=>onTabChange('code'),
                            type: "button",
                            children: "JavaScript"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PopupModal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: activeTab === 'style' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeTab : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tab,
                            onClick: ()=>onTabChange('style'),
                            type: "button",
                            children: "CSS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PopupModal.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PopupModal.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].body,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("pre", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].pre,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("code", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].code,
                            children: activeTab === 'code' ? card.code : card.style
                        }, void 0, false, {
                            fileName: "[project]/src/components/PopupModal.tsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PopupModal.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/PopupModal.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PopupModal.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PopupModal.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PopupModal;
}),
"[project]/src/components/GridCards.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "GridCards-module__kcEjmq__body",
  "card": "GridCards-module__kcEjmq__card",
  "container": "GridCards-module__kcEjmq__container",
  "grid": "GridCards-module__kcEjmq__grid",
  "preview": "GridCards-module__kcEjmq__preview",
  "title": "GridCards-module__kcEjmq__title",
});
}),
"[project]/src/components/GridCards.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PopupModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/GridCards.module.css [ssr] (css module)");
;
;
;
;
;
const GridCards = ()=>{
    const [selectedCard, setSelectedCard] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('code');
    const openModal = (card)=>{
        setSelectedCard(card);
        setActiveTab('code');
    };
    const closeModal = ()=>{
        setSelectedCard(null);
        console.log('ccccccccc', activeTab);
    };
    const coms = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
            style: {
                padding: '10px 20px',
                backgroundColor: '#61dafb',
                color: '#282c34',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 500
            },
            type: "button",
            children: "Click Me"
        }, void 0, false, {
            fileName: "[project]/src/components/GridCards.tsx",
            lineNumber: 21,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Enter text...",
            style: {
                padding: '10px',
                border: '2px solid #61dafb',
                borderRadius: '4px',
                fontSize: '16px',
                width: '100%',
                boxSizing: 'border-box',
                backgroundColor: '#f7f7f7',
                color: '#282c34'
            }
        }, void 0, false, {
            fileName: "[project]/src/components/GridCards.tsx",
            lineNumber: 36,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["FormCards"].map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card,
                        onClick: ()=>openModal(card),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].preview,
                                children: coms[index]
                            }, void 0, false, {
                                fileName: "[project]/src/components/GridCards.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].body,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].title,
                                    children: card.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GridCards.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GridCards.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, card.id, true, {
                        fileName: "[project]/src/components/GridCards.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/GridCards.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: Boolean(selectedCard),
                card: selectedCard,
                activeTab: activeTab,
                onTabChange: setActiveTab,
                onClose: closeModal
            }, void 0, false, {
                fileName: "[project]/src/components/GridCards.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GridCards.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GridCards;
}),
"[project]/src/data/TemplatesCardsData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TemplatesCardsData",
    ()=>TemplatesCardsData
]);
(()=>{
    const e = new Error("Cannot find module '../components/#1 Todo List 2/components/TodoHeader'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../components/#1 Todo List 2/components/TodoItem'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
let TemplatesCardsData = [
    {
        id: 1,
        title: 'Todo Header',
        titleSmall: '#1 Todo List 2',
        code: TodoHeader_1.toString(),
        style: ""
    },
    {
        id: 2,
        title: 'Todo Item',
        titleSmall: '#1 Todo List 2',
        code: TodoItem_1.toString(),
        style: ""
    }
];
}),
"[project]/src/components/TemplatesCards.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "body": "TemplatesCards-module__RtTiLq__body",
  "card": "TemplatesCards-module__RtTiLq__card",
  "container": "TemplatesCards-module__RtTiLq__container",
  "grid": "TemplatesCards-module__RtTiLq__grid",
  "preview": "TemplatesCards-module__RtTiLq__preview",
  "title": "TemplatesCards-module__RtTiLq__title",
  "titleSmall": "TemplatesCards-module__RtTiLq__titleSmall",
});
}),
"[project]/src/helpers/helpers.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchComponents",
    ()=>fetchComponents,
    "fetchStyles",
    ()=>fetchStyles
]);
const fetchComponents = async (componentFile, arrayModify, indexModify, propertyModify)=>{
    const url = `https://raw.githubusercontent.com/AhmedZkaria22/AZ-React-Components-Center/main/src/components/%231%20Todo%20List%202/components/${componentFile}`;
    await fetch(url).then((res)=>res.text()).then((content)=>{
        arrayModify[indexModify][`${propertyModify}`] = content;
        return content;
    });
};
const fetchStyles = async (styleFile, arrayModify, indexModify, propertyModify)=>{
    const url = `https://raw.githubusercontent.com/AhmedZkaria22/AZ-React-Components-Center/blob/main/src/components/%231%20Todo%20List%202/styles/${styleFile}`;
    await fetch(url).then((res)=>res.text()).then((content)=>{
        arrayModify[indexModify][`${propertyModify}`] = content;
        return content;
    });
};
}),
"[project]/src/components/TemplatesCards.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/dummyData.ts [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/TemplatesCardsData.ts [ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './#1 Todo List 2/components/TodoHeader'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './#1 Todo List 2/components/TodoItem'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PopupModal.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/TemplatesCards.module.css [ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helpers/helpers.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
const TemplatesCards = ()=>{
    const [selectedCard, setSelectedCard] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('code');
    const openModal = (card)=>{
        setSelectedCard(card);
        setActiveTab('code');
    };
    const closeModal = ()=>{
        setSelectedCard(null);
    };
    const coms = [
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TodoHeader_1, {
            items: [],
            addItem: ()=>{}
        }, void 0, false, {
            fileName: "[project]/src/components/TemplatesCards.tsx",
            lineNumber: 25,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(TodoItem_1, {
            items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TodoItems_1"]
        }, void 0, false, {
            fileName: "[project]/src/components/TemplatesCards.tsx",
            lineNumber: 26,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponents"])('TodoHeader.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 0, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponents"])('TodoItem.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 1, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchStyles"])('Todo.module.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 0, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchStyles"])('Todo.module.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 1, 'style');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"].map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card,
                        onClick: ()=>openModal(card),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].preview,
                                children: coms[index]
                            }, void 0, false, {
                                fileName: "[project]/src/components/TemplatesCards.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].body,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].title,
                                        children: card.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplatesCards.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].titleSmall,
                                        children: "#1 Todo List 2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplatesCards.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TemplatesCards.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/TemplatesCards.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/TemplatesCards.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: Boolean(selectedCard),
                card: selectedCard,
                activeTab: activeTab,
                onTabChange: setActiveTab,
                onClose: closeModal
            }, void 0, false, {
                fileName: "[project]/src/components/TemplatesCards.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TemplatesCards.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TemplatesCards;
}),
"[project]/src/components/TabsPage.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "actions": "TabsPage-module__EdIkqa__actions",
  "activeNavButton": "TabsPage-module__EdIkqa__activeNavButton",
  "cardBox": "TabsPage-module__EdIkqa__cardBox",
  "cardText": "TabsPage-module__EdIkqa__cardText",
  "cardTitle": "TabsPage-module__EdIkqa__cardTitle",
  "cardsGrid": "TabsPage-module__EdIkqa__cardsGrid",
  "content": "TabsPage-module__EdIkqa__content",
  "fieldGroup": "TabsPage-module__EdIkqa__fieldGroup",
  "form": "TabsPage-module__EdIkqa__form",
  "h1": "TabsPage-module__EdIkqa__h1",
  "input": "TabsPage-module__EdIkqa__input",
  "label": "TabsPage-module__EdIkqa__label",
  "list": "TabsPage-module__EdIkqa__list",
  "listItem": "TabsPage-module__EdIkqa__listItem",
  "nav": "TabsPage-module__EdIkqa__nav",
  "navButton": "TabsPage-module__EdIkqa__navButton",
  "page": "TabsPage-module__EdIkqa__page",
  "primaryButton": "TabsPage-module__EdIkqa__primaryButton",
  "secondaryButton": "TabsPage-module__EdIkqa__secondaryButton",
  "section": "TabsPage-module__EdIkqa__section",
  "sectionTitle": "TabsPage-module__EdIkqa__sectionTitle",
  "subSection": "TabsPage-module__EdIkqa__subSection",
  "subTitle": "TabsPage-module__EdIkqa__subTitle",
  "textarea": "TabsPage-module__EdIkqa__textarea",
});
}),
"[project]/src/components/TabsPage.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GridCards.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TemplatesCards.tsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/TabsPage.module.css [ssr] (css module)");
;
;
;
;
;
const TabsPage = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('form');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].h1,
                children: "AZ React Components Center"
            }, void 0, false, {
                fileName: "[project]/src/components/TabsPage.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].nav,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'atoms' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('atoms'),
                        children: "Atoms"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'molecules' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('molecules'),
                        children: "Molecules"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'organisms' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('organisms'),
                        children: "Organisms"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'templates' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('templates'),
                        children: "Templates"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'pages' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('pages'),
                        children: "Pages"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'form' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('form'),
                        children: "Form"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'list' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('list'),
                        children: "List"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'cards' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('cards'),
                        children: "Cards"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabsPage.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    activeTab === 'templates' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/TabsPage.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'form' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/TabsPage.tsx",
                            lineNumber: 100,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "List"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].list,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: "Home"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: "Components"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: "Documentation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeTab === 'cards' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Cards"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardsGrid,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: "Box Card 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 123,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardText,
                                                children: "A simple box card with space for a short description."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 124,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: "Box Card 2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardText,
                                                children: "Use this area to show status, stats, or quick actions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardBox,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardTitle,
                                                children: "Box Card 3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardText,
                                                children: "Cards can contain any UI element or layout."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabsPage.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TabsPage.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TabsPage;
}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TabsPage.tsx [ssr] (ecmascript)");
;
;
const Page = (props)=>{
    // const fs = require('node:fs/promises'); // Use the promises API
    // const path = require('path');
    // async function fetchExternalFile() {
    //     try {
    //         // Construct an absolute path to the file outside the project, 
    //         // e.g., in a 'common' directory adjacent to the project root
    //         // const externalPath = path.resolve(__dirname, '../../common/externalFile.js'); 
    //         // const externalPath = path.resolve(__dirname, 'https://github.dev/AhmedZkaria22/Vue.js-Todo-App/blob/main/src/components/TodosList.vue'); 
    //         // const data = await fs.readFile(externalPath, { encoding: 'utf8' });
    //         const response = await fetch('https://github.dev/AhmedZkaria22/Vue.js-Todo-App/blob/main/src/components/TodosList.vue');
    //         const data = await response.text();
    //         console.log('ddd', data);
    //     } catch (error) {
    //         console.error('Error reading file:', error);
    //     }
    // }
    // useEffect(() => {
    //     fetchExternalFile();    
    // }, [])
    return(// <div>
    //     <h1>AZ React Components Center</h1>
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 37,
        columnNumber: 13
    }, ("TURBOPACK compile-time value", void 0)));
};
const __TURBOPACK__default__export__ = Page;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__149544e8._.js.map