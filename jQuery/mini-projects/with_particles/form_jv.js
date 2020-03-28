  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  $("#submitbutton").click(function() {

      var errormessage = "";
      var fieldsmissing = "";

      if ($("#email").val() == "") {
        fieldsmissing += "<br>Email";
      }
      if ($("#phone").val() == "") {
        fieldsmissing += "<br>Phone";
      }
      if ($("#password").val() == "") {
        fieldsmissing += "<br>Password";
      }
      if ($("#passwordconfirm").val() == "") {
        fieldsmissing += "<br>Confirm Password";
      }

      if (fieldsmissing != "") {
        errormessage += "<p>The following field(s) are missing:</p>" + fieldsmissing;
      }


      // .val is used to get value of the input textarea
      if (isEmail($("#email").val()) == false) {

          errormessage += "<p>Your email address is not valid!</p>"

      }

      if ($.isNumeric($("#phone").val()) == false) {

          errormessage += "<p>Your Phone number is not numeric</p>"
      }

      if ($("#password").val() != $("#passwordconfirm").val()) {

        errormessage += "<p>Your passwords don't match!</p>"
      }

      if (errormessage != "") {

        $("#errorMessages").html(errormessage)

      }else {

        $("#success").fadeIn();
        $("#errorMessages").hide();

      }


  });
