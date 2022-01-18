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
