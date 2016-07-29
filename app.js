require(['jquery','module1', 'module2'], function($, xxx, yyy){
	console.log($)
	console.log(xxx)
	console.log(yyy)
	xxx.say()

	//var dom1 = $('#module1').get(0)
	//xxx.init(dom1)
	//var dom2 = $('#module2').get(0)
	//yyy.init(dom2)
})

