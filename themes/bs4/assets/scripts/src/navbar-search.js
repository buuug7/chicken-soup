export default function navbarSearch() {

    let searchbar = $('#searchBar');

    if (!searchbar.length) {
        return;
    }

    // events
    // searchbar:toggle
    // searchabar:on
    // searchbar:off

    searchbar
        .on('searchbar:toggle', function (e) {
            let searchbar = $(this);
            if (searchbar.is('.on')) {
                searchbar.trigger('searchbar:off');
            } else {
                searchbar.trigger('searchbar:on');
            }
        })
        .on('searchbar:on', function (e) {
            $(this).removeClass('off').addClass('on');
        })
        .on('searchbar:off', function (e) {
            $(this).removeClass('on').addClass('off');
        });

    searchbar.find('.close-button').on('click', function (e) {
        searchbar.trigger('searchbar:toggle');
    });

    $('#openSearchBar').on('click', function (e) {
        searchbar.trigger('searchbar:toggle');
    });
}
