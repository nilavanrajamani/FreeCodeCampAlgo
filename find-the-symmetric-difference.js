function sym(args) {

  var symArray = new Array();

  for(var k = 0; k< arguments.length; k++){     
     
    if(k === 0){
      symArray = arguments[0];
    }

    if(arguments[k+1]){        
      symArray = getSymmetricDiff(symArray, arguments[k+1]);
    }
  }      
    console.log(symArray);
    return symArray;
}

function getSymmetricDiff(set1, set2){
    var symArray = new Array(); 

    for(var i=0; i< set1.length; i++){    
      if(!(set2.indexOf(set1[i]) > -1)){
        if(!(symArray.indexOf(set1[i]) > -1)){
          symArray.push(set1[i]);
        }
      }
  }

  for(var j=0; j< set2.length; j++){
    if(!(set1.indexOf(set2[j]) > -1)){
        if(!(symArray.indexOf(set2[j]) > -1)){
          symArray.push(set2[j]);
        }
      }
    }

    return symArray;
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
