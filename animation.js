// phàn contact


var index = 1;
function RunImage() {
  var imgs = [
    "./media/img/contact.jpg",
    "./media/img/compétance.jpg",
    "./media/img/travail.jpg",
    "./media/img/examen.png",
    "./media/img/hobbies.jpg"
  ];
  document.getElementById("img").src = imgs[index];
  index++;
  if (index == 5) {
    index = 0;
  }
}
setInterval(RunImage, 6000);




var index = 1;
function changeImage() {
  var imgs = [ "./media/img/contact.jpg",  "./media/img/compétance.jpg",  "./media/img/travail.jpg", "./media/img/examen.png", "./media/img/hobbies.jpg"];
  
  document.getElementById("img").src = imgs[index];
  index++;
  if (index == 5) {
    index = 0;
  }
}
setInterval(changeImage, 6000);