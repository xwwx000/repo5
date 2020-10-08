<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/common/taglibs.jsp"%>
<!DOCTYPE html>
<html lang="zh">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>业务数据列表</title>
<link rel="stylesheet" type="text/css" href="${ctx}/css/default.css">
<link href="${ctx}/css/page.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" href="${ctx}/css/default.css" type="text/css">
<link rel="stylesheet" href="${ctx}/css/button/gh-buttons.css"
	type="text/css">
<script type="text/javascript" src="${ctx}/js/tool/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="${ctx}/js/common.js"></script>
<script type="text/javascript"
	src="${ctx}/js/date/lhgcalendar/lhgcalendar.min.js"></script>
<script src="${ctx}/js/tool/jquery-ui-1.12.1.custom/jquery-ui.min.js"></script>
<link rel="stylesheet"
	href="${ctx}/js/tool/jquery-ui-1.12.1.custom/jquery-ui.min.css">
<script type="text/javascript" src="${ctx}/js/tool/layer/layer.js"></script>
<script src="${ctx}/js/page.js" type="text/javascript"></script>
<style type="text/css">
.aggregate {
	color: red;
	font-size: 10pt;
}

.runcode {
	border: 1px solid #ddd;
	background: url(${ctx}/js/date/lhgcalendar/_doc/images/iconDate.gif)
		center right no-repeat #f7f7f7;
	cursor: pointer;
	font: 12px tahoma, arial;
	height: 21px;
	width: 100px;
}
</style>
<script type="text/javascript">
	//搜索内容
	function searchRecord() {
		document.forms[0].submit();
	}
	//新增
	function createRecord() {
		layer.open({
			type : 2,
			area : [ '550px', '250px' ],
			fix : false, //不固定
			maxmin : true,
			content : '${ctx}/pda/addmacaddrpage'
		});
	}
	//编辑
	function modifyRecord(id,macaddr,status) {
		layer.open({
			type : 2,
			area : [ '550px', '250px' ],
			fix : false, //不固定
			maxmin : true,
			content : '${ctx}/pda/editmacaddrpage?id='+id+"&macaddr="+macaddr+"&status="+status
		});
	}	
	//删除
	function deleteRecord(id) {
		layer.open({
			content : '确定要删除该mac地址？',
			btn : [ '确认', '取消' ],
			shadeClose : false,
			yes : function() {
				//layer.open({content: '你点了确认', time: 1});
				layer.closeAll();
				ajax_deletemac(id);
			},
			no : function() {
				layer.open({
					content : '你选择了取消',
					time : 1
				});
			}
		});		
		
	}
	function ajax_deletemac(id){
		$.ajax({
			url : "${ctx}/pda/deletemacaddr",
			async : true,
			type : "post",
			dataType : "json",
			data : {id:id},
			success : function(data) {
				var barray = eval(data);
				if(barray.code == 200){
					layer.msg('删除成功!', {
						shade : 0.2,
						time : 1000
					}, function() {
						searchRecord();
					});				
				}else{
					layer.msg('保存失败!', {
						shade : 0.2,
						time : 1000
					}, function() {
					});					
				}
			},
			error : function() {
				layer.msg('访问错误!', {
					shade : 0.2,
					time : 1000
				}, function() {
				});				
			}
		});		
	}
</script>
</head>
<BODY>
	<FORM action="${ctx}/pda/pdamacaddrlist" id="pdamacaddrlist" name="pdamacaddrlist"
		method="post">
		<INPUT type="hidden" name="pageno" value="${pageList.pages.cpage}">
		<table width="98%" border="0" cellspacing="0" cellpadding="0"
			align="center">
			<tr>
				<td width="150" height="35" align="left" id="Title">系统维护--MAC维护</td>
				<td bgcolor="#f7f7f7">
					<table width="100%" border="0" cellspacing="0" cellpadding="0"
						height="24">
						<tr>
							<td align="left"></td>
							<td align="right"
								background="<app:iniPath />/images/htimages/titlebg_center.gif">
								<a href="#"
								id="search" class="button icon add" onclick="createRecord();" style="margin-right: 2px">新建</a>
							</td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
		<!--页上开始-->
		<table width='98%' border='0' id='maintbl' cellspacing='1'
			cellpadding='3' class="contentTable" align='center'>
			<tr class="tableTitle" align="center">
				<td width="20%">编码</td>
				<td width="30%">MAC地址信息</td>
				<td width="30%">状态</td>
				<td width="10%">操作</td>
			</tr>
			<!--内容开始-->
			<c:forEach items="${pageList.objectList}" var="list"
				varStatus="status">
				<TR class="defaultBGColor" align="center"
					onmouseout="this.style.backgroundColor='';"
					onmouseover="this.style.backgroundColor='#FDF9E3';">
					<td style="display: none"><span id="s_${status.index+1}">${list.id}</span></td>
					<td height="20">${list.id}</td>
					<td>${list.macaddr}</td>
					<td><c:choose>
							<c:when test="${list.status == 0}">
								有效
							</c:when>
							<c:otherwise>
								无效
							</c:otherwise>
						</c:choose></td>
					<td>
					<a href="#" onclick="modifyRecord('${list.id}','${list.macaddr}','${list.status}')"><span>修改</span></a>|<a href="#" onclick="deleteRecord('${list.id}')"><span>删除</span></a>
					</td>
				</tr>
			</c:forEach>			
		</TABLE>
		<!--页下开始-->
	</FORM>
	<DIV class=pagination>${pagination}</DIV>
</BODY>
</html>