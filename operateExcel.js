/**
 * Created by junping on 14-12-18.
 */
var xlsx = require("node-xlsx");
var fs = require("fs");

module.exports = OperateExcel;
function OperateExcel(){};

OperateExcel.readyExcel = function(excelName, sheetNameArray, callback){
    var path = __dirname + "/excel/" + excelName;
    fs.exists(path, function(flag){
        if(!flag){
            return callback(new Error(path + " not exist"));
        }
        //read all sheet
        var sheetArray = xlsx.parse("./excel/" + excelName);
        var returnObj = {};
        for(var i=0; i<sheetArray.length; i++){
            var sheetDB = sheetArray[i];//one sheet data
            var sheetName = sheetDB.name;//sheet name
            //each
            if(sheetNameArray instanceof Array && sheetNameArray.length > 0){
                for(var j=0; j<sheetNameArray.length; j++){
                    if(sheetName === sheetNameArray[j]){
                        sheetDB["data"].shift();//delete first row filed
                        returnObj[sheetName] = sheetDB["data"];
                    }
                }
            }else{
                sheetDB["data"].shift();//delete first row filed
                returnObj[sheetName] = sheetDB["data"];
            }
        }
        callback(null, returnObj);
    });
};