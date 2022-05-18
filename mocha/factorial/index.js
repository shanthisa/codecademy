const Calculate = {
    factorial(num){
      let result = 1;
      while(num > 1) {
        result *=num;
        num--;
      }
      return result;
    }
  }
  
  module.exports = Calculate;
  
  
  