$('#submit').click(function () {

  var encodedStr = document.getElementsByName("fname")[0].value.toUpperCase();
  
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; 
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  for (var i = 0; codeArr.length > i; i++) {

    var code = codeArr[i].charCodeAt(0);

    if (code >= 65 && code <= 90) {
      var position = letters.indexOf(codeArr[i]);
      var newLetter = letters.charAt(position-13);
      
      if (position-13<0){
        newLetter = letters.charAt(position+13);
      }
      
      decodedArr.push(newLetter);
      
    } else {
      decodedArr.push(codeArr[i]);
    }
    
  }
  
  var output = decodedArr.join(""); 
  

  // jquery selector to output the text
  $('#output').html(output);
  $("#fname").html('');

});