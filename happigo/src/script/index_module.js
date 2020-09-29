define([], function() {
    return {
        init: function() {
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
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
                    </a>
                    </li>
                    `;
                    });
                    strhtml += '</ul>';
                    $('.sh_list').html(strhtml);


                    $(function() {
                        $("img.lazy").lazyload({ effect: "fadeIn" });
                    });
                })
            });

            $(function() {
                $.ajax({
                    url: 'http://192.168.13.10/PXE2020/happigo/php/jingdong.php',
                    dataType: 'json'
                }).done(function(data) {
                    console.log(data);
                    let strhtml = '<ul>';
                    $.each(data, function(index, value) {
                        if (index >= 12 && index < 16) {
                            strhtml += `
                    <li>
                        <a href="index1.html?sid=${value.sid}">
                        <img class="lazy" data-original="${value.url}" width="200" height="200"/>
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
                        </a>
                    </li>
                    `;
                        }
                    });
                    strhtml += '</ul>';
                    $('.sail_list').html(strhtml);
                    $(function() {
                        $("img.lazy").lazyload({ effect: "fadeIn" });
                    });
                })
            });
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

                        $($menu).hide();
                    });
                    $hezi.on('mouseout', function() {
                        $($hezi).hide();
                    })
                })
                //tab切换
            $(function() {
                let $week_li = $('.week_li');
                let $week_he = $('.week_he');
                let $kuai = $('.sh_list ul');
                console.log($kuai);
                //添加点击事件
                $week_li.on('click', function() {
                    $week_he.removeClass('today');
                    $(this).addClass('today').siblings('li').removeClass('today');
                    $kuai.eq($(this).index()).show().siblings('div').hide();
                });
                $week_li.on('mouseover', function() {
                    $week_li.css({ cursor: 'pointer' });
                })
            })


        }
    }


});