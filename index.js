"use strict";
exports.__esModule = true;
var Trie_1 = require("./Trie");
var trie = new Trie_1["default"]();
var str = 'she sells sea shells by the sea shore';
str.split(/\s/).forEach(function (word, idx) {
    trie.putValue(word, idx);
});
console.log(trie.wordList);
