var countBs = function(string) {
  return countChar(string, "B");
}

var countChar = function(string, char) {
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

console.log(countBs("BBBBxxxxx"))
