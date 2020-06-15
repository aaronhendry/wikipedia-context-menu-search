browser.contextMenus.create({
    id: "log-selection",
    title: "Search Wikipedia",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "log-selection") {
        var selectedText = info.selectionText;
        browser.storage.local.get({
                "language": "en",
                "tabBehaviour": "new",
                "tabActive": "yes"
            },
            function(item) {
                var language = item.language;
                var tabBehaviour = item.tabBehaviour;
                var tabActive = item.tabActive;
https://nl.wikipedia.org/wiki/wiki.html?search=
                var url = "https://" + language + ".wikipedia.org/wiki/wiki.html?search=" + encodeURIComponent(selectedText);
                if (tabBehaviour == "new") {
                    if (tabActive == "no") {
                        chrome.tabs.create({
                            url: url,
                            active: false
                        });
                    } else {
                        chrome.tabs.create({
                            url: url
                        });
                    }
                } else {
                    chrome.tabs.update({
                        url: url
                    });
                }
            });

    };
});
