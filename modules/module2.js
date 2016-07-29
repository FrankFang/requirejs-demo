define('module2',['module1'],function(zzz){

	return {
		name: 'module2',
		dependency: zzz,
		init: function(dom){
			alert('module2')
			dom.querySelector('button').onclick = function(){
				alert('hi Terry')
			}
		}
	}
})
