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

    // Customized the css Class to be used by CleverForm depending on the fields status( with or with out error)
    // in this example we use bootstrap css class for fields status
    cssClass: {
        fieldSuccess: "is-valid",
        fieldError: "is-invalid",
        labelSuccess: "valid-feedback",
        labelError: "invalid-feedback",
        // labelSuccess: "valid-tooltip",
        // labelError: "invalid-tooltip",
    },


    // formEvents property holds the events listeners where you can response to.
    formEvents: {

        // Event when the form is initialized by CleverForm
        onInit: function() {

            // Your codes here ...
            console.log("regForm Initialized! ");
        },

        // Event when the form have field with validation error when submitted.
        onError: function(errors, errorsCount, attemptsWithError) {

            // Your codes here ...
            console.clear();
            console.log("Form has validation error.");

            console.log("Errors object: ", errors);
            console.log("Fields with error: ", errorsCount);
            console.log("Form submit attempts : ", attemptsWithError);
        },

        // Event when the form have no validation error.
        // When you omit `onSuccess` event listener, the form will be submitted via form native POST/GET request (ex. on PHP server)
        // But when you use `onSuccess` event listener, your program is intended to be send via XHR (ex: AJAX , fetch and axios)
        onSuccess: function(validatedData, formData) { //, formSubmit

            // Your codes here ...
            // You can submit `formData` object via XHR (ex: AJAX , fetch and axios)..

            console.clear();
            console.log("Success , Form has No error.");

            console.log("validatedData Object: ", validatedData);
            console.log("formData Object: ", formData);


        },
  },

//   settings: {
//     // submitDelay : 1000 , // this does not go to submit delay! goes to submitButton Delay,,, name must be changed?
//     // lang : 'en', //
//     // injectAttribute : true,
//   }


});

console.log(regForm);