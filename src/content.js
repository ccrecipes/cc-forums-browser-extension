$("a[href=\"/profile/preferences\"]").parent().before("<li role=\"presentation\" class=\"1 no-icon\">\
<a role=\"menuitem\" class=\"dropdown-menu-link  dropdown-menu-link-profile-view\" tabindex=\"0\" href=\"/profile\">View Profile</a>\
</li>")

$(".dropdown-menu-link-preferences, .dropdown-menu-link-profile-preferences").text("Edit Profile").attr("href", "/profile/edit").removeClass("dropdown-menu-link-preferences").addClass("dropdown-menu-link-profile-edit")

$(".Panel-main").append("\
<a class='panel-link' href='http://cubiccastles.com/index.php'><img class='panel-link-image' src='" + chrome.extension.getURL("img/play.png") + "'></a>\
<a class='panel-link' href='http://cubiccastles.com/recipes'><img class='panel-link-image' src='" + chrome.extension.getURL("img/recipes.png") + "'></a>\
<a class='panel-link' href='http://cubiccastles.com/contact.html'><img class='panel-link-image' src='" + chrome.extension.getURL("img/support.png") + "'></a>\
<a class='panel-link' href='https://wiki.cubiccastles.com/index.php/Main_Page'><img class='panel-link-image' src='" + chrome.extension.getURL("img/wiki.png") + "'></a>\
<a class='panel-link' href='https://forums2.cubiccastles.com/index.php?p=/discussion/8/forum-rules'><img class='panel-link-image' src='" + chrome.extension.getURL("img/rules.png") + "'></a>");