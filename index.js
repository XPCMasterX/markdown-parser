/* This file is to test markdown-parser */
import {Mparser} from './modules/mparser/mparser.mjs'

const parser1 = new Mparser("Hello *heloo*", ["<p>", "</p>"]);
parser1.matchBold();