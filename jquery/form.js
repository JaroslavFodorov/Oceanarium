$('#button').click(function () {
    $('.error-input').hide();
    let name = $('#name')
    let phoneNumber = $('#phone')
    let hasError = false;
    let form = [name, phoneNumber];
    for (let i = 0; i < form.length; i++){
        if (!$(form[i]).val()) {
            $(form[i]).siblings('.error-input').show();
            $(form[i]).css('border', '1px solid red');
            hasError = true;
        } else {
            $(form[i]).css('border', '1px solid rgb(185, 145, 80)');
        }
    }

    if (name.val() && phoneNumber.val()) {
        /*loader.css('display', 'flex');*/
        $.ajax({
            type : "post",
            url : 'mail.php',
            data : 'name=' + name.val() + '&phone=' + phoneNumber.val(),
            success: () => {
                $('.order-form').hide();
                $('#gratitude').show();
            },
            error: () => {
                alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
            }
        })
    } else {
        alert('Заполните поля!')
    }
})

$('.ticket-button button').click(function () {
    $('.error').hide();
    let personName = $('#personName');
    let date = $('#date')
    let numberAdult = $('#numberAdult')
    let numberChildren = $('#numberChildren')
    let phoneNumber = $('#phoneNumber');
    let hasError = false;
    let form = [personName, phoneNumber, date, numberAdult, numberChildren];
    for (let i = 0; i < form.length; i++) {
        if (!$(form[i]).val()) {
            $(form[i]).siblings('.error').show();
            $(form[i]).css('border', '1px solid red');
            hasError = true;
        } else {
            $(form[i]).css('border', '1px solid rgb(185, 145, 80)');
        }
        /*if (form[i].value === '') {
            form[i].style.border = '1px solid red'
            for (let j = 0; j < text.length; j++) {
                text[j].style.display = 'block'
            }
            /!*let text = form[i].nextSibling
            text.style.display = 'block'*!/
            hasError = true;
        } else {
            form[i].style.border = '1px solid green'
            for (let j = 0; j < text.length; j++) {
                text[j].style.display = 'none'
            }
        }*/
    }
    if (personName.val() && date.val() && numberAdult.val() && numberChildren.val() && phoneNumber.val()) {
        /*loader.css('display', 'flex');*/
        $.ajax({
            type : "post",
            url : 'ticket.php',
            data : 'name=' + personName.val() + '&phone=' + phoneNumber.val() + '&date=' + date.val() + '&Adult=' + numberAdult.val() + '&Children=' + numberChildren.val(),
            success: () => {
                $('#ticket').hide();
                $('#ticket-gratitude').show();
            },
            error: () => {
                alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
            }
        })
    } else {
        alert('Заполните поля!')
    }
})

$( function() {
    $( "#date" ).datepicker();
} );