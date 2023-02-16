// phàn contact


// var index = 1;
// function RunImage() {
//   var imgs = [
//     "contact.jpg",
//     "compétance.jpg",
//     "travail.jpg",
//     "examen.png",
//     "hobbies.jpg"
//   ];
//   document.getElementById("img").src = imgs[index];
//   index++;
//   if (index == 5) {
//     index = 0;
//   }
// }
// setInterval(RunImage, 6000);




var index = 1;
function changeImage() {
  var imgs = [ "contact.jpg",  "compétance.jpg",  "travail.jpg", "examen.png", "hobbies.jpg"];
  
  document.getElementById("img").src = imgs[index];
  index++;
  if (index == 5) {
    index = 0;
    
  }
}
setInterval(changeImage, 4000);
