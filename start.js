/**
 * Created by junping on 14-12-18.
 */
var fs = require("fs");

var files = fs.readdirSync(__dirname + "/controller");
files.forEach(function(file){
    var jsonPath = __dirname + "/json";
    require("./controller/"+file)(jsonPath);
});