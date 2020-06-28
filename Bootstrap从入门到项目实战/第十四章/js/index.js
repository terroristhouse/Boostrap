$(function () {
    $('#a1').click(function () {
        $('#template1').addClass('d-none');
        $('.right').addClass('d-none d-lg-block');
        $('#template2').removeClass('d-none');
    })
    $('#a2').click(function () {
        $('#template2').addClass('d-none');
        $('.right').removeClass('d-none');
        $('#template1').removeClass('d-none')
    })
});
