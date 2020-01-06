$(function() {

  $(".eat-burger").on("click", function(event) {
      event.preventDefault();

      var toastHTML = '<span>Yum!</span>';
      M.toast({ html: toastHTML, classes: 'rounded', displayLength: 1000 });

      var id = $(this).data("id");

      $.ajax("/api/burgers/" + id, {
          type: "PUT"
      }).then(
          function() {
              location.reload();
          }
      );
  });


  $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
          burger_name: $("#bg").val().trim()
      };

      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(
          function() {
              $("#bg").val("");

              location.reload();
          }
      );
  });



});

$(document).ready(function() {
  $('.tooltipped').tooltip();
});