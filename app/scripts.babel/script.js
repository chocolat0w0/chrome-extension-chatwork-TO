$("#_chatSendTool").after('<li id="_replaceButton" role="button" class="_showDescription" style="display: inline-block;" aria-label="Toの宛名を削除"><span class="icoFontVideoChat icoSizeLarge"></span></li>');

$("#_replaceButton").click(function(e){
    var val = $("#_chatText").val();
    $("#_chatText").val((val.replace((/(\[.*\]).*\n/g), "$1\b ")));
});
