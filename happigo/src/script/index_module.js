define([], function() {
    return {
        init() {
            main_list: ! function() {
                $.ajax({
                    url: 'http://192.168.13.46/PXE2020/happigo/php/jingdong.php',
                    dataType: 'json'
                }).done(function(data) {
                    console.log(data);
                    let strhtml = '<ul>';
                    $.each(data, function(index, value) {
                        strhtml += `
                    <li>
                    <a href="#">
                        <img src="${value.url}">
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
                        </a>
                    </li>
                    `;
                    });
                    strhtml += '</ul>';
                    $('.sh_list').html(strhtml);
                })
            }();
            fen_list: ! function() {
                $.ajax({
                    url: 'http://192.168.13.46/PXE2020/happigo/php/listdata.php',
                    dataType: 'json'
                }).done(function(data) {
                    console.log(data);
                    let strhtml = '<ul>';
                    $.each(data, function(index, value) {
                        if (index >= 5 && index < 9) {
                            strhtml += `
                    <li>
                        <img src="${value.url}">
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
                    </li>
                    `;
                        }
                    });
                    strhtml += '</ul>';
                    $('.sail_list').html(strhtml);
                })
            }();
            //二级菜单栏
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


            //tab切换
            let $week_li = $('.week_li');
            let $week_he = $('.week_he');
            let $kuai = $('.sh_list ul li');
            console.log($kuai);
            //添加点击事件
            $week_li.on('click', function() {
                $(this).css({
                    border: '2px solid #df0010',
                    borderBottom: '2px solid #f5f5f5',
                    color: '#c4193f',
                    fontWeight: 'bold'
                }).siblings('li').css({
                    border: 'none',
                    fontWeight: 'normal',
                    color: 'green'
                });
                $(this).addClass('active').siblings('div').removeClass('active');
                $kuai.eq($(this).index()).show().siblings('div').hide();
            });
            $week_li.on('mouseover', function() {
                $week_li.css({ cursor: 'pointer' })
            })

        }
    }


});