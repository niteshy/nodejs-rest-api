
/*
 * User Controller 
 */

var CONTROLLER = "USER"; 

function create(req, res) {
	console.log(CONTROLLER + " Create Request = "); 
	res.send({id: "1"});
	res.end();
}

function get(req, res) {
	console.log(CONTROLLER + " Get Request = " + res); 
	res.send({id: req.params.id});
	res.end();
}

function gets(req, res) {
	console.log(CONTROLLER + " Gets Request = " + res); 
	res.send([{id: "1"}, {id: "2"}]);
	res.end();
}

function update(req, res) {
	console.log(CONTROLLER + " Update Request = " + res); 
	res.send({id: req.params.id});
	res.end();
}

function remove(req, res) {
	console.log(CONTROLLER + " Remove Request = " + res); 
	res.send({id: req.params.id});
	res.end();
}


exports.create = create; 
exports.get = get; 
exports.gets = gets; 
exports.update = update; 
exports.remove = remove; 
