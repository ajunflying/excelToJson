/**
 * Created by junping on 14-12-18.
 */
var fs = require("fs");
var OperateExcel = require("./../OperateExcel.js");

module.exports = excel_to_json_normal;

function excel_to_json_normal(){};

excel_to_json_normal.start = function(){
    var jsonFileName = "enterprise2.json";
    var excelName = "民企属性表.xlsx";
    var sheetName = ["民企属性表", "字段说明"];
    var sheetNameKey = ["master", "tb1"];
    var key = [
        ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8", "key9", "key10", "key11", "key12", "key13", "key14"],
        ["key1", "key2", "key3", "key4", "key5", "key6", "key7"]
    ];
    var obj = OperateExcel.readyExcel(excelName, sheetName, sheetNameKey);
    var json = {};
    for(var i=0; i<sheetNameKey.length; i++){
        var sheetKey = sheetNameKey[i];
        var tempSheet = obj[sheetKey];
        json[sheetKey] = [];
        for(var row=0; row<tempSheet.length; row++){
            var tempObj = {};
            var id = tempSheet[row][0];
            for(var col=0; col<key[i].length; col++){
                tempObj[key[i][col]] = tempSheet[row][col] || "";
            }
            json[sheetKey].push(tempObj);
        }
    }
    var t = JSON.stringify(json);
    fs.writeFileSync("./json/"+jsonFileName, t);
    console.log("------------------");
};