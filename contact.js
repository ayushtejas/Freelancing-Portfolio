// function SubForm (){
//   $.ajax({
//     url:"https://api.apispreadsheets.com/data/13451/",
//     type:"post",
//     data:$("#form").serializeArray(),
//     success: function(){
//       alert("Form Data Submitted :)")
//     },
//     error: function(){
//       alert("There was an error :(")
//     }
//   });
// }
// $('.btn').click(SubForm());
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
// $('.btn').click(function(){
//   window.location.href='resume.html'
// });
