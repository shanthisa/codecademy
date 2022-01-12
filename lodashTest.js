let _ = {
    clamp(number, lbound, ubound) {
      number = Math.max(lbound, number);
      number = Math.min(number, ubound);
      return number;
    },
    inRange(number, start, end) {
       if (!end) {
         end = start;
         start = 0;
       }
       if (start > end) {
         let swap = end;
         end = start;
         start = swap;
       }
       if (number < start || number >= end) return false;
       else return true;
    },
    words(str) {
      let wordArray = str.split(' ');
      return wordArray;
    },
    pad(str, len) {
      let strLen = str.length;
      let diff = len - strLen;
      console.log('string is ' + str + ' len is ' + len);
      if (diff > 0) {
        let frontSpaces = ' '.repeat(Math.floor(diff/2));
        let rearSpaces = ' '.repeat(Math.ceil(diff/2));
      str = frontSpaces + str + rearSpaces;
    }
    console.log('result is:', str, '.');
    return str;
    },
  
    has(obj, key) {
      console.log('obj ' + obj + ' key ' + obj[key]);
  
      if(obj[key] !== undefined) {
        return true;
      }
      else return false;
    },
    invert(obj) {
       let newObj = {};
      for (key in obj) {
        //let newVal = key;
       // let newKey = obj[key];
        //Object.defineProperty(newObj, newKey, {
    //value: newVal,});
        //newObj[newKey] = newVal;
        newObj[obj[key]] = key;
      }
      return newObj;
    },
  
    findKey(obj, fn) {
      
      for (key in obj) {
        console.log(obj[key], fn);
        if (fn(obj[key])) return key;
      }
      return undefined;
    },
  
    //array methods
    drop(arr, num) {
      /*arr.shift();
      for (i = 0; i < num-1; i ++) {
        arr.shift();
      } */
      let i = 0;
      do {
        arr.shift();
        i++;
      } while (i < num);
      return arr;
    },
  
    dropWhile(arr, predicateFn) {
      let newArr = arr;
      for(i=0; i < newArr.length; i ++) {
        
        if(!predicateFn(newArr[i], i, newArr)) {
          newArr.shift();
          return newArr;
        }
        newArr.shift();
      }
    },
  
    chunk(arr, size) {
      let retArr = [];
      let newArr = [];
       for (i=0; i < arr.length; i++) {
         newArr.push(arr[i])
          if (newArr.length === size || i === arr.length-1) {
            retArr.push(newArr); 
            newArr = [];
            } 
       }
       return retArr;
    },
  
  }
  
  // Do not write or modify code below this line.
  module.exports = _;