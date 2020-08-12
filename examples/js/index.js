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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

//codes here

// alert("zz")

// console.log("CleverForm");
// console.log(CleverForm.createRule);


// create custom rules
CleverForm.addRule({
  name: "divisibleBy5",
  errorMessage: "The :fieldName field must accept number divisible by 5.",
  validate: function (value) {

    const number = parseInt(value);

    // mustr return TRUE or false, omitting it will return undefined and still become false in the end
    if (number % 5 === 0) {
      return true;
    } else {
      return false;
    }

  },
});


// add a custom error message

CleverForm.customErrorMessage({
  ip: "Di man to pang Ip address hahaha -  :fieldName",
  accepted: "Tangapin mo ang :fieldName !!!!!!!!!!"
});



var form1 = new CleverForm({
  id: "form1",
  rules: {
    // alphaNum //
    // minLen:4|maxLen:10|alpha
    //
    firstname: "required|integer|positive", //"betweenLen:2,5 | alpha",
    lastname: "minLen:1|maxLen:15|alphaDash",
    tac: "accepted ",
    email: "email",
    password: "required",
    password_confirmation: "required|matched:password",
    age: "required|integer|negative",
    weight: "required|min:8",

    ip: "required | ip", // divisibleBy5 , ip , ipv4 , ipv6

    // images: "required|files:audio,video,aa,bb,image,",
    // images: "required | minFS:40 | maxFS: 4.6,MB", //msExcel,msPowerPoint
    // images: "required | betweenFS:7,10,MB",

    // images: "minTFS:7,MB",
    // images: "maxTFS:39,MB",
    // images: "betweenTFS:10,15,MB",
    // images: "minFiles:4",
    // images: "maxFiles:7",
    images: "minFiles:2 | maxFiles:7",
    // images: "exactFiles:5",
    // files:msWord |
  },

  customName: {
    firstname: "First namez",
    lastname: "Last namez",
    tac: "terms and conditions",
    email: "E-mail",
    password_confirmation: "password confirmation",
    age: "Age",
    ip: "IP address",
  },

  formEvents: {
    onInit: function () {
      // console.log("onInit : form1 Initialized! ");
    },

    onError: function (errors, errorsCount, attemptsWithError) {
      console.group("With error");
      console.log("With " + errorsCount + " error/s");
      console.log("With " + attemptsWithError + " attempt/s");
      console.log(errors);
      console.groupEnd();
    },

    onSuccess: function (validatedData, formSubmit) {
      console.log("Success from onSuccess callback!!", validatedData);

      console.log("formSubmit :", formSubmit);
      // console.log(arguments)

      console.log("Submitting form 1");
      // formSubmit()

      // setTimeout(function () {
      //   alert("bye!");
      //   formSubmit();
      // }, 3000);
    },
  },

  // cssClass : {
  //   fieldSuccess : 'fieldSuccess',
  //   fieldError : 'fieldError',
  //   labelSuccess : 'labelSuccess',
  //   labelError : 'labelError',
  // }

  settings: {
    // submitDelay : 1000 , // this does not go to submit delay! goes to submitButton Delay,,, name must be changed?
    // lang : 'en',
    // injectAttribute : true,
  },
});

// console.log("==============================");
// console.log(form1);
// console.log(form1.id);
// form1.id = 3333333333333;
// console.log(form1.id);
// console.log("getId", form1.getId());


// console.log("YESSSSSSSSSSSSS!!!!!!!!!!")

// var form2 = new CleverForm({
//   id: "form2",
//   rules: {
//     name: "required|min:4|max:20",
//     age: "required|numeric",
//   },

//   onInit: function () {},
//   onError: function () {},
//   onSuccess: function () {},
// });

// console.log("==============================");
// console.log(form2);
// console.log('getId' , form2.getId());


// form1.onInit();
// form1.formId = 11111;
// console.log(form1.formId);
// console.log(form1);
// console.log(Object.isFrozen(form1));
// console.log("==============================");
// console.log(form2);
// console.log(form2.getFormId());
// console.log("==============================");
// formz.formId = 11111;
// console.log(formz.formId);
// console.log(formz);

// console.log(form1.__FORM_ID);



// //  ---- form event listener ----- //

// form1.onInit(function () {
//     console.log("Form Initialized")

// });



// form1.onError(function (errors, errorsCount, attemptsWithError) {
//     console.log("\n==================================\n")
//     console.log("Validation errors :", errors);
//     console.log("Errors Count :", errorsCount);
//     console.log("AttemptsWithError :", attemptsWithError);

// });




// form1.onSuccess(function (validatedData, formSubmit) {

//     console.log("\n==================================\n")

//     console.log("Success!");

//     console.log("Validated Data", validatedData);
//     console.log("This will submitted in 5 seconds.");

//     console.log(formSubmit);
//     setTimeout(function () {
//         formSubmit();//.call(document);
//     }, 2000);


// });

//  ---- form event listener ----- //


/***/ })
/******/ ]);