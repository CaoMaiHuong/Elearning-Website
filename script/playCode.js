$( document ).ready(function() {
    $('.item__title-icon').click(function(){        
        $(this).parent().siblings().find('.input-add').toggleClass('active');
    });
    $('.sublist-item__name').dblclick(function(){  
        var currentName = $(this).html().trim();  
        $(this).replaceWith("<div class='sublist-item__name'><input type='text' name = 'name' value='"+currentName+"'></div>" );
    //    console.log($(this).html());
            
        // $(this).html().replace("dfdfdf")
        // <input type='text' name = 'name' value='"+currentName+">";
    });
    
    // document.getElementById("demo").innerHTML = "Hello World";

});