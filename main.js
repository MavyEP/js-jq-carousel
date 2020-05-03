//quando si clicca il next l immagine sul display deve cambiare in ordine crescente rispetto all html

//mettere il click nella classe next
$('.next').click(function() {
  //prendo l'immagine con la classe active ovvero quella visibile sullo schermo
  var img_visibile = $('.active');
   //console.log(img_visibile);
  //rimuovo la classe active dall'immagine
  img_visibile.removeClass('active');
  //prendo l'immagine successiva a quella che aveva active
  var img_prossima = img_visibile.next('img');
   //console.log(img_prossima);
  //creo un if per vedere come comportarsi se le immagini finiscono
  if (img_prossima.length == 0) {
    img_prossima = $('.slide img:first-child');
    img_prossima.addClass('active');
    // console.log('testentrata');
    //se siamo arrivati all'ultima immagine rinizia da capo
  } else {
    img_prossima.addClass('active');
    // console.log('testentrata');
    //passiamo alla prossima immagine aggiungendo la classe active
  }
});

//mettere il click nella classe prev
$('.prev').click(function() {
  //prendo l'immagine con la classe active ovvero quella visibile sullo schermo
  var img_visibile = $('.active');
   //console.log(img_visibile);
  //rimuovo la classe active dall'immagine
  img_visibile.removeClass('active');
  //prendo l'immagine precedente a quella che aveva active
  var img_precedente = img_visibile.prev('img');
   //console.log(img_prossima);
  //creo un if per vedere come comportarsi se le immagini finiscono
  if (img_precedente.length == 0) {
    img_precedente = $('.slide img:last-child');
    img_precedente.addClass('active');
    // console.log('testentrata');
    //se siamo arrivati all'ultima immagine rinizia dala fine
  } else {
    img_precedente.addClass('active');
    // console.log('testentrata');
    //passiamo alla prossima immagine(precedente) aggiungendo la classe active
  }
});
