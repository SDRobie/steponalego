function palindrome(str) {
  var x = /[\W_]/g; // \W removes non-alphanum, _ exception for this test, g for global
  var lowRep = str.toLowerCase().replace(x, ''); //replace with new string
  var revString = lowRep.split('').reverse().join('');
  return revString === lowRep; //is it a palindrome?
}



console.log(palindrome("race car"));
