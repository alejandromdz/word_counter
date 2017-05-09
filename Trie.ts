interface Node {
    val: any,
    next: Node[]
}


class Trie {

    private static R: number = 256;
    private root: Node = null;
    public wordList: any = {};
    public putValue(key: string, val: any) {
        this.root = this.putNode(this.root, key, val, 0);
    }

    private putNode(x: Node, key: string, val: any, d: number) {
        if (d == key.length) {
            if (x !== null&&this.wordList[key])
                this.wordList[key]++;
        }
        if (x === null) x = { val: '', next: [] };
        if (d == key.length) {
            if(x.val&&!this.wordList[key]) this.wordList[key]=2;
            x.val = val;
            return x;
        }
        let c = key.charAt(d);
        if (!x.next[c]) x.next[c] = null;
        x.next[c] = this.putNode(x.next[c], key, val, d + 1);
        return x;
    }

}

export default Trie;