export default function showMoreContent(contentHeight) {

    let cardContent = $('.card-soup__content');

    if (!cardContent.length) {
        return;
    }

    cardContent.each(function (index, element) {
        let currentElement = $(element);
        if (currentElement.height() >= contentHeight) {
            currentElement.css({'max-height': contentHeight + 'px'});
            let moreElement = currentElement.find('.card-soup__more');
            moreElement.css({'display': 'flex'});
            moreElement.find('a').on('click', function (e) {
                e.preventDefault();
                let $this = $(this);
                $this.closest('.card-soup__more').css({'display': 'none'});
                $this.closest('.card-soup__content').css({'max-height': 'none'});
            });
            //console.log(moreElement);
        }
    });
}