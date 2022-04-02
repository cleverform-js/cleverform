
<p align="center"><a href="#" target="_blank"><img width="100"src="https://github.com/cleverform-js/cleverform/blob/master/cf-logo.png?raw=true"></a></p>



# cleverform.js

> CleverForm is a JavaScript library for fast, straightforward and elegant💕 HTML form validations


📜 Visit <a href='https://cleverform.netlify.app/' target='_new'>cleverform.js</a> for official documentation.


## Introduction

Cleverform is a javascript library for elegant💕 and easy to use form validation.

It's a 1 stop shop javascript library that handles all forms related functionality such as field validations, displaying of field errors in the DOM, Field CSS class Injections depending on the field status (success/with error), serializing validated field data, and many more!





## Why cleverform?

> “ We all find the good parts in the products that we use.<br/>We value simplicity, and <b>when simplicity isn’t offered to us, we make it ourselves.</b> ”
<br/>
<i>- Douglas Crockford, <a target='_new' title='Book about Javascript'  href='https://www.goodreads.com/book/show/2998152-javascript'>JavaScript: The Good Parts 📖 </a></i> 

<br/>
One of the most challenging parts of web development is form validations.

__Javascript__ alone has no built-in form validation functionalities.

Implementing your form validation from scratch is very cumbersome and it consumes a lot of time in your development. 

That's why CleverForm library exists!

_In just a few minutes, you can implement form validations._

___

#### ✅ _Easy to understand_ 
JavaScript beginners can easily understand the library API.


#### ✅ _Zero JS dependencies_
No need to add other javascript libraries.

#### ✅ _CSS library adaptable_ 
Can work with different CSS libraries such as `bootstrap` , `Foundation` , `Bulma` and many more.


#### ✅ _Short code_ 
Form validation in just a few lines of codes.

#### ✅ Built-in validation rules
CleverForm has many built-in validation rules that you can use like __required__, __minLen__, and many more!

#### ✅ Custom validation rules
If there are no built-in rules that will suffice your need,
you can add your own validation rules with your logic in easy to understand syntax.

<!-- #### ✅ _Customizable error message_ 
Display form validation error messages easily in any part of the DOM depending on your projects need. -->


#### ✅ _Form security_ 
The cleverform handle form securities such as not allowing form users to forcibly submit a form via the browser’s console :

```js
//Example of forcing to submit first form in the DOM and it ignore any kind of form validations 
document.forms[0].submit()
```
But by using CleverForm, this vulnerability is solved. 



## Sample Usage

For more details about installations and implementation, visit <a href='https://cleverform.netlify.app/' target='_new'>cleverform.js</a> for official documentation.

#### 👉 Create your form

Below is the html code for the form where we will add form validation using Cleverform. 

<!-- Filename : _index.html_ -->
```html
<form method="POST" id="registrationForm" >

    <div class="row">
        <label for="f_name">First name</label>
        <div >
            <input type="text" class="field" id="f_name" name="f_name">
            <!-- The div tag below will hold the error message of the field. -->
            <div cf-msg="f_name"></div>
        </div>
    </div>

    <!-- Last name and Other fields here ... -->
    <!-- Submit button here... -->

</form>


<!-- Import cleverform -->
<script src="/your-path/cleverform.dev.js" ></script>
```

#### 👉 Instantiate your form
Below is a simple way of implementing form validation using  __CleverForm__ constructor function. 
CleverForm does every field's validation under the hood.


<!-- Filename : _sample.js_ -->

```js
const regForm = new CleverForm({

    // The id of the html form
    id: "registrationForm",

    // The validation rules per field's name, multiple rules are seperated by pipe '|'
    rules: {
        f_name: "required | minLen:2 | maxLen:50",
        l_name: "required | betweenLen:2,50",
        //...
    },

    formEvents: {

        // onSuccess event  hold a callback function/event listener
        // that will run when the form is submitted with out validation errors
        
        onSuccess: function(validatedData) {

            //submit validatedData here via http request in the server
            console.log("Success, Form has No validation error. Submit data via http request in the server (ex: via AJAX , fetch and axios)");
            console.log("validatedData Object: ", validatedData);

        },

        // other events here...
    }

    // ...
});
```

That's it! 🎉

You just implemented a form validation. 👏


#### 👉 Accessing value

Optionally, you can easily access the field's current value in the form at __runtime__ by accessing the instance's properties.
```js

// continuation of `regForm` instantiation above...

var firstName = regForm.f_name;
var lastName = regForm.l_name;

console.log(firstName) // prints the f_name value
console.log(lastName)  // prints the l_name value

```

___


<!-- ## Installation

....

## Usage

....

## Changelog

..... -->

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020 JC II


