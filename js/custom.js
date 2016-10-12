menu = {};
menu.ready = function() {
  var $menuItem = $('.menu a.item, .menu .link.item'),
    handler = {
      activate: function() {
        $(this).addClass('active').closest('.ui.menu').find('.item').not($(this)).removeClass('active');

      }
    };
  $menuItem.on('click', handler.activate) ;
};
$(document).ready(menu.ready);
function submit(){
  var elem = document.getElementsByClassName("rw");
  $.ajax({
        url: "/contact/" ,  //Dummy URL
        type: "POST",
        data: {
          name:elem[0].value,
          email:elem[1].value,
          subject:elem[2].value,
          message:elem[3].value
        },
        //For authorisation
        // headers: {
        //     'Authorization': 'Token '+token
        // },
});
   alert("Thank You for contacting");
}
