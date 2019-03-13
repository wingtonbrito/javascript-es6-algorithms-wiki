class Tries {
  constructor() {
   this.root = new TrieNode(null);
  }

 insert(w) {
  const tmp = this.root;
  
  for(let i = 0; i < w.length; i++){ 
   if(!tmp.children[w[i]]) {
     tmp[w[i]] = new TrieNode(w[i], tmp);
   }
   tmp = tmp.children[w[i]];
   if (i === w.length -1) tmp.end = true;
  }
  
 } 
 
 contain(word) {
  let tmp = this.root;
  
  for(let i = 0; i < word.length; i++){
   if(!tmp.children[word[i]]) return false;
   tmp = tmp.children[word];
  }
  return tmp.end;
 }
 
 //Find all with prefix
 find(prefix) {
  let tmp = this.root;
  let output = [];

  for(let i = 0; i < prefix.length; i++){
   if(!tmp.children[prefix[i]]) return output;
  }
  this.allWords(node, output);

  return output;

 }
 
 allWords(node, output) {
  if (node.end) {
   output.push(node.getWord());
  }
  for(let child in node.children) {
   this.allWords(node.children[child], output);
  }
 }
}

module.exports = Tries;