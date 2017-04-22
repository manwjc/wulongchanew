
//表单边框变色插件
$(function(){
	/*表单得到失去焦点*/
	jQuery.objFocusBlur=function(obj){
		$(document).on("focus", obj, function(){$(this).addClass("focus").removeClass("inputError");});
		$(document).on("blur", obj, function(){$(this).removeClass("focus");});
	};
	$.objFocusBlur(".input_text,.textarea");

	$.fn.objFocusBlur02 = function(opts){  //对象级别
		$(this).focus(function(){
			$(this).addClass(opts);
		});
		$(this).blur(function(){
			$(this).removeClass(opts);
		});
	}
	$('.keywords').objFocusBlur02('textarea-focus');
	$('.textareas').objFocusBlur02('textarea-focus');

	//按钮状态切换
	$('.input-btn').hover(function(){
		$(this).toggleClass('input-btn-hover');
	});
	
	//编辑、删除、添加
	$('.edit').click(function(){
		var $this = $(this);
		var $sibTd = $this.parents('td').siblings('td');
		if($this.val()=='编辑'){
			$sibTd.find('input[type=text]').removeClass('input_noborder').addClass('input_text').removeAttr('readonly');
			$this.val('保存').css('color','#dd4929');
			$sibTd.find('div.select-box').removeClass();
			$sibTd.find('select').removeAttr('disabled').removeClass().addClass('select_normal w200');
		}else{
			if($sibTd.find('input[type=text]').val() === ''){
				alert('信息不能为空');
				return false;
			}
			$sibTd.find('input[type=text]').removeClass('input_text').addClass('input_noborder').attr({readonly:'true'});
			$this.val('编辑').css({color:'#43a8eb'})
			$sibTd.find('div').addClass('select-box');
			$sibTd.find('select').removeClass().addClass('select_noborder w200').attr('disabled','true');
		}
	});
	
	
	/*乌龙茶项目 start 20170422*/
	
	//修改状态
	$(document).on("click", ".changeActivityStatus", function(e){
		e = event || window.event;
		e.preventDefault();
		var $this = $(this);
		if(confirm('确认修改该活动状态？')){
			$.get('js/itemdata.json', {actId: $this.attr('data-id')}, function(data, status){
				if(data[0].status === '0000'){
					$this.swapText('启用', '停用');
					$this.parents('tr').find('.activity-status').swapClass('activity-status bold', 'activity-status red').swapText('已启用', '已停用');
					alert('状态修改成功！');
				}
			});
		}
	});
	
	$(document).on("click", ".btn-delete", function(e){
		e.preventDefault();
		var $this = $(this);
		if(confirm('确定删除该项？')){
			$.get('js/itemdata.json', {actId: $this.attr('data-id')}, function(data, status){
				if(data[0].status === '0000'){
					$this.parents('tr').remove();
				}
			});
		}
	});
	
	/*乌龙茶项目 end*/
	
	//添加银行卡帐号
	$('.card-edit-btn').click(function(){
		var $this = $(this);
		var $cardInput = $this.prev('input');
		$this.swapVal('保存帐号', '编辑帐号').swapClass('weak-btn', 'input-btn');
		if($this.val()=='编辑帐号'){
			$cardInput.addClass('input_noborder').attr({readonly:'true'});	
		}else{
			$cardInput.removeClass('input_noborder').removeAttr('readonly');		
		}
	});
	
	//新增、编辑、删除物业管理处。
	var $newAcountInfo = $('.newAcountInfo');
	$('#addNewAcount').click(function(){
		$newAcountInfo.clone(true).show().appendTo('.acount-list');
		window.parent.TuneHeight();
	});
	
	$('.edit-acount-btn').click(function(){
		var $this = $(this);
		var $acountInput = $this.parent('td').siblings('td').find('input');
		$this.swapVal('保存', '编辑').swapClass('weak-btn', 'input-btn');
		if($this.val()=='编辑'){
			$acountInput.addClass('input_noborder').attr({readonly:'true'});
		}else{
			$acountInput.removeClass('input_noborder').removeAttr('readonly');		
		}
	});
	
	$('.delete-acount-btn').click(function(){
		if(confirm('确定要删除该管理处？')){
			$(this).parents('tr').remove();
		}
	});

	//插件表格样式
	$('.mars').addClass('info-list-02 mtop20').attr({'border':'0','cellpadding':'0','cellspacing':'1'});

	//鼠标经过表格变色
	$('.info-list-02 tr:not("tr.title"):not("tr.nobg"), .ranking-info tr:not("tr.nobg"), .mars tr').hover(function(){
		$(this).children('td').addClass('trbg');
	},function(){
		$(this).children('td').removeClass('trbg');
	}).click(function(event){
		if($(event.target).is('td') && $(this).children('td').hasClass('trbgon')){
			$(this).children('td').removeClass('trbgon');	
		}else if($(event.target).is('td')){
			$(this).children('td').addClass('trbgon').end();
			$(this).siblings('tr').children('td').removeClass('trbgon');
		}
	});

	//上传照片
	$('#addimg').click(function(){
		$('.addimg01').hide();
		$('.addimg02').show();
		return false; 
	});
	$('#addvd').click(function(){
		$('.addvd01').hide();
		$('.addvd02').show();
		return false; 
	});
	
	//隐藏导航
	$('.menu-arrow').click(function(){
		var $menuTree=$('.menuTree');
		var menuWidth=$menuTree.width();
		if($menuTree.is(':visible')){
			$menuTree.hide(1);
			$(this).attr("class",'menu-arrow01');
		}else{
			$menuTree.show(1);
			$(this).attr("class",'menu-arrow');
		}
	});


	//厨房右侧栏高度

	var Iheight = $('.food-left').height();
	$('.food-right').height(Iheight);

	
	//按钮状态
	$('.input-btn[name="btnColor"]').click(function(){
		$(this).toggleClass('btn-on');
	});
	
	//登录背景
	$('.login-main').css({"backgroundPositionY":"650px"}).animate({"backgroundPositionY":"276px"},{easing: "easeInBack",duration: 2000,complete:function(){}});
	
	//checkbox
	$('.ck-box').click(function(){
		$(this).toggleClass('ck-box-on');
	});

	//权限  用户状态切换
	//切换样式
	$.fn.swapClass = function(class1, class2){
		return this.each(function(){
			var $element = $(this);
			if($element.hasClass(class1)){
				$element.removeClass(class1).addClass(class2);
			}
			else if($element.hasClass(class2)){
				$element.removeClass(class2).addClass(class1);	
			}
		});
	};
	//切换文本
	$.fn.swapText = function(txt1, txt2){
		return this.each(function(){
			var $element = $(this);
			if($element.text() == txt1){
				$element.text(txt2);
			}
			else if($element.text() == txt2){
				$element.text(txt1);	
			}
		});
	};
	//切换input值
	$.fn.swapVal = function(txt1, txt2){
		return this.each(function(){
			var $element = $(this);
			if($element.val() == txt1){
				$element.val(txt2);
			}
			else if($element.val() == txt2){
				$element.val(txt1);	
			}
		});
	};
	
	$('.btn-status').click(function(){
		$(this).swapClass('blue alive', 'grey asleep').swapText('启用', '禁用');
	});
	
	$('.btn-status-pay').click(function(){
		$(this).swapClass('blue alive', 'grey asleep').swapText('已缴费', '未缴费');
	});
	
	$('.btn-status-push').click(function(){
		$(this).swapClass('blue alive', 'grey asleep').swapText('是', '否');
	});
	
	$('.user-btn-status').click(function(){
		$(this).find('a').swapText('禁言', '解除禁言');
		$('.user-status').swapClass('blue alive', 'grey asleep').swapText('正常','禁言');
	});
	
	$('.closeRepairBtn').click(function(){
		$(this).text('开通业主报修').removeClass('closeRepairBtn').addClass('openRepair').parents('td').prev('td').find('span').attr('class', 'grey asleep').text('未开通');
	});
	
	//师傅管理
	$('.swapMasterStatus').click(function(){
		if(confirm('确定修改该人员状态？')){
			$(this).swapText('开启接单', '屏蔽接单');
			$(this).parents('td').prev('td').find('span').swapClass('grey alive', 'grey asleep').swapText('已屏蔽','正常');
		}
	});
	
	//翻页点击效果
	$('.pages li:lt(9):gt(1)').has('a').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	//物业管理权限
	var $bbsManager = $('.bbs-manager');
	var $bbsList = $('.bbs-list');
	$bbsList.hide();
	$bbsManager.click(function(){
		$(this).parent('td').parent('tr').next('tr.bbs-list').toggle();
	});

	function ChangePagerPosition() {
		var top = $(".main-right").scrollTop()
		//设置iframe内嵌右侧栏位置
		$(".food-right", $("#mainFrame").contents()).css("top", top);
	}
	//iframe所在容器的滚动条事件
	$(".main-right").scroll(function () {
		var top = $(this).scrollTop();
		$(".food-right", $("#mainFrame").contents()).css("top", top);
	});
});

