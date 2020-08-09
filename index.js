/* This file is to test markdown-parser */
import {Mparser} from './modules/mparser/mparser.mjs'

const parser1 = new Mparser("Hello *heloo* *heea* isdif *heaa* _hey_", ["<p>", "</p>"]);
parser1.matchBold();
console.log(parser1.parsedObject);
