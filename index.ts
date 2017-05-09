import Trie from './Trie';

let trie= new Trie();
let str='she sells sea shells by the sea shore';
str.split(/\s/).forEach((word,idx)=>{
   trie.putValue(word,idx);
})

console.log(trie.wordList);