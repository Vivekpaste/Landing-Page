function opentab(evt, tabName) {
    var i, tabs, tablinks;
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    
}

document.getElementById("defaultOpen").click();


function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const sidebarLinks = document.querySelectorAll(".sidebar a");

    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
        sidebarLinks.forEach(link => {
            link.style.display = "none";
        });
    } else {
        sidebar.style.width = "250px";
        sidebarLinks.forEach(link => {
            link.style.display = "block";
        });
    }
}
