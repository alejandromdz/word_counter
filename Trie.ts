interface Node {
    val: any,
    next: Node[]
}


class Trie {
    private root: Node = null;
    public wordList: any = {};
    public putValue(key: string, val: any) {
        this.root = this.putNode(this.root, key, val, 0);
    }

    private putNode(x: Node, key: string, val: any, d: number) {
        if (x === null) x = { val: '', next: [] };
        if (d == key.length) {
            if(x.val) 
            this.wordCounter(key);
            
            x.val = val;
            return x;
        }
        let c = key.charAt(d);
        if (!x.next[c]) x.next[c] = null;
        x.next[c] = this.putNode(x.next[c], key, val, d + 1);
        return x;
    }

    private wordCounter(word:string){
        if(!this.wordList[word]){
            this.wordList[word]=2;
        }
        else{
            this.wordList[word]++;
        }
    }   

}

export default Trie;