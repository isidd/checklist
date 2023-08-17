/*
    Factory design pattern 
        - factory allow us to handle all of the object creation from a centralized location
        - Instead of using new key word we use a function or method to do it for us
        - https://youtu.be/sJ-c3BA-Ypo 
 */

class IOSButton {
  constructor(width) {
    this.width = width;
    this.name = "ios";
  }
}

class AndroidButton {
  constructor(width) {
    this.width = width;
    this.name = "android";
  }
}

class ButtonFactory {
  createButton(type, width) {
    switch (type) {
      case "ios":
        return new IOSButton(width);
      case "android":
        return new AndroidButton(width);
      default:
        return new IOSButton(width);
    }
  }
}

const button = new ButtonFactory();
let b1 = button.createButton("ios");

console.log({ b1 });
