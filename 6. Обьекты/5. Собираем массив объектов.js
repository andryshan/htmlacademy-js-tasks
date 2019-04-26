const getData = function(keysArray, arrayOfDataArrays) {
  let array = [];
  for (let i = 0; i < arrayOfDataArrays.length; i++) {
    let obj = {};
    for (let j = 0; j < keysArray.length; j++) {
      if (arrayOfDataArrays[i][j]){
      obj[keysArray[j]] = arrayOfDataArrays[i][j];
      }
    }
    array.push(obj);
  }
  return array;
}
getData(["name","growth","weight","age"], [["Пётр","165","70"],["Василий","170"],["Светлана"]]);