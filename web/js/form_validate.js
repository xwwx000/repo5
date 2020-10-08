//函数名：fucCheckNUM
//功能介绍：检查是否为数字
//参数说明：要检查的数字
//返回值：1为是数字，0为不是数字         
function fucCheckNUM(NUM) {
	var i, j, strTemp;
	strTemp = "0123456789";
	if (NUM.length == 0) {
		return 0;
	}
	for (i = 0; i < NUM.length; i++) {
		j = strTemp.indexOf(NUM.charAt(i));
		if (j == -1) {         
//说明有字符不是数字         
			return 0;
		}
	}         
//说明是数字         
	return 1;
}
//检查是否为任意数（实数）      
function isNumeric(strNumber){      
	var newPar=/^(-|\+)?\d+(\.\d+)?$/;
	return newPar.test(strNumber);
}
//检查是否为正数      
function isUnsignedNumeric(strNumber){      
	var newPar=/^\d+(\.\d+)?$/;
	return newPar.test(strNumber);
} 
 //检查是否为整数      
function isInteger(strInteger){      
	var newPar=/^(-|\+)?\d+$/;
	return newPar.test(strInteger);      
} 
//函数名：fucCheckTEL
//功能介绍：检查是否为电话号码
//参数说明：要检查的字符串
//返回值：true为是合法，false为不合法         
function fucCheckTEL(TEL) {
	var i, j, strTemp;
	strTemp = "0123456789";
	for (i = 0; i < TEL.length; i++) {
		j = strTemp.indexOf(TEL.charAt(i));
		if (j == -1) {                
			return false;
		}
	}                
	return true;
}

//判断输入是否为中文的函数       
function ischinese(s) {
	var ret = true;
	for (var i = 0; i < s.length; i++) {
		ret = ret && (s.charCodeAt(i) >= 10000);
	}
	return ret;
}

//限制输入字符的位数开始
//m是用户输入，n是要限制的位数      
function issmall(m, n) {
	if ((m < n) && (m > 0)) {
		return (false);
	} else {
		return (true);
	}
}

//邮箱
function isEmail(strEmail) {
	if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
		return true;
	} else {
		return false;
	}
}

