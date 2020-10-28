

$(document).ready(function () {
    $('.dropdown-item').hover( function () {
            //mostro sottomenu
            $('.dropdown-menu', this).stop().slideDown(100);},
        function () {
            //nascondo sottomenu
            $('.dropdown-menu', this).stop().slideUp(200);
        }
    );
});