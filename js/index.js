$(document).ready(function () {
    $($("#last-box-navbar-pc-search")).click(function () {
        if ($("#top-searchbox-pc").hasClass("zero-opacity")) {
            $("#top-searchbox-pc").removeClass("zero-opacity");
            $($("body")).click(function (x) {
                if (x.target == document.querySelector("#top-searchbox-pc")) {
                    $("#top-searchbox-pc").addClass("zero-opacity");
                }
            });
        }
        else {
            $("#top-searchbox-pc").addClass("zero-opacity");
        }
    })
})