//修改资料
$(function(){
	var $passwordInfo = $('.password-info');
	$passwordInfo.detach();
	$('.password-modify').click(function(){
		$(this).toggleClass('btn-on');
		var $modifyParent = $(this).parent('td').parent('tr');
		if($(this).hasClass('btn-on')){
			$passwordInfo.insertAfter($modifyParent);		
		}else{
			$passwordInfo.detach();
		}
	});
});

//找回密码
(function($){
	var $findStep01 = $('.phone-find-step01');
	var $findStep02 = $('.phone-find-step02');
	var $emailStep = $('.email-find-step');
	$findStep01.hide();
	$findStep02.hide();
	$emailStep.hide();
	$('.phone-find').click(function(){
		var $findParent = $(this).parent('td').parent('tr');
		if($(this).hasClass('btn-on')){
			return false;		
		}else{
			$(this).addClass('btn-on');
			$('.email-find').removeClass('btn-on');
			$findStep01.show();
			$emailStep.hide();
		}
		$findStep02.hide();
	});
	$('.find-verify').click(function(){
		var $verifyParent = $(this).parent('td').parent('tr');
		$findStep01.hide();
		$findStep02.show();
	});
	$('.email-find').click(function(){
		$(this).addClass('btn-on');
		$('.phone-find').removeClass('btn-on');
		$findStep01.hide();
		$findStep02.hide();
		$emailStep.show();
	});
})(jQuery);

//审核
$(function(){
	$('.select-check').change(function(){
		var $checkReason = $(this).parent('td').parent('tr').nextAll('tr');
		if($(this).val() == 0){
			$checkReason.hide();
			$('#createAccount').show();	
			window.parent.TuneHeight();
		}else{
			$checkReason.show();
			$('#createAccount').hide();
			window.parent.TuneHeight();
		}
	});
	//导入账单弹出层
	$('#importBill,.importBill').click(function(){
		$.layer({
			type: 1,
			shade: [0.4,'#000000'],
			area: ['auto', 'auto'],
			title: false,
			border : [5, 0.3, '#000'],
			page: {dom : '.layer-bill'}
		});
	});
	//导入账单弹出层
	$('.import-layer-bill-btn').click(function(){
		$.layer({
			type: 1,
			shade: [0.4,'#000000'],
			area: ['auto', 'auto'],
			title: false,
			border : [5, 0.3, '#000'],
			page: {dom : '.layer-bill.import-layer-bill'}
		});
	});
	//选择城市
	/*$('#citySelectBtn').click(function(){
		$.layer({
			type: 2,
			shadeClose: true,
			title: false,
			closeBtn: [0, true],
			shade: [0.4, '#000'],
			border: [5],
			offset: ['50px',''],
			area: ['960px', ($(window).height() - 200) +'px'],
			iframe: {src: 'citySelect.html'}
		});
	});*/
	//选择派奖城市
	$('#citySelectBtn').click(function(){
		$.layer({
			type: 1,
			shade: [0.4,'#000000'],
			area: ['auto', 'auto'],
			title: false,
			offset: ['50px',''],
			border : [5, 0.3, '#000'],
			page: {dom : '#change-city'}
		});
	});
});

