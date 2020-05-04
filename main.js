
var clock = setInterval(test, 1000);

//mettere il click nella classe next
$('.next').click(function() {
  clearInterval(clock);
  test();
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
function test() {
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

$(".slider .rotation_possibilities .imgcontainerleft img").click(function() {
    clearInterval(clock);
    var img_visibile = $(".active");
    var parametro = $(this).index();
    img_visibile.removeClass("active");
     $(".slider .slidercontent .slide img").eq(parametro).addClass("active")
   }
)

$(".slider .rotation_possibilities .imgcontainerright img").click(function() {
    clearInterval(clock);
    var img_visibile = $(".active");
    console.log(img_visibile);
    var parametro = $(this).index() + 16;
    console.log(parametro);
    img_visibile.removeClass("active");
     $(".slider .slidercontent .slide img").eq(parametro).addClass("active").shineImage();
   }
)
