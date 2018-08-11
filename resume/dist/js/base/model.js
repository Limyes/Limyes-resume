'use strict';

window.Model = function (options) {
	var resourceName = options.resourceName;
	return {
		init: function init() {
			var APP_ID = 'Hq30oxE0ccnYaUEu43ogcbRM-gzGzoHsz';
			var APP_KEY = '8biXDYkWtvbAtkCTPOuWDIG3';
			AV.init({
				appId: APP_ID,
				appKey: APP_KEY
			});
		},
		fetch: function fetch() {
			var query = new AV.Query(resourceName);
			return query.find();
		},
		save: function save(object) {
			var X = AV.Object.extend(resourceName);
			var x = new X();
			return x.save(object);
		}
	};
};