/*
用途：校验ip地址的格式

输入：strIP：ip地址
返回：如果通过验证返回true,否则返回false；
*/
function isIP(strIP) {
	if (isNull(strIP)) return false;
	var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
	if(re.test(strIP)){
		if( RegExp.$1 <256 && RegExp.$2<256 && RegExp.$3<256 && RegExp.$4<256) return true;
	}
	return false;
}
/*
用途：检查输入字符串是否为空或者全部都是空格
输入：str
返回：
如果全是空返回true,否则返回false
*/
function isNull( str ){
if ( str == "" ) return true;
var regu = "^[ ]+$";
var re = new RegExp(regu);
return re.test(str);
}
/*
用途：检查输入对象的值是否符合整数格式
输入：str 输入的字符串
返回：如果通过验证返回true,否则返回false
*/
function isInteger( str ){
var regu = /^[-]{0,1}[0-9]{1,}$/;
return regu.test(str);
}
/*
用途：检查输入手机号码是否正确
输入：
s：字符串
返回：
如果通过验证返回true,否则返回false
*/
function checkMobile( s ){
var regu =/^[1][3][0-9]{9}$/;
var re = new RegExp(regu);
if (re.test(s)) {
return true;
}else{
return false;
}
}
/*
用途：检查输入字符串是否符合正整数格式
输入：
s：字符串
返回：
如果通过验证返回true,否则返回false
*/
function isNumber( s ){
var regu = "^[0-9]+$";
var re = new RegExp(regu);
if (s.search(re) != -1) {
return true;
} else {
return false;
}
}
/*
用途：检查输入字符串是否是带小数的数字格式,可以是负数
输入：
s：字符串
返回：
如果通过验证返回true,否则返回false
*/
function isDecimal( str ){
if(isInteger(str)) return true;
var re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;
if (re.test(str)) {
if(RegExp.$1==0&&RegExp.$2==0) return false;
return true;
} else {
return false;
}
}
/*
用途：检查输入对象的值是否符合端口号格式
输入：str 输入的字符串
返回：如果通过验证返回true,否则返回false
*/
function isPort( str ){
return (isNumber(str) && str<65536);
}
/*
用途：检查输入对象的值是否符合E-Mail格式
输入：str 输入的字符串
返回：如果通过验证返回true,否则返回false
*/
function isEmail( str ){
var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
if(myReg.test(str)) return true;
return false;
}
/*
用途：检查输入字符串是否符合金额格式
格式定义为带小数的正数，小数点后最多三位
输入：
s：字符串
返回：
如果通过验证返回true,否则返回false
*/
function isMoney( s ){
var regu = "^[0-9]+[\.][0-9]{0,2}$";
var re = new RegExp(regu);
if (re.test(s)) {
return true;
} else {
return false;
}
}
/*
用途：检查输入字符串是否只由英文字母和数字和下划线组成
输入：
s：字符串
返回：
如果通过验证返回true,否则返回false
*/
function isNumberOr_Letter( s ){//判断是否是数字或字母
var regu = "^[0-9a-zA-Z\_]+$";
var re = new RegExp(regu);
if (re.test(s)) {
return true;
}else{
return false;
}
}
/*
用途：检查输入字符串是否只由英文字母和数字组成
输入：
s：字符串
返回：
如果通过验证返回true,否则返回false
*/
function isNumberOrLetter( s ){//判断是否是数字或字母
var regu = "^[0-9a-zA-Z]+$";
var re = new RegExp(regu);
if (re.test(s)) {
return true;
}else{
return false;
}
}
/*
用途：检查输入字符串是否只由汉字、字母、数字组成
输入：
value：字符串
返回：
如果通过验证返回true,否则返回false
*/
function isChinaOrNumbOrLett( s ){//判断是否是汉字、字母、数字组成
var regu = "^[0-9a-zA-Z\u4e00-\u9fa5]+$";
var re = new RegExp(regu);
if (re.test(s)) {
return true;
}else{
return false;
}
}
/*
用途：判断是否是日期
输入：date：日期；fmt：日期格式
返回：如果通过验证返回true,否则返回false
*/
function isDate( date, fmt ) {
if (fmt==null) fmt="yyyyMMdd";
var yIndex = fmt.indexOf("yyyy");
if(yIndex==-1) return false;
var year = date.substring(yIndex,yIndex+4);
var mIndex = fmt.indexOf("MM");
if(mIndex==-1) return false;
var month = date.substring(mIndex,mIndex+2);
var dIndex = fmt.indexOf("dd");
if(dIndex==-1) return false;
var day = date.substring(dIndex,dIndex+2);
if(!isNumber(year)||year>"2100" || year< "1900") return false;
if(!isNumber(month)||month>"12" || month< "01") return false;
if(day>getMaxDay(year,month) || day< "01") return false;
return true;
}
function getMaxDay(year,month) {
if(month==4||month==6||month==9||month==11)
return "30";
if(month==2)
if(year%4==0&&year%100!=0 || year%400==0)
return "29";
else
return "28";
return "31";
}
/*
用途：字符1是否以字符串2结束
输入：str1：字符串；str2：被包含的字符串
返回：如果通过验证返回true,否则返回false
*/
function isLastMatch(str1,str2)
{
var index = str1.lastIndexOf(str2);
if(str1.length==index+str2.length) return true;
return false;
}
/*
用途：字符1是否以字符串2开始
输入：str1：字符串；str2：被包含的字符串
返回：如果通过验证返回true,否则返回false
*/
function isFirstMatch(str1,str2)
{
var index = str1.indexOf(str2);
if(index==0) return true;
return false;
}
/*
用途：字符1是包含字符串2
输入：str1：字符串；str2：被包含的字符串
返回：如果通过验证返回true,否则返回false
*/
function isMatch(str1,str2)
{
var index = str1.indexOf(str2);
if(index==-1) return false;
return true;
}
/*
用途：检查输入的起止日期是否正确，规则为两个日期的格式正确，
且结束如期>=起始日期
输入：
startDate：起始日期，字符串
endDate：结束如期，字符串
返回：
如果通过验证返回true,否则返回false
*/
function checkTwoDate( startDate,endDate ) {
if( !isDate(startDate) ) {
alert("起始日期不正确!");
return false;
} else if( !isDate(endDate) ) {
alert("终止日期不正确!");
return false;
} else if( startDate > endDate ) {
alert("起始日期不能大于终止日期!");
return false;
}
return true;
}
/*
用途：检查输入的Email信箱格式是否正确
输入：
strEmail：字符串
返回：
如果通过验证返回true,否则返回false
*/
function checkEmail(strEmail) {
//var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/;
var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
if( emailReg.test(strEmail) ){
return true;
}else{
alert("您输入的Email地址格式不正确！");
return false;
}
}
/*
用途：检查输入的电话号码格式是否正确
输入：
strPhone：字符串
返回：
如果通过验证返回true,否则返回false
*/
function checkPhone( strPhone ) {
var phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
var phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
var prompt = "您输入的电话号码不正确!"
if( strPhone.length > 9 ) {
if( phoneRegWithArea.test(strPhone) ){
return true;
}else{
alert( prompt );
return false;
}
}else{
if( phoneRegNoArea.test( strPhone ) ){
return true;
}else{
alert( prompt );
return false;
}
}
}
/*
用途：检查复选框被选中的数目
输入：
checkboxID：字符串
返回：
返回该复选框中被选中的数目
*/
function checkSelect( checkboxID ) {
var check = 0;
var i=0;
if( document.all(checkboxID).length > 0 ) {
for( i=0; i<document.all(checkboxID).length; i++ ) {
if( document.all(checkboxID).item( i ).checked ) {
check += 1;
}

}
}else{
if( document.all(checkboxID).checked )
check = 1;
}
return check;
}
function getTotalBytes(varField) {
if(varField == null)
return -1;
var totalCount = 0;
for (i = 0; i< varField.value.length; i++) {
if (varField.value.charCodeAt(i) > 127)
totalCount += 2;
else
totalCount++ ;
}
return totalCount;
}
function getFirstSelectedValue( checkboxID ){
var value = null;
var i=0;
if( document.all(checkboxID).length > 0 ){
for( i=0; i<document.all(checkboxID).length; i++ ){
if( document.all(checkboxID).item( i ).checked ){
value = document.all(checkboxID).item(i).value;
break;
}
}
} else {
if( document.all(checkboxID).checked )
value = document.all(checkboxID).value;
}
return value;
}
function getFirstSelectedIndex( checkboxID ){
var value = -2;
var i=0;
if( document.all(checkboxID).length > 0 ){
for( i=0; i<document.all(checkboxID).length; i++ ) {
if( document.all(checkboxID).item( i ).checked ) {
value = i;
break;
}
}
} else {
if( document.all(checkboxID).checked )
value = -1;
}
return value;
}
function selectAll( checkboxID,status ){
if( document.all(checkboxID) == null)
return;
if( document.all(checkboxID).length > 0 ){
for( i=0; i<document.all(checkboxID).length; i++ ){
document.all(checkboxID).item( i ).checked = status;
}
} else {
document.all(checkboxID).checked = status;
}
}
function selectInverse( checkboxID ) {
if( document.all(checkboxID) == null)
return;
if( document.all(checkboxID).length > 0 ) {
for( i=0; i<document.all(checkboxID).length; i++ ) {
document.all(checkboxID).item( i ).checked = !document.all(checkboxID).item( i ).checked;
}
} else {
document.all(checkboxID).checked = !document.all(checkboxID).checked;
}
}
function checkDate( value ) {
if(value=='') return true;
if(value.length!=8 || !isNumber(value)) return false;
var year = value.substring(0,4);
if(year>"2100" || year< "1900")
return false;
var month = value.substring(4,6);
if(month>"12" || month< "01") return false;
var day = value.substring(6,8);
if(day>getMaxDay(year,month) || day< "01") return false;
return true;
}
/*
用途：检查输入的起止日期是否正确，规则为两个日期的格式正确或都为空
且结束日期>=起始日期
输入：
startDate：起始日期，字符串
endDate： 结束日期，字符串
返回：
如果通过验证返回true,否则返回false
*/
function checkPeriod( startDate,endDate ) {
if( !checkDate(startDate) ) {
alert("起始日期不正确!");
return false;
} else if( !checkDate(endDate) ) {
alert("终止日期不正确!");
return false;
} else if( startDate > endDate ) {
alert("起始日期不能大于终止日期!");
return false;
}
return true;
}
/*
用途：检查证券代码是否正确
输入：
secCode:证券代码
返回：
如果通过验证返回true,否则返回false
*/
function checkSecCode( secCode ) {
if( secCode.length !=6 ){
alert("证券代码长度应该为6位");
return false;
}
if(!isNumber( secCode ) ){
alert("证券代码只能包含数字");
return false;
}
return true;
}
/****************************************************
function:cTrim(sInputString,iType)
description:字符串去空格的函数
parameters:iType：1=去掉字符串左边的空格
2=去掉字符串左边的空格
0=去掉字符串左边和右边的空格
return value:去掉空格的字符串
****************************************************/
function cTrim(sInputString,iType)
{
var sTmpStr = ' ';
var i = -1;
if(iType == 0 || iType == 1)
{
while(sTmpStr == ' ')
{
++i;
sTmpStr = sInputString.substr(i,1);
}
sInputString = sInputString.substring(i);
}
if(iType == 0 || iType == 2)
{
sTmpStr = ' ';
i = sInputString.length;
while(sTmpStr == ' ')
{
--i;
sTmpStr = sInputString.substr(i,1);
}
sInputString = sInputString.substring(0,i+1);
}
return sInputString;
}
/*
验证金钱格式
*/
function isMoney(data){
   var reCat = /^((0\.?)|([1-9]+\d*\.?))\d{0,3}$/;
   return reCat.test(data);
}
     //校验身份证
  function checkIdcard(idcard) {
      var Errors = new Array(
              "true",
              "身份证号码位数不对!",
              "身份证号码出生日期超出范围或含有非法字符!",
              "身份证号码校验错误!",
              "身份证地区非法!"
              );
      var area = {11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}
      var idcard,Y,JYM;
      var S,M;
      var idcard_array = new Array();
      idcard_array = idcard.split("");
      //地区检验
      if (area[parseInt(idcard.substr(0, 2))] == null) return Errors[4];
      //身份号码位数及格式检验
      switch (idcard.length) {
          case 15:
              if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 )) {
                  ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
                  //测试出生日期的合法性
              } else {
                  ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
                  //测试出生日期的合法性
              }
              if (ereg.test(idcard)) return Errors[0];
              else return Errors[2];
              break;
          case 18:
          //18位身份号码检测
          //出生日期的合法性检查
          //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
          //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
              if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0 )) {
                  ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
                  //闰年出生日期的合法性正则表达式
              } else {
                  ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
                  //平年出生日期的合法性正则表达式
              }
              if (ereg.test(idcard)) {//测试出生日期的合法性
                  //计算校验位
                  S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7
                          + (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9
                          + (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10
                          + (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5
                          + (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8
                          + (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4
                          + (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2
                          + parseInt(idcard_array[7]) * 1
                          + parseInt(idcard_array[8]) * 6
                          + parseInt(idcard_array[9]) * 3;
                  Y = S % 11;
                  M = "F";
                  JYM = "10X98765432";
                  M = JYM.substr(Y, 1);
                  //判断校验位
                  if (M == idcard_array[17].toUpperCase()) return Errors[0]; //检测ID的校验位
                  else return Errors[3];
              }
              else return Errors[2];
              break;
          default:
              return Errors[1];
              break;
      }
  }
//短时间，形如 (13:04:06) 
function isTime(str){
	//var a = str.match(/^(/d{1,2})(:)?(/d{1,2})/2(/d{1,2})$/);
	var a = str.match(/^(\d{1,2})(:)?(\d{1,2})\2(\d{1,2})$/);

	if (a == null) {return false;}
	if (a[1]>23 || a[3]>59 || a[4]>59){
		//alert("时间格式不对");
		return false
	}
	return true;
}

