window.Model=function(){
	let resourceName=options.resourceName
	return {
		init:function(){
			var APP_ID = 'Hq30oxE0ccnYaUEu43ogcbRM-gzGzoHsz';
		    var APP_KEY = '8biXDYkWtvbAtkCTPOuWDIG3';
		    AV.init({
		    	appId: APP_ID,
		        appKey: APP_KEY
		    });
		},
		fetch:function(){
			var query=new AV.Query(resourceName)
      		return query.find()
		},
		save:function(object){
			let X= AV.Object.extend(resourceName);
            let x= new X();
            message.save(object)
		}
	}
}