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