# find-or-eliminate-duplicate
find duplicate alphabet function or eliminate duplicate alphabet function

just change function call in button (find or eliminate)

```
<!DOCTYPE html>
<html>
<body>

<h2>find or eliminate duplicate</h2>

<button type="button" onclick="findDup(document.getElementById('demo').innerHTML)">
  find/eliminate duplicate
</button>

<p id="demo">BCADEABD</p>

<script>
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
    
    document.getElementById('demo').innerHTML = arrDup.sort().join().replaceAll(',', '');
}

function findDup2(words){
    let duplicate_word = []
    for(let i = 0; i < words.length; i++){
      if(duplicate_word.indexOf(words[i]) < 0 && words.indexOf(words[i], i+1) >=0)
        duplicate_word.push(words[i])
    }
    
    document.getElementById('demo').innerHTML = duplicate_word.sort().join().replace(/,/g,'')
}

function findDup3(input) {
	let arrayString = {}
	input.split('').map(item => arrayString[item] = arrayString[item] ? arrayString[item]+1 : 1) 
	document.getElementById('demo').innerHTML = Object.keys(arrayString).filter(item => arrayString[item] > 1).sort().join().replaceAll(',','')
}

function eliDup(str) {
    let arr = str.split('');
    let arrEli = [];
    
    arr.map((value) => {
    	if(arrEli.indexOf(value) === -1) {
          arrEli.push(value);
        }
    })
    
    document.getElementById('demo').innerHTML = arrEli.sort().join().replaceAll(',', '');
}
</script>
</body>
</html> 
```
