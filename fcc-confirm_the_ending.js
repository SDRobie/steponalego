function confirmEnding(str, target) {
  return str.substr(-target.length)===target;
}

confirmEnding("Bastian", "n");

//substr() returns characters as a string beginning at a specified location
// -target.length doesn't make any sense, but there you go.
