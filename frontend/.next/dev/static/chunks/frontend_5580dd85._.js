(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/frontend/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
const UPLOAD_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_UPLOAD_URL || 'http://localhost:3001';
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
"[project]/frontend/components/MovieCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MovieCard",
    ()=>MovieCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const MovieCard = ({ movie, onEdit })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "bg-black/12 rounded-[14px] overflow-visible shadow-[0_16px_0_rgba(0,0,0,0.22)] flex flex-col min-h-[350px] transition-transform hover:translate-y-[-6px] cursor-pointer",
        onClick: ()=>onEdit?.(movie),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[350px] m-3 rounded-xl bg-cover bg-center shadow-[0_10px_0_rgba(0,0,0,0.35)] relative overflow-hidden",
                children: movie.poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: movie.poster.startsWith('http') ? movie.poster : `http://localhost:3001${movie.poster}`,
                    alt: movie.title,
                    fill: true,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
                    unoptimized: true
                }, void 0, false, {
                    fileName: "[project]/frontend/components/MovieCard.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full h-full bg-gray-800 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-white/50",
                        children: "No Image"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/MovieCard.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/frontend/components/MovieCard.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/MovieCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-[18px] pb-[18px] flex flex-col justify-end bg-gradient-to-b from-black/4 to-transparent rounded-b-[14px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-base mb-2 font-semibold text-white opacity-95 m-0",
                        children: movie.title
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/MovieCard.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                        className: "text-white/50 text-[13px]",
                        children: movie.publishingYear
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/MovieCard.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/MovieCard.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/MovieCard.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MovieCard;
var _c;
__turbopack_context__.k.register(_c, "MovieCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/frontend/components/SearchBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchBar",
    ()=>SearchBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SearchBar = ({ value, onChange, placeholder = 'Search movies...' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-md relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                placeholder: placeholder,
                className: "w-full px-4 py-3 pl-10 rounded-lg bg-[rgba(255,255,255,0.03)] border border-white/10 text-white placeholder:text-white/35 focus:outline-none focus:border-[#33d583] focus:bg-[rgba(255,255,255,0.05)] transition-colors"
            }, void 0, false, {
                fileName: "[project]/frontend/components/SearchBar.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/35",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/SearchBar.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/SearchBar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>onChange(''),
                className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-white/35 hover:text-white transition-colors",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-5 h-5",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/SearchBar.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/frontend/components/SearchBar.tsx",
                    lineNumber: 41,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/frontend/components/SearchBar.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/SearchBar.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SearchBar;
var _c;
__turbopack_context__.k.register(_c, "SearchBar");
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
"[project]/frontend/components/YearFilter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YearFilter",
    ()=>YearFilter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const YearFilter = ({ value, onChange })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const currentYear = new Date().getFullYear();
    const years = Array.from({
        length: currentYear - 1000 + 1
    }, (_, i)=>currentYear - i);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-xs",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: value || '',
            onChange: (e)=>onChange(e.target.value ? parseInt(e.target.value) : null),
            className: "w-full px-4 py-3 rounded-lg bg-[rgba(255,255,255,0.03)] border border-white/10 text-white focus:outline-none focus:border-[#33d583] focus:bg-[rgba(255,255,255,0.05)] transition-colors cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: t('movies.filterYear')
                }, void 0, false, {
                    fileName: "[project]/frontend/components/YearFilter.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                years.map((year)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: year,
                        className: "bg-[#06343a]",
                        children: year
                    }, year, false, {
                        fileName: "[project]/frontend/components/YearFilter.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/YearFilter.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/components/YearFilter.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(YearFilter, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = YearFilter;
var _c;
__turbopack_context__.k.register(_c, "YearFilter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/MovieModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MovieModal",
    ()=>MovieModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const MovieModal = ({ movie, isOpen, onClose, onEdit, onDelete })=>{
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    if (!isOpen || !movie) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#0f4b51] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-[400px] sm:h-[500px] w-full",
                    children: [
                        movie.poster ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Image, {
                            src: movie.poster.startsWith('http') ? movie.poster : `http://localhost:3001${movie.poster}`,
                            alt: movie.title,
                            fill: true,
                            className: "object-cover rounded-t-xl",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MovieModal.tsx",
                            lineNumber: 38,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full h-full bg-gray-800 flex items-center justify-center rounded-t-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white/50",
                                children: t('movies.noImage')
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MovieModal.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MovieModal.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/MovieModal.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/MovieModal.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MovieModal.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/MovieModal.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-4xl font-bold text-white mb-2",
                            children: movie.title
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/MovieModal.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/70 text-lg mb-6",
                            children: [
                                t('movies.published'),
                                ": ",
                                movie.publishingYear
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/MovieModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        movie.createdAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/50 text-sm mb-6",
                            children: [
                                t('movies.added'),
                                ": ",
                                new Date(movie.createdAt).toLocaleDateString()
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/MovieModal.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [
                                onEdit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    onClick: ()=>onEdit(movie),
                                    className: "flex-1",
                                    children: [
                                        t('actions.edit'),
                                        " ",
                                        t('movies.movie')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/components/MovieModal.tsx",
                                    lineNumber: 69,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                onDelete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    onClick: ()=>{
                                        if (confirm(t('movies.deleteConfirm'))) {
                                            onDelete(movie);
                                        }
                                    },
                                    className: "flex-1",
                                    children: t('movies.delete')
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/MovieModal.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/MovieModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/MovieModal.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/components/MovieModal.tsx",
            lineNumber: 32,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/frontend/components/MovieModal.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MovieModal, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"]
    ];
});
_c = MovieModal;
var _c;
__turbopack_context__.k.register(_c, "MovieModal");
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
"[project]/frontend/app/movies/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MoviesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/api/movies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MovieCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/MovieCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$FooterWave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/FooterWave.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$YearFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/YearFilter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MovieModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/MovieModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/LanguageSwitcher.tsx [app-client] (ecmascript)");
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
function MoviesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"])();
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "MoviesPage.useAuthStore[isAuthenticated]": (state)=>state.isAuthenticated
    }["MoviesPage.useAuthStore[isAuthenticated]"]);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "MoviesPage.useAuthStore[logout]": (state)=>state.logout
    }["MoviesPage.useAuthStore[logout]"]);
    const [allMovies, setAllMovies] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [totalPages, setTotalPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [filterYear, setFilterYear] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMovie, setSelectedMovie] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoviesPage.useEffect": ()=>{
            const { initialize } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
            initialize();
        }
    }["MoviesPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoviesPage.useEffect": ()=>{
            const { isAuthenticated: auth } = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState();
            if (!auth) {
                router.push('/login');
                return;
            }
            loadMovies();
        }
    }["MoviesPage.useEffect"], []);
    // Reset page when filters change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MoviesPage.useEffect": ()=>{
            setPage(1);
        }
    }["MoviesPage.useEffect"], [
        searchQuery,
        filterYear
    ]);
    const loadMovies = async ()=>{
        try {
            setLoading(true);
            setError('');
            // Load all movies for search/filter
            const allResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesApi"].getAll(1, 1000);
            setAllMovies(allResponse.data);
            // Load paginated movies
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesApi"].getAll(page, 8);
            setTotalPages(response.totalPages);
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to load movies');
        } finally{
            setLoading(false);
        }
    };
    // Filter and search movies
    const filteredMovies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoviesPage.useMemo[filteredMovies]": ()=>{
            let filtered = allMovies;
            if (searchQuery) {
                filtered = filtered.filter({
                    "MoviesPage.useMemo[filteredMovies]": (movie)=>movie.title.toLowerCase().includes(searchQuery.toLowerCase())
                }["MoviesPage.useMemo[filteredMovies]"]);
            }
            if (filterYear) {
                filtered = filtered.filter({
                    "MoviesPage.useMemo[filteredMovies]": (movie)=>movie.publishingYear === filterYear
                }["MoviesPage.useMemo[filteredMovies]"]);
            }
            return filtered;
        }
    }["MoviesPage.useMemo[filteredMovies]"], [
        allMovies,
        searchQuery,
        filterYear
    ]);
    // Paginate filtered results
    const paginatedMovies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MoviesPage.useMemo[paginatedMovies]": ()=>{
            const itemsPerPage = 8;
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            return filteredMovies.slice(startIndex, endIndex);
        }
    }["MoviesPage.useMemo[paginatedMovies]"], [
        filteredMovies,
        page
    ]);
    const filteredTotalPages = Math.ceil(filteredMovies.length / 8);
    const handleLogout = ()=>{
        logout();
        router.push('/login');
    };
    const handleCreate = ()=>{
        router.push('/movies/create');
    };
    const handleEdit = (movie)=>{
        router.push(`/movies/${movie.id}/edit`);
    };
    const handleView = (movie)=>{
        setSelectedMovie(movie);
        setIsModalOpen(true);
    };
    const handleDelete = async (movie)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$api$2f$movies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["moviesApi"].delete(movie.id);
            setIsModalOpen(false);
            setSelectedMovie(null);
            loadMovies();
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to delete movie');
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container max-w-[1200px] mx-auto mt-9 px-7",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-white/70",
                    children: t('actions.loading')
                }, void 0, false, {
                    fileName: "[project]/frontend/app/movies/page.tsx",
                    lineNumber: 130,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/movies/page.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    if (error && allMovies.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "container max-w-[1200px] mx-auto mt-9 px-7",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center min-h-[400px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/frontend/app/movies/page.tsx",
                    lineNumber: 140,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/movies/page.tsx",
            lineNumber: 138,
            columnNumber: 7
        }, this);
    }
    if (allMovies.length === 0 && !loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hero hero--empty flex flex-col items-center justify-center text-center px-4 py-[100px] sm:py-[160px] pb-[120px] sm:pb-[160px] relative min-h-[420px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "hero__title text-[32px] sm:text-[48px] md:text-[64px] font-bold mb-5 sm:mb-7 text-white leading-none tracking-[-0.02em] m-0",
                    children: t('movies.empty')
                }, void 0, false, {
                    fileName: "[project]/frontend/app/movies/page.tsx",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    onClick: handleCreate,
                    size: "md",
                    children: t('movies.addNew')
                }, void 0, false, {
                    fileName: "[project]/frontend/app/movies/page.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$FooterWave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterWave"], {}, void 0, false, {
                    fileName: "[project]/frontend/app/movies/page.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/app/movies/page.tsx",
            lineNumber: 148,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container max-w-[1200px] mx-auto mt-4 sm:mt-9 px-4 sm:px-7 relative pb-[120px] sm:pb-[160px]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "topbar flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6 sm:my-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "page-title text-[28px] sm:text-[36px] md:text-[40px] font-bold m-0 flex items-center",
                        children: [
                            t('movies.myMovies'),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "plus ml-2 font-bold opacity-90 cursor-pointer text-[28px] sm:text-[36px] md:text-[40px] hover:opacity-100 transition-opacity",
                                onClick: handleCreate,
                                title: t('movies.addNew'),
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/movies/page.tsx",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LanguageSwitcher"], {}, void 0, false, {
                                fileName: "[project]/frontend/app/movies/page.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "logout text-white/90 no-underline font-semibold cursor-pointer hover:text-white transition-colors text-sm sm:text-base",
                                onClick: handleLogout,
                                children: [
                                    t('actions.logout'),
                                    " ↗"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/app/movies/page.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                        value: searchQuery,
                        onChange: setSearchQuery,
                        placeholder: t('movies.search')
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$YearFilter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YearFilter"], {
                        value: filterYear,
                        onChange: setFilterYear
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    (searchQuery || filterYear) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: ()=>{
                            setSearchQuery('');
                            setFilterYear(null);
                            setPage(1);
                        },
                        className: "whitespace-nowrap",
                        children: t('movies.clearFilters')
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 189,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-4 bg-red-500/20 border border-red-500 rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-400 text-sm",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/frontend/app/movies/page.tsx",
                    lineNumber: 205,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this),
            (searchQuery || filterYear) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 text-white/70 text-sm",
                children: [
                    t('movies.found'),
                    " ",
                    filteredMovies.length,
                    " ",
                    filteredMovies.length !== 1 ? t('movies.movies') : t('movies.movie')
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 211,
                columnNumber: 9
            }, this),
            paginatedMovies.length === 0 && !loading && (searchQuery || filterYear) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/70 text-lg mb-4",
                        children: t('movies.noResults')
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        onClick: ()=>{
                            setSearchQuery('');
                            setFilterYear(null);
                            setPage(1);
                        },
                        children: t('movies.clearFilters')
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 217,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7 mb-8 sm:mb-12",
                        children: paginatedMovies.map((movie)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MovieCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieCard"], {
                                movie: movie,
                                onEdit: ()=>handleView(movie)
                            }, movie.id, false, {
                                fileName: "[project]/frontend/app/movies/page.tsx",
                                lineNumber: 231,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    filteredTotalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "pagination flex flex-wrap justify-center gap-2 mb-[80px] sm:mb-[120px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pager bg-transparent border-0 text-white/90 px-3 py-2 rounded-md font-semibold cursor-pointer hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base",
                                onClick: ()=>setPage((p)=>Math.max(1, p - 1)),
                                disabled: page === 1,
                                children: t('actions.prev')
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/movies/page.tsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this),
                            Array.from({
                                length: Math.min(filteredTotalPages, 10)
                            }, (_, i)=>{
                                let pageNum;
                                if (filteredTotalPages <= 10) {
                                    pageNum = i + 1;
                                } else if (page <= 5) {
                                    pageNum = i + 1;
                                } else if (page >= filteredTotalPages - 4) {
                                    pageNum = filteredTotalPages - 9 + i;
                                } else {
                                    pageNum = page - 5 + i;
                                }
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `pager bg-transparent border-0 text-white/90 px-3 py-2 rounded-md font-semibold cursor-pointer hover:text-white transition-colors text-sm sm:text-base ${pageNum === page ? 'bg-[#33d583] font-bold text-[#06343a]' : ''}`,
                                    onClick: ()=>setPage(pageNum),
                                    children: pageNum
                                }, pageNum, false, {
                                    fileName: "[project]/frontend/app/movies/page.tsx",
                                    lineNumber: 256,
                                    columnNumber: 19
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pager bg-transparent border-0 text-white/90 px-3 py-2 rounded-md font-semibold cursor-pointer hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base",
                                onClick: ()=>setPage((p)=>Math.min(filteredTotalPages, p + 1)),
                                disabled: page === filteredTotalPages,
                                children: t('actions.next')
                            }, void 0, false, {
                                fileName: "[project]/frontend/app/movies/page.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/app/movies/page.tsx",
                        lineNumber: 236,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$FooterWave$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FooterWave"], {}, void 0, false, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$MovieModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MovieModal"], {
                movie: selectedMovie,
                isOpen: isModalOpen,
                onClose: ()=>{
                    setIsModalOpen(false);
                    setSelectedMovie(null);
                },
                onEdit: (movie)=>{
                    setIsModalOpen(false);
                    handleEdit(movie);
                },
                onDelete: handleDelete
            }, void 0, false, {
                fileName: "[project]/frontend/app/movies/page.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/app/movies/page.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
_s(MoviesPage, "KOyaFqW+MKExibUNHbaarjVswfI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useI18n"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = MoviesPage;
var _c;
__turbopack_context__.k.register(_c, "MoviesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_5580dd85._.js.map