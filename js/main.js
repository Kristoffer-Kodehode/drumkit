const ride = document.querySelector("#ride");
const hiHat = document.querySelector("#hi-hat");
const tom = document.querySelector("#tom");
const tom2 = document.querySelector("#tom2");
const hiHat2 = document.querySelector("#hi-hat2");
const ride2 = document.querySelector("#ride2");
const tom3 = document.querySelector("#tom3");
const tom4 = document.querySelector("#tom4");
const snare = document.querySelector("#snare");
const snare2 = document.querySelector("#snare2");
const snare3 = document.querySelector("#snare3");
const tom5 = document.querySelector("#tom5");
const kick = document.querySelector("#kick");
const kick2 = document.querySelector("#kick2");
const kick3 = document.querySelector("#kick3");
const kick4 = document.querySelector("#kick4");
//connect all the buttons

//sources for the sounds
const soundArray = [
  "sound/ride.wav",
  "sound/hihat.wav",
  "sound/openhat.wav",
  "sound/tom.wav",
  "sound/tom2.wav",
  "sound/hihat2.wav",
  "sound/openhat2.wav",
  "sound/ride2.wav",
  "sound/tom3.wav",
  "sound/tom4.wav",
  "sound/snare.wav",
  "sound/snare2.wav",
  "sound/snare3.wav",
  "sound/tom5.wav",
  "sound/kick.wav",
  "sound/kick2.wav",
  "sound/kick3.wav",
  "sound/kick4.wav",
];

window.addEventListener("keydown", (e) => {
  //switch case for keydowns matching the keys chosen for the buttons
  switch (e.key) {
    case "e": {
      /*make the sound element from index in the array, set volume a bit lower and play it.
     somehow this method gets around a limit of one sound being played at a time*/
      const rideSound = new Audio(soundArray[0]);
      rideSound.volume = 0.4;
      rideSound.play();
      break;
    }
    case "r": {
      const hiHatSound = new Audio(soundArray[1]);
      hiHatSound.volume = 0.4;
      hiHatSound.play();
      break;
    }
    case "R": {
      const openHatSound = new Audio(soundArray[2]);
      openHatSound.volume = 0.4;
      openHatSound.play();
      break;
    }
    case "t": {
      const tomSound = new Audio(soundArray[3]);
      tomSound.volume = 0.4;
      tomSound.play();
      break;
    }
    case "y": {
      const tom2Sound = new Audio(soundArray[4]);
      tom2Sound.volume = 0.4;
      tom2Sound.play();
      break;
    }
    case "u": {
      const hiHat2Sound = new Audio(soundArray[5]);
      hiHat2Sound.volume = 0.4;
      hiHat2Sound.play();
      break;
    }
    case "U": {
      /*keydown events distinguish between upper- and lowercase, 
      so we can use that for the open hi hats*/
      const openHat2Sound = new Audio(soundArray[6]);
      openHat2Sound.volume = 0.4;
      openHat2Sound.play();
      break;
    }
    case "i": {
      const ride2Sound = new Audio(soundArray[7]);
      ride2Sound.volume = 0.4;
      ride2Sound.play();
      break;
    }
    case "d": {
      const tom3Sound = new Audio(soundArray[8]);
      tom3Sound.volume = 0.4;
      tom3Sound.play();
      break;
    }
    case "f": {
      const tom4Sound = new Audio(soundArray[9]);
      tom4Sound.volume = 0.4;
      tom4Sound.play();
      break;
    }
    case "g": {
      const snareSound = new Audio(soundArray[10]);
      snareSound.volume = 0.4;
      snareSound.play();
      break;
    }
    case "h": {
      const snare2Sound = new Audio(soundArray[11]);
      snare2Sound.volume = 0.4;
      snare2Sound.play();
      break;
    }
    case "j": {
      const snare3Sound = new Audio(soundArray[12]);
      snare3Sound.volume = 0.4;
      snare3Sound.play();
      break;
    }
    case "k": {
      const tom5Sound = new Audio(soundArray[13]);
      tom5Sound.volume = 0.4;
      tom5Sound.play();
      break;
    }
    case "c": {
      const kickSound = new Audio(soundArray[14]);
      kickSound.volume = 0.4;
      kickSound.play();
      break;
    }
    case "v": {
      const kick2Sound = new Audio(soundArray[15]);
      kick2Sound.volume = 0.4;
      kick2Sound.play();
      break;
    }
    case "b": {
      const kick3Sound = new Audio(soundArray[16]);
      kick3Sound.volume = 0.4;
      kick3Sound.play();
      break;
    }
    case "n": {
      const kick4Sound = new Audio(soundArray[17]);
      kick4Sound.volume = 0.4;
      kick4Sound.play();
      break;
    }
    case "Shift": {
      //because we need shift for uppercase, making sure it won't do anything
      break;
    }
    default: {
      //making sure anything else won't do anything either
      break;
    }
  }
});

