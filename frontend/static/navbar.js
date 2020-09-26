var init = function (page) {
    console.log("test");
    if (page === "Home") {
        $("#homeItem").addClass("selected")
    }
    if (page === "Map") {
        $("#mapItem").addClass("selected")
    }
    if (page === "Profile") {
        $("#profileItem").addClass("selected")
    }
    if (page === "Settings") {
        $("#settingsItem").addClass("selected")
    }
}

var whiteNav = function () {
    window.location.href = "/"
}

var calNav = function () {
    window.location.href = "/calendar"
}

var helpNav = function () {
    window.location.href = "/help"
}

var settingsNav = function () {
    window.location.href = "/settings"
}
