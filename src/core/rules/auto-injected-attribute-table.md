### Auto injected attribute depending on the validation rules

The table are the list of all validation rules with auto injected attribute in the DOM field when used in the field as validation rule.

| Rule name     | Attribute Injected  | Notes |
| :----         | :-----: | :----  |
| required      | `required`  | 
| accepted      | `required`  | `Please check this box if you want to proceed` (browser default msg)
| minLen        | `minlength=':min'` | Min must always less than or equal to Max.
| maxLen        | `maxlength=':max'` | Max must always greater than or equal to Min.
| betweenLen    | `minlength=':min'` <br/> and <br/>  `maxlength='max'` |
| min           | `min=':min'`       | Min must always less than or equal to Max.
| max           | `max=':max'`       | Max must always greater than or equal to Min.
| numeric       | `step='any'`       | `any` value is default, (improve this by adding optional parameter for `step` value)
| extensions    | `accept=':extensions'` | Group extentions : `audio`, `video`, `image`, `msWord`, `msExcel` and `msPowerPoint`.<br/>Other extentions not in the lists are allowed.<br/>Ex: pdf,txt (without `.`)
| maxTFS        | `multiple`        | This rule is intended for input type `file` with `multiple` attribute. 
| minTFS        | `multiple`        | This rule is intended for input type `file` with `multiple` attribute. 
| betweenTFS    | `multiple`        | This rule is intended for input type `file` with `multiple` attribute. 
| minFiles      | `multiple`        | This rule is intended for input type `file` with `multiple` attribute. 
| maxFiles      | `multiple`        | This rule is intended for input type `file` with `multiple` attribute. 
| exactFiles    | `multiple`        | This rule is intended for input type `file` with `multiple` attribute. 
