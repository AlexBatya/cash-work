$(document).ready(() => {
    const pattPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    // const pattPhone = /^[0-9]+$/;
    const pattName = /^[а-яё -]+$/i; 
    const pattEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    const pattDate = /(0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[1,2]).(19|20)\d{2}/;
    var phone = new RegExp(pattPhone);
    var reg = new RegExp(pattName)
    var email = new RegExp(pattEmail);
    var date = new RegExp(pattDate);

    const errorName = 'Введите значение на кириллице' 
    const errorDate= 'Некорректная дата' 
    const errorEmail= 'Некорректная email' 

    let subPhone = ''
    let subEmail = ''

    const brush = (bool) =>{
        const arr = []
        if(bool){
            arr = [];
        }
        
    }

    $('.oferta').click(() => {
        if(!$('.oferta').hasClass('active')){
            $('.oferta').addClass('active')
        }
        else{
            $('.oferta').removeClass('active')
        }
    })

    $(".phone").mask("8 999 999-9999")
    $(".date").mask("99.99.9999");

    

    const classes = ['input.name', 'input.lastname', 'input.othe'];
    let names= ['', '', ''];
    const ids = ['div#name', 'div#lastname', 'div#othe'];
    

    for(let i = 0; i < classes.length; i++){
        $('body').on("keyup", classes[i], function(event) {
            if($(classes[i]).val().length == 0){
                $(classes[i]).css('background-color', 'white')
                $(classes[i]).css('border', '1px solid #ced4da')

                $(ids[i]).css('background-color', '#9FCEAC')

                $(classes[i]).siblings('p.error').text('')

                names[i] = '';
            }
            else if($(classes[i]).val().length != 0 && !reg.test($(classes[i]).val())){
                $(classes[i]).css('background-color', '#FFE7E7')
                $(classes[i]).css('border', '1px solid #E43232')

                $(ids[i]).css('background-color', '#9FCEAC')

                $(classes[i]).siblings('p.error').text(errorName)

                names[i] = '';
            }
            else{
                $(classes[i]).css('background-color', '#D1EEDA')
                $(classes[i]).css('border', '1px solid #47AA63')

                $(ids[i]).css('background-color', 'green')

                $(classes[i]).siblings('p.error').text('')

                names[i] = $(classes[i]).val();
            }
        })
    }



    $('body').on('keyup', 'input.phone', () => {
        if($('input.phone').val().length == 0){
            $('input.phone').css('background-color', 'white')
            $('input.phone').css('border', '1px solid #ced4da')

            $('div#phone').css('background-color', '#9FCEAC')

            subPhone = '';
        }
        else if($('input.phone').val().length != 0 && !phone.test($('input.phone').val())){
            $('input.phone').css('background-color', '#FFE7E7')
            $('input.phone').css('border', '1px solid #E43232')

            $('div#phone').css('background-color', '#9FCEAC')

            subPhone = ''; 
        }
        else{
            $('input.phone').css('background-color', '#D1EEDA')
            $('input.phone').css('border', '1px solid #47AA63')

            $('div#phone').css('background-color', 'green')

            subPhone = $('input.phone').val();
        }
    })

    $('body').on('keyup', 'input.email', () => {
        if($('input.email').val().length == 0){
            $('input.email').css('background-color', 'white')
            $('input.email').css('border', '1px solid #ced4da')

            $('div#email').css('background-color', '#9FCEAC')

            $('input.email').siblings('p.error').text('')

            subEmail = '';
        }
        else if($('input.email').val().length != 0 && !email.test($('input.email').val())){
            $('input.email').css('background-color', '#FFE7E7')
            $('input.email').css('border', '1px solid #E43232')

            $('div#email').css('background-color', '#9FCEAC')

            $('input.email').siblings('p.error').text(errorEmail)

            subEmail = '';
        }
        else{
            $('input.email').css('background-color', '#D1EEDA')
            $('input.email').css('border', '1px solid #47AA63')

            $('div#email').css('background-color', 'green')

            $('input.email').siblings('p.error').text('')

            subEmail = $('input.email').val();
        }
    })

    $('body').on('keyup', 'input.date', () => {
        if($('input.date').val().length == 0){
            $('input.date').css('background-color', 'white')
            $('input.date').css('border', '1px solid #ced4da')

            $('input.date').siblings('p.error').text('')
        }
        else if($('input.date').val().length != 0 && !date.test($('input.date').val())){
            $('input.date').css('background-color', '#FFE7E7')
            $('input.date').css('border', '1px solid #E43232')

            $('input.date').siblings('p.error').text(errorDate)
        }
        else{
            $('input.date').css('background-color', '#D1EEDA')
            $('input.date').css('border', '1px solid #47AA63')

            $('input.date').siblings('p.error').text('')
        }
    })

    

    
})
