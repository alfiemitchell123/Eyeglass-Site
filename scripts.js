$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$("#a-scroll").click(function () {
    console.log('Clicked');
    $('html,body').animate({
        scrollTop: $("#instagram-contact").offset().top
    },
        'slow');
});

var modal = document.getElementById("headerModal");
var btn = document.getElementById("headerBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// $(function () {
//     $.scrollify({
//         section: ".child",
//     });
// });