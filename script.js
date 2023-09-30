// script.js
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  
  if (name === "" || email === "" || phone === "") {
    alert("Vui lòng điền đầy đủ thông tin.");
    return false;
  }
  
  if (!/^\d{10}$/.test(phone)) {
    alert("Số điện thoại phải có đúng 10 chữ số.");
    return false;
  }
  
  return true;
}

// script.js
$(document).ready(function() {
  // Hiệu ứng cho phần tử có class "text-frame"
  $(".text-frame").hover(function() {
    $(this).toggleClass("highlight");
  });

  // Hiệu ứng cho phần tử có class "blinking-text"
  $(".blinking-text").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500);
});
