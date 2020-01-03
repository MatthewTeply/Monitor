$("#show-translated-queries").checkbox({
    onChecked: function() {
        $(".sql").css('display', 'none');
        $(".sql.translated").css('display', 'block');
    },
    onUnchecked: function() {
        $(".sql").css('display', 'block');
        $(".sql.translated").css('display', 'none');
    }
});

$(".monitor-sidebar").click(function () {
    $(".monitor-sub-sidebar").sidebar("hide");
});

$('.monitor-sidebar').sidebar('attach events', '.monitor-menu-trigger');

$(".monitor-sidebar .item").click(function () {
    $(".monitor-sidebar .item").removeClass("active");
    $(this).addClass("active");
});

// Sub menu triggers
$('.query-sidebar').sidebar('attach events', '.menu-item-query');
$('.runtime-sidebar').sidebar('attach events', '.menu-item-runtime');
$('.client-sidebar').sidebar('attach events', '.menu-item-client');