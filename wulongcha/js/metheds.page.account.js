$(function(){
	//表单校验
	if($(".inputform").length){
		$(".inputform").Validform({
			tiptype:3
		});
	}
	
	//账户管理页面
	if($('.pagination.account_page').length){
		$('.pagination.account_page').jqPaginator({
		    totalPages: 20,
		    visiblePages: 10,
		    currentPage: 1,
		    onPageChange: function (num, type) {
		        orderVM.getAjax(num);
		    }
		});
	}
	
	//角色管理页面
	if($('.pagination.role_page').length){
		$('.pagination.role_page').jqPaginator({
		    totalPages: 20,
		    visiblePages: 10,
		    currentPage: 1,
		    onPageChange: function (num, type) {
		        orderVM.getAjax(num);
		    }
		});
	}
});

//账户管理页面
var orderVM = new Vue({
	el: '#accountTableList',
	data: {
		list: null
	},
	methods: {
		getAjax: function(num){
			var url = "js/itemData.json";
	        var _self=this;
	        
	       axios.get(url).then(function(response){
	        	_self.list = response.data[0];
	        })
		}
	}
})

//角色管理页面
var orderVM = new Vue({
	el: '#roleTableList',
	data: {
		list: null
	},
	methods: {
		getAjax: function(num){
			var url = "js/itemData.json";
	        var _self=this;
	        
	       axios.get(url).then(function(response){
	        	_self.list = response.data[0];
	        })
		}
	}
})