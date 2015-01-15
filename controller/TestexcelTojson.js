/**
 * Created by junping on 15-1-15.
 */
var fs = require("fs");
var OperateExcel = require("./../operateExcel.js");

module.exports = function(jsonPath){
    var sheetName = ["表1", "表2"];
    var sheetKey = ["sheet1", "sheet2"];
    var excelName = "测试表.xlsx";
    jsonPath = jsonPath + "/Test.json";
    OperateExcel.readyExcel(excelName, sheetName, function(err, data){
        if(err){
            console.log(err);
            return;
        }
        if(data){
            var obj = {};
            var i=0;
            for(var key in data){
                var sKey = sheetKey[i];
                var list = data[key];
                var filedAry = list.shift();//每个表的字段
                var oneObj = {};
                for(var r=0; r<list.length; r++){
                    var row = {};
                    for(var c=0; c<filedAry.length; c++){
                        row[filedAry[c]] = list[r][c];
                    }
                    oneObj[list[r][0]] = row;
                }
                obj[sKey] = oneObj;
                i++;
            }
            fs.writeFileSync(jsonPath, JSON.stringify(obj), 'utf8');
            console.log("test create end");
        }
    });
}