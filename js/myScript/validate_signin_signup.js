
$(document).ready(function() {

    $('.btn').click(function() {

        $('.error').hide();
        var txtPass=$('#orangeForm-pass');
        var txtRePass=$('#orangeForm-pass1');
        var txtFirstName=$('#orangeForm-name');
        var txtLastName=$('#orangeForm-name1');

        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;


        var emailaddressVal = $("#orangeForm-email").val();
        if(emailaddressVal == '') {
            $("#orangeForm-email").after('<span class="error" style="color:red;">Please enter your email address.</span>');
            hasError = true;

        }

        else if(!emailReg.test(emailaddressVal)) {

            $("#orangeForm-email").after('<span class="error" style="color:red;">Enter a valid email address.</span>');
            hasError = true;

        }
        if(txtPass.val()==''){
            $("#orangeForm-pass").after('<span class="error" style="color:red;">Please enter your password.</span>');
            hasError = true;

        }
        if(txtPass.val().length<8 && txtPass.val()!=''){
            $("#orangeForm-pass").after('<span class="error" style="color:red;">Please enter your password greater than 8 characters.</span>');
            hasError = true;
        }

        if(txtRePass.val()==''){
            $("#orangeForm-pass1").after('<span class="error" style="color:red;">Please enter your Repassword.</span>');
            hasError = true;

        }
        if(txtPass.val()!=txtRePass.val()){
            toastr.error("Your password is not match");
            hasError = true;
        }
        if(txtFirstName.val()==''){
            $("#orangeForm-name").after('<span class="error" style="color:red;">Please enter your first name.</span>');
        }

        if(txtLastName.val()==''){
            $("#orangeForm-name1").after('<span class="error" style="color:red;">Please enter your last name.</span>');
            hasError = true;

        }

        if(hasError == true) { return false; }

    });
});