//生成新账号
$(function(){
	var $newAccount = $('.new-account').siblings();
	$newAccount.hide();
	$('.new-account').click(function(){
		$newAccount.show();
	});
});

//全选
$(function(){
	$(document).on('click', '#checkAll', function(){
		if($(this).is(':checked')){
			$(this).parents('thead').siblings('tbody').find('tr').find('input[type=checkbox]').prop('checked', true);
		}else{
			$(this).parents('thead').siblings('tbody').find('tr').find('input[type=checkbox]').prop('checked', false);
		}
	});
});

//增加删除小区
$(function(){
	var $plotAdded = $('.plotAdded');
	var $plotDelete = $('.plot-delete');
	$('#createPlot').click(function(){
		var provinceVal = $('#province option:selected').text();
		var cityVal = $('#city option:selected').text();
		var blockVal = $('#block option:selected').text();
		var roadVal = $('#road').val();
		var plotNameVal = $('#plotName').val();
		if(provinceVal == '选择省' || cityVal == '' || cityVal == '选择市' || blockVal == '选择区' || plotNameVal == ''){
			alert('请完善小区信息！');
		}else{
			var $plotTable = $(this).parents('table');
			var $newPlot = $plotAdded.clone(true).show().appendTo($plotTable);
			if(provinceVal == cityVal){
				cityVal = '';
			}
			$newPlot.find('input[name=province]').val(provinceVal);
			$newPlot.find('input[name=city]').val(cityVal);
			$newPlot.find('input[name=block]').val(blockVal);
			$newPlot.find('input[name=road]').val(roadVal);
			$newPlot.find('input[name=plotName]').val(plotNameVal);
			$newPlot.find('input').each(function(){  
			   if($(this).val() == ''){
				   $(this).hide(); 
			   }else{
				   var textWidth = function(text){ 
						var sensor = $('<div>'+ text +'</div>').css({display: 'none'}); 
						$('body').append(sensor);
						var width = sensor.width();
						sensor.remove();
						return width;
					};
					$(this).width(textWidth($(this).val())); 
			   }
			}); 
			
		}
		if($('.plotAdded').length > 1){
			$(this).val('继续添加小区').addClass('btn-on');
			$('#road').val('');
			$('#plotName').val('');
		}
		window.parent.TuneHeight();
	});	
	$plotDelete.click(function(){
		$(this).parents('tr').remove();
		window.parent.TuneHeight();
		return false;
	});
});

//增加店铺电话、店铺图标
$(function(){
	$PhoneNum = $('.new-phone-num');
	$PhonePic = $('.new-shop-pic');
	
	$('#createNewPhone').click(function(){
		var $newPhoneNum = $PhoneNum.clone(true).show().insertAfter($(this).parents('tr'));
	});
	
	$('#createNewShopPic').click(function(){
		var $newShopPic = $PhonePic.clone(true).show().insertAfter($(this).parents('tr'));
	});
});


//增加删除商品规格
$(function(){
	var $standardAdded = $('#standardAdded');
	$standardAdded.hide();
	var $standardDelete = $('.standard-delete');
	$('#createStandard').click(function(){
		var standardNameVal = $('#standardName').val();
		var standardsVal = $('#standards').val();
		var standardsPrize = $('#standardsPrize').val();
		if(standardNameVal == '' || standardsVal == '' || standardsPrize == ''){
			alert('请完善商品规格信息！');
		}else{
			var $standardTable = $(this).parents('table');
			var $newStandard = $standardAdded.clone(true).show().appendTo($standardTable);
			$newStandard.find('input[name=newStandardName]').val(standardNameVal);
			$newStandard.find('input[name=newStandards]').val(standardsVal);
			$newStandard.find('input[name=newStandardsPrize]').val(standardsVal);
			$newStandard.find('input[name=newStandards]').each(function(){  
			   if($(this).val() == ''){
				   $(this).hide(); 
			   }else{
				   var textWidth = function(text){ 
						var sensor = $('<div>'+ text +'</div>').css({display: 'none'}); 
						$('body').append(sensor); 
						var width = sensor.width();
						sensor.remove(); 
						return width;
					};
					$(this).width(textWidth($(this).val())); 
			   }
			}); 
		}
		window.parent.TuneHeight();
	});	
	$standardDelete.click(function(){
		$(this).parents('tr').remove();
		window.parent.TuneHeight();
		return false;
	});
});

//增加删除商品参数
$(function(){
	var $paramAdded = $('.paramAdded.dsn');
	var $paramDelete = $('.param-delete');
	$('#createParam').click(function(){
		var paramNameVal = $('#paramName').val();
		var paramsVal = $('#params').val();
		if(paramNameVal == '' || paramsVal == ''){
			alert('请完善商品参数信息！');
		}else{
			//查询是否已存在相同参数
			var sameParamNum = 0;
			$('.paramAdded:visible').each(function(){
				var ThisParamNameVal = $(this).find('input[name=newParamName]').val();
				var ThisParamsVal = $(this).find('input[name=newParams]').val();
				if(paramNameVal == ThisParamNameVal && paramsVal == ThisParamsVal){
					alert('已存在相同参数！');
					sameParamNum += 1;
				}
			});
			if(sameParamNum > 0){
				return false;
			}
			
			var $paramTable = $(this).parents('table');
			var $newParam = $paramAdded.clone(true).show().appendTo($paramTable);
			$newParam.find('input[name=newParamName]').val(paramNameVal);
			$newParam.find('input[name=newParams]').val(paramsVal);
			$newParam.find('input[name=newParams]').each(function(){  
			   if($(this).val() == ''){
				   $(this).hide(); 
			   }else{
				   var textWidth = function(text){ 
						var sensor = $('<div>'+ text +'</div>').css({display: 'none'}); 
						$('body').append(sensor); 
						var width = sensor.width();
						sensor.remove(); 
						return width;
					};
					$(this).width(textWidth($(this).val())); 
			   }
			}); 
		}
		window.parent.TuneHeight();
	});	
	$paramDelete.click(function(){
		$(this).parents('tr').remove();
		window.parent.TuneHeight();
		return false;
	});
});

