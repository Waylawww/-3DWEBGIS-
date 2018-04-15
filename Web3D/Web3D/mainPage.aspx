<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="mainPage.aspx.cs" Inherits="Web3D._Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Web3D</title>  
    <link href="CSS/style.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/Tool.js" type="text/javascript"></script>
</head>
<body>
   
<h1>基于HTML的VRML三维实体的动态操作研究与实现</h1>
  
    <div id="wrlromm">
        <CENTER>
     
        <OBJECT CLASSID="CLSID:4B6E3013-6E45-11D0-9309-0020AFE05CC8" NAME="CC3D" ID="CC3D" WIDTH=100% HEIGHT=100%>
            <PARAM NAME="SRC" VALUE="F:\文档\表格统计\wxy自制程序\开发实验\Web3D\Web3D\App_Data\group.wrl"> 
            <EMBED name="CC3D" SRC="F:\文档\表格统计\wxy自制程序\开发实验\Web3D\Web3D\App_Data\group.wrl" TYPE="application/x-cc3d" WIDTH=100% HEIGHT=100%/>
        </OBJECT>
    </CENTER>
    </div>
    
    <div id ="toolroom">
    <form action="" method="get" id="remotool"><strong> 请选择要删除的实体</strong>
        <p><input name="deletechoice" type="radio" value="" />主墙面 </p> 
        <p><input name="deletechoice" type="radio" value="" />左前墙 </p> 
        <p><input name="deletechoice" type="radio" value="" />右前墙 </p> 
        <p><input name="deletechoice" type="radio" value="" />背景墙</p> 
        <p><input name="deletechoice" type="radio" value="" />屋顶面 </p> 
        <p><input type="button" value="确定" class="ok" id="deleok"/></p>
    </form> 
     <form action="" method="get" id="addtool"><strong> 请选择要添加的实体</strong> 
        <p><input name="addchoice" type="radio" value="" />左柱子 </p> 
        <p><input name="addchoice" type="radio" value="" />右柱子 </p> 
        <p><input name="addchoice" type="radio" value="" />学校牌 </p> 
        <p><input name="addchoice" type="radio" value="" />左植被</p> 
        <p><input name="addchoice" type="radio" value="" />右植被</p> 
        <p><input type="button" value="确定" class="ok" id="addok";/></p>
        
    </form>
    <div id="attributetool">
    <p><strong>属性操作</strong></p>
     <p> <input type="button" value="修改颜色"  id="changecolor" class="tool"/> </p>
     <p> <input type="button" value="旋转"  id="rotation" class="tool"/> </p>
     <p> <input type="button" value="复原"  id="refresh"  class="tool"/></p>

    </div>
       <div id="mess">
                <p>题目：<strong>一种3DWEBGIS空间对象的动态操作方法研究与实现</strong></p>
                <p><strong>需求：</strong></p>
                <ul>         
                    <li>实现三维实体教学楼的模型绘制</li>
                    <li>实现三维实体的动态添加功能 </li>
                    <li>实现三维实体的动态删除功能 </li>
                    <li>实现三维实体的属性动态修改功能 </li>   
                </ul>       
        </div>
    </div>

    

 </body>   
</html>
