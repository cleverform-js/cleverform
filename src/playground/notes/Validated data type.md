#### Validated data type

✅ _- means verified_

| Input/Tag     |  CF Field.val() type  | Php server type   | Notes |
|----------     |:-------------:        |:------:| :----- |
|text           |  string ✅            |  string ✅           |
|number         |  string ✅            |  string ✅           |
|email          |  string ✅            |  string ✅           |
|email multiple | string[ ] ✅          |  string ✅           | In PHP, multiple Emails separated by (,) commas
|password       |  string ✅            |  string ✅           |
|select         |  string ✅            |  string ✅           |
|select multiple| string[ ] ✅          |  string ✅ <br/>or <br/> string[ ] ✅ | 
|textarea       |  string ✅            |  string ✅           |
|radio          |  string ✅            |  string ✅           |
|checkbox       |  string ✅            |  string ✅           | 
|file           |  `File` object✅ <br/> [Read File](https://developer.mozilla.org/en-US/docs/Web/API/File) |  string on `$_POST` <br/> or <br/> array on `$_FILES` ✅ | For PHP, html form tag must have `enctype="multipart/form-data"` attribute
|file multiple  | `FileList` object✅ (Array like) <br/> [Read FileList](https://developer.mozilla.org/en-US/docs/Web/API/FileList)| string[] on `$_POST` <br/> or <br/> array(arrays) on `$_FILES` ✅ | Same as `file` note.<br/>And if the file is multiple, the `$_FILES` will become a `multidimensional array`. <br/> Ex: `$_FILES = [name : [names...] ,type : [types...], tmp_name : [tmp_names...], error : [errors...], size : [sizes...] ]`.
|range
|tel

<sub>

__Note__ : _Php server with type string[ ] means that the `name` attribute of the form field have a `[]` suffix in the name attribute.<br/>Example : `<inputt type='email' name='emails[]'>`<br/> Removing `[]` suffix will produce `string` type instead_

__Note__ : _In PHP server, when the submited form has `enctype="multipart/form-data"` attribute,<br/> data will be go to `$_FILES` php global variable else<br/> the form files data will be inside `$_POST` data instead (the value is the file name/s)._

</sub>