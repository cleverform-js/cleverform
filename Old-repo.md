# Cleverform old repository 👴

## What is the old repo all about?
_The old repository of this library is private github repo. It is the beginning of the library._

__The private old repo compose of:__

* __Library core__ - _core source codes, the foundation of the library._
* __Library playground__ - _HTML, CSS, and Javascripts files for bundled js library testing._
* __Typescript API documentation__ - _typescript documentation of the codes, intended for the developer of the library._
* __Library Usage documentation__ - _library usage documentation intended for the end user of the library._
* __Configurations__ - library configurations for Webpack(bundling) and typescript.
* __Other files__ - _other related files and resources  for experimentations._


## Why change/separate repo?

* The source codes are getting bigger and harder to maintain. 
* The folder structure is getting messy.
* Must have separation of concerns

## Solutions

* Seperate the old repository in different new repositories. 
* New repositories belong in one Github organization.

## Old repo commits

_Below are the commits from the __private__ old repo of this library._
_Some commit messages below are improved and edited_


__Feel free to read...__

```console

$ git log

commit 245b3565d92427e121cc7c7787b206deb10e8abc (HEAD -> master, origin/master)
Author: Lums31 <clet.jose@gmail.com>
Date:   Fri Jul 10 01:09:01 2020 +0800

    Cleverform webpack config is good for bundling.

    - cleverform webpack config generate 2 js file, minified and not. with filename based on the version of the package.

commit 9cf927f38db089f71e9b7c6980e14555ce181f82
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Jul 8 22:59:12 2020 +0800

    Introduction documentation added (docz)

    -what-is-cleverform
    -simplest-usage

commit db87e817b062de0781310b6407f013925a8fabd2
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Jul 8 13:37:46 2020 +0800

    Forced toggle `multiple` attribute on the ff. validation rules

    - maxTFS
    - minTFS
    - betweenTFS
    - minFiles
    - maxFiles
    - exactFiles

commit 36adf61be9fcff08d36678ef5521adb6ee458366
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Jul 8 10:20:19 2020 +0800

    Files/Folder moved

    `src/core/states/rules` files/sub-folders moved to `src/core/rules`

commit 53d09c05f7b19470c7ccaacfee83438f9fea8944
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue Jul 7 01:08:54 2020 +0800

    Files/Folder moved

    `src-docz` moved to `src/docz`

commit 4954c967f6b7e5e5de8c21e96d759c79c2739b58
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jul 6 23:01:40 2020 +0800

    Files/Folder moved

    'src-playground' files/sub folders moved to 'src/playground'

commit 520fb233cdb992f148689f50ff230ab48727c119
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jul 6 22:36:12 2020 +0800

    All CF core files/folders inside 'src' main folder are moved to 'src/core'

commit 3a227b1aeb3ac23741a6e4f1719d4ef6f2372708
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jul 6 12:32:03 2020 +0800

    `settings` in CF config object facade added for form settings.

    settings property:
    -submitDelay
    -lang
    -injectAttribute

commit fdaaa563f83f4223886231c13c51240518fb0542
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 25 16:05:50 2020 +0800

    Docz is now customized.

    1. `src/gatsby-theme-docz` created that shadow some gatsby-theme-docz configuration to have customized docs.
    2. assets of icons and images added for docz public added
    3. and other setup

commit cfb9cc22062daaacc11f304da5f12e3a73204bf2
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jun 22 22:42:11 2020 +0800

    Field attribute modifier each validation rule coded:

    1. some attribute modifier added on some rules. Listed in the `auto-injected-attribute-table.md`
    2. Modification on some rules

commit 9e22f90288009e43c56224895ef1e266711dbf8f
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jun 22 16:29:29 2020 +0800

    Auto inject of enctype='multipart/form-data' if has input type file atleast in the form (checkIfHasFileInput method).

commit a84aec0d1a66ec46c90de7d73be695f8cb716c5d
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jun 22 15:14:42 2020 +0800
    
    Docz related config

    <br/> tag needs self closing tag in mdx file. have conflicts in docz-gatsby, other maintenance

commit 323a8d8ac5a7e0c406a77443a8901ee6ca89d8a4
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jun 22 11:48:07 2020 +0800

    All rules with 'between' is now inclusive (min and max inclusive)

    1. betweenLen   -       min and max is now included.
    2. betweenFS    -       min and max is now included.
    3. betweenTFS   -       min and max is now included.
    4. The error message template has been adjusted.

commit 9d7270fcda99b479c284b867affa6f4030df08b0
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Jun 22 10:31:14 2020 +0800

    Validation rule `file` changed to `extensions`. More semantic.

commit c7d9a85fffa444430a5b3643b93c295d1a0bc452
Author: Lums31 <clet.jose@gmail.com>
Date:   Sun Jun 21 22:02:18 2020 +0800

    Created Validated data type.md

    1. Created Validated data type.md for confirming types for CfData.val() and via POST in PHP server
    2. val() method also return string[] for input type email and tag select with multiple attribute
    3. val() method also return File for input type file.
    4. val() method also return FileList for input type file with multiple attribute.

commit c3b13e7d7dab0113d9a40e8737e780bddbcab63e
Author: Lums31 <clet.jose@gmail.com>
Date:   Fri Jun 19 23:07:24 2020 +0800

    Validated data for multiple select and email.

    1. Validated data for multiple select and email on Field.val() return array of value.
    2. Field.val() return type is changed from 'string' to 'string' OR any[]
    3. email validation rule can now validate array of emails also (previos one it only validate a single email string)

commit 65343870d24a57e0913b51899729bd86bf23e232
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 18 14:31:56 2020 +0800

    Cleverform is now reading the <select> and <textarea> field/tag node

commit d2908be21c810105e4f319a7a892c3400f22a352
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 18 11:01:36 2020 +0800

    Webpack playground-config is re edited for:

    1. Allows to add more than 1 HTML with a chunk of external/entry js point
    2. Also, changes in form button. The submit button is enabled when the form is finish initialization. Allow developer to disabled their button and CF will just enabled it. This prevent vulnerability for slow internet conection.    

commit 044e79c925a8db7a103339656fda01ece916cb42
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Jun 17 22:22:18 2020 +0800

    CSS Bootstrap playground

    Bootstrap playground created for testing all field tags and types

commit f8b42d54c343b4ff7e081039053a14d3f382753e
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Jun 17 11:24:25 2020 +0800

    Docz template created

commit a875773ab278240014d7e430a9ad1822c28c5320
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue Jun 16 23:29:03 2020 +0800

    Docz initial setup done.

    1. All docz mdx inside `src-docz` folder.
    2. src/md files deleted.... not important.

commit 224c2e154907ed72419e3dc265cafa46ac7c8e5d
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue Jun 16 21:38:02 2020 +0800

    Docz package installed

commit a42dbbd9aaf3f28943c1862860bc593ea1b1f061
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 11 18:33:02 2020 +0800

    Created new validation rules for <input type='file'>.

    - maxFiles
    - minFiles
    - exactFiles

commit 0cc3fdf6edd2004bc1c520f917352fa341c45762
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 11 17:17:31 2020 +0800

    Created new validation rules for <input type='file'>.

    - maxTFS
    - minTFS
    - betweenTFS

commit a754eec6571ca47bd9a9a8523f7496a10253ac63
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 11 14:22:19 2020 +0800

    Created new validation rules for <input type='file'>.

    - maxFS
    - betweenFS

commit bea549b05edfc0e0ef8e46debe3419645a9e570b
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 11 11:33:19 2020 +0800

    `minFS` validation rule added

commit 033a9ea6a0f16cc2e3671930b077ada098210a13
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Jun 10 22:38:19 2020 +0800

    File input field rule 'files' is done,

    1. for allowing of certain file extentions only.
    2. Clean codes more...

commit 668a3c5297634b3c44efb66a50217fa2f0b37f30
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Jun 10 10:29:13 2020 +0800

    Added `ip`,`ipv4` and `ipv6` validation rules.

    -Number.isInteger changed to regex because of compatibility issue to old browsers

commit 6ef60fba3e56c2fd5b034e52681a8e72fc9b95f0
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue Jun 9 19:33:31 2020 +0800

    Added number related validation rules

    1. number utilities functions..
    2. Some refactoring.

commit 8aec94e8fddd08ff8452d2d859df247f1111e6e8
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue Jun 9 11:25:24 2020 +0800

    Added 2 new validation rules

commit 056b34fc83de21ae2c860fee29afe7daf11f9962
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue Jun 9 09:43:52 2020 +0800

    Added new validation rules

commit 5ddfd417ea3f2fdf08e317826b80a1c19a6dc245
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat Jun 6 22:08:48 2020 +0800

    Validation rules container become singleton.

    1. defaultRules renamed to validationRules.
    2. created `src/states/rules` folder where all rule objects has its own file.

commit 966896e88424465fc4e4c2f971d0679935d731cd
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat Jun 6 18:40:20 2020 +0800

    Added feature that allow developer to add their custom Css class

commit 0c95faf9686df2b9bb5797ffa74eacab03406010
Author: Lums31 <clet.jose@gmail.com>
Date:   Fri Jun 5 22:15:11 2020 +0800

    Created EventEmitter abstract.

    1. EventEmitter extended in the CleverFormData, must be used in some classes like field.
    2. Created Form event names  enums for magic string.

commit f7fd6169bac8885db2aa5dc6e76746670248825f
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Jun 4 22:58:37 2020 +0800

    Ongoing refactoring, with documentation.

    1. Added typedoc for documentation.
    2. refactoring codes
    3. Documentation
    4. Renaming of symbols

commit 71389019cf2604fdf574fafca942b0351b8646f7
Author: Lums31 <clet.jose@gmail.com>
Date:   Sun May 31 19:23:59 2020 +0800

    Created SubmitButton Class, submit button management

commit 456b28658e5f644fc43a697424fbd2e494e351e2
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu May 28 23:14:48 2020 +0800

    With actual validation and Error displaying.

    1. Created the cssDomInjector
    2. Created the errorMessagesTemplate
    3. Created the Label
    4. Created the Default
    5. Hide the form node submit function to the Formdata propery and bind the form, so that the cleverform can only submit the form.

commit 918eb405507c3ba8a1ccf725432ace8bf07df8b0
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue May 26 22:48:59 2020 +0800

    Core library Structure refined.

    1. Field constructor/class created with FieldInterface.
    2. defaultRules created inside states, to be refined by making it with singleton class.

commit 98a94d2b8f37d089ad37d136e1435d0bf3dedb84
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat May 23 17:32:55 2020 +0800

    Created CF_Error class and transfer all functionalities inside util/logger to it.

    -util/logger folder is deleted.

commit 285ff0f7ab0b96a68d20be44391683984f563029
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat May 23 13:15:29 2020 +0800

    Structure refined on the ff:
    
    1. CF_Instance become CleverForm , the old CleverForm (src/CleverForm.ts is deleted) facade is deleted thats why we will now use 'new' keyword to instantiate.
    2. Worker folder deleted.
    3. Created interfaces folder for the abstraction of classes.
    4. formsState.ts to formCollections.ts
    5. FormData.ts to CleverFormData.ts
    6. Many more...

commit b01ac02b370359e26918b1569b817dd5c5afd990
Author: Lums31 <clet.jose@gmail.com>
Date:   Tue May 19 23:25:59 2020 +0800

    Still working in FormData constructor part more on validation. Done also the ff:

    1. Created Error_Code, Error_Type , Warning_Code and App Enums
    2. Created generic error logger

commit da751cd25454cee21242637dd46f4da4168a3446
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat May 16 23:42:30 2020 +0800

    Create CleverForm and CF_Instance TS class

    -returned CF_Instance is freezed!

commit b076c915cc96a123dc1982bc18009f26f89a1c17
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon May 11 15:11:23 2020 +0800

    Typescript implemented

    Typescript (typed superset of JavaScript) support added for modern development. Type definitions added also.

commit 67b194f9cc223855ca4991c9d944d9e28718e73a
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon May 11 13:33:12 2020 +0800

    Installed `typescript` and `ts-loader` in NPM

commit 4ee80fff40a0418171503a90fab38d56569b471d
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon May 11 13:25:19 2020 +0800

    Typescript tutorial done! Time to implement! 
    
    - Restructure of working directory for Typescript support implementation.
    - remove the playground folder inside src and transfer to root folder

commit 52958b7e34dc0d70925b1914cc2dadaae2aad4da
Author: Lums31 <clet.jose@gmail.com>
Date:   Mon Apr 20 21:09:08 2020 +0800

    Code cleaning and thinking of Typescript support/implementation:

    At this momment, I STOP coding and i started my time studying the Typescript langauage with the Help of Udemy.

commit 5777dba4de7df38160fb8ed98d195cfb39020304
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat Apr 18 22:39:33 2020 +0800

    Readme Update for the prev. commit

commit db398dc4a4517c8051bcaaa6c2c4200086fa02db
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat Apr 18 22:36:43 2020 +0800

    Done initial webpack setting for the library creation/bundling.

commit d49e1da059ba8e302272d39e51b589c0900456bd
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Apr 16 18:29:39 2020 +0800

    Created two webpack config for dev and build

    - also added some experimental codes in the library

commit 4cf5be4169158f62946be77f447569db4d3f397b
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Apr 15 17:50:16 2020 +0800

    Installed 8 npm dev dependencies

    - @babel/core
    - @babel/preset-env
    - babel-loader
    - babel-preset-env
    - html-webpack-plugin
    - webpack
    - webpack-cli
    - webpack-dev-server

    Installed 1 npm dependencies
    - babel-polyfill

    Created webpack.config.js in root directory for webpack configuration

    Created .babelrc file for configuration of babel

    Added scripts dev, build, start in package.json for webpack

    Created .gitignore file in root directory

commit db7b01c04ef0a313ce147b25a07d3633fbb54550
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Apr 15 10:30:37 2020 +0800

    Rename the old folder to _old folder, and made the dist,docs and src folder

commit 3e7e14847bb065c91c9978bde748e65170f086f1
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Apr 15 10:25:04 2020 +0800

    README minor edits

commit f4583dd2cdf0c9e0bafa79afc1dcb51ee5d64f88
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Apr 15 10:17:37 2020 +0800

    Edited old folder README, and made a README file in the working directory with milestones

commit 39f1ec2508d3362ede8da1ae17c1830873709c4f
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Apr 15 10:04:20 2020 +0800

    Nilipat sa old folder ung current progress ng app, since gagawin nating modular ung pag gawa ng cleverform library, gagamit tau ng webpack for bundling for commercial use in the future

    Webpack added

    Webpack added to make the library codes modular

commit 9a06ffe493d4df7ebb7c8b040d24c6c1aba01f64
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Mar 26 22:55:35 2020 +0800

    JSDoc added 
    
    (But still uninstalled in the future)

commit cf506328de5f45e929f0c95f26cb11e5ab2b53d3
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Mar 26 21:15:02 2020 +0800

    Rename folder of `sfv` in shorter

commit 714b92a91fd99ec9653378120b6a77ed85ae0838
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Mar 26 17:37:22 2020 +0800

    Update  private working validateOnInit() to validateFormOnInit()

    make method name more descriptive

commit ada265a5bd50d7896e6ac92b4206958aafd5f39d
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Mar 25 18:40:30 2020 +0800

    Added this method.
    
    1.onInit,
    2.onError
    3.onSuccess
    (imperative coding, a mess)

commit 0fe6d1ff22764dda156d811f353bca6a83cd7be9
Author: Lums31 <clet.jose@gmail.com>
Date:   Wed Mar 25 17:16:35 2020 +0800

    Added event listener

commit 36f6d2b8a542ed17a8993cd6dcb914260ebe809f
Author: Lums31 <clet.jose@gmail.com>
Date:   Sun Mar 22 18:07:20 2020 +0800

    Added cleverform.js events callback setters

commit 11c6310fa1dbdeb2e02767fd36465a255889f3d0
Author: Lums31 <clet.jose@gmail.com>
Date:   Sun Mar 22 17:30:50 2020 +0800

    State `trysWithError` to `attemptsWithError` change name

commit b41d888c61274f87f9e827cb282e226d298e332c
Author: Lums31 <clet.jose@gmail.com>
Date:   Sun Mar 22 16:43:32 2020 +0800

    Transfer of enabling of button if their is error or success validation process through AJAX

commit eb5e3f535c1a4c17058aa15eed3cddd8948f74c3
Author: Lums31 <clet.jose@gmail.com>
Date:   Sun Mar 22 16:19:20 2020 +0800

    Showing of outerHTML if their is error

commit e0fc2d304dc5a54ec16f7afa4e0a5f09944958f8
Author: Lums31 <clet.jose@gmail.com>
Date:   Sun Mar 22 11:33:53 2020 +0800

    Added setting of submit button via html attribute

commit 002e5f7511b1cb2a912bbe41275ac320cb20ccc9
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat Mar 21 21:47:20 2020 +0800

    Added  states of every form , updated every form process

commit a898ebf36b16f398d825bfacc9c1db08829dfe66
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat Mar 21 20:55:38 2020 +0800

    Changes `_appSettings` to `_appDefaults`

commit ffe6f09324a720dd311cd41a820bf2416a9b29f4
Author: Lums31 <clet.jose@gmail.com>
Date:   Sat Mar 21 18:29:46 2020 +0800

    Improved `desired-usage.html`

commit 1ede23ea495142545e5b743317542e54816732e7
Author: Lums31 <clet.jose@gmail.com>
Date:   Fri Mar 20 23:07:39 2020 +0800

    Code refactoring
    
    (this commit msg is a mess)

commit d58df6d833099c68884eda76260fa9627e6655a0
Author: Lums31 <clet.jose@gmail.com>
Date:   Fri Mar 20 15:25:31 2020 +0800

    Change of library name in different location/files

    Change the SFV (Simple form validation, the first library bane) to CF (Cleveform) library

commit 13c44049ad11a47cef959fca9769d21e5db595ed (gitlab/master)
Author: Lums31 <clet.jose@gmail.com>
Date:   Thu Mar 19 22:54:19 2020 +0800

    Transfer all files in the root in SFV folder

commit d5db299bfa32d7443dc5da33c58c8ddfbf401689
Author: JC II <clet.jose@gmail.com>
Date:   Sun Mar 15 23:34:35 2020 +0800

    Created files to start the library
    
    Created the `clever-form.js` library the most important file

    (at this momments, I dont know how to use webpack for module bundling)
    (the source codes at this time was imperative inside an IIFE, and its very hard to maintain since its not modular. )

commit 5030bdb6bd1c09be5f05f6f6293c4ede4a7bcacf
Author: JC II <clet.jose@gmail.com>
Date:   Sun Mar 15 22:34:56 2020 +0800

    First push

commit 6f9bf88ed1a19c39bb301e4359affe04979cf0a3
Author: JC II <clet.jose@gmail.com>
Date:   Sun Mar 15 14:14:57 2020 +0000

    Initial commit
    
    (At this time, COVID-19 already became a pandemic (March 11 2020 to be exact). Home quaratine is strictly implemented.)
    (Because of the quarantine, i started to create this project.)
```