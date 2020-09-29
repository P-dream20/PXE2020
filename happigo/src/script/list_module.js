define(['pagination', 'jlazyload'], function() {
    return {
        init: function() {
            //二级菜单栏
            $(function() {
                    let $header_f_main = $('.header_f_main .a1');
                    let $menu = $('#menu');
                    let $menuli = $('#menu li');
                    let $hezi = $('.two_hz'); //右边的内容框
                    let $item = $('.two_hz .item');
                    console.log($hezi);
                    //鼠标移入"所有分类"显示菜单
                    $($header_f_main).on('mouseover', function() {
                        $($menu).show();
                        $($hezi).hide();
                    });
                    //鼠标移入菜单让菜单自己显示
                    $($menu).on('mouseover', function() {
                        $($menu).show();
                    });
                    $($menuli).on('mouseover', function() {
                        $(this).addClass('active').siblings().removeClass('active');
                        $item.eq($(this).index()).show().siblings('.item').hide(); //当前和li匹配的item显示，其他的隐藏
                        $hezi.show();
                    });
                    $($hezi).on('mouseover', function() {
                        $hezi.show();
                    });
                    $($menuli).on('mouseout', function() {
                        // $($hezi).hide();
                        $($menu).hide();
                    });
                })
                //渲染部分
            $(function() {
                $.ajax({
                    url: 'http://192.168.13.10/PXE2020/happigo/php/jingdong.php',
                    dataType: 'json'
                }).done(function(data) {
                    console.log(data);
                    let strhtml = '<ul>';
                    $.each(data, function(index, value) {
                        strhtml += `
                    <li>
                    <a href="index1.html?sid=${value.sid}">
                        <img class="lazy" data-original="${value.url}" width="200" height="200"/>
                        <span>￥${value.price}</span>
                        <p>${value.title}</p>
                    </a>
                    </li>
                    `;
                    });
                    strhtml += '</ul>';
                    $('.list_rander').html(strhtml);


                    $(function() {
                        $("img.lazy").lazyload({ effect: "fadeIn" });
                    });
                })
            });

        }
    }

});