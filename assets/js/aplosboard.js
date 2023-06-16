var $ = jQuery;

function ab_fontSizeCtr(pm){
	var c = $('.xe_content');
	if (pm == 'm') {
		var font_size = parseFloat(c.css('fontSize'))-2;
		if (font_size < 8){
			return;
		}
	};
	if (pm == 'p') {
		var font_size = parseFloat(c.css('fontSize'))+2;
		if (font_size > 24){
			return;
		}
	};
	c.css('font-size',''+font_size+'px');
}

function reComment(doc_srl,cmt_srl,edit_url,cmt_nn,lang){
	if (lang == 'ko') {
		$to = "<span class='recomment-to'><span class='ab-point-bgcolor'>" + cmt_nn + "님께</span> </span>";
	}
	else {
		$to = "<span class='recomment-to'><span class='ab-point-bgcolor'>To. " + cmt_nn + "</span> </span>";
	}
	$('.recomment-to').remove();
	$($to).prependTo('#reCommentHT');

	var tmp = $('#reCommentBox').eq(0);
	tmp.find('input[name=error_return_url]').val('/' + doc_srl);
	tmp.find('input[name=mid]').val(current_mid);
	tmp.find('input[name=document_srl]').val(doc_srl);
	tmp.appendTo($('#comment_' + cmt_srl)).show().find('input[name=parent_srl]').val(cmt_srl);
	tmp.find('#use_editor').attr('href',edit_url);
	tmp.find('textarea').focus();
}

String.prototype.replaceAll = function(searchStr, replaceStr) {
	var temp = this;
	while (temp.indexOf(searchStr) != -1) {
		temp = temp.replace(searchStr, replaceStr);
	}
	return temp;
}

$('li.on').parents('li:first').addClass('on');
