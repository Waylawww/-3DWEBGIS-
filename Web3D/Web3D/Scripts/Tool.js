           //页面加载完毕开始执行
window.onload = function () {
    var strmov = "";    //标识要删除的实体
    var stradd = "";    //标识要增加的实体
    var strchushi = document.getElementById("wrlromm").innerHTML;
    var deleok = document.getElementById("deleok"); //获取删除实体按钮
    var deletechoice = document.getElementsByName("deletechoice"); //获取删除单选按钮     
    var browser = document.getElementById("CC3D"); //获取VRML对象           
    var changecolor = document.getElementById("changecolor"); //获取修改颜色按钮
    var addchoice = document.getElementsByName("addchoice"); //获取增加实体选项按钮
    var addok = document.getElementById("addok"); //获取增加实体按钮
    var refresh = document.getElementById("refresh"); //获取刷新按钮
    var rotation = document.getElementById("rotation");
    //修改颜色
    changecolor.onclick = function () {
        browser.setNodeEventIn('Mychange', 'touched', 'true');

    }
    //旋转操作
    rotation.onclick = function () {
        browser.setNodeEventIn('Mychange', 'myration', 'true');
        //alert();
    }
    deletechoice[0].onclick = function () {
        strmov = "clickedmove_Grouprotation";
        //alert(strmov);
    }
    deletechoice[1].onclick = function () {
        strmov = "clickedmove_zq";
        //alert(strmov);
    }
    deletechoice[2].onclick = function () {
        strmov = "clickedmove_yq";
        //alert(strmov);
    }
    deletechoice[3].onclick = function () {
        strmov = "clickedmove_bjq";
        // alert(strmov);
    }
    deletechoice[4].onclick = function () {
        strmov = "clickedmove_wd";
        //alert(strmov);
    }
    //执行删除代码
    deleok.onclick = function () {
        switch (strmov) {
            case "clickedmove_Grouprotation":
                browser.setNodeEventIn('Delete', 'clickedmove_Grouprotation', 'true');
                break;
            case "clickedmove_zq":
                browser.setNodeEventIn('Delete', 'clickedmove_zq', 'true');

                break;
            case "clickedmove_yq":
                browser.setNodeEventIn('Delete', 'clickedmove_yq', 'true');
                break;
            case "clickedmove_bjq":
                browser.setNodeEventIn('Delete', 'clickedmove_bjq', 'true');
                break;
            case "clickedmove_wd":
                browser.setNodeEventIn('Delete', 'clickedmove_wd', 'true');
                break;
            default:
                alert("请先选择要删除的实体");

        }
    }
    //选择增加实体的对象
    addchoice[0].onclick = function () {
        stradd = "Transform {translation	-4 3 10 children [Shape {appearance Appearance {material  Material {diffuseColor 0.5 0.25 1.0}}geometry Cylinder {radius 0.2 height 6}}]}";
    }
    addchoice[1].onclick = function () {
        stradd = "Transform {translation	4 3 10 children [Shape {appearance Appearance {material  Material {diffuseColor 0.5 0.25 1.0}}geometry Cylinder {radius 0.2 height 6}}]}";
    }
    addchoice[2].onclick = function () {

        stradd = "Transform {translation	-7 6 10 children [Shape {appearance Appearance {material Material{diffuseColor 1 0.3 0.2} }geometry Text{string AnhuiUniversityOfScienceAndTechnology fontStyle FontStyle	{ topToBottom TRUE }}}]}";
    }
    addchoice[3].onclick = function () {
        stradd = "Transform {translation	-7 3 7 children [Shape {appearance Appearance {material Material {diffuseColor 0 1 0}}geometry Cone {height 4 side TRUE bottomRadius 1}}]}Transform {translation	-7 1 7 children [Shape {appearance Appearance {material Material {diffuseColor 0.5 0.2 0}}geometry Cylinder {height 2 radius 0.5}}]}";

    }
    addchoice[4].onclick = function () {
        stradd = "Transform {translation	7 3 7 children [Shape {appearance Appearance {material Material {diffuseColor 0 1 0}}geometry Cone {height 4 side TRUE bottomRadius 1}}]}Transform {translation	7 1 7 children [Shape {appearance Appearance {material Material {diffuseColor 0.5 0.2 0}}geometry Cylinder {height 2 radius 0.5}}]}";
    }
    //执行添加实体代码
    addok.onclick = function () {
        if (stradd == "")
        { alert("请先选择要增加的实体"); }
        browser.addVrmlFromString(stradd);

    }



    //刷新代码
    refresh.onclick = function () {
        document.getElementById("wrlromm").innerHTML = strchushi;
        browser = document.getElementById("CC3D"); //获取VRML对象
    }
}

