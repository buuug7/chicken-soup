/*
 |--------------------------------------------------------------------------
 | app
 |--------------------------------------------------------------------------
 |
 | Created by puguohong on 27/07/2017.
 |
 |
*/
(function ($) {
    'use strict';
    $.ChickSoup = {
        /**
         * init application
         *
         */
        init: function () {
            $(document).ready(function () {
                $('[data-toggle="tooltip"]').tooltip();
            });
            $(window).on('load', function (e) {
                //
            });
        },

        /**
         * @param contentHeight
         * 添加 查看更多 的按钮
         * 限制单个card内容过长而添加
         */
        showMoreContent: function (contentHeight) {
            var cardContent = $('.card-soup__content');
            cardContent.each(function (index, element) {
                var currentElement = $(element);
                if (currentElement.height() >= contentHeight) {
                    currentElement.css({'max-height': contentHeight+'px'});
                    var moreElement = currentElement.find('.card-soup__more');
                    moreElement.css({'display': 'flex'});
                    moreElement.find('a').on('click', function (e) {
                        e.preventDefault();
                        var $this = $(this);
                        $this.closest('.card-soup__more').css({'display': 'none'});
                        $this.closest('.card-soup__content').css({'max-height': 'none'});
                    });
                    //console.log(moreElement);
                }
            });
        }
    };

})(jQuery);


