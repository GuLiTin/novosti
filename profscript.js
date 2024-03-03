/*var btn = document.querySelector("button");
var videoBox = document.querySelector("div");

btn.onclick = function () {
  vspliv();
};
function vspliv() {
  if (videoBox.getAttribute("class") === "hidden") {
    videoBox.setAttribute("class", "showing");
  }else{
    videoBox.addEventListener("click", function () {
        videoBox.setAttribute("class", "hidden");
      });
  }
}*/



//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_bottom пример
//мой профиль

/*function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
*/
/*
let openBox=document.querySelector('button[class="h"]');
let box=document.querySelector('.forma-hide');

openBox.addEventListener('click', () => {
  if (box.style.display == "none") {
     box.style.display = "block";
} else {
     box.style.display = "none";
}
});
*/

/*function openAb(){
  var formHid =document.getElementsByClassName("forma-hide");
  formHid.style.display="block";
}

style="display:none;" в html добавить для формы
*/

document.querySelector('button').addEventListener('click', function() {
  document.getElementById('one').classList.toggle("hidden");
})