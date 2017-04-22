$(function(){
	//表单校验
	if($(".inputform").length){
		$(".inputform").Validform({
			tiptype:3
		});
	}
	
	//修改状态
	$(".changeActivityStatus").click(function(){
		var $this = $(this);
		if(confirm('确认修改该活动状态？')){
			$.get('../../commonjs/virtual.data.js', {actId: $this.attr('data-id')}, function(data, status){
				if(JSON.parse(data)[0].status === '0000'){
					$this.swapText('启用', '停用');
					$this.parents('tr').find('.activity-status').swapClass('activity-status bold', 'activity-status red').swapText('已启用', '已停用');
					alert('状态修改成功！');
				}
			});
		}
	});
	
	$('.pagination').jqPaginator({
	    totalPages: 20,
	    visiblePages: 10,
	    currentPage: 1,
	    onPageChange: function (num, type) {
	        orderVM.getAjax(num);
	    }
	});
	
});

var orderVM = new Vue({
	el: '#tableList',
	data: {
		curItemNum: 1,
		itemIndex: '',
		hasSelectedNum: 0,
		list: null,
		hasNext: true
	},
	methods: {
		
		getAjax: function(num){
			var url = "js/itemData.json";		//.js后缀的json文件请求后返回的是blob格式的数据。。。
	        var _self=this;
	        
	       axios.get(url).then(function(response){
	        	_self.list = response.data[0];
	        })
		}
	}
})