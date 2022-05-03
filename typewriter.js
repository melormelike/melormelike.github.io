var pos = 0;
var turn = 0;
var data = ['full stack developer','part time traveller','coffee lover'];
var speed = 200;
// console.log(document.querySelector("typewriter"))
// function display() {
//   new Typewriter('#typewriter', {
//     strings: ['Hello', 'World'],
//     autoStart: true,
//   });
// }
// display()
// console.log("in typewriter")
// setTimeout(typeWriter, speed);

function typeWriter() {
  // console.log(document.getElementById("demo"))
  if (pos < data[turn].length) {
    document.getElementById("demo").innerHTML += data[turn].charAt(pos);
    console.log(data[turn].charAt(pos));
    pos++;
    setTimeout(typeWriter, speed);
  } else {
  	setTimeout(erase, speed+100);
  }
}

function erase() {
	if (pos >= 0) {
      var str=data[turn].toString().substring(0, pos);
      document.getElementById("demo").innerHTML = str;
      pos--;
      setTimeout(erase, speed-100);
    } else {
      turn++;
      if(turn>=data.length)
        turn=0;
      setTimeout(typeWriter, speed);
    }
}
typeWriter()
erase()