//商品推广
$(function(){
	var $itemPushCheck = $('.item-push-check');
	var $itemPush = $('.item-push');
	$itemPush.hide();
	$itemPushCheck.change(function(){
		if($(this).is(':checked')){
			$itemPush.show();
		}else{
			$itemPush.hide();
		}
		window.parent.TuneHeight();
	});
});

$(function(){
	//上传图片前预览缩略图
	$(".uploadImage").on("change", function(){
		var files = !!this.files ? this.files : [];
		if (!files.length || !window.FileReader) return;
		var $this = $(this);
		if (/^image/.test( files[0].type)){
			var reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onloadend = function(){
			$this.prev(".uploadPreview").css("background-image", "url("+this.result+")");
			}
		}
	});
	
	//新增上传图片前预览缩略图
	$(".uploadImage01").on("change", function(){
		var files = !!this.files ? this.files : [];
		if (!files.length || !window.FileReader) return;
		var $this = $(this);
		if (/^image/.test( files[0].type)){
			var reader = new FileReader();
			reader.readAsDataURL(files[0]);
			reader.onloadend = function(){
			$this.parent(".uploadPreview01").css("background-image", "url("+this.result+")");
			}
		}
	});
});

//动态改变页面高度
function TuneHeight(){
	var newHeight = $("#mainFrame").contents().find('.info').height() + 110;
	$("#mainFrame").css('height', newHeight);
}

$(function(){
		
	//上传图片预览
	$(".uploadImage02").change(function() {
		var $pic = $(this).siblings(".imgPreview"),
			$file = $(this); 
	 
		var ext=$file.val().substring($file.val().lastIndexOf(".")+1).toLowerCase();
	 
		 // gif在IE浏览器暂时无法显示
		 if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
			 alert("图片的格式必须为png或者jpg或者jpeg格式！"); 
			 return;
		 }
		 var isIE = navigator.userAgent.match(/MSIE/)!= null;
	 
		 if(isIE) {
			$file.select();
			//转移input焦点，兼容Ie9
			document.getElementById("picDiv").focus();
			var reallocalpath = document.selection.createRange().text;
	 		//设置预览图片路径
			$pic.attr('src', reallocalpath);
		 }else {			
			var file = $file[0].files[0];
			var reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = function(e){
				$pic[0].src=this.result;
			}
		 }
		 
	});	
	$(".item-upload-img .uploadImage02").change(function() {		 
		var $imgUploadVal = $('.img-upload-val');
		var uploadNum = 0;
		uploadNum += 1;
		$imgUploadVal.val(uploadNum);
		$('.inputform').Validform().check(false,$imgUploadVal);
	});	
	
	//增加删除图片
	var $imgNewAdd = $('.img-new-add');
	var num = 0;
	$('.img-add-btn').click(function(){
		var newImgId = 'newImgId' + num;
		var imgLength = $(this).prevAll('.uploadPreview01:visible').length;
		if(imgLength == 5){
			alert('最多上传5张图片');	
		}else{
			$imgNewAdd.clone(true).removeClass('img-hide').insertBefore($(this)).find('input').attr('id', newImgId);
		}
		num += 1;
	});
	
	$('.img-delete-btn').click(function(){
		$(this).parent('.uploadPreview01').remove();
	});
	
	//增加删除商品详情图片、描述
	var $imgDescNewAdd = $('.imgDesc-new-add');
	var descNum = 0;
	$('.imgDesc-add-btn').click(function(){
		var newImgId = 'newImgId' + descNum;
		var imgLength = $(this).prevAll('.uploadPreview01:visible').length;
		/*if(imgLength == 10){
			alert('最多上传10张图片');	
		}else{
			$imgDescNewAdd.clone(true).removeClass('img-hide').insertBefore($(this)).find('input').attr('id', newImgId);
		}*/
		$imgDescNewAdd.clone(true).removeClass('img-hide').insertBefore($(this)).find('input').attr('id', newImgId);
		descNum += 1;
	});
	
	$('.img-delete-btn').click(function(){
		$(this).parent('.uploadPreview01').remove();
	});
	
	//添加描述按钮
	var $shapeBox = $('.shape-box');
	var $imgDescText = $('.img-desc-text');
	var $imgDescTextBox = $('.img-desc-text-box');
	$imgDescText.click(function(){
		var noImgUrl = $(this).siblings('.imgPreview').attr('src');
		if(noImgUrl.indexOf('addimg01.jpg') > -1){
			alert('请先上传图片');	
		}else{
			var thisVal = $(this).siblings('input.desc-text-input').val();
			$(this).siblings('input.desc-text-input').addClass('current-input');
			$imgDescTextBox.find('.textareas').val(thisVal);
			$imgDescTextBox.fadeIn();
			$shapeBox.fadeIn();
		}
	});
	//编辑描述按钮
	var $imgDescBox = $('.img-desc-box');
	$imgDescBox.click(function(){
		var thisVal = $(this).siblings('input.desc-text-input').val();
		$(this).siblings('input.desc-text-input').addClass('current-input');
		$imgDescTextBox.find('.textareas').val(thisVal);
		$imgDescTextBox.fadeIn();
		$shapeBox.fadeIn();
	});
	
	//描述确定按钮
	$('#checkDescBtn').click(function(){
		var curText = $('.textareas').val();
		var omitText = $.trim(curText).substring(0,4);
		var $thisImgDescBox = $('.current-input').siblings('.img-desc-box');
		var $thisImgDescText = $('.current-input').siblings('.img-desc-text');
		$thisImgDescBox.find('.desc-text-info').text(omitText + '…');
		if($thisImgDescBox.is(':hidden')){
			$('.current-input').siblings('.img-desc-text').hide();
			$thisImgDescBox.show();
		}else if($.trim(curText) == ''){
			$thisImgDescBox.hide();
			$thisImgDescText.show();
		}
		$('.current-input').val(curText).removeClass('current-input');
		$imgDescTextBox.fadeOut();
		$shapeBox.fadeOut();
	});
	//描述取消按钮
	$('#backDescBtn').click(function(){
		$('.current-input').removeClass('current-input');
		$imgDescTextBox.fadeOut();
		$shapeBox.fadeOut();
	});
	
	
	//hover删除按钮
	$('.uploadPreview01').hover(function(){
		$(this).find('.img-delete-btn').show();
	},function(){
		$(this).find('.img-delete-btn').hide();
	});
	
});

