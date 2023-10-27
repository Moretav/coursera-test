var speakWord = {};
speakWord.name = "paula";
speakWord.sayhello = function speak() {

// used this.name en consol log
console.log("hello " + this.name);

}
speakWord.sayhello();