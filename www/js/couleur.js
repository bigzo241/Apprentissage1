
$(function(){
    // activation du plugin bootnavbar
    $('#main_navbar').bootnavbar();


    var largeur = $(".imgCard").width();
    $(".imgCard").height(largeur);

    var largeur = $(".myCardImg").width();
    $(".myCardImg").height(largeur);

    // ajout de l'ombre au composant card a son survol
    $(".myCard").mouseover(function(){
        $(this).addClass("shadow-lg");
    })

    // suppression de l'ombre a la fin de son survol
    $(".myCard").mouseout(function(){
        $(this).removeClass("shadow-lg");
    })

    $(".myCardImg + div").width(largeur);

    // retressissement de mon composant card au survol de la souris
    $(".myCardImg").mouseover(function(){
        $(".myCard").animate({
            // overflow: 'hidden',
            height: '-=100'
        }, 2000 );
    })

    // reprise de la taille normal de mon composant card a la fin du survol
    $(".myCardImg").mouseout(function(){
        $(".myCard").animate({
            // overflow: 'hidden',
            height: '+=100'
        }, 500 );
    })

    setTimeout(function(){
        $(".myCardImg + div").slideDown();
    }, 1500)
})