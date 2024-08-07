console.log("reply Module......");

var BoardService = (function() {

	function getList(param, callback, error) {

		var page = param.page;

		$.ajax({
			url : "/board/list/"+page+".json",
			data : param,
			dataType : "json",
			type : "GET",
			asyn : false,
		}).done(function(data) {
			if (callback) {
				callback(data);
			}
			;
		}).fail(function(xhr, status, err) {
			if (error) {
				error();
			}
		});
	}
	;

	function displayTime(timeValue) {
		var dateObj = new Date(timeValue);

		var yy = dateObj.getFullYear();
		var mm = dateObj.getMonth() + 1; // getMonth는 0부터 시작
		var dd = dateObj.getDate();

		return [ yy, '/', mm + '/', dd ].join('');
	}
	;

	return {
		getList : getList,
		displayTime : displayTime,
	};
})();