//继续增加、删除小区
$(function(){
	var $newPlotInfo = $('.new-plot-info');
	$('.add-newplot-btn').click(function(){
		$newPlotInfo.clone(true).show().insertBefore($(this).parent('div'));
		window.parent.TuneHeight();
	});
	$('.delete-newplot-btn').click(function(){
		$(this).parents('table').remove();
	});
});

//商品规格列表设置
$(function(){
	var $itemStandardList01 = $('.item-standard-list01');
	var $listTitle = $itemStandardList01.find('tr.title');
	
	var itemStandardList01Html = $itemStandardList01.html();
	
	//增加颜色规格
	
	//颜色class序号
	colorBoxIndex = 0;  
	$('.addStandard01').click(function(){
		
		var $newStandardBox = $('<div class="standard-box"></div>');
		var $newWrap = $('<span class="standard-wrap"></span>');
		var $newShutX = $('<span class="shut-x sd-btn01">x</span>');
		
		var $this = $(this);
		var $sdInput = $this.prev('input');
		var $sdTd = $this.parent('td');
		var curInputVal = $.trim($sdInput.val());
		
		var $standardBox = $('.standard-box');
		
		var $tr = $('<tr></tr>');
		var $td = $('<td></td>');
		var $priceTd = $('<td><input class="input_text w80" type="text" value="填写价格" /></td>');
		
		if($sdInput[0].value == $sdInput[0].defaultValue){
			alert('请先填写规格说明！');	
		}else{
			if($standardBox.length){
				var wrapText = $standardBox.map(function() {
					return $(this).find('.standard-wrap').text();
                }).get().join(',').split(',');	
				if($.inArray(curInputVal, wrapText) >= 0){
					alert('该规格已存在！');
				}else{
					createNewStandard();
					createNewStandardList()	
				}
			}else{
				createNewStandard();	
				createNewStandardList()
			}
		}
		//创建颜色规格
		
		function createNewStandard(){
			
			$newWrap.append(curInputVal);
			$newStandardBox.append($newWrap);
			$newStandardBox.append($newShutX);
			$newStandardBox.appendTo($sdTd);
			
			colorBoxIndex += 1;
			colorTrClass = 'color-index-' + colorBoxIndex;
			$newStandardBox.attr('data-class', colorTrClass);
			
		};
		
		//创建颜色规格列表
		
		function createNewStandardList(){
			if($itemStandardList01.hasClass('dsn')){
				$itemStandardList01.removeClass('dsn');	
			}
			var listTitleIndex = $listTitle.next('tr').children('td').length;
			var listRowspan = $listTitle.next('tr').children('td.color-name').attr('rowspan');
			
			if(listTitleIndex > 2){
				var $newSdList = $itemStandardList01.find('tr:gt(0):lt( '+ listRowspan +' )').clone(true);
				$newSdList.each(function() {               
					var sizeTrClassArray = $(this).attr('class').split(' ');
					var sizeTrClassArray01 = $(this).attr('class').replace(' ', '-').split('-');
					var sizeClassIndex = $.inArray('size', sizeTrClassArray01);
					if(sizeClassIndex < 2){
						sizeClassIndex = 0;
					}else{
						sizeClassIndex = 1;
					}
					var sizeTrClass = sizeTrClassArray[sizeClassIndex];
					$(this).attr('class', sizeTrClass);
					if($(this).find('td').length > 2){
						$(this).find('td').eq(0).text( curInputVal );
					}
					$(this).appendTo($itemStandardList01).addClass(colorTrClass);
				});
			}else{
				var standardHtml = '';
				standardHtml += '<tr><td class="color-name" rowspan="1">' + curInputVal + '</td>';
				standardHtml += '<td><input class="input_text w80" type="text" value="填写价格" /> 元</td>';
				standardHtml += '</tr>';
				$(standardHtml).appendTo($itemStandardList01).addClass(colorTrClass);	
			}
			
			window.parent.TuneHeight();
		}
		
	});
	
	//增加尺寸规格
	
	//尺寸class序号
	sizeBoxIndex = 0;  
	$('.addStandard02').click(function(){
		
		var $newStandardBox = $('<div class="standard-box sd-box01"></div>');
		var $newWrap = $('<span class="standard-wrap"></span>');
		var $newShutX = $('<span class="shut-x sd-btn02">x</span>');
		
		var $this = $(this);
		var $sdInput = $this.prev('input');
		var $sdTd = $this.parent('td');
		var curInputVal = $.trim($sdInput.val());
		
		var $standardBox = $('.standard-box');
		
		var $tr = $('<tr></tr>');
		var $td = $('<td></td>');
		var $priceTd = $('<td><input class="input_text w80" type="text" value="填写价格" /> 元</td>');
		
		var sdSpanText = $this.parent('td').prev('td').find('span').text();
		
		if($sdInput[0].value == $sdInput[0].defaultValue){
			alert('请先填写规格说明！');	
		}else{
			if($standardBox.length){
				var wrapText = $standardBox.map(function() {
					return $(this).find('.standard-wrap').text();
                }).get().join(',').split(',');	
				
				//判断数组中是否有单个对象与指定元素完全等同，若结果为true，返回该位置的索引；否则返回-1
				if($.inArray(curInputVal, wrapText) >= 0){  
					alert('该规格已存在！');
				}else{	
					createNewStandard();
					addNewStandardListAll();
				}
			}else{
				var colorSdBoxNum = $('.addStandard01').nextAll('.standard-box').length;
				if( colorSdBoxNum == 0 ){
					alert('请先添加商品颜色！');
				}else{
					createNewStandard();
					addNewStandardListAll();
				}
			}
		}
		//创建尺寸规格
		
		function createNewStandard(){
			
			$newWrap.append(curInputVal);
			$newStandardBox.append($newWrap);
			$newStandardBox.append($newShutX);
			$newStandardBox.appendTo($sdTd);
			
			sizeBoxIndex += 1;
			sizeTdClass = 'size-index-' + sizeBoxIndex ;
			$newStandardBox.appendTo($sdTd).attr('data-class', sizeTdClass);
			
		};
		
		//创建尺寸规格列表
		function addNewStandardListAll(){
			var titleText = $itemStandardList01.find('tr.title td').map(function() {
				return $(this).text();
			}).get().join(',');
			
			//判断数组中是否有单个对象包含指定元素，不一定完全等同，若结果为true，返回该位置索引；否则返回-1
			if(titleText.indexOf(sdSpanText) > -1){  
				//title已存在
				addNewStandardList(); 
			}else{
				//title未存在，创建title
				var $titleTd = $td.clone().append(sdSpanText);  
				$titleTd.insertAfter($itemStandardList01.find('tr.title').find('td').eq(0));
				//20150717修复：创建第一个尺寸时，如果已存在多个颜色，则所有颜色行均需添加sizeTdClass
				$itemStandardList01.find('tr:gt(0)').addClass(sizeTdClass);  
				//创建第一个尺寸
				addNewStandardList();
			}
		}
		
		//创建尺寸规格列表（title已存在）
		function addNewStandardList(){
			
			var $tdColorName = $('.color-name');
			var tdColorNameRowspan = $tdColorName.attr('rowspan');
			
			var $trList = $tdColorName.parent('tr');
			var $tdHtml = $td.clone().append(curInputVal);
			
			$trList.each(function(){
				colorNameTdLength = $(this).children('td').length;
			});
	
			var $newSizeHtml = $tr;
			$newSizeHtml.append($tdHtml.clone(true)).append($priceTd.clone()).addClass(sizeTdClass);
			
			if( colorNameTdLength > 2 ){
				$trList.each(function(){
					var colorTrClassArray = $(this).attr('class').split(' ');
					var colorTrClassArray01 = $(this).attr('class').replace(' ', '-').split('-');
					var colorClassIndex = $.inArray('color', colorTrClassArray01);
					if(colorClassIndex < 2){
						colorClassIndex = 0;
					}else{
						colorClassIndex = 1;
					}
					var colorTrClass = colorTrClassArray[colorClassIndex];
					
					if(tdColorNameRowspan == 1){
						$newSizeHtml.clone(true).addClass(colorTrClass).insertAfter($(this));
					}else{
						$newSizeHtml.clone(true).addClass(colorTrClass).insertAfter($(this).nextAll('tr').eq(tdColorNameRowspan - 2));
					}
					
					var colorTrLength = $('tr.' + colorTrClass).length;
					$(this).children('td.color-name').attr('rowspan', colorTrLength );
				});
			}else{
				$trList.each(function(){ 
					var colorTrClass = $(this).attr('class');
					$tdHtml.clone(true).insertAfter($(this).find('td').eq(0));
				});
			}
			
			window.parent.TuneHeight();
			
		}
		
	});
	
	//删除颜色
	//$(document)意义就在于使元素加载完后才执行方法，所以当为jQuery动态加载的元素绑定on方法的时候，使用$(document)设置代码脚本在DOM元素加载完成后开始执行。
	$(document).on("click", '.shut-x.sd-btn01', function(){ 
		var $thisBox = $(this).parents('.standard-box');
		var colorBoxNum = $(this).parents('.standard-box').siblings('.standard-box').length;
		var sizeBoxNum = $('.addStandard02').nextAll('.standard-box').length;
		
		$thisBox.remove();
		
		//删除第1个颜色，且有尺寸的情况
		if(colorBoxNum == 0 && sizeBoxNum > 0){  
			$itemStandardList01.find('tr.title').find('td').eq(1).remove();	
			$itemStandardList01.find('tr').not('.title').remove();	
			$('.addStandard02').nextAll('.standard-box').remove();
			
		//删除第1个颜色，没有尺寸的情况
		}else if(colorBoxNum == 0 && sizeBoxNum == 0){  
			$itemStandardList01.find('tr').not('.title').remove();	
			$('.addStandard02').nextAll('.standard-box').remove();
			
		//删除第n+1个颜色(n>0)
		}else{		
			var colorSelectClass = $thisBox.attr('data-class');
			$('.' + colorSelectClass).remove();
		}
		window.parent.TuneHeight();
	});
	
	//删除尺寸
	$(document).on("click", '.shut-x.sd-btn02', function(){
		
		var $thisBox = $(this).parents('.standard-box');
		var thisBoxIndex = $thisBox.index();
		
		var sizeSelectClass = $thisBox.attr('data-class');
		
		var $addStandard01Btn = $('.addStandard01');
		
		$thisBox.remove();
		
		var $sizeTrs = $itemStandardList01.find('tr').not('.title');
		var $sizeTr = $itemStandardList01.find('tr').eq(1);
		var $sizeTd = $sizeTr.find('td').eq(0);
		
		//删除第1个尺寸，且有多个尺寸的情况
		if(thisBoxIndex == 2 && $sizeTd.attr('rowspan') > 1 ){ 
			$('tr.' + sizeSelectClass).each(function() {
                var newTdRowspan = $(this).find('td').eq(0).attr('rowspan');
				$(this).find('td').eq(0).attr('rowspan', newTdRowspan - 1).prependTo($(this).next('tr'));
				$(this).remove();
            });
			
		//删除第1个尺寸，只有1个尺寸的情况
		}else if(thisBoxIndex == 2 && $sizeTd.attr('rowspan') == 1 ){  
			$sizeTrs.each(function() {
				$(this).find('td').eq(1).remove();
				//将尺寸所对应的class删除
				$(this).removeClass(sizeSelectClass);
			});
			$itemStandardList01.find('tr.title').find('td').eq(1).remove();	
				
		//删除第n+1个尺寸(n>0)
		}else{	
			if( !$sizeTd.attr('rowspan') || $sizeTd.attr('rowspan') == 1 ){
				$sizeTrs.each(function() {
					$(this).find('td').eq(1).remove();
				});
				$itemStandardList01.find('tr.title').find('td').eq(1).remove();
			}else{
				
				$('.' + sizeSelectClass).remove();
				var colorRowspan = $('.color-name').attr('rowspan');
				$('.color-name').attr('rowspan', colorRowspan-1);
			
			}	
		}
		window.parent.TuneHeight();
		
		
	});

	//配送说明
	var $newDescInfoTd = $('.new-desc-info-td');
	var $newDescInfoTr = $('.new-desc-info-tr');
	var $descTitle = $('.desc-title');
	
	$('.add-desc-btn').click(function(){
		var $oldTr = $(this).parents('tr');
		if($oldTr.next('.new-desc-info-td:visible').length == 0){
			var descTitleRowspan = $descTitle.attr('rowspan');
			var newRowspan = descTitleRowspan*1 + 1;
			$newDescInfoTd.clone(true).removeClass('dsn').insertAfter($oldTr);
			$descTitle.attr('rowspan', newRowspan);
			window.parent.TuneHeight();
		}
	});
	
	$('.add-desc-tr-btn').click(function(){
		var descTitleRowspan = $descTitle.attr('rowspan');
		var newRowspan = descTitleRowspan*1 + 1;
		$newDescInfoTr.clone(true).removeClass('dsn').appendTo($(this).parents('table'));
		$descTitle.attr('rowspan', newRowspan);
		window.parent.TuneHeight();
	});
	
	$('.de-desc-btn').click(function(){
		var $newDescInfoNext = $(this).parents('tr').next('.new-desc-info-td');
		var descTitleRowspan = $descTitle.attr('rowspan');
		var newRowspan = descTitleRowspan*1 - 1;
		$(this).parents('tr').remove();
		$descTitle.attr('rowspan', newRowspan);
		if($newDescInfoNext.length > 0){
			$newDescInfoNext.remove();
			$descTitle.attr('rowspan', newRowspan - 1);
		}
		window.parent.TuneHeight();
	});

	//商品上架
	$('.putaway').click(function(){
		$.layer({
			type: 1,
			shade: [0.4,'#000000'],
			area: ['auto', 'auto'],
			title: false,
			border : [5, 0.3, '#000'],
			page: {dom : '.classify-editable'}
		});
	});
	$('.putaway-notEditable').click(function(){
		$.layer({
			type: 1,
			shade: [0.4,'#000000'],
			area: ['auto', 'auto'],
			title: false,
			border : [5, 0.3, '#000'],
			page: {dom : '.classify-notEditable'}
		});
	});

	//货架管理-所属分类
	$('.classify-cancel-btn').click(function(){
		layer.closeAll();
	});

	//类目管理
	var $sortTable = $('#sortTable');
	var $newSort1InfoTr = $('.new-sort1-info-tr.dsn');
	var $newSort2InfoTr = $('.new-sort2-info-tr.dsn');
	var $sortRanking = $('.sort-ranking');
	var $sortTitle = $('.sort-title');
	
	$('.add-sort1-btn').click(function(){
		$newSort1InfoTr.clone(true).removeClass('dsn').appendTo($sortTable);
	});
	
	$('.add-sort2-btn').click(function(){
		var tdRowspan = $(this).parents('td').attr('rowspan');
		if(tdRowspan == 1){
			$newSort2InfoTr.clone(true).removeClass('dsn').insertAfter($(this).parents('tr'));
			$(this).parents('td').attr('rowspan', tdRowspan*1 + 1);
			$(this).parents('td').siblings('td.sort-ranking').attr('rowspan', tdRowspan*1 + 1);
		}else{
			$newSort2InfoTr.clone(true).removeClass('dsn').insertAfter($(this).parents('tr').nextAll('tr').eq(tdRowspan - 2));
			$(this).parents('td').attr('rowspan', tdRowspan*1 + 1);
			$(this).parents('td').siblings('td.sort-ranking').attr('rowspan', tdRowspan*1 + 1);	
		}
		window.parent.TuneHeight();
	});
	
	$(document).on('click', '.de-sort1-btn', function(){
		var tdRowspan = $(this).parents('td').attr('rowspan');
		if(confirm('确定删除该一级类目？')){
			if(tdRowspan == 1){
				$(this).parents('tr').remove();
			}else{
				$(this).parents('tr').nextAll('tr.new-sort2-info-tr:lt( '+tdRowspan+' )').remove();
				$(this).parents('tr').remove();
			}
		}
		window.parent.TuneHeight();
	});
	
	$(document).on('click', '.de-sort2-btn', function(){
		var $thisSortParents = $(this).parents('tr').prevAll('.new-sort1-info-tr').eq(0);
		var tdRowspan = $thisSortParents.children('td').eq(0).attr('rowspan');
		if(confirm('确定删除该二级类目？')){
			$(this).parents('tr').remove();
			$thisSortParents.children('td').eq(0).attr('rowspan', tdRowspan - 1);
			$thisSortParents.children('td').eq(1).attr('rowspan', tdRowspan - 1);
		}
		window.parent.TuneHeight();
	});
	
	//修改类目状态
	$('.status-btn').click(function(){
		if(confirm('确定修改该类目状态？')){
			$(this).siblings('span').swapClass('black alive', 'grey asleep').swapText('启用', '禁用');
		}
	});
	
});

