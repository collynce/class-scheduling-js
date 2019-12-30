/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./routes/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./routes/index.js":
/*!*************************!*\
  !*** ./routes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class ChangeDom {\n    initialize(items, cdata) {\n        const tbody = window.document.querySelector(\"#subjects-table > tbody\");\n        cdata = function childData() {\n            while (tbody.lastChild) {\n                tbody.removeChild(tbody.lastChild)\n            }\n        };\n        if (window.document.readyState === 'complete' || 'interactive') {\n            cdata();\n        }\n        for (const row in items) {\n\n            const tr = window.document.createElement(\"tr\");\n\n            if (items.hasOwnProperty(row)) {\n\n                const subject = window.document.createElement(\"td\");\n\n                subject.textContent = items[row].subject;\n\n                tr.appendChild(subject);\n\n                tbody.appendChild(tr);\n\n            }\n        }\n        // return cdata\n    }\n}\n\nlet Dom = new ChangeDom();\n// Dom.initialize();\nclass Items {\n    getItems() {\n        const res = fetch('http://localhost:5050/add');\n        res.then(res => {\n            return res.json();\n        }).then(items => {\n\n            Dom.initialize(items);\n        })\n    }\n}\n\nclass appendItems {\n    append(status) {\n        status = false;\n        const res = fetch('http://localhost:5050/add');\n        res.then(res => {\n            return res.json();\n        }).then(items => {\n            const select = window.document.querySelector(\"select\");\n            while (select.firstChild) {\n                select.removeChild(select.firstChild)\n            }\n            for (const rows in items) {\n                if (items.hasOwnProperty(rows)) {\n                    const option = window.document.createElement(\"option\");\n                    // option.name = 'subject';\n                    option.textContent = items[rows].subject;\n\n                    select.appendChild(option);\n\n                }\n            }\n            return status = true;\n\n        })\n    }\n}\n\nclass Teacher {\n    add() {\n        const res = fetch('http://localhost:5050/teacher');\n        res.then(res => {\n            return res.json();\n        }).then(items => {\n            const tbody = window.document.querySelector(\"#teachers-table > tbody\");\n            while (tbody.firstChild) {\n                tbody.removeChild(tbody.firstChild)\n            }\n            for (const rows in items) {\n                const tr = window.document.createElement(\"tr\");\n\n                if (items.hasOwnProperty(rows)) {\n                    // const select = window.document.querySelector(\"#select > option\");\n                    const teacher = window.document.createElement(\"td\");\n                    const subject = window.document.createElement(\"td\");\n\n                    teacher.textContent = items[rows].teacher;\n                    subject.textContent = items[rows].select;\n\n                    tr.appendChild(teacher);\n                    tr.appendChild(subject);\n                    tbody.appendChild(tr);\n\n                }\n            }\n        })\n    }\n}\n\nlet teacher = new Teacher();\n// teacher.add();\nlet appends = new appendItems();\n// appends.append();\n\nlet itemss = new Items();\n// itemss.getItems();\n\n//Execute Script when the Dom is loaded\ninitScript = () => {\n\n    if (window.document.readyState === 'complete' || 'interactive') {\n\n        itemss.getItems();\n        appends.append();\n        teacher.add();\n\n    }\n\n    window.document.getElementById('form').style.display = 'none';\n    // window.document.getElementById('buttons').addEventListener('click', function (e) {\n    //     window.document.getElementById('form').style.display = 'flex';\n    //     window.document.getElementById('buttons').style.display = 'none';\n    //     e.preventDefault();\n    // });\n    window.document.getElementById('close1').addEventListener('click', function (e) {\n        window.document.getElementById('form').style.display = 'none';\n        window.document.getElementById('buttons').style.display = 'flex';\n        e.preventDefault();\n    });\n    add = (a) => {\n        if (a === 1) {\n            document.getElementById('form').style.display = 'block';\n\n        } else {\n            document.getElementById('form2').style.display = 'block';\n            document.getElementById('close2').style.display = 'block';\n\n\n        }\n    };\n    closeBtn = (a) => {\n        if (a === 1) {\n            document.getElementById('form1').style.display = 'none';\n            document.getElementById('close').style.display = 'none';\n        } else {\n            document.getElementById('form2').style.display = 'none';\n            document.getElementById('close2').style.display = 'none';\n        }\n\n    };\n\n};\n\n\n\n\n\n\n//# sourceURL=webpack:///./routes/index.js?");

/***/ })

/******/ });