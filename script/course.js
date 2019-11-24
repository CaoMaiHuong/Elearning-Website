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

    //create
    $("#fileUpload").on('change', function () {
        //Getcount of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var image_holder = $("#image-holder");
        image_holder.empty();
        if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof (FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles;i++) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $("<img />",{
                            "src":e.target.result,
                            "class": "thumb-image"
                        }).appendTo(image_holder);
                    }
                   image_holder.show();
                   reader.readAsDataURL($(this)[0].files[i]);
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            alert("Please select only images");
        }
    });
//edit
    $("#edit-fileUpload").on('change', function () {
        //Getcount of selected files
        var countFiles = $(this)[0].files.length;
        var imgPath = $(this)[0].value;
        var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
        var image_holder = $("#edit-image-holder");
        image_holder.empty();
        if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
            if (typeof (FileReader) != "undefined") {
                //loop for each file selected for uploaded.
                for (var i = 0; i < countFiles;i++) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $("<img />",{
                            "src":e.target.result,
                            "class": "thumb-image"
                        }).appendTo(image_holder);
                    }
                   image_holder.show();
                   reader.readAsDataURL($(this)[0].files[i]);
                }
            } else {
                alert("This browser does not support FileReader.");
            }
        } else {
            alert("Please select only images");
        }
    });
});