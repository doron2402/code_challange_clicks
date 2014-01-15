var currentNum = 33,
	badPath = 66;

function returnInt(numString, index){
    return parseInt(numString.toString().charAt(index),10);
}

function checkIfDestinationIsSafe(num, index){
	if (num == returnInt(badPath,index))
		return false;
}

var getStep = function(num) {
	
	var arrClick = [], 
		path = [], 
		i;
	
	

	for (i=0; i< num.toString().length; i++){
		
		if (!checkIfDestinationIsSafe(num,i)){
			throw 'Can\'t go there!';
		}


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
                    
			}
		}

		if (!checkIfPathIsSafe(path[i],returnInt(badPath,i))){
			//try another path
			console.log('try new path');
			tryDifferentPath(path[i]);
		}

		console.log('clicks: ' +  tmpNum);
		console.log(path);
		arrClick.push(tmpNum);
	}

	return arrClick;
}


function checkIfPathIsSafe(path, badNum){
	if (path.indexOf(badNum) > -1){

		console.log('not safe');
		return false;
	}
	else{

		console.log('safe');
		return true;
	}
}

function tryDifferentPath(path){
	var firstEl = path[0],
		lastEl = path[path.length-1],
		newPath = [];

	if ( (path[1] - path[0]) > 0) {
		for (var i = firstEl; i < (lastEl + 10); i++) {
			newPath.push((i % 10));
		};
	}
	else { 
		for (var i = firstEl; i < path.length; i++) {
			newPath.push(i);
		};
	}

	console.log(newPath);
	return newPath;


}

getStep(33); // 0
getStep(22); // 1
getStep(11); // 2
getStep(66); // 3
getStep(88); // 5
getStep(99); // 4