//click events and an alternative for the open hi hat sounds, dblclick felt less than ideal
ride.addEventListener("click", () => {
  const rideSound = new Audio(soundArray[0]);
  rideSound.volume = 0.4;
  rideSound.play();
});

hiHat.addEventListener("click", () => {
  const hiHatSound = new Audio(soundArray[1]);
  hiHatSound.volume = 0.4;
  hiHatSound.play();
});

hiHat.addEventListener("wheel", () => {
  const openHatSound = new Audio(soundArray[2]);
  openHatSound.volume = 0.4;
  openHatSound.play();
});

tom.addEventListener("click", () => {
  const tomSound = new Audio(soundArray[3]);
  tomSound.volume = 0.4;
  tomSound.play();
});

tom2.addEventListener("click", () => {
  const tom2Sound = new Audio(soundArray[4]);
  tom2Sound.volume = 0.4;
  tom2Sound.play();
});

hiHat2.addEventListener("click", () => {
  const hiHat2Sound = new Audio(soundArray[5]);
  hiHat2Sound.volume = 0.4;
  hiHat2Sound.play();
});

hiHat2.addEventListener("wheel", () => {
  const openHat2Sound = new Audio(soundArray[6]);
  openHat2Sound.volume = 0.4;
  openHat2Sound.play();
});

ride2.addEventListener("click", () => {
  const ride2Sound = new Audio(soundArray[7]);
  ride2Sound.volume = 0.4;
  ride2Sound.play();
});

tom3.addEventListener("click", () => {
  const tom3Sound = new Audio(soundArray[8]);
  tom3Sound.volume = 0.4;
  tom3Sound.play();
});

tom4.addEventListener("click", () => {
  const tom4Sound = new Audio(soundArray[9]);
  tom4Sound.volume = 0.4;
  tom4Sound.play();
});

snare.addEventListener("click", () => {
  const snareSound = new Audio(soundArray[10]);
  snareSound.volume = 0.4;
  snareSound.play();
});

snare2.addEventListener("click", () => {
  const snare2Sound = new Audio(soundArray[11]);
  snare2Sound.volume = 0.4;
  snare2Sound.play();
});

snare3.addEventListener("click", () => {
  const snare3Sound = new Audio(soundArray[12]);
  snare3Sound.volume = 0.4;
  snare3Sound.play();
});

tom5.addEventListener("click", () => {
  const tom5Sound = new Audio(soundArray[13]);
  tom5Sound.volume = 0.4;
  tom5Sound.play();
});

kick.addEventListener("click", () => {
  const kickSound = new Audio(soundArray[14]);
  kickSound.volume = 0.4;
  kickSound.play();
});

kick2.addEventListener("click", () => {
  const kick2Sound = new Audio(soundArray[15]);
  kick2Sound.volume = 0.4;
  kick2Sound.play();
});

kick3.addEventListener("click", () => {
  const kick3Sound = new Audio(soundArray[16]);
  kick3Sound.volume = 0.4;
  kick3Sound.play();
});

kick4.addEventListener("click", () => {
  const kick4Sound = new Audio(soundArray[17]);
  kick4Sound.volume = 0.4;
  kick4Sound.play();
});
