define([], function() {
    return {
        init: function() {
            $.ajax({
                url: 'http://localhost/PXE2020/happigo/php/registry.php',
                dataType: 'json'
            }).done(function(d) {
                console.log(d);
            })
            const $tel = $('.tel');
            const $yzm = $('.yzm');
            const $span1 = $('.sp_1');
            const $span2 = $('.sp_2');
            $tel.on('focus', function() {
                $span1.html($(this).html() + "请输入手机号码");
                $span1.css('color', ' rgb(140, 140, 140)');
            })
            $tel.on('blur', function() {
                if ($(this).value === '') {
                    $span1.html($(this).html() + "您输入号码有误");
                    $span1.css('color', ' rgb(196, 32, 59)');
                }
            })

            //短信验证码
            $yzm.on('focus', function() {
                $span2.html($(this).html() + "请输入您的短信验证码");
                $span2.css('color', ' rgb(140, 140, 140)');
            })
            $yzm.on('blur', function() {
                if ($(this).value === '') {
                    $span2.html($(this).html() + "请输入您的短信验证码错误");
                    $span2.css('color', ' rgb(140, 140, 140)');
                }
            })
        }

    }
})