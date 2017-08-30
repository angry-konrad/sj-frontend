(function() {
    "use strict";
    window.addEventListener("load", function() {
      var form = document.getElementById("needs-validation");
      form.addEventListener("submit", function(event) {
        if (form.checkValidity() == false) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        }
        else {
            event.preventDefault();
            $.ajax({
                url: location.href,
                context: form
            });
            form.classList.remove("was-validated");
            $('.modal-form__contact-form').hide();
            $('.modal-form__submit-success').show();
        }       
      }, false);
    }, false);
}());