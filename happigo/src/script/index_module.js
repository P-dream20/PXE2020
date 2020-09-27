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
                        <img src="${value.url}">
                        <p>${value.title}</p>
                        <span>￥${value.price}</span>
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

        }
    }

});