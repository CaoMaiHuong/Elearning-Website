$( document ).ready(function() {
    $('.item__title-icon').click(function(){        
        $(this).parent().siblings().find('.input-add').toggleClass('active');
    });
});