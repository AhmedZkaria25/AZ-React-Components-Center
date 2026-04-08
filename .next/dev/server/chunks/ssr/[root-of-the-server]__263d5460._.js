module.exports = [
"[project]/src/data/cards.ts [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cards",
    ()=>cards
]);
const cards = [
    {
        id: 1,
        title: 'Simple Button',
        // component: (
        //   <button
        //     style={{
        //       padding: '10px 20px',
        //       backgroundColor: '#61dafb',
        //       color: '#282c34',
        //       border: 'none',
        //       borderRadius: '4px',
        //       cursor: 'pointer',
        //       fontSize: '16px',
        //       fontWeight: 500,
        //     }}
        //   >
        //     Click Me
        //   </button>
        // ),
        code: `const Button = () => {\n  return (\n    <button style={{\n      padding: '10px 20px',\n      backgroundColor: '#61dafb',\n      color: '#282c34',\n      border: 'none',\n      borderRadius: '4px',\n      cursor: 'pointer',\n      fontSize: '16px',\n      fontWeight: 500,\n    }}>\n      Click Me\n    </button>\n  );\n};`,
        style: `.button {\n  padding: 10px 20px;\n  background-color: #61dafb;\n  color: #282c34;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 500;\n}`
    },
    {
        id: 2,
        title: 'Input Field',
        // component: (
        //   <input
        //     type="text"
        //     placeholder="Enter text..."
        //     style={{
        //       padding: '10px',
        //       border: '2px solid #61dafb',
        //       borderRadius: '4px',
        //       fontSize: '16px',
        //       width: '100%',
        //       boxSizing: 'border-box',
        //       backgroundColor: '#f7f7f7',
        //       color: '#282c34',
        //     }}
        //   />
        // ),
        code: `const Input = () => {\n  return (\n    <input\n      type="text"\n      placeholder="Enter text..."\n      style={{\n        padding: '10px',\n        border: '2px solid #61dafb',\n        borderRadius: '4px',\n        fontSize: '16px',\n        width: '100%',\n        boxSizing: 'border-box',\n        backgroundColor: '#f7f7f7',\n        color: '#282c34',\n      }}\n    />\n  );\n};`,
        style: `.input {\n  padding: 10px;\n  border: 2px solid #61dafb;\n  border-radius: 4px;\n  font-size: 16px;\n  width: 100%;\n  box-sizing: border-box;\n  background-color: #f7f7f7;\n  color: #282c34;\n}`
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
                            children: "JavaScript"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PopupModal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: activeTab === 'style' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeTab : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PopupModal$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].tab,
                            onClick: ()=>onTabChange('style'),
                            children: "CSS"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PopupModal.tsx",
                            lineNumber: 33,
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
                            lineNumber: 43,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PopupModal.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/PopupModal.tsx",
                    lineNumber: 41,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/cards.ts [ssr] (ecmascript)");
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
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].grid,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$cards$2e$ts__$5b$ssr$5d$__$28$ecmascript$29$__["cards"].map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].card,
                        onClick: ()=>openModal(card),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].body,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].title,
                                children: card.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/GridCards.tsx",
                                lineNumber: 27,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/GridCards.tsx",
                            lineNumber: 26,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, card.id, false, {
                        fileName: "[project]/src/components/GridCards.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/GridCards.tsx",
                lineNumber: 21,
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
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/GridCards.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = GridCards;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/TabsPage.module.css [ssr] (css module)");
;
;
;
;
const TabsPage = ()=>{
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('form');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].nav,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'form' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('form'),
                        children: "Form"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'list' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('list'),
                        children: "List"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                        className: activeTab === 'cards' ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].activeNavButton : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].navButton,
                        onClick: ()=>setActiveTab('cards'),
                        children: "Cards"
                    }, void 0, false, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabsPage.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    activeTab === 'form' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].section,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].sectionTitle,
                                children: "Form"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].form,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fieldGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].label,
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].input,
                                                placeholder: "Your name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fieldGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].label,
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 41,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].input,
                                                type: "email",
                                                placeholder: "you@example.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 42,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].fieldGroup,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].label,
                                                children: "Comments"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("textarea", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].textarea,
                                                placeholder: "Write something..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 46,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].actions,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].primaryButton,
                                                children: "Submit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].secondaryButton,
                                                children: "Reset"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 52,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].subSection,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].subTitle,
                                                children: "Component Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridCards$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 33,
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
                                lineNumber: 67,
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
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: "Components"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: "Documentation"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].listItem,
                                        children: "Settings"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 66,
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
                                lineNumber: 79,
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
                                                lineNumber: 82,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardText,
                                                children: "A simple box card with space for a short description."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 81,
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
                                                lineNumber: 86,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardText,
                                                children: "Use this area to show status, stats, or quick actions."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 87,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 85,
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
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].cardText,
                                                children: "Cards can contain any UI element or layout."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/TabsPage.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/TabsPage.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/TabsPage.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TabsPage.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TabsPage.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/TabsPage.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TabsPage;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[project]/src/pages/index.tsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TabsPage.tsx [ssr] (ecmascript)");
;
;
;
const Page = (props)=>{
    const fs = __turbopack_context__.r("[externals]/node:fs/promises [external] (node:fs/promises, cjs)"); // Use the promises API
    const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
    async function readExternalFile() {
        try {
            // Construct an absolute path to the file outside the project, 
            // e.g., in a 'common' directory adjacent to the project root
            // const externalPath = path.resolve(__dirname, '../../common/externalFile.js'); 
            // const externalPath = path.resolve(__dirname, 'https://github.dev/AhmedZkaria22/Vue.js-Todo-App/blob/main/src/components/TodosList.vue'); 
            // const data = await fs.readFile(externalPath, { encoding: 'utf8' });
            const response = await fetch('https://github.dev/AhmedZkaria22/Vue.js-Todo-App/blob/main/src/components/TodosList.vue');
            const data = await response.text();
            console.log('ddd', data);
        } catch (error) {
            console.error('Error reading file:', error);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        readExternalFile();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TabsPage$2e$tsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/pages/index.tsx",
        lineNumber: 34,
        columnNumber: 12
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Page;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__263d5460._.js.map