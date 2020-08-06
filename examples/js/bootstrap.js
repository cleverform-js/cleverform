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
/******/ 	__webpack_require__.p = "/examples";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

const form = new CleverForm({
  id: "bootstrapForm",
  rules: {
    f_name: "betweenLen:4,8", //"required | minLen:3 | maxLen:6",
    l_name: "betweenLen:5,10", //"required | minLen:5 | maxLen:11",

    age: "min:11 | max:33 | numeric", //"required | negative", //negative

    primary_email: "required | email",
    other_email: "required | email", // multiple email does not require "[]" for array to read in PHP server

    password: "betweenLen:4,10 | matched:confirm_password",
    confirm_password: "betweenLen:4,10",

    address: "required | minLen:10",

    "pets[]": "required",
    favorite_pet: "required",

    gender: "required",

    resume: "extensions:msWord,pdf", // | betweenFS:51.390625,60,KB | files:msWord,pdf | extensions:image | minTFS:10,MB | extensions:image
    "photos[]": "required | exactFiles:3", // | | betweenTFS:51.390625,60,KB | minFiles:3| extensions:image | minTFS:30,MB |

    tac: "accepted",
  },

  customName: {
    tac: "terms and condition",
    f_name: "First name",
    primary_email: "primary email",
    other_email: "other emails",
    "pets[]": "pets",
    favorite_pet: "Favorite pet",
    "photos[]": "photos",
    l_name: "Last name",
    confirm_password: "Confirm password",
  },

  cssClass: {
    fieldSuccess: "is-valid",
    fieldError: "is-invalid",
    labelSuccess: "valid-feedback",
    labelError: "invalid-feedback",
    // labelSuccess: "valid-tooltip",
    // labelError: "invalid-tooltip",
  },

  formEvents: {
    onSuccess: function(dataObject, formData, formSubmit) {
      // mobile testing
      // alert("Success from onSuccess callback!!");
      // alert(formData);
      console.log("Success from onSuccess callback!!");
      console.log(dataObject);
      // console.log(formData.entries());
      // for(let pair of formData.entries() ){
      //   console.warn(pair[0]+ ', ' + pair[1]);
      // }
      // var request = new XMLHttpRequest();
      // // POST to httpbin which returns the POST data as JSON
      // request.open("POST", "http://localhost/form/action_page.php", /* async = */ false);
      // request.send(formData);
      // // alert("submiit via normal parin!")
      // // formSubmit();
      // console.log(request.response);
    },
  },

  settings: {
    // submitDelay : 1000 , // this does not go to submit delay! goes to submitButton Delay,,, name must be changed?
    // lang : 'en', //
    // injectAttribute : true,
  },
});

// console.log("String include :", String.prototype.includes);

/***/ })

/******/ });