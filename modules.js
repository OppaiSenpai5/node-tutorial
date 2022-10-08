const names = require('./firstModule.js');
const sayHi = require('./utils');
const data = require('./alternative-flavor');
require('./mind-granade');
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);