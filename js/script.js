$(document).ready(function () {
    $("#hamburger-icon").on("click", function (e) {
      e.preventDefault();
      $(".toggle-list").slideToggle();
    });
  });
  
