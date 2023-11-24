# Long text shortener

## Installation

Use the following commands to install

```bash
# NPM
npm i txt-trunc
# YARN
yarn add txt-trunc
```

## Usage

```javascript
const txtTruncate = require("txt-trunc");
// OR
import txtTruncate from "txt-trunc";

const text = "your text";
// arguments [text, length, options?]
let truncate = txtTrunc(text, 5, {});
```

# Parameter

#### text: The text to be shortened

#### length: The number of words that are shortened and its default value is 10

#### options: ⬇⬇⬇⬇⬇⬇⬇

# Options

#### options.start

The default value of this option is equal to 0 and it determines that the text to be shortened starts from the second character.

#### options.dots

This option determines what character or characters should be placed at the end of the shortened text
The default value of this option is equal to "..." which can be set as desired

## License

[MIT](https://choosealicense.com/licenses/mit/)
