var currentNum = 33;

var getStep = function(num) {
	
	var arrClick = [], 
		path = [], 
		i;
	
	for (i=0; i< num.toString().length; i++){
		
		var tmpNum = 0;
        path[i] = [];
		if (currentNum.toString().charAt(i) == num.toString().charAt(i))
 			tmpNum = 0;
 		else if ( Math.abs(parseInt(currentNum.toString().charAt(i),10) - parseInt(num.toString().charAt(i),10)) <= 5){
			tmpNum = Math.abs(parseInt(currentNum.toString().charAt(i),10) - parseInt(num.toString().charAt(i),10));
			for (var j=0; j < tmpNum ;j++)
			{
				if ( parseInt(currentNum.toString().charAt(i),10) > parseInt(num.toString().charAt(i),10) )
					path[i].push(parseInt(currentNum.toString().charAt(i),10) - j);
				else
					path[i].push(parseInt(currentNum.toString().charAt(i),10) + j);
			}
 		}
		else {

			tmpNum = Math.abs(10 + parseInt(currentNum.toString().charAt(i),10) - parseInt(num.toString().charAt(i),10));

			
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

