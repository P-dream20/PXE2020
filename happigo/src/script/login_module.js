define([], function() {
    return {
        init: function() {
            //     $.ajax({
            //         // url: 'http://192.168.13.10/PXE2020/happigo/php/registry.php',
            //         url: 'http://localhost/PXE2020/happigo/php/login.php',
            //         dataType: 'json'
            //     }).done(function(d) {
            //         console.log(d);
            //     })
            //     const $tel = $('.tel');
            //     const $yzm = $('.yzm');
            //     const $span1 = $('.sp_1');
            //     const $span2 = $('.sp_2');
            //     const $form = $('form');
            //     const $submit = $('.submit');
            //     let $telflag = true;
            //     let $yzmflag = true;
            //     $tel.on('focus', function() {
            //         $span1.html($(this).html() + "请输入手机号码");
            //         $span1.css('color', ' rgb(140, 140, 140)');
            //     })
            //     $tel.on('blur', function() {
            //         if ($(this).value !== '') {
            //             // $span1.html($(this).html() + "您输入号码有误");
            //             // $span1.css('color', ' rgb(196, 32, 59)');
            //             var reg = /^1[345789]\d{9}$/;
            //             if (reg.test(this.value)) {
            //                 $telflag = true;
            //                 $span1.html(" ");
            //             } else {
            //                 $span1.html("您输入号码有误");
            //                 $span1.css('color', ' rgb(196, 32, 59)');
            //             }
            //         } else {
            //             $span1.html("您输入号码有误");
            //             $span1.css('color', ' rgb(196, 32, 59)');
            //         }
            //     })

            //     //短信验证码
            //     $yzm.on('focus', function() {
            //         $span2.html("请输入您的短信验证码");
            //         $span2.css('color', ' rgb(140, 140, 140)');
            //     });
            //     $yzm.on('blur', function() {
            //         if ($(this).value !== '') {
            //             var reg = /^1[345789]\d{2}$/;
            //             $span2.html(" ");
            //             $yzmflag = true;
            //         }
            //     });
            //     $form.on('submit' , function() {
            //         if ($tel.value !== '') {
            //             $telflag = false;
            //         }
            //         if ($yzm.value !== '') {
            //             $yzmflag = false;
            //         }
            //         if (!$tel || !$yzm) {
            //             return false;
            //         }
            //     })
            $('.suubmit').on('click', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://localhost/PXE2020/happigo/php/login.php',
                    data: {
                        user: $('.tel').val(),
                        pass: hex_sha1($('.yzm').val())
                    }
                }).done(function(result) {
                    if (result) {
                        location.href = "index1.html";
                        localStorage.setItem('tel', $('.tel').val());
                    } else {
                        $('.yzm').val('');
                        alert('用户名或者密码错误');
                    }
                });
            });

        }

    }
})