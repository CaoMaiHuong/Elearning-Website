$( document ).ready(function() {
    $('#addCourse').click(function(){        
        $('#openModalAddCourse').modal('show');
    });
    $('.menu-action').click(function(){        
        $(this).siblings('.list-action').toggleClass('active');
    });
    $('.avartar').click(function(){        
        $('.menu-down').toggleClass('active');
    });
});