import {create} from './modules/tool-icon-creater';

var replaceButton = create('_replaceButton', 'Toの宛名を削除', 'eraser.png');

document.getElementById('_chatSendTool').appendChild(replaceButton);

$('#_replaceButton').click(function(e){
    var val = $('#_chatText').val();
    $('#_chatText').val((val.replace((/(\[.*\]).*\n/g), '$1\b ')));
});

var test;
