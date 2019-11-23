$( document ).ready(function() {
    $('.menu-action').click(function(){        
        $(this).siblings('.list-action').toggleClass('active');
    });
    
});