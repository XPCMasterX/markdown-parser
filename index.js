/* This file is to test markdown-parser */
import {Mparser} from './modules/mparser/mparser.mjs'

const parser1 = new Mparser(" __hello__ **hello** *hello*", ["<p>asd", "</p>as"]);
parser1.matchBold();
console.log(parser1.parsedObject);