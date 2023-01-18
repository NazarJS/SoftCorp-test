// (function($) {
//     $(function() {
    
//         $('select').styler();
    
//     });
//     })(jQuery);

    $(document).ready(function () {

        $(".main-order-select , .main-order-range").styler();
    })

    $(document).on("click", ".header-burger", function () {
        $('.toggle').toggleClass('mobile-open');
        $('body').toggleClass('body-hidden');
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
<<<<<<< HEAD
              required: "Не корректное имя",
              // lettersonlyName: "Не корректное имя",
=======
<<<<<<< HEAD
              required: "Не корректное имя",
              // lettersonlyName: "Не корректное имя",
=======
              required: "Введите имя",
              lettersonlyName: "Не корректное имя",
>>>>>>> d84e716776aa2cc17b0d36cff4e11f6a48f23b0f
>>>>>>> 6f51341d3d4073932365265fc15d0269f4490ec2
            },
            
          },
          
        });
    });

    jQuery.validator.addMethod(
        "lettersonlyName",
        function (value, element) {
          return this.optional(element) || /^ [a-zA-ZА-Яа-я\s,ё]+$/i.test(value);
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