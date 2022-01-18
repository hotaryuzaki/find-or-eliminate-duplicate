# find-or-eliminate-duplicate
find duplicate alphabet function or eliminate duplicate alphabet function, i provide some functions so you can pick one you prefer.

you can copy this or download from index.js

```
function findDup(str) {
    let arr = str.split('');
    let strCount = {};
    let arrDup = [];
    
    arr.map((value) => {
    	strCount[value] = strCount[value] ? strCount[value]+1 : 1;
    })
    
    for(abjad in strCount) {
    	if(strCount[abjad] > 1) {
        arrDup.push(abjad);
      }
    }
    
    return arrDup.sort().join().replaceAll(',', '');
}

function findDup2(words){
    let duplicate_word = []
    for(let i = 0; i < words.length; i++){
      if(duplicate_word.indexOf(words[i]) < 0 && words.indexOf(words[i], i+1) >=0)
        duplicate_word.push(words[i])
    }
    
    return duplicate_word.sort().join().replace(/,/g,'')
}

function findDup3(input) {
    let arrayString = {}
    input.split('').map(item => arrayString[item] = arrayString[item] ? arrayString[item]+1 : 1) 
    return Object.keys(arrayString).filter(item => arrayString[item] > 1).sort().join().replaceAll(',','')
}

function eliDup(str) {
    let arr = str.split('');
    let arrEli = [];
    
    arr.map((value) => {
    	if(arrEli.indexOf(value) === -1) {
          arrEli.push(value);
        }
    })
    
    return arrEli.sort().join().replaceAll(',', '');
}
```
