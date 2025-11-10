(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/components/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Button = ({ variant = 'primary', size = 'md', children, className = '', ...props })=>{
    const baseStyles = 'appearance-none border-0 rounded-xl font-bold cursor-pointer inline-flex items-center justify-center transition-all';
    const variantStyles = {
        primary: 'bg-gradient-to-b from-[#34d887] to-[#2bd07b] text-white shadow-[0_6px_0_rgba(0,0,0,0.18)] hover:shadow-[0_4px_0_rgba(0,0,0,0.18)] hover:translate-y-[2px]',
        ghost: 'bg-transparent text-white border-2 border-white/12 hover:border-white/20'
    };
    const sizeStyles = {
        md: 'px-7 py-3.5',
        lg: 'px-8 py-4 text-lg'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/Button.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Input = ({ error, label, className = '', ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-2 text-sm font-medium text-white/70",
                children: label
            }, void 0, false, {
                fileName: "[project]/frontend/components/Input.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: `w-full max-w-[320px] px-[18px] py-3.5 rounded-[10px] bg-[rgba(255,255,255,0.03)] border-none text-white outline-none font-medium shadow-[inset_0_2px_rgba(255,255,255,0.02)] placeholder:text-white/35 placeholder:font-medium focus:bg-[rgba(255,255,255,0.05)] transition-colors ${className} ${error ? 'border-2 border-red-500' : ''}`,
                ...props
            }, void 0, false, {
                fileName: "[project]/frontend/components/Input.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-400",
                children: error
            }, void 0, false, {
                fileName: "[project]/frontend/components/Input.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/Input.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/MultipleImageUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultipleImageUpload",
    ()=>MultipleImageUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MultipleImageUpload = ({ value = [], onChange, error, maxImages = 10 })=>{
    _s();
    const [previews, setPreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MultipleImageUpload.useEffect": ()=>{
            setPreviews(value);
        }
    }["MultipleImageUpload.useEffect"], [
        value
    ]);
    const handleFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MultipleImageUpload.useCallback[handleFiles]": (files)=>{
            if (!files) return;
            const fileArray = Array.from(files).filter({
                "MultipleImageUpload.useCallback[handleFiles].fileArray": (file)=>file.type.startsWith('image/')
            }["MultipleImageUpload.useCallback[handleFiles].fileArray"]);
            const currentFiles = previews.filter({
                "MultipleImageUpload.useCallback[handleFiles].currentFiles": (p)=>p instanceof File
            }["MultipleImageUpload.useCallback[handleFiles].currentFiles"]);
            const totalFiles = currentFiles.length + fileArray.length;
            if (totalFiles > maxImages) {
                alert(`You can only upload up to ${maxImages} images. You already have ${currentFiles.length} images.`);
                return;
            }
            const newFiles = [
                ...currentFiles,
                ...fileArray
            ];
            const newPreviews = [
                ...previews
            ];
            fileArray.forEach({
                "MultipleImageUpload.useCallback[handleFiles]": (file)=>{
                    newPreviews.push(file);
                    const reader = new FileReader();
                    reader.onloadend = ({
                        "MultipleImageUpload.useCallback[handleFiles]": ()=>{
                            setPreviews({
                                "MultipleImageUpload.useCallback[handleFiles]": (prev)=>{
                                    const updated = [
                                        ...prev
                                    ];
                                    const index = updated.findIndex({
                                        "MultipleImageUpload.useCallback[handleFiles].index": (p)=>p === file
                                    }["MultipleImageUpload.useCallback[handleFiles].index"]);
                                    if (index !== -1) {
                                        updated[index] = reader.result;
                                    }
                                    return updated;
                                }
                            }["MultipleImageUpload.useCallback[handleFiles]"]);
                        }
                    })["MultipleImageUpload.useCallback[handleFiles]"];
                    reader.readAsDataURL(file);
                }
            }["MultipleImageUpload.useCallback[handleFiles]"]);
            setPreviews(newPreviews);
            onChange(newFiles);
        }
    }["MultipleImageUpload.useCallback[handleFiles]"], [
        previews,
        onChange,
        maxImages
    ]);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MultipleImageUpload.useCallback[handleDrop]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
            handleFiles(e.dataTransfer.files);
        }
    }["MultipleImageUpload.useCallback[handleDrop]"], [
        handleFiles
    ]);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MultipleImageUpload.useCallback[handleDragOver]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
        }
    }["MultipleImageUpload.useCallback[handleDragOver]"], []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MultipleImageUpload.useCallback[handleDragLeave]": (e)=>{
            e.preventDefault();
            setIsDragging(false);
        }
    }["MultipleImageUpload.useCallback[handleDragLeave]"], []);
    const handleFileInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MultipleImageUpload.useCallback[handleFileInput]": (e)=>{
            handleFiles(e.target.files);
        }
    }["MultipleImageUpload.useCallback[handleFileInput]"], [
        handleFiles
    ]);
    const removeImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MultipleImageUpload.useCallback[removeImage]": (index)=>{
            const updated = previews.filter({
                "MultipleImageUpload.useCallback[removeImage].updated": (_, i)=>i !== index
            }["MultipleImageUpload.useCallback[removeImage].updated"]);
            setPreviews(updated);
            const files = updated.filter({
                "MultipleImageUpload.useCallback[removeImage].files": (p)=>p instanceof File
            }["MultipleImageUpload.useCallback[removeImage].files"]);
            onChange(files);
        }
    }["MultipleImageUpload.useCallback[removeImage]"], [
        previews,
        onChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `min-h-[300px] sm:min-h-[400px] md:min-h-[520px] rounded-xl border-4 border-dashed ${isDragging ? 'border-white/30 bg-black/12' : 'border-white/12'} flex flex-col items-center justify-center text-white/45 bg-black/6 text-center cursor-pointer transition-colors relative overflow-hidden p-4 ${error ? 'border-red-500' : ''}`,
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onClick: ()=>fileInputRef.current?.click(),
                children: [
                    previews.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 overflow-y-auto",
                        children: [
                            previews.map((preview, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-square rounded-lg overflow-hidden group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: typeof preview === 'string' ? preview : URL.createObjectURL(preview),
                                            alt: `Preview ${index + 1}`,
                                            fill: true,
                                            className: "object-cover",
                                            unoptimized: true
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: (e)=>{
                                                e.stopPropagation();
                                                removeImage(index);
                                            },
                                            className: "absolute top-2 right-2 w-8 h-8 bg-red-500/80 hover:bg-red-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity",
                                            children: "×"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))),
                            previews.length < maxImages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-square rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center hover:border-white/40 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl mb-2",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                            lineNumber: 127,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs",
                                            children: "Add Image"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                    lineNumber: 126,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xl mb-2",
                                children: "↓"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm",
                                children: "Drop images here or click to upload"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs mt-2 text-white/30",
                                children: [
                                    "Up to ",
                                    maxImages,
                                    " images"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: fileInputRef,
                        type: "file",
                        accept: "image/*",
                        multiple: true,
                        className: "hidden",
                        onChange: handleFileInput
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-red-400",
                children: error
            }, void 0, false, {
                fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            previews.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-xs text-white/50",
                children: [
                    previews.length,
                    " / ",
                    maxImages,
                    " images"
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/MultipleImageUpload.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MultipleImageUpload, "M+/d9EBtiP4EN/Q5gM9aW52mEgA=");
_c = MultipleImageUpload;
var _c;
__turbopack_context__.k.register(_c, "MultipleImageUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/FooterWave.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FooterWave",
    ()=>FooterWave
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const FooterWave = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "footer-wave",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "footer-wave__svg",
            viewBox: "0 0 1440 160",
            preserveAspectRatio: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0,64L48,69.3C96,75,192,85,288,90.7C384,96,480,96,576,90.7C672,85,768,75,864,69.3C960,64,1056,64,1152,69.3C1248,75,1344,85,1392,90.7L1440,96L1440,160L1392,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z",
                fill: "#06343a"
            }, void 0, false, {
                fileName: "[project]/frontend/components/FooterWave.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/frontend/components/FooterWave.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/components/FooterWave.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FooterWave;
var _c;
__turbopack_context__.k.register(_c, "FooterWave");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i18n",
    ()=>i18n,
    "translations",
    ()=>translations,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const translations = {
    en: {
        // Auth
        'auth.signIn': 'Sign in',
        'auth.email': 'Email',
        'auth.password': 'Password',
        'auth.rememberMe': 'Remember me',
        'auth.login': 'Login',
        'auth.loggingIn': 'Logging in...',
        'auth.invalidEmail': 'Please enter a valid email address (e.g., user@example.com)',
        'auth.passwordRequired': 'Password is required',
        'auth.passwordTooShort': 'Password must be at least 6 characters long',
        // Movies
        'movies.myMovies': 'My movies',
        'movies.addNew': 'Add a new movie',
        'movies.empty': 'Your movie list is empty',
        'movies.create': 'Create a new movie',
        'movies.edit': 'Edit movie',
        'movies.title': 'Title',
        'movies.publishingYear': 'Publishing year',
        'movies.poster': 'Poster',
        'movies.search': 'Search by title...',
        'movies.filterYear': 'Filter by year',
        'movies.clearFilters': 'Clear Filters',
        'movies.found': 'Found',
        'movies.movie': 'movie',
        'movies.movies': 'movies',
        'movies.noResults': 'No movies found matching your criteria',
        'movies.delete': 'Delete',
        'movies.deleteConfirm': 'Are you sure you want to delete this movie?',
        'movies.published': 'Published',
        'movies.added': 'Added',
        'movies.noImage': 'No Image',
        // Actions
        'actions.submit': 'Submit',
        'actions.cancel': 'Cancel',
        'actions.update': 'Update',
        'actions.delete': 'Delete',
        'actions.edit': 'Edit',
        'actions.logout': 'Logout',
        'actions.prev': 'Prev',
        'actions.next': 'Next',
        'actions.loading': 'Loading...',
        'actions.view': 'View',
        // Validation
        'validation.required': 'is required',
        'validation.invalidYear': 'Publishing year must be between 1000 and 2035',
        'validation.wholeNumber': 'Publishing year must be a whole number (e.g., 1999, 2000)',
        'validation.titleRequired': 'Title is required',
        // Errors
        'error.loadFailed': 'Failed to load movies',
        'error.createFailed': 'Failed to create movie. Please check your input.',
        'error.updateFailed': 'Failed to update movie. Please check your input.',
        'error.deleteFailed': 'Failed to delete movie',
        'error.loginFailed': 'Login failed. Please try again.'
    },
    es: {
        'auth.signIn': 'Iniciar sesión',
        'auth.email': 'Correo electrónico',
        'auth.password': 'Contraseña',
        'auth.rememberMe': 'Recordarme',
        'auth.login': 'Iniciar sesión',
        'auth.loggingIn': 'Iniciando sesión...',
        'auth.invalidEmail': 'Por favor, introduce una dirección de correo electrónico válida (ej. usuario@ejemplo.com)',
        'auth.passwordRequired': 'La contraseña es obligatoria',
        'auth.passwordTooShort': 'La contraseña debe tener al menos 6 caracteres',
        'movies.myMovies': 'Mis películas',
        'movies.addNew': 'Añadir nueva película',
        'movies.empty': 'Tu lista de películas está vacía',
        'movies.create': 'Crear nueva película',
        'movies.edit': 'Editar película',
        'movies.title': 'Título',
        'movies.publishingYear': 'Año de publicación',
        'movies.poster': 'Póster',
        'movies.search': 'Buscar por título...',
        'movies.filterYear': 'Filtrar por año',
        'movies.clearFilters': 'Limpiar filtros',
        'movies.found': 'Encontrado',
        'movies.movie': 'película',
        'movies.movies': 'películas',
        'movies.noResults': 'No se encontraron películas que coincidan con tus criterios',
        'movies.delete': 'Eliminar',
        'movies.deleteConfirm': '¿Estás seguro de que quieres eliminar esta película?',
        'movies.published': 'Publicado',
        'movies.added': 'Añadido',
        'movies.noImage': 'Sin imagen',
        'actions.submit': 'Enviar',
        'actions.cancel': 'Cancelar',
        'actions.update': 'Actualizar',
        'actions.delete': 'Eliminar',
        'actions.edit': 'Editar',
        'actions.logout': 'Cerrar sesión',
        'actions.prev': 'Anterior',
        'actions.next': 'Siguiente',
        'actions.loading': 'Cargando...',
        'actions.view': 'Ver',
        'validation.required': 'es obligatorio',
        'validation.invalidYear': 'El año de publicación debe estar entre 1000 y 2035',
        'validation.wholeNumber': 'El año de publicación debe ser un número entero (ej. 1999, 2000)',
        'validation.titleRequired': 'El título es obligatorio',
        'error.loadFailed': 'Error al cargar películas',
        'error.createFailed': 'Error al crear película. Por favor, verifica tu entrada.',
        'error.updateFailed': 'Error al actualizar película. Por favor, verifica tu entrada.',
        'error.deleteFailed': 'Error al eliminar película',
        'error.loginFailed': 'Error al iniciar sesión. Por favor, inténtalo de nuevo.'
    },
    fr: {
        'auth.signIn': 'Se connecter',
        'auth.email': 'E-mail',
        'auth.password': 'Mot de passe',
        'auth.rememberMe': 'Se souvenir de moi',
        'auth.login': 'Connexion',
        'auth.loggingIn': 'Connexion...',
        'auth.invalidEmail': 'Veuillez entrer une adresse e-mail valide (ex. utilisateur@exemple.com)',
        'auth.passwordRequired': 'Le mot de passe est requis',
        'auth.passwordTooShort': 'Le mot de passe doit contenir au moins 6 caractères',
        'movies.myMovies': 'Mes films',
        'movies.addNew': 'Ajouter un nouveau film',
        'movies.empty': 'Votre liste de films est vide',
        'movies.create': 'Créer un nouveau film',
        'movies.edit': 'Modifier le film',
        'movies.title': 'Titre',
        'movies.publishingYear': 'Année de publication',
        'movies.poster': 'Affiche',
        'movies.search': 'Rechercher par titre...',
        'movies.filterYear': 'Filtrer par année',
        'movies.clearFilters': 'Effacer les filtres',
        'movies.found': 'Trouvé',
        'movies.movie': 'film',
        'movies.movies': 'films',
        'movies.noResults': 'Aucun film trouvé correspondant à vos critères',
        'movies.delete': 'Supprimer',
        'movies.deleteConfirm': 'Êtes-vous sûr de vouloir supprimer ce film ?',
        'movies.published': 'Publié',
        'movies.added': 'Ajouté',
        'movies.noImage': 'Pas d\'image',
        'actions.submit': 'Soumettre',
        'actions.cancel': 'Annuler',
        'actions.update': 'Mettre à jour',
        'actions.delete': 'Supprimer',
        'actions.edit': 'Modifier',
        'actions.logout': 'Déconnexion',
        'actions.prev': 'Précédent',
        'actions.next': 'Suivant',
        'actions.loading': 'Chargement...',
        'actions.view': 'Voir',
        'validation.required': 'est requis',
        'validation.invalidYear': 'L\'année de publication doit être entre 1000 et 2035',
        'validation.wholeNumber': 'L\'année de publication doit être un nombre entier (ex. 1999, 2000)',
        'validation.titleRequired': 'Le titre est requis',
        'error.loadFailed': 'Échec du chargement des films',
        'error.createFailed': 'Échec de la création du film. Veuillez vérifier votre saisie.',
        'error.updateFailed': 'Échec de la mise à jour du film. Veuillez vérifier votre saisie.',
        'error.deleteFailed': 'Échec de la suppression du film',
        'error.loginFailed': 'Échec de la connexion. Veuillez réessayer.'
    }
};
// Create a custom event for locale changes
const LOCALE_CHANGE_EVENT = 'localeChange';
let currentLocale = 'en';
// Initialize locale from localStorage
if ("TURBOPACK compile-time truthy", 1) {
    const saved = localStorage.getItem('locale');
    if (saved && [
        'en',
        'es',
        'fr'
    ].includes(saved)) {
        currentLocale = saved;
    }
}
const i18n = {
    setLocale: (locale)=>{
        currentLocale = locale;
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('locale', locale);
            // Dispatch custom event to notify components
            window.dispatchEvent(new CustomEvent(LOCALE_CHANGE_EVENT, {
                detail: locale
            }));
        }
    },
    getLocale: ()=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const saved = localStorage.getItem('locale');
            if (saved && [
                'en',
                'es',
                'fr'
            ].includes(saved)) {
                return saved;
            }
        }
        return currentLocale;
    },
    t: (key, params)=>{
        const locale = i18n.getLocale();
        const translation = translations[locale][key] || translations.en[key] || key;
        if (params) {
            return Object.entries(params).reduce((str, [paramKey, paramValue])=>str.replace(`{${paramKey}}`, String(paramValue)), translation);
        }
        return translation;
    }
};
function useI18n() {
    _s();
    const [locale, setLocaleState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(i18n.getLocale());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useI18n.useEffect": ()=>{
            const handleLocaleChange = {
                "useI18n.useEffect.handleLocaleChange": (event)=>{
                    setLocaleState(event.detail);
                }
            }["useI18n.useEffect.handleLocaleChange"];
            window.addEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange);
            return ({
                "useI18n.useEffect": ()=>{
                    window.removeEventListener(LOCALE_CHANGE_EVENT, handleLocaleChange);
                }
            })["useI18n.useEffect"];
        }
    }["useI18n.useEffect"], []);
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useI18n.useCallback[t]": (key, params)=>{
            return i18n.t(key, params);
        }
    }["useI18n.useCallback[t]"], [
        locale
    ]);
    return {
        t,
        locale
    };
}
_s(useI18n, "4AkFjG3cFwH3CWkRkBX8Fr78vTc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageSwitcher",
    ()=>LanguageSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const FLAGS = {
    en: '🇺🇸',
    es: '🇪🇸',
    fr: '🇫🇷'
};
const LANGUAGE_NAMES = {
    en: 'English',
    es: 'Español',
    fr: 'Français'
};
const LanguageSwitcher = ()=>{
    _s();
    const { locale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const changeLanguage = (newLocale)=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i18n"].setLocale(newLocale);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            'en',
            'es',
            'fr'
        ].map((loc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>changeLanguage(loc),
                className: `px-2.5 py-1.5 rounded-md text-sm font-medium transition-all flex items-center gap-1.5 ${locale === loc ? 'bg-[#33d583] text-[#06343a] shadow-md' : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'}`,
                title: LANGUAGE_NAMES[loc],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base leading-none",
                        children: FLAGS[loc]
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/LanguageSwitcher.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "hidden sm:inline",
                        children: loc.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/LanguageSwitcher.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, loc, true, {
                fileName: "[project]/frontend/components/LanguageSwitcher.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/frontend/components/LanguageSwitcher.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageSwitcher, "Q3DiGAK/uyrnMqFoR5UpUumBmSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = LanguageSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "default",
    ()=>__TURBOPACK__default__export__,
    "uploadBaseUrl",
    ()=>uploadBaseUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const UPLOAD_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_UPLOAD_URL || 'http://localhost:3001';
const uploadBaseUrl = UPLOAD_BASE_URL;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
// Add token to requests
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
});
// Handle 401 errors
api.interceptors.response.use((response)=>response, (error)=>{
    if (error.response?.status === 401) {
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
    }
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/api/movies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moviesApi",
    ()=>moviesApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api.ts [app-client] (ecmascript)");
;
const moviesApi = {
    getAll: async (page = 1, limit = 8)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/movies?page=${page}&limit=${limit}`);
        return response.data;
    },
    getById: async (id)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/movies/${id}`);
        return response.data;
    },
    create: async (data)=>{
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('publishingYear', data.publishingYear.toString());
        if (data.images && data.images.length > 0) {
            data.images.forEach((image)=>{
                formData.append('images', image);
            });
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/movies', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    update: async (id, data)=>{
        const formData = new FormData();
        if (data.title) formData.append('title', data.title);
        if (data.publishingYear) formData.append('publishingYear', data.publishingYear.toString());
        if (data.images && data.images.length > 0) {
            data.images.forEach((image)=>{
                formData.append('images', image);
            });
        }
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/movies/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    },
    delete: async (id)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/movies/${id}`);
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        user: null,
        token: null,
        isAuthenticated: false,
        login: (email, token)=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify({
                    email
                }));
            }
            set({
                user: {
                    email
                },
                token,
                isAuthenticated: true
            });
        },
        logout: ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            }
            set({
                user: null,
                token: null,
                isAuthenticated: false
            });
        },
        initialize: ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const token = localStorage.getItem('token');
                const userStr = localStorage.getItem('user');
                if (token && userStr) {
                    try {
                        const user = JSON.parse(userStr);
                        set({
                            user,
                            token,
                            isAuthenticated: true
                        });
                    } catch (e) {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                    }
                }
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/app/movies/[id]/edit/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditMoviePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MultipleImageUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/MultipleImageUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$FooterWave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/FooterWave.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/LanguageSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api/movies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
;
;
const updateMovieSchema = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    title: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, 'Title is required'),
    publishingYear: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        required_error: 'Publishing year is required',
        invalid_type_error: 'Publishing year must be a number'
    }).int('Publishing year must be a whole number (e.g., 1999, 2000)').min(1000, 'Publishing year must be between 1000 and 2035').max(2035, 'Publishing year must be between 1000 and 2035')
});
function EditMoviePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const movieId = params.id;
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoadingMovie, setIsLoadingMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [imageFiles, setImageFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [existingImages, setExistingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { register, handleSubmit, formState: { errors }, setValue, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(updateMovieSchema)
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditMoviePage.useEffect": ()=>{
            const { initialize, isAuthenticated: auth } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
            initialize();
            if (!auth) {
                router.push('/login');
                return;
            }
            loadMovie();
        }
    }["EditMoviePage.useEffect"], [
        movieId,
        router
    ]);
    const loadMovie = async ()=>{
        try {
            setIsLoadingMovie(true);
            const movie = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesApi"].getById(movieId);
            reset({
                title: movie.title,
                publishingYear: movie.publishingYear
            });
            setExistingImages(movie.images || [
                movie.poster
            ].filter(Boolean));
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load movie');
        } finally{
            setIsLoadingMovie(false);
        }
    };
    const onSubmit = async (data)=>{
        try {
            setIsLoading(true);
            setError('');
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesApi"].update(movieId, {
                title: data.title,
                publishingYear: data.publishingYear,
                images: imageFiles.length > 0 ? imageFiles : undefined
            });
            router.push('/movies');
        } catch (err) {
            // Format backend validation errors with proper spacing
            if (err.response?.data?.errors && Array.isArray(err.response.data.errors)) {
                const errorMessages = err.response.data.errors.map((e)=>e.message).filter((msg)=>msg) // Remove empty messages
                .join('\n'); // Use newline for better spacing
                setError(errorMessages);
            } else {
                setError(err.response?.data?.message || 'Failed to update movie. Please check your input.');
            }
        } finally{
            setIsLoading(false);
        }
    };
    const handleCancel = ()=>{
        router.push('/movies');
    };
    if (isLoadingMovie) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "form-page px-7 py-12 pb-[160px] relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/70",
                    children: t('actions.loading')
                }, void 0, false, {
                    fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "form-page px-4 sm:px-7 py-8 sm:py-12 pb-[120px] sm:pb-[160px] relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                    fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "form-page__title text-[32px] sm:text-[40px] md:text-[48px] mb-6 sm:mb-8 m-0 font-bold",
                children: t('movies.edit')
            }, void 0, false, {
                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "form-grid grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8 sm:gap-12 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MultipleImageUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MultipleImageUpload"], {
                        value: [
                            ...existingImages,
                            ...imageFiles
                        ],
                        onChange: setImageFiles,
                        maxImages: 10
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "form flex flex-col gap-[18px] items-start w-full max-w-[560px]",
                        onSubmit: handleSubmit(onSubmit),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                placeholder: t('movies.title'),
                                ...register('title'),
                                error: errors.title?.message
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                type: "number",
                                placeholder: t('movies.publishingYear'),
                                ...register('publishingYear', {
                                    valueAsNumber: true
                                }),
                                error: errors.publishingYear?.message
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full max-w-[320px] p-4 bg-red-500/10 border border-red-500/30 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: (typeof error === 'string' ? error : String(error)).split('\n').filter((msg)=>msg.trim()).map((msg, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-400 text-sm font-medium",
                                            children: [
                                                "• ",
                                                msg.trim()
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                            lineNumber: 154,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-actions flex gap-[18px] mt-[22px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "ghost",
                                        type: "button",
                                        onClick: handleCancel,
                                        children: t('actions.cancel')
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        disabled: isLoading,
                                        children: isLoading ? t('actions.loading') : t('actions.update')
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$FooterWave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterWave"], {}, void 0, false, {
                fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/movies/[id]/edit/page.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(EditMoviePage, "MHwgHJdmCDfma6ftZgG0quhvYA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = EditMoviePage;
var _c;
__turbopack_context__.k.register(_c, "EditMoviePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_b55fcda8._.js.map