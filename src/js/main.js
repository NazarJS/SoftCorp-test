// (function($) {
//     $(function() {
    
//         $('select').styler();
    
//     });
//     })(jQuery);

    $(document).ready(function () {

        $(".main-order-select , .main-order-range").styler();
    })

    $(document).on("click", ".header-burger", function () {
        if($(".toggle").hasClass("mobile-open")) {
            $(".toggle").removeClass("mobile-open")
        }
        else {
            $(".toggle").addClass("mobile-open")
        }
    });


    $(document).ready(function () {
        $(".main-order-form").validate({
          errorElement: "span",
          rules: {
            email: {
              required: true,
              email: true,
            },
           
            name: {
              required: true,
              lettersonlyName: true,
            },
           
          },
          messages: {
            email: {
              required: "Введите ваш email",
              email: "Введите корректный email",
            },
            name: {
              required: "Введите имя",
              // lettersonlyName: "",
            },
            
          },
          
        });
  
  
  
  
      });
      jQuery.validator.addMethod(
        "lettersonlyName",
        function (value, element) {
          return this.optional(element) || /^[a-zA-ZА-Яа-я\s]+$/i.test(value);
        },
        " "
      );



      var slider = document.getElementById("myRange");
      var output = document.getElementById("demo");
      output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}