/* This file is to test markdown-parser */
import {Mparser} from '../modules/mparser/mparser.mjs'

const parser1 = new Mparser("hello __jello__ *heloo* **ghek** _hel*_", ["<p>", "</p>"], "text");
var matchedObject = parser1.match();
console.log(matchedObject);