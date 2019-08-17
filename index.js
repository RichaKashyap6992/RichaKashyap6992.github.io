function openTab(evt, tabContentName, tabId = '') {
    console.log('openTab called', tabContentName)
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabContentName).style.display = "block";
    if(tabId) {
        document.getElementById(tabId).className += " active";
    } else {
        evt.currentTarget.className += " active";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    openTab('', 'projects', 'projectstab')
});



