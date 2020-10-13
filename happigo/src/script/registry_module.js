define([], function() {
    return {
        init: function() {
            let $user = $('.tel');
            console.log($user);
            let $usernameflag = true;
            $user.on('blur', function() {
                $.ajax({
                    type: 'post',
                    url: 'http://192.168.13.10/PXE2020/happigo/php/registry.php',
                    data: {
                        username: $user.val()
                    }
                }).done(function(result) {
                    console.log(result);
                    if (!result) { //不存在
                        $('.sp_1').html('√').css('color', 'green');
                        $usernameflag = true;
                    } else {
                        $('.sp_1').html('该用户名已经存在').css('color', 'red');
                        $usernameflag = false;
                    }
                })
            });

            $('form').on('submit', function() {
                if ($user.val() == '') {
                    $('.tel').html('用户名不能为空').css('color', 'red');
                    $usernameflag = false;
                }
                if (!$usernameflag) {
                    return false; //阻止提交
                }
            });
        }
    }
});