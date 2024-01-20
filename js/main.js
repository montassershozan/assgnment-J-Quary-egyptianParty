/// <reference types="../@types/jquery" />

'use strict'

//Home

$('.btn').on('click', function () {
    let widthNv = $('.nav-bar').outerWidth();
    $('.btn').animate({ left: widthNv }, 800);
    $('.head-cont').animate({ right: widthNv + 350 }, 800)
    $('.nav-bar').fadeIn(900);
})


$('.fa-xmark').on('click', function () {
    $('.nav-bar').fadeOut(900);
    $('.btn').animate({ left: 0 }, 800);
    $('.head-cont').animate({ right: 650 }, 800)

})

$('#home a').on('click', function (e) {
    let hreF = $(e.target).attr('href');
    let hreFoof = $(hreF).offset().top;
    $('body , html').animate({ scrollTop: hreFoof }, 2000);
})

//Duration

$('.bt').on('click', function (e) {

    $(e.target).next().slideToggle(650);
    $(e.target).prev().slideUp(650);

});

//Details
function CountDawnEvent(){
let DaTe = new Date();
let Dateconv = (Date.parse(DaTe));
let DaTe2 = new Date('Oct 25 2024 21:38:30 GMT+0200 (Eastern European Standard Time)');
let Dateconv2 = (Date.parse(DaTe2));
let theFinalDate = Dateconv - Dateconv2;
let getdays = Math.floor(theFinalDate / 86400000);
let gethours = Math.floor(theFinalDate % 86400000 / 3600000);
let getminutes = Math.floor((theFinalDate % (3600000) / 60000));
let getseconds = Math.floor((theFinalDate %60000 )/1000);
$('#Day').html(`${getdays} D`);
$('#Hour').html(`${-gethours} h`);
$('#Min').html(`${-getminutes} m`);
$('#sec').html(`${-getseconds} s`);
}
setInterval(CountDawnEvent, 1000);

//Contact

$('#limitChar').on('keyup', function () {

    let valChar = $('#limitChar').val();
    console.log(valChar.length);
    if (valChar.length <= 100) {
        $('.conter').html(`${100 - valChar.length} `);
    } else {
        $('.conter').html(`Not allowed`);

    }
})