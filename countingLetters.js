function countLetters(str) {
   
  var res = str.toLowerCase().split("");
   var  count = [];
   
 
  res.forEach(function(i) { count[i] = (count[i]||0) + 1;});
   console.log(count);
   
  }
  countLetters("hello");