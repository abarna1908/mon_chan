$('#gallery-modal').on('show.bs.modal', function (e) {
  console.log("modal opened");
   
    var button = $(e.relatedTarget);
    console.log(button);
  var slideNumber = button.data('slide');
    console.log("slidenumber:" + slideNumber);
})