
// //animar boton
// $('button').on('click',function(){
//     $(this).addClass('animated infinite bounce');

// });

// //mostrar y ocultar imagen
// $('#show').on('click', function(){
//     $('img').removeClass('in');
// });

// $('#hide').on('click', function(){
//     $('img').addClass('in');
// });

// $(function(){
//     $("#register-form").validate({
//         rules: {
//             email:{
//                 required: true,
//                 email:true
//             }
//         },
//         messages:{
//             email{
//                 required:'Please enter an email address.',
//                 email:'Please enter a email'
//             }
//         }
//     });
// });
// var clicks =0;
// $('.circle').click(function(){
//     clicks++;
//     if(clicks == 1){
//         $(this).addClass('m-t1');
//     }
//     if(clicks == 2){
//         $(this).addClass('m-t2');
//     }
//     if(clicks == 3){
//         $(this).addClass('m-t3');
//     }
//     if(clicks == 4){
//         $(this).addClass('m-t4');
//     }
// })

// const msj =$ ('#email').val();
// if(msj. indexOf('@')!== -1){
//     console.log ('BIne');
// } else{
//     console.log(Error);
// }



$(function() {
    $("form[name='registration']").validate({
      // reglas para la validacion
      rules: {
        name: {
            required: true,
            minlength: 2,
            maxlenght:20,
        },
        email: {
          required: true,
          email: true
        },
        phone: {
            required: true,
            minlength: 9,
            maxlength:9,
          }
        },
        // se especifica si hay errores
        messages: {
          name: "Please enter your name",
          phone: "Please enter your phone",
          email: "Please enter a valid email address"
        },
      
      submitHandler: function(form) {
        form.submit();
      }
    });
  });
  