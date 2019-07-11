var repeatString = function(word, times) {
    let string = '';
    for (var i = 0; i<times; i++){
        string+=word;
    }
    return string;
  }
  
  module.exports = repeatString