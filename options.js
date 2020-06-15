document.addEventListener('DOMContentLoaded', loadOptions);
document.querySelector('form').addEventListener('submit', saveOptions);

var storage = chrome.storage.local;
var language = document.querySelector('#language');
var tabBehaviour = document.querySelector('#tabBehaviour');
var tabActive = document.querySelector('#tabActive');

function saveOptions(e) {
    e.preventDefault();
    storage.set({
        'language': language.value,
        'tabBehaviour': tabBehaviour.value,
	'tabActive': tabActive.value
    }), function () {}
}

function loadOptions() {
    storage.get({
        'language': 'en',
        'tabBehaviour': 'new',
	'tabActive': 'yes'
    }, function (items) {
        language.value = items.language;
        tabBehaviour.value = items.tabBehaviour;
	tabActive.value = items.tabActive;
    });
}
