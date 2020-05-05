
var clock = setInterval(autoplay, 1000);

//mettere il click nella classe next
$('.next').click(function() {
  clearInterval(clock);
  autoplay();
});

//mettere il click nella classe prev
$('.prev').click(function() {
  clearInterval(clock);
  var img_visibile = $('.active');
  img_visibile.removeClass('active');
  var img_precedente = img_visibile.prev('img');
  if (img_precedente.length == 0) {
    img_precedente = $('.slide img:last-child');
    img_precedente.addClass('active');
  } else {
    img_precedente.addClass('active');
  }
});

//creo la funzione che mi fa muovere le immagini in modo crescente (1,2,3...)
function autoplay() {
  var img_visibile = $('.active');
  img_visibile.removeClass('active');
  var img_prossima = img_visibile.next('img');
  if (img_prossima.length == 0) {
    img_prossima = $('.slide img:first-child');
    img_prossima.addClass('active');
  } else {
    img_prossima.addClass('active');
  }
};

$(".slider .rotation_possibilities  img").click(function() {
    clearInterval(clock);
    var img_visibile = $(".active");
    var padre = $(this).parent();
    console.log(padre);
    if (padre.hasClass("imgcontainerleft")) {
      var parametro = $(this).index();
      console.log("left");
    } else {
          var immagini_sinistra = $(".imgcontainerleft > img").length;
          var parametro = $(this).index() + immagini_sinistra;
          console.log("right");
    }
    img_visibile.removeClass("active");
     $(".slider .slidercontent .slide img").eq(parametro).addClass("active")
   }
)
