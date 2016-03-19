var toEraserIcon = document.createElement('img');
toEraserIcon.src = chrome.extension.getURL('images/TO-eraser.png');

var iconWrapper = document.createElement('li');
iconWrapper.id = '_replaceButton';
iconWrapper.class = '_showDescription';
iconWrapper.setAttribute('style', 'display: inline-block; padding-top: 3px;');
iconWrapper.setAttribute('role', 'button');
iconWrapper.setAttribute('aria-label', 'Toの宛名を削除');

iconWrapper.appendChild(toEraserIcon);

document.getElementById('_chatSendTool').appendChild(iconWrapper);

$('#_replaceButton').click(function(e){
    var val = $('#_chatText').val();
    $('#_chatText').val((val.replace((/(\[.*\]).*\n/g), '$1\b ')));
});
