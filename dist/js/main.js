// (function($) {
//     $(function() {
    
//         $('select').styler();
    
//     });
//     })(jQuery);

    $(document).ready(function () {

        $(".main-order-select , .main-order-range").styler();
    })

    $(document).on("click", ".header-burger", function () {
        if($(".qwe").hasClass("mobile-open")) {
            console.log("1")
            $(".qwe").removeClass("mobile-open")
        }
        else {
            console.log("2")
            $(".qwe").addClass("mobile-open")
        }
    });


    $(document).ready(function () {
        $(".main-oder-form").validate({
          errorElement: "span",
          rules: {
            email: {
              required: true,
              email: true,
            },
            telephone: {
              required: true,
              minlength: 12,
              telephone: true,
            },
            name: {
              required: true,
              lettersonlyName: true,
            },
            number: {
              required: true,
              number: true,
            },
            person: {
              required: true,
            },
          },
          messages: {
            email: {
              required: "Введите ваш email",
            },
            name: {
              required: "Введите имя",
              // lettersonlyName: "",
            },
            telephone: {
              required: "Введите ваш номер",
              minlength: " ",
            },
            number: {
              required: "Введите данные",
            },
            person: {
              required: "Введите данные",
            },
          },
          highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element).closest('.popup-backcall-inputs').find('.popup-icon')
              .addClass(errorClass).removeClass(validClass);
  
          },
          unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element).closest('.popup-backcall-inputs').find('.popup-icon')
              .removeClass(errorClass).addClass(validClass);
          }
        });
  
  
  
  
      });
  