//输入框限制字数
$(function(){
	$('.textareas').keyup(function(){
		var valLength = $.trim($(this).val()).length;
		var currentVal = $.trim($(this).val());
		if(valLength > 99){
			$(this).val(currentVal.substring(0,100));	
		}
		var num = 100 - valLength;
		if(num < 0){
			num = 0;
		}
		$('.leftNum').text(num);
	});
	
	//修复日期选择，延迟验证
	$('.input_text.icon_dt, .input_text.date_picker').keyup(function(){
		var $this = $(this);
		if($this.attr('datatype') === undefined){
			return;
		}
		setTimeout(function(){
			$(".inputform").Validform({}).check(false,$this);
		},600);
	});
	
	//选择角色
	$(document).on('change', '.select-all-role', function(){
		selectAllRole(this);
	});
	
	$(document).on('change', '.select-role', function(){
		selectSingleRole(this);
	});
});


//获取当前的日期时间 格式“yyyy-MM-dd HH:MM:SS”
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var strHours = date.getHours();
	var strMin = date.getMinutes();
	var strSec = date.getSeconds();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	if (strHours >= 0 && strHours <= 9) {
		strHours = "0" + strHours;
	}
	if (strMin >= 0 && strMin <= 9) {
		strMin = "0" + strMin;
	}
	if (strSec >= 0 && strSec <= 9) {
		strSec = "0" + strSec;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
			+ " " + strHours + seperator2 + strMin
			+ seperator2 + strSec;
	return currentdate;
}

