let launchStickerObserver = new MutationObserver(function(mutations) {

for (let i=0, mutation; mutation = mutations[i]; i++) {

if (mutation.attributeName == 'disabled') {

if (mutation.target.disabled) {

$('.fa-parachute-box').parent().prop("disabled",false);

}

}

};

});

launchStickerObserver.observe($('.fa-parachute-box').parent()[0], {attributes: true});
