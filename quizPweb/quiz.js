function changeBackgroundColor(frameNumber) {
    var frame = document.querySelectorAll('.frame')[frameNumber - 1];
    var color = generateRandomColor();
    frame.style.backgroundColor = color;
  }
  
  function generateRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }