var currentNum = 33;

function returnInt(numString, index){
    return parseInt(numString.toString().charAt(index),10);
}


var getStep = function(num) {
	
	var arrClick = [], 
		path = [], 
		i;
	
	for (i=0; i< num.toString().length; i++){
		
		var tmpNum = 0;
        path[i] = [];
		if ( returnInt(currentNum,i) == returnInt(num,i) )
 			tmpNum = 0;
 		else if ( Math.abs( returnInt(currentNum,i) - returnInt(num,i)) <= 5){
			tmpNum = Math.abs(returnInt(currentNum,i) - returnInt(num,i));
			for (var j=0; j < tmpNum ;j++)
			{
				if (  returnInt(currentNum,i) > returnInt(num,i) )
					path[i].push(returnInt(currentNum,i) - j);
				else
					path[i].push(returnInt(currentNum,i) + j);
			}
 		}
		else {
            
			tmpNum = Math.abs(10 + returnInt(currentNum,i) - returnInt(num,i));
            for (var j=0; j < tmpNum ;j++)
			{
				if (  returnInt(currentNum,i) > returnInt(num,i) )
					path[i].push(returnInt(num,i) - j);
                else{
                    returnInt(num,i) + j >= 10 ? path[i].push(returnInt(num,i) + j -10)  : path[i].push(returnInt(num,i) + j);
                }
                     
					;
			}
		}

		console.log('clicks: ' +  tmpNum);
		console.log(path);
		arrClick.push(tmpNum);
	}

	return arrClick;
}

getStep(33); // 0
getStep(22); // 1
getStep(11); // 2
getStep(66); // 3
getStep(88); // 5
getStep(99); // 4
