/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    class TrieNode {
        constructor() {
            this.children = new Array(26).fill(null)
            this.endOfword = false
        }
    }
    class Trie {
        constructor() {
            this.root = new TrieNode()
        }
        charCode(char) {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        }
        insert(word) {
            let node = this.root
            for (let char of word) {
                let index = this.charCode(char)
                if (node.children[index] == null) {
                    node.children[index] = new TrieNode()
                }
                node = node.children[index]
            }
            node.endOfword = true
        }
        Dfs(node, word, result) {
            if (result.length == 3) return
            if (node.endOfword) {
                result.push(word)
            }
            for (let i = 0; i < 26; i++) {
                if (node.children[i] !== null) {
                    let char = String.fromCharCode(i + 97)
                    this.Dfs(node.children[i], word + char, result)
                }

            }

        }
        Autocomplete(prefix) {
            let node = this.root
            let result = []
            for (let char of prefix) {
                let index = this.charCode(char)
                if (!node.children[index]) {
                    return result
                }
                node = node.children[index]
            }
            this.Dfs(node, prefix, result)
            return result
        }
    }
    products.sort()
    const trie = new Trie()
    for (let char of products) {
        trie.insert(char)
    }
    let ans = []
    let res = ""
    for (let char of searchWord) {
        res += char
        ans.push(trie.Autocomplete(res))
    }
    return ans

};