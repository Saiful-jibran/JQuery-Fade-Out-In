// JQuery Code

$ ( function () {

// Fade Out

        $(`.hide`).click( function (){

        $(`.box`).fadeOut(1500) 

    })

// Fade In

    $(`.show`).click( function (){

    $(`.box`).fadeIn(1500)

   })

// Fade Toggle

    $(`.toggle`).click(function(){ 
    
    $(`.box`).fadeToggle(1500)
    })

});