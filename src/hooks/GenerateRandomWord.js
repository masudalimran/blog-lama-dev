function generateWord(wordCount) {
  var text = "";
  var possibleVowel = "aeiou";
  var possibleConsonant = "bcdfghjklmnpqrstvwxyz";

  for (var i = 0; i < wordCount; i++) {
    if (i % 5 === 0) {
      text += " ";
    }
    if (i === 0) {
      text += possibleConsonant
        .charAt(Math.floor(Math.random() * possibleConsonant.length))
        .toUpperCase();
    } else if (i % 2 === 0) {
      text += possibleConsonant.charAt(
        Math.floor(Math.random() * possibleConsonant.length)
      );
    } else {
      text += possibleVowel.charAt(
        Math.floor(Math.random() * possibleVowel.length)
      );
    }
  }
  return text;
}

// console.log(generateWord(12));
export default generateWord;
