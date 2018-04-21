/**
 * Created by Eason_Chouchou on 2018/2/8.
 */
$(document).ready(function () {
    $('.image-item').find('img').each(function () {
        var width = $(this).width();
        var height = $(this).height();
        var ratio = width / height;
        if (ratio >= 1) {
            if (width > 280) {
                $(this).width(280);
                $(this).height(280 / ratio);
            }
        } else {
            if (height > 280) {
                $(this).height(280);
                $(this).width(280 * ratio);
            }
        }
    })
});