//select切换	//不在同一个table
function selectChangePlus(obj, swapClass){
	$(obj).change(function(){
		var thisVal = $(this).val();
		var $swapObj = $(swapClass + '-' + thisVal);
		
		$(swapClass).hide().find('input,select').attr('ignore', 'ignore');
		if($swapObj.length){
			$swapObj.show().find('input,select').attr('ignore', '');
		}
		window.parent.TuneHeight();
	});
}

//radio单选切换	//不在同一个table
function radioChangePlus(obj, swapClass){
	$(obj).click(function(){
		var $checkTrCon = $(swapClass);
		var thisVal = $(this).attr('data-num');
		var $thisSwapVal = $('.swap-num-' + thisVal);
		
		$checkTrCon.hide();
		$checkTrCon.find('input[type=radio]').prop('checked', false);
		$checkTrCon.find('input[type=checkbox]').prop('checked', false);
		
		if($thisSwapVal){
			$thisSwapVal.show();
		}
		window.parent.TuneHeight();
	});
}

$(function(){
	$('.example-btn').click(function(){
		$(this).swapVal('显示说明', '隐藏说明');
		$('.example-desc').toggle();
	});
	
	$('.example-view-btn').click(function(){
		$(this).parents('ul').next('.example-view-con').toggle();
	});
	
	//设置表格适应宽度
	autoFixTableWidth([".info-list",".info-list-01",".info-list-02",".info-list-03"]);
	
	//手机浏览时日期控件设为只读
	//判断安卓ios系统
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid || isiOS){
		$(".input_text.icon_dt").attr('readonly', 'readonly');
	} 
	if(isiOS){
		$('.info, .main-right, .main-con').addClass('ios-scroll-fixed'); 
	}
});

