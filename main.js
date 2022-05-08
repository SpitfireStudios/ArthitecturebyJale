$(".gallerygrid").click(function() {
    $("#gallerymain").style(backgroundImage, $(this).attr("src"));
});