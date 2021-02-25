var typewriter = new Typewriter("#terminal", {
    cursor: "▌",
  loop: true,
  delay: 75,
  deleteSpeed: 30
});

typewriter
  .pauseFor(2500)
  .typeString('I\'m a <strong>self-taught<span style="color: #ff79c6"> Designer</span></strong>')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('<strong><span style="color: #ff79c6">Developer</span></strong> with a passion for learning. ')
  .pauseFor(1000)
  .deleteAll()
  .typeString('I\'m currently focusing on <strong><span style="color:#ff79c6">Web-Development</span>.</strong>')
  .pauseFor(600)
  .typeString('<br><br>I hope to bring <strong>your <span style="color: #50fa7b">Web-Ideas</span> to life!</strong>')
  .pauseFor(2000)
  .start();