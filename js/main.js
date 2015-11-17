$(function() {
    "use strict";

    /* ==========================================================================
   Sub Form
   ========================================================================== */



    $('#mc-form').ajaxChimp({
        language: 'cm',
        url: 'https://us12.admin.mailchimp.com/templates/share?id=48497485_16e03ea61080a57b7516_us12'
            //http://xxx.xxx.list-manage.com/subscribe/post?u=xxx&id=xxx
    });


    $.ajaxChimp.translations.cm = {
        'submit': 'Submitting...',
        0: '<i class="fa fa-envelope"></i> ¡Impresionante! Te hemos enviado un email de confirmación',
        1: '<i class="fa fa-exclamation-triangle"></i> Por favor introduzca un valor',
        2: '<i class="fa fa-exclamation-triangle"></i> Una dirección de correo electrónico debe contener una sola @',
        3: '<i class="fa fa-exclamation-triangle"></i> La parte de dominio de la dirección de correo electrónico no es válido (la porción después de la @: )',
        4: '<i class="fa fa-exclamation-triangle"></i> La parte de nombre de usuario de la dirección de correo electrónico no es válido la porción antes de la @: )',
        5: '<i class="fa fa-exclamation-triangle"></i> Esta dirección de correo electrónico se ve falso o inválido. Introduzca una dirección de correo electrónico real.'
    };


    /* ==========================================================================
   Tweet
   ========================================================================== */


   /* $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}} {{user_name}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');

        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });*/


    /* ==========================================================================
   sticky nav
   ========================================================================== */

    $('.navbar-default').waypoint('sticky', {
        offset: 30
    });

    /* ==========================================================================
   litebox
   ========================================================================== */

    $('.litebox-hero, .litebox-tour').magnificPopup({
        type: 'iframe'
    });


    /* ==========================================================================
       Number animation
       ========================================================================== */


    $('.welcome-message').waypoint(function() {

        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');

        $('.total-number-1').animateNumber({
            number: 50, //change value here
            numberStep: comma_separator_number_step
        }, 6000);

    }, {
        offset: '80%'

    });




    /* ==========================================================================
   Feature image absolute position height fix
   ========================================================================== */

    $(window).load(function() {
        var featureImg = function() {
            $(".features div[class='row'] .col-md-7").each(function() {
                var newHeight = 0,
                    $this = $(this);
                $.each($this.children(), function() {
                    newHeight += $(this).height();
                });
                $this.height(newHeight);
            });
        };


        featureImg();


        $(window).on("resize", function() {
            featureImg();
        });


    });




    /* ==========================================================================
   Smooth scroll
   ========================================================================== */

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({

                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });




});