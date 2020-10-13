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
                    $menuli.on('mouseout', function() {
                        // $($hezi).hide();
                        $menu.hide();
                    });
                    $hezi.on('mouseout', function() {
                        $menu.hide();
                    })
                })
                //渲染部分
            $(function() {
                let array_default = []; //排序前的li数组
                let array = []; //排序中的数组
                let prev = null;
                let next = null;
                //1.渲染列表页的数据-默认渲染第一页
                const $list = $('.list_rander');
                $.ajax({
                        url: 'http://192.168.13.10/PXE2020/happigo/php/listdata.php',
                        dataType: 'json'
                    }).done(function(data) {
                        console.log(data);
                        let strhtml = '<ul>';
                        $.each(data, function(index, value) {
                            strhtml += `
                    <li>
                    <a href="detail.html?sid=${value.sid}">
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
                    //列表分页
                $('.button').eq(0).on('click', function() {
                    console.log('.button');
                    $.each(array_default, function(index, value) {
                        $('.list_rander li').append(value);
                    });
                    return;
                });
                $('.button').eq(1).on('click', function() {
                    for (let i = 0; i < array.length - 1; i++) {
                        for (let j = 0; j < array.length - i - 1; j++) {
                            prev = parseFloat(array[j].find('.price').html().substring(1));
                            next = parseFloat(array[j + 1].find('.price').html().substring(1));
                            //通过价格的判断，改变的是li的位置。
                            if (prev > next) {
                                let temp = array[j];
                                array[j] = array[j + 1];
                                array[j + 1] = temp;
                            }
                        }
                    }
                    //清空原来的列表，将排序后的数据添加上去。
                    //empty() : 删除匹配的元素集合中所有的子节点。
                    // $('.list_rander ul').empty();//清空原来的列表
                    //这里能够省略empty
                    //append在追加的时候，如果追加的是jquery的元素对象，而jquery元素对象在你追加的元素中存在，直接取出存在的元素，从后面追加。
                    //如果追加的是内容结构，依然和appendChild一样，后面继续追加。
                    $.each(array, function(index, value) {
                        console.log(value); //n.fn.init [li, context: li]
                        $('.list_rander ul').append(value);
                    });
                });
                $('.button').eq(2).on('click', function() {
                    console.log('.botton');
                    for (let i = 0; i < array.length - 1; i++) {
                        for (let j = 0; j < array.length - i - 1; j++) {
                            prev = parseFloat(array[j].find('.price').html().substring(1));
                            next = parseFloat(array[j + 1].find('.price').html().substring(1));
                            //通过价格的判断，改变的是li的位置。
                            if (prev < next) {
                                let temp = array[j];
                                array[j] = array[j + 1];
                                array[j + 1] = temp;
                            }
                        }
                    }
                    //清空原来的列表，将排序后的数据添加上去。
                    //empty() : 删除匹配的元素集合中所有的子节点。
                    // $('.list_rander ul').empty();//清空原来的列表
                    $.each(array, function(index, value) {
                        console.log(value);
                        $('.list_rander ul').append(value);
                    });
                })

            });
        }
    }

});