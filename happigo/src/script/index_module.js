define([], function() {
    return {
        init: function() {
            $(function() {
                $.ajax({
                    // url: 'http://192.168.13.10/PXE2020/happigo/php/jingdong.php',
                    url: 'http://localhost/PXE2020/happigo/php/jingdong.php',
                    dataType: 'json'
                }).done(function(data) {
                    console.log(data);

                    let strhtml = '<ul>';
                    $.each(data, function(index, value) {
                        strhtml += `
                    <li>
                    <a href="detail.html?sid=${value.sid}">
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
                    // url: 'http://192.168.13.10/PXE2020/happigo/php/jingdong.php',
                    url: 'http://localhost/PXE2020/happigo/php/jingdong.php',
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

            //头部
            $(function() {
                    const $li5 = $('.li5');
                    const $li6 = $('.li6');
                    const $li_wei = $('.li_wei');
                    const $help = $('.help');
                    $li5.on('mouseover', function() {
                        $li_wei.show();

                    })
                    $li_wei.on('mouseover', function() {
                        $li_wei.show();
                    })
                    $li_wei.on('mouseout', function() {
                        $li_wei.hide();
                    })

                    $li6.on('mouseover', function() {
                        $help.show();
                        $li6.css('border-color', '#ccc');
                        $li6.css('background-color', '#fff');
                    })
                    $help.on('mouseover', function() {
                        $help.show();
                        $li6.css('border-color', '#ccc');
                        $li6.css('background-color', '#fff');
                    })
                    $help.on('mouseout', function() {
                        $help.hide();
                        $li6.css('background-color', '#f5f5f5');
                        $li6.css('border-color', '#f5f5f5');
                    })
                    $li6.on('mouseout', function() {
                        $help.hide();
                        $li6.css('background-color', '#f5f5f5');
                        $li6.css('border-color', '#f5f5f5');
                    })
                })
                //二级菜单栏
            $(function() {
                    let $header_f_main = $('.header_f_main .a1');
                    let $menu = $('#menu');
                    let $menuli = $('#menu li');
                    let $hezi = $('.two_hz'); //右边的内容框
                    let $item = $('.two_hz .item');
                    console.log($hezi);
                    //鼠标移入"所有分类"显示菜单
                    $header_f_main.on('mouseover', function() {
                        $menu.show();
                        $hezi.hide();
                        $menuli.removeClass('active');
                    });
                    $header_f_main.on('mouseout', function() {
                        $menu.hide();
                    });
                    //鼠标移入菜单让菜单自己显示
                    $menu.on('mouseover', function() {
                        $menu.show();
                    });
                    $menuli.on('mouseover', function() {
                        $(this).addClass('active').siblings().removeClass('active');
                        $item.eq($(this).index()).show().siblings('.item').hide(); //当前和li匹配的item显示，其他的隐藏
                        $hezi.show();
                    });
                    $hezi.on('mouseover', function() {
                        $hezi.show();
                    });
                    $menuli.on('mouseout', function() {
                        $menu.hide();
                    });
                    $hezi.on('mouseout', function() {
                        $menu.hide();
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

            //顶部悬浮
            $(function() {
                const $nav = $('.week_ul');
                console.log($nav);
                //触发滚轮事件
                $(window).on('scroll', function() {
                    let $top = $(window).scrollTop(); //获取滚动条的top值。
                    if ($top >= 400) {
                        $nav.stop(true).animate({
                            top: 0
                        });
                    } else {
                        $nav.stop(true).animate({
                            top: -60
                        });
                    }
                });
            })

            //手机下单后面的二维码
            $(function() {
                const $iphone = $('.iphone');
                const $iphone_wei = $('.iphone_wei');
                $iphone_wei.hide();
                const $iphone1 = $('.iphone1');
                const $iphone_wei1 = $('.iphone_wei1');
                $iphone_wei1.hide();
                $iphone.on('mouseover', function() {
                    $iphone_wei.show();
                });
                $iphone_wei.on('mouseover', function() {
                    $iphone_wei.show();
                });
                $iphone_wei.on('mouseout', function() {
                    $iphone_wei.hide();
                });
                $iphone.on('mouseout', function() {
                    $iphone_wei.hide();
                });
                //右边
                $iphone1.on('mouseover', function() {
                    $iphone_wei1.show();
                });
                $iphone_wei1.on('mouseover', function() {
                    $iphone_wei1.show();
                });
                $iphone_wei1.on('mouseout', function() {
                    $iphone_wei1.hide();
                });
                $iphone1.on('mouseout', function() {
                    $iphone_wei1.hide();
                });
            })

        }
    }


});