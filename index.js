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
