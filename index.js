/* This file is to test markdown-parser */
import {Mparser} from './modules/mparser/mparser.mjs'

const parser1 = new Mparser("Hello *heloo* *heea* isdif *heaa*");
parser1.matchBold();
console.log(parser1.parsedObject);