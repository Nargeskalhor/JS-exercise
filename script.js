"use strict";
const sentence = "The quick brown fox jumps over the lazy dog";

let words = sentence.split(" ");

const reversedWords = words.map((word) => word.split("").reverse().join(""));

const reversedSentence = reversedWords.reverse().join(" ");

console.log(reversedSentence);
