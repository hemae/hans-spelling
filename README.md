# hans-spelling
set of functions for words and phrases handling

## Table of contents
* [Installing](#installing)
* [Example](#example)
* [Handlers](#handlers)

<a name="installing"><h2>Installing</h2></a>
Add the package to your project
```
npm i hans-spelling
```
using yarn
```
yarn add hans-spelling
```


<a name="example"><h2>Example</h2></a>

Export handlers from *hans-spelling*

```javascript
const {getSingleForm, getPluralForm} = require('hans-spelling')
```
using TypeScript
```typescript
import {getSingleForm, getPluralForm} from 'hans-spelling'
```

<a name="handlers"><h2>Handlers</h2></a>

```
    capitalize('word') // Word
```
```
    transformPathIntoPhrase('word-path') // Word path
```
```
    transformPathIntoCamelcase('word-path') // wordPath
```
```
    reverseString('word') // drow
```
```
    getSingleForm('words') // word
    getSingleForm('entities') // entity
    getSingleForm('classes') // class
```
```
    getPluralForm('word') // words
    getPluralForm('entity') // entities
    getPluralForm('class') // classes
```
```
    turnSnakeToCamel('snake_case') // snakeCase
```
