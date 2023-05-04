$(document).ready(function () {
    // navbar search
    $($("#last-box-navbar-pc-search")).click(function () {
        if ($("#top-searchbox-pc").hasClass("zero-opacity")) {
            $("#top-searchbox-pc").removeClass("zero-opacity");
            $("#last-box-navbar-pc li i").removeClass("bi-search");
            $("#last-box-navbar-pc li i").addClass("bi-x-lg");
            $($("body")).click(function (x) {
                if (x.target == document.querySelector("#top-searchbox-pc")) {
                    $("#top-searchbox-pc").addClass("zero-opacity");
                    $("#last-box-navbar-pc li i").addClass("bi-search");
                    $("#last-box-navbar-pc li i").removeClass("bi-x-lg");
                }
            });
        }
        else {
            $("#top-searchbox-pc").addClass("zero-opacity");
            $("#last-box-navbar-pc li i").addClass("bi-search");
            $("#last-box-navbar-pc li i").removeClass("bi-x-lg");
        }
    })
});