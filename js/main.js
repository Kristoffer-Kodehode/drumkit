const drum1 = document.querySelector("#sound-btn1");
const drum2 = document.querySelector("#sound-btn2");
const drum3 = document.querySelector("#sound-btn3");
const drum4 = document.querySelector("#sound-btn4");
const drum5 = document.querySelector("#sound-btn5");
const drum6 = document.querySelector("#sound-btn6");
const drum7 = document.querySelector("#sound-btn7");
const drum8 = document.querySelector("#sound-btn8");
const drum9 = document.querySelector("#sound-btn9");
const drum10 = document.querySelector("#sound-btn10");
const drum11 = document.querySelector("#sound-btn11");
const drum12 = document.querySelector("#sound-btn12");
const drum13 = document.querySelector("#sound-btn13");
const drum14 = document.querySelector("#sound-btn14");
const drum15 = document.querySelector("#sound-btn15");
const drum16 = document.querySelector("#sound-btn16");

const clapSound = new Audio("sound/clap.wav");
const hiHatSound = new Audio("sound/hiHat.wav");
const hiHat2Sound = new Audio("sound/hiHat2.wav");
const kickSound = new Audio("sound/kick.wav");
const kick2Sound = new Audio("sound/kick2.wav");
const kick3Sound = new Audio("sound/kick3.wav");
const kick4Sound = new Audio("sound/kick4.wav");
const openHatSound = new Audio("sound/openHat.wav");
const openHat2Sound = new Audio("sound/openHat2.wav");
const rideSound = new Audio("sound/ride.wav");
const ride2Sound = new Audio("sound/ride2.wav");
const snareSound = new Audio("sound/snare.wav");
const snare2Sound = new Audio("sound/snare2.wav");
const snare3Sound = new Audio("sound/snare3.wav");
const tomSound = new Audio("sound/tom.wav");
const tom2Sound = new Audio("sound/tom2.wav");
const tom3Sound = new Audio("sound/tom3.wav");
const tom4Sound = new Audio("sound/tom4.wav");
const tom5Sound = new Audio("sound/tom5.wav");
const testSound = new Audio("sound/test.wav");

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "e": {
      rideSound.play();
      break;
    }
    case "r": {
      hiHatSound.play();
      break;
    }
    case "R": {
      openHatSound.play();
      break;
    }
    case "t": {
      tomSound.play();
      break;
    }
    case "y": {
      tom2Sound.play();
      break;
    }
    case "u": {
      hiHat2Sound.play();
      break;
    }
    case "U": {
      openHat2Sound.play();
      break;
    }
    case "i": {
      ride2Sound.play();
      break;
    }
    case "d": {
      tom3Sound.play();
      break;
    }
    case "f": {
      tom4Sound.play();
      break;
    }
    case "g": {
      snareSound.play();
      break;
    }
    case "h": {
      snare2Sound.play();
      break;
    }
    case "j": {
      snare3Sound.play();
      break;
    }
    case "k": {
      tom5Sound.play();
      break;
    }
    case "c": {
      kickSound.play();
      break;
    }
    case "v": {
      kick2Sound.play();
      break;
    }
    case "b": {
      kick3Sound.play();
      break;
    }
    case "n": {
      kick4Sound.play();
      break;
    }
    case "Shift": {
      break;
    }
    /*case "Dead": {
      testSound.play();
      break;
    }*/
    default: {
      clapSound.play();
    }
  }
});

drum1.addEventListener("click", () => {
  rideSound.play();
});

drum2.addEventListener("click", () => {
  hiHatSound.play();
});

drum2.addEventListener("dblclick", () => {
  openHatSound.play();
});

drum3.addEventListener("click", () => {
  tomSound.play();
});

drum4.addEventListener("click", () => {
  tom2Sound.play();
});

drum5.addEventListener("click", () => {
  hiHat2Sound.play();
});

drum5.addEventListener("dblclick", () => {
  openHat2Sound.play();
});

drum6.addEventListener("click", () => {
  ride2Sound.play();
});

drum7.addEventListener("click", () => {
  tom3Sound.play();
});

drum8.addEventListener("click", () => {
  tom4Sound.play();
});

drum9.addEventListener("click", () => {
  snareSound.play();
});

drum10.addEventListener("click", () => {
  snare2Sound.play();
});

drum11.addEventListener("click", () => {
  snare3Sound.play();
});

drum12.addEventListener("click", () => {
  tom5Sound.play();
});

drum13.addEventListener("click", () => {
  kickSound.play();
});

drum14.addEventListener("click", () => {
  kick2Sound.play();
});

drum15.addEventListener("click", () => {
  kick3Sound.play();
});

drum16.addEventListener("click", () => {
  kick4Sound.play();
});
