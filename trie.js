"use strict";
exports.__esModule = true;
var Trie = (function () {
    function Trie() {
        this.root = null;
        this.wordList = {};
    }
    Trie.prototype.putValue = function (key, val) {
        this.root = this.putNode(this.root, key, val, 0);
    };
    Trie.prototype.putNode = function (x, key, val, d) {
        if (x === null)
            x = { val: '', next: [] };
        if (d == key.length) {
            if (x.val)
                this.wordCounter(key);
            x.val = val;
            return x;
        }
        var c = key.charAt(d);
        if (!x.next[c])
            x.next[c] = null;
        x.next[c] = this.putNode(x.next[c], key, val, d + 1);
        return x;
    };
    Trie.prototype.wordCounter = function (word) {
        if (!this.wordList[word]) {
            this.wordList[word] = 2;
        }
        else {
            this.wordList[word]++;
        }
    };
    return Trie;
}());
exports["default"] = Trie;
