/**
 * Created by junping on 14-12-18.
 */
var xlsx = require("node-xlsx");
var fs = require("fs");
var path = require("path");

module.exports = OperateExcel;
function OperateExcel(){};

OperateExcel.readyExcel = function(excelName, sheetName, sheetNameKey){
    var sheetArray = xlsx.parse("./excel/" + excelName);
    if(!sheetName || !sheetNameKey){
        return [];
    }
    var returnObj = {};
    for(var i=0; i<sheetArray.length; i++){
        var tempSheet = sheetArray[i];
        var tempSheetName = tempSheet.name;
        for(var j=0; j<sheetName.length; j++){
            if(tempSheetName === sheetName[j]){
                tempSheet["data"].shift();
                returnObj[sheetNameKey[j] || j] = tempSheet["data"];
            }
        }
    }
    return returnObj;
};

OperateExcel.toNormal = function(ary){
    if(ary && ary.length > 0){
        for(var i=0; i<ary.length; i++){

        }
    }
};