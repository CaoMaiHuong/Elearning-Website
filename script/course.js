$( document ).ready(function() {
    $('.openExercise').click(function(){        
        $('#myModal').modal('show');
    });
    $('.menu-action').click(function(){        
        $(this).siblings('.list-action').toggleClass('active');
    });
    $('.openAddExercise').click(function(){        
        $('#openModalAddExercise').modal('show');
    });
    $('.openEditExercise').click(function(){        
        $('#openModalEditExercise').modal('show');
    });
});