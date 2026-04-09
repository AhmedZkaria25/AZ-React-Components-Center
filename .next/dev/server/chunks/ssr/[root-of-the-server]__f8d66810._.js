module.exports = [
"[project]/src/data/dummyData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BudgetTrackerItems_2",
    ()=>BudgetTrackerItems_2,
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
const BudgetTrackerItems_2 = [
    {
        title: "Bus",
        type: "expense",
        amount: "-150",
        date: "2021-06-02"
    },
    {
        title: "Personal Co",
        type: "expense",
        amount: "-1500",
        date: "2021-06-02"
    },
    {
        title: "Food",
        type: "expense",
        amount: "-1200",
        date: "2021-06-02"
    },
    {
        title: "Clothes",
        type: "expense",
        amount: "-800",
        date: "2021-06-03"
    },
    {
        title: "car",
        type: "expense",
        amount: "-100",
        date: "2021-06-09"
    },
    {
        title: "Car Gas",
        type: "expense",
        amount: "-300",
        date: "2021-06-29"
    },
    {
        title: "salary",
        type: "income",
        amount: "4500",
        date: "2022-10-10"
    },
    {
        title: "coffee",
        type: "expense",
        amount: "-50",
        date: "2022-10-11"
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
"[project]/src/components/1_Todo_List_2/styles/Todo.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "TodoInsert": "Todo-module__oGceqG__TodoInsert",
  "TodoInsert__span": "Todo-module__oGceqG__TodoInsert__span",
  "TodoItems": "Todo-module__oGceqG__TodoItems",
  "comp": "Todo-module__oGceqG__comp",
  "dlt": "Todo-module__oGceqG__dlt",
  "no1_Todo_List_2": "Todo-module__oGceqG__no1_Todo_List_2",
  "no1_Todo_List_2h1": "Todo-module__oGceqG__no1_Todo_List_2h1",
  "und": "Todo-module__oGceqG__und",
});
}),
"[project]/src/components/1_Todo_List_2/components/TodoHeader.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$styles$2f$Todo$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/1_Todo_List_2/styles/Todo.module.css [ssr] (css module)");
;
;
;
function TodoHeader(props) {
    const { items, addItem } = props;
    const [HeaderInputs, setHeaderInputs] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])({
        name: "",
        desc: ""
    });
    const handleChange = (e)=>{
        setHeaderInputs({
            ...HeaderInputs,
            [e.target.name]: e.target.value
        });
    };
    const handelSubmit = ()=>{
        const inN = document.getElementById("name"), inD = document.getElementById("desc");
        const arrName = [];
        for(var i = 0; i < document.querySelectorAll(".TodoItems__name").length; i++){
            arrName.push(document.querySelectorAll(".TodoItems__name")[i].textContent);
        }
        const arrDesc = [];
        for(var i = 0; i < document.querySelectorAll(".TodoItems__desc").length; i++){
            arrDesc.push(document.querySelectorAll(".TodoItems__desc")[i].textContent);
        }
        console.log(arrName, arrDesc);
        const trgnTxt = arrName.filter(function(nm) {
            return nm === inN.value;
        });
        const trgdTxt = arrDesc.filter(function(ds) {
            return ds === inD.value;
        });
        if (inN.value.length >= 3 && inD.value.length >= 5 && trgnTxt.length === 0 && trgdTxt.length === 0) {
            setHeaderInputs({
                name: "",
                desc: ""
            });
            addItem(HeaderInputs);
            console.log(HeaderInputs);
            const itmLns = document.querySelectorAll(".TodoItems").length + 1;
            localStorage.setItem(`Item${localStorage.length + 1} name`, inN.value);
            localStorage.setItem(`Item${localStorage.length} desc`, inD.value);
        } else {
            trgnTxt.length != 0 || trgdTxt.length != 0 ? document.querySelector(".TodoInsert__span").style.display = "block" : console.log("Attention msg");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "no1_Todo_List_2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: "My Todos"
            }, void 0, false, {
                fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                lineNumber: 48,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "TodoInsert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                                lineNumber: 51,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "name",
                                name: "name",
                                onChange: handleChange,
                                value: HeaderInputs.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                                lineNumber: 52,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                                lineNumber: 55,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                id: "desc",
                                name: "desc",
                                onChange: handleChange,
                                value: HeaderInputs.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                                lineNumber: 56,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handelSubmit,
                        children: "Add Todo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: 'TodoInsert__span',
                        children: [
                            " ⚠️This name or description repeated, 🙂insert different.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: (e)=>{
                                    e.target.parentElement.style.display = "none";
                                },
                                children: " x "
                            }, void 0, false, {
                                fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
                lineNumber: 49,
                columnNumber: 15
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/1_Todo_List_2/components/TodoHeader.js",
        lineNumber: 47,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = TodoHeader;
}),
"[project]/src/components/1_Todo_List_2/components/TodoItem.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$styles$2f$Todo$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/1_Todo_List_2/styles/Todo.module.css [ssr] (css module)");
;
;
;
;
function TodoItem({ items }) {
    const handelComplete = (e)=>{
        let trgt = e.target;
        if (trgt.classList.contains("comp")) {
            trgt.classList.remove("comp");
            trgt.classList.add("und");
            trgt.setAttribute("title", "Undo");
            trgt.parentElement.firstChild.children[0].style.color = "gray";
            trgt.parentElement.firstChild.children[0].style.textDecoration = "line-through";
            trgt.parentElement.firstChild.children[1].style.color = "gray";
            trgt.parentElement.firstChild.children[1].style.textDecoration = "line-through";
        } else {
            trgt.classList.remove("und");
            trgt.classList.add("comp");
            trgt.setAttribute("title", "Complete");
            trgt.parentElement.firstChild.children[0].style.color = "#ff9a8d";
            trgt.parentElement.firstChild.children[0].style.textDecoration = "none";
            trgt.parentElement.firstChild.children[1].style.color = "black";
            trgt.parentElement.firstChild.children[1].style.textDecoration = "none";
        }
    };
    const handelDelete = (e)=>{
        let trgt = e.target;
        let pr = document.querySelector(".App");
        const sibn = trgt.previousElementSibling.children[0].textContent, sibd = trgt.previousElementSibling.children[1].textContent;
        for(var i = 0; i <= localStorage.length; i++){
            if (localStorage.getItem(`Item${i} name`) === sibn) {
                localStorage.removeItem(`Item${i} name`);
                localStorage.setItem(`Item${i} name-rmv`, `${i}`);
            }
            if (localStorage.getItem(`Item${i} desc`) === sibd) {
                localStorage.removeItem(`Item${i} desc`);
                localStorage.setItem(`Item${i} desc-rmv`, `${i}`);
            }
        }
        for(var i = 1; i <= pr.children.length; i++){
            if (pr.children[i] === trgt.parentElement) {
                pr.removeChild(trgt.parentElement);
            // console.log(i, sibn, sibd);
            } //else{ console.log('no',i-1, localStorage.getItem(`Item${i-1} name`) , localStorage.getItem(`Item${i-1} desc`) )  }
        }
    };
    // console.log( items );
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "no1_Todo_List_2",
        children: items.map((item, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "TodoItems",
                style: {
                    maxWidth: '500px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                className: 'TodoItems__name',
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/1_Todo_List_2/components/TodoItem.js",
                                lineNumber: 58,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: 'TodoItems__desc',
                                children: item.desc
                            }, void 0, false, {
                                fileName: "[project]/src/components/1_Todo_List_2/components/TodoItem.js",
                                lineNumber: 59,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/1_Todo_List_2/components/TodoItem.js",
                        lineNumber: 57,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "dlt",
                        title: "remove",
                        onClick: handelDelete,
                        children: " Remove "
                    }, void 0, false, {
                        fileName: "[project]/src/components/1_Todo_List_2/components/TodoItem.js",
                        lineNumber: 61,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "comp",
                        title: "Complete",
                        onClick: handelComplete,
                        children: " Complete "
                    }, void 0, false, {
                        fileName: "[project]/src/components/1_Todo_List_2/components/TodoItem.js",
                        lineNumber: 62,
                        columnNumber: 25
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/src/components/1_Todo_List_2/components/TodoItem.js",
                lineNumber: 56,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/1_Todo_List_2/components/TodoItem.js",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = TodoItem;
}),
"[project]/src/data/TemplatesCardsData.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TemplatesCardsData",
    ()=>TemplatesCardsData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoHeader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/1_Todo_List_2/components/TodoHeader.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/1_Todo_List_2/components/TodoItem.js [ssr] (ecmascript)");
;
;
let TemplatesCardsData = [
    {
        id: 1,
        title: 'Todo Header',
        titleSmall: '#1 Todo List 2',
        code: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoHeader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].toString(),
        style: ""
    },
    {
        id: 2,
        title: 'Todo Item',
        titleSmall: '#1 Todo List 2',
        code: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].toString(),
        style: ""
    },
    {
        id: 3,
        title: 'Log in',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 4,
        title: 'Sign up',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 5,
        title: 'User Auth',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 6,
        title: 'Header',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 7,
        title: 'Input',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 8,
        title: 'Item',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 9,
        title: 'Item List',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 10,
        title: 'Navbar',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    },
    {
        id: 11,
        title: 'Photo Grid',
        titleSmall: '#2 React Firebase',
        code: "",
        style: ""
    }
];
}),
"[project]/src/components/2_React_Firebase/Firebase/Firebase.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Firebase configration to run it
__turbopack_context__.s([
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "default",
    ()=>__TURBOPACK__default__export__,
    "storage",
    ()=>storage
]);
(()=>{
    const e = new Error("Cannot find module 'firebase/app'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'firebase/firestore'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'firebase/storage'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'firebase/auth'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const firebaseConfig = {
    apiKey: "AIzaSyCjgGnAQEq21mhDuiGEGtgYNlrAkk2gpwY",
    authDomain: "react-firebase-768ff.firebaseapp.com",
    projectId: "react-firebase-768ff",
    storageBucket: "react-firebase-768ff.appspot.com",
    messagingSenderId: "158925404231",
    appId: "1:158925404231:web:2dead90beb8103090e9962"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const __TURBOPACK__default__export__ = firebase;
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth(); // Firebase configration to run it
}),
"[project]/src/components/2_React_Firebase/components/Auth/Login.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router__$5b$external$5d$__$28$react$2d$router$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$router$29$__ = __turbopack_context__.i("[externals]/react-router [external] (react-router, cjs, [project]/node_modules/react-router)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$2_React_Firebase$2f$Firebase$2f$Firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/2_React_Firebase/Firebase/Firebase.js [ssr] (ecmascript)");
;
;
;
;
;
const initialState = {
    email: '',
    password: ''
};
const Login = ()=>{
    const history = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router__$5b$external$5d$__$28$react$2d$router$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$router$29$__["useHistory"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialState);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const handleChange = ({ target })=>{
        setInput({
            ...input,
            [target.name]: target.value
        });
        setError('');
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$2_React_Firebase$2f$Firebase$2f$Firebase$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["auth"].signInWithEmailAndPassword(input.email, input.password);
            setInput(initialState);
            // history.push('/');
            history.push('/account');
        } catch (error) {
            setError(error.message);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        id: "account",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                children: [
                    "User Account ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: "using firebase authentication"
                    }, void 0, false, {
                        fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                        lineNumber: 36,
                        columnNumber: 24
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "login",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        children: "Login Page"
                    }, void 0, false, {
                        fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                        lineNumber: 38,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                htmlFor: "email",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                                lineNumber: 40,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: input.email,
                                autoComplete: "off",
                                onChange: handleChange,
                                name: "email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                                lineNumber: 41,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                htmlFor: "password",
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                                lineNumber: 49,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "password",
                                value: input.password,
                                autoComplete: "off",
                                onChange: handleChange,
                                name: "password"
                            }, void 0, false, {
                                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                                lineNumber: 50,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                type: "submit",
                                children: "Submit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                                lineNumber: 58,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "form__error",
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                                lineNumber: 59,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                        lineNumber: 39,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        children: [
                            "Not a user? ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router__$5b$external$5d$__$28$react$2d$router$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$react$2d$router$29$__["Link"], {
                                to: "/signup",
                                children: "Sign Up"
                            }, void 0, false, {
                                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                                lineNumber: 62,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                        lineNumber: 61,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/2_React_Firebase/components/Auth/Login.js",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Login;
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
const fetchComponents = async (projectName, componentFile, arrayModify, indexModify, propertyModify)=>{
    const url = `https://raw.githubusercontent.com/AhmedZkaria25/AZ-React-Components-Center/refs/heads/main/src/components/${projectName}/components/${componentFile}`;
    await fetch(url).then((res)=>res.text()).then((content)=>{
        arrayModify[indexModify][`${propertyModify}`] = content;
        return content;
    });
};
const fetchStyles = async (projectName, styleFile, arrayModify, indexModify, propertyModify)=>{
    const url = `https://raw.githubusercontent.com/AhmedZkaria25/AZ-React-Components-Center/refs/heads/main/src/components/${projectName}/styles/${styleFile}`;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoHeader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/1_Todo_List_2/components/TodoHeader.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/1_Todo_List_2/components/TodoItem.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$2_React_Firebase$2f$components$2f$Auth$2f$Login$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/2_React_Firebase/components/Auth/Login.js [ssr] (ecmascript)");
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
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoHeader$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            items: [],
            addItem: ()=>{}
        }, void 0, false, {
            fileName: "[project]/src/components/TemplatesCards.tsx",
            lineNumber: 29,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$1_Todo_List_2$2f$components$2f$TodoItem$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
            items: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$dummyData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TodoItems_1"]
        }, void 0, false, {
            fileName: "[project]/src/components/TemplatesCards.tsx",
            lineNumber: 30,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$2_React_Firebase$2f$components$2f$Auth$2f$Login$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/components/TemplatesCards.tsx",
            lineNumber: 31,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponents"])('1_Todo_List_2', 'TodoHeader.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 0, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchStyles"])('1_Todo_List_2', 'Todo.module.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 0, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponents"])('1_Todo_List_2', 'TodoItem.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 1, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchStyles"])('1_Todo_List_2', 'Todo.module.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 1, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Auth', 'Login.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 2, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Auth', 'SignUp.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 3, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Auth', 'UserAuth.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 4, 'code');
    [
        2,
        3,
        4
    ].map((fileObjectIndex)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Auth', 'account.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], fileObjectIndex, 'style');
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Header', 'Header.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 5, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Header', 'header.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 5, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Input', 'Input.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 6, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Input', 'input.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 6, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Item', 'Item.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 7, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Item', 'item.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 7, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Item%20List', 'ItemList.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 8, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Item%20List', 'itemList.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 8, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Navbar', 'Navbar.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 9, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Navbar', 'navbar.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 9, 'style');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Photo%20Grid', 'PhotoGrid.js', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 10, 'code');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helpers$2f$helpers$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["fetchComponentsStyles"])('2_React_Firebase', 'Photo%20Grid', 'photoGrid.css', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$TemplatesCardsData$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["TemplatesCardsData"], 10, 'style');
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
                                lineNumber: 73,
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
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h6", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TemplatesCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].titleSmall,
                                        children: "#1 Todo List 2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TemplatesCards.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TemplatesCards.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/TemplatesCards.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/TemplatesCards.tsx",
                lineNumber: 70,
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
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TemplatesCards.tsx",
        lineNumber: 69,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__f8d66810._.js.map