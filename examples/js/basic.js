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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const regForm = new CleverForm({

  // The id of the html form
  id: "registrationForm",

  // The validation rules per field's name, one or many validation rules per field seperated by pipe '|'
  rules: {
    f_name: "required | minLen:2 | maxLen:50",
    l_name: "required | betweenLen:2,50",
    email: "required | email",
    password: "required | minLen:6 ",
    confirm_password: "required| matched:password",
    tou_pp: "accepted",
  },

  // Customize the name of the field in the error messages by overriding some field's name.
  customName: {
    f_name: "first name",
    l_name: "last name",
    confirm_password: "confirm possword",
    tou_pp: "terms of use & privacy policy",
  },


  // formEvents property holds the events listeners where you can response to.
  formEvents: {

    // Event when the form is initialized by CleverForm
    onInit: function () {
      // Your codes here ...

      //   console.log("regForm Initialized! ");
    },

    // Event when the form have field with validation error when submitted.
    onError: function (errors, errorsCount, attemptsWithError) {
      // Your codes here ...
      // console.clear();

      console.log("Form has validation error.");
    //   console.log("Errors object: ", errors);
    //   console.log("Fields with error: ", errorsCount);
    //   console.log("Form submit attempts : ", attemptsWithError);
    },

    // Event when the form have no validation error.
    // When you omit `onSuccess` event listener, the form will be submitted via form native POST/GET request (ex. on PHP server)
    // But when you use `onSuccess` event listener, your program is intended to be send via XHR (ex: AJAX , fetch and axios)
    onSuccess: function (validatedData, formData) {
      //, formSubmit

      // Your codes here ...
      // You can submit `formData` object via XHR (ex: AJAX , fetch and axios)..

      // console.clear();
      console.log("Success , Form has No error.");

    //   console.log("validatedData Object: ", validatedData);
    //   console.log("formData Object: ", formData);
    },
  },

  //   settings: {
  //     // submitDelay : 1000 , // this does not go to submit delay! goes to submitButton Delay,,, name must be changed?
  //     // lang : 'en', //
  //     // injectAttribute : true,
  //   }
});

/***/ })
/******/ ]);