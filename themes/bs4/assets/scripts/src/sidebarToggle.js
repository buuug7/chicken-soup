export default function sidebarToggle() {

    let toggleButton = $('#toggleButton');

    let sidebar = $('#sidebar');

    let contentLayout = $('#layout-content');

    if (!sidebar.length) {
        return;
    }

    // events
    // sidebar:toggle
    // sidebar:on
    // sidebar:off

    sidebar
        .on('sidebar:toggle', function (e) {
            let sidebar = $(this);
            if (sidebar.is('.on')) {
                sidebar.trigger('sidebar:off');
            } else {
                sidebar.trigger('sidebar:on');
            }
        })
        .on('sidebar:on', function (e) {
            $(this).removeClass('off').addClass('on');
            contentLayout.removeClass('sidebar-off').addClass('sidebar-on');
        })
        .on('sidebar:off', function (e) {
            $(this).removeClass('on').addClass('off');
            contentLayout.removeClass('sidebar-on').addClass('sidebar-off');
        });

    toggleButton.on('click', function (e) {
        sidebar.trigger('sidebar:toggle');
    });


}