//设置表格适应宽度
function autoFixTableWidth(array){
	//ie9及以下版本，不支持table横向滚动条
	var browser = navigator.appName;
	var b_version = navigator.appVersion;
	
	
	if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
		var trim_Version = 'FireFox';
	}else{
		if(b_version.indexOf(';') > -1){
			var version = b_version.split(";");
			var trim_Version = version[1].replace(/[ ]/g, "");
		}else{
			var trim_Version = b_version.replace(/[ ]/g, "");
		}
	}
	//ie9
	if (browser == "Microsoft Internet Explorer" && trim_Version == "MSIE9.0") {
		setInfoMinWidth([".info-list",".info-list-01",".info-list-02",".info-list-03"]);
		return;
	}
	//ie6-8
	if (!$.support.leadingWhitespace) { 
		setInfoMinWidth([".info-list",".info-list-01",".info-list-02",".info-list-03"]);
		return;
	}
	for(i=0; i<array.length; i++){
		$(array[i]).addClass('width-auto-fix');
		if($(array[i]).width() > $(array[i]).find('tr').width()){
			$(array[i]).removeClass('width-auto-fix').attr({'cellspacing':'0'});
		}
	}
}

function setInfoMinWidth(array){
	for(i=0; i<array.length; i++){
		if($(array[i]).length && $(array[i]).width() < $(array[i]).find('tr').width()){
			$(array[i]).width($(array[i]).find('tr').width());
		}
		if($(array[i]).length && $('.info').width() < $(array[i]).width()){
			$('.info').css({'width':'94%', 'overflow-x':'scroll', 'padding-right':'10px'});
		}
	}
}

//校验时间先后顺序
$.fn.compareTime = function(startTimeObj, endTimeObj){
	var $self = $(this);
	//不能使用blur，否则只能触发第一次校验
	$self.keyup(function(){
		var startTime = $(startTimeObj).val();
		var endTime = $(endTimeObj).val();
		if(startTime != '' && endTime != '' && startTime >= endTime){
			alert('结束时间须大于起始时间！');
			$(this).val('');
		}
	});
}

function getUrlParam(name) {
	//构造一个含有目标参数的正则表达式对象  
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	//匹配目标参数  
	var r = window.location.search.substr(1).match(reg);
	//返回参数值  
	if (r != null)
		return unescape(r[2]);
	return null;
}

//字数统计 obj：统计对象；leftBox：剩余字数容器；num：剩余字数
function countTextNum(obj, leftBox, maxNum){
	$(obj).keyup(function(){
		var valLength = $.trim($(this).val()).length;
		var currentVal = $.trim($(this).val());
		if(valLength > maxNum - 1 ){
			$(this).val(currentVal.substring(0,maxNum));	
		}
		var num = maxNum - valLength;
		if(num < 0){
			num = 0;
		}
		$(leftBox).text(num);
	});
}


//角色选择
function selectAllRole(obj){
	var $checkboxs = $(obj).siblings('ul').find('[type=checkbox]');
	if($(obj).is(':checked')){
		$checkboxs.prop('checked', true);
	}else{
		$checkboxs.prop('checked', false);
	}
	
	selectSingleRole(obj);
}

function selectSingleRole(obj){
	var $allParents = $(obj).parents('ul').not('.role-box');
	$allParents.each(function(){
		var $this = $(this);
		var $thisAllCheck = $this.siblings('.select-all-role');
		var thisCheckboxNum= $this.find('[type=checkbox]').length;
		var thisCheckedNum = $this.find('[type=checkbox]:checked').length;
		if($thisAllCheck.length && thisCheckboxNum === thisCheckedNum){
			$thisAllCheck.prop('checked', true);
		}else{
			$thisAllCheck.prop('checked', false);
		}
	})
}
