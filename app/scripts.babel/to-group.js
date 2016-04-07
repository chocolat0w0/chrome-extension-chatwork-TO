import {create} from './modules/tool-icon-creater';

var selectGroupButton = create('_selectGroupButton', 'TOグループ選択', 'eraser.png');

document.getElementById('_chatSendTool').appendChild(selectGroupButton);

var toList = document.getElementById('_toList');

$('#_selectGroupButton').click(function(e){
  var val = $('#_chatText').val();
  $('#_chatText').val((val.replace((/(\[.*\]).*\n/g), '$1\b ')));
});
