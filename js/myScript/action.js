


$(document).ready(function() {
    $('#ok').click(()=>{
        window.location.href ="../index.html";
    })

    $('#signup').click(function() {
        $('.error').hide();
        // var txtPass=$('#orangeForm-pass');
        // var txtRePass=$('#orangeForm-pass1');
        // var txtFirstName=$('#orangeForm-name');
        // var txtLastName=$('#orangeForm-name1');

        var firstname = $('#firstname').val();
        var email = $('#email').val();
        var phone = $('#phoneNumber').val();
        var password = $('#password').val();
        var repass = $('#repassword').val();

        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var regex = new RegExp("^[a-zA-Z ]+$");
        var regNum = /^(\d+-?)+\d+$/;


        // email validation
        if (email == '') {
            document.getElementById('errEmail').innerHTML="សូមបញ្ចូលអុីម៉ែលរបស់អ្នក";
            hasError = true;
        }
        else if (!emailReg.test(email)) {
            document.getElementById('errEmail').innerHTML="អុីម៉ែលមិនត្រឺមត្រូវ.";
            hasError = true;
        }
        else
        {
            document.getElementById('errEmail').innerHTML="";
        }
        // password validation
        if (password == '') {
            document.getElementById('errPass').innerHTML="សូមបញ្ចូលលេខសំងាត់របស់អ្នក";
            hasError = true;
        }
        else if (password.length < 8 && password != '') {
            document.getElementById('errPass').innerHTML="សូមបញ្ចូលលេខសំងាត់របស់អ្នកយ៉ាងតិច​​ ៨ខ្ទង់.";
            hasError = true;
        }
        else {
            document.getElementById('errPass').innerHTML="";
        }
        if (repass == '') {
            document.getElementById('errRepass').innerHTML="សូមបញ្ចូលលេខសំងាត់របស់អ្នកម្តងទៀត..";
            hasError = true;
        }
        else if (password != repass) {
            document.getElementById('errRepass').innerHTML="លេខសំងាត់មិនត្រូវគ្នា.";
            hasError = true;
        }
        else
        {
            document.getElementById('errRepass').innerHTML="";
        }
        // firstname validation
        if (firstname == '') {
            document.getElementById('errName').innerHTML="សូមបញ្ចូលឈ្មោះរបស់អ្នក.";
            hasError = true;
        } else if (!regex.test(firstname)) {
            document.getElementById('errName').innerHTML="ឈ្មោះដែលបានបញ្ចូលមិនត្រឹមត្រូវ";
            hasError = true;
        }
        else{
            document.getElementById('errName').innerHTML="";
        }
        // phone number validation
        if (phone == '') {
            document.getElementById('errPhone').innerHTML="សូមបញ្ចូលលេខទូរស័ព្ទរបស់អ្នក";
            hasError = true;
        }
        else if(!regNum.test(phone)){
            document.getElementById('errPhone').innerHTML="លេខទូរស័ព្ទមិនត្រឺមត្រូវ";
            hasError = true;
        }
        else if (phone.length < 8 || phone.length > 10) {
            document.getElementById('errPhone').innerHTML="លេខទូរស័ព្ទមិនត្រឺមត្រូវ";
            hasError = true;
        }
        else if(phone.charAt(0) != '0' || phone.charAt(1) =='0'){
            document.getElementById('errPhone').innerHTML="លេខទូរស័ព្ទមិនត្រឺមត្រូវ";
            hasError = true;
        }
       else
       {
        document.getElementById('errPhone').innerHTML="";
       }

        if (!hasError) 
        { 
            $('#modalLoginAvatar').modal('show');
            $('#s_name').text(firstname);
            $('#s_email').text(email);
        }

    });
});

