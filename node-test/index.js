/* This file is to test markdown-parser */
import {Mparser} from '../modules/mparser/mparser.mjs'

const parser1 = new Mparser("__jello__ *heloo*", ["<p>", "</p>"]);
parser1.matchBold();
console.log(parser1.parsedObject)