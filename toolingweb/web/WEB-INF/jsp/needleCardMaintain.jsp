<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2019\3\22 0022
  Time: 17:41
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Maintain</title>
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/bootstrap.min.css"/> ">
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/metisMenu.min.css"/> ">
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/sb-admin-2.css"/>">
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/font-awesome.min.css"/> ">
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/jquery-dataTables-min.css"/> "/>
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/bootstrap-table.css"/> "/>
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/objects.css"/> "/>
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/button.css"/> "/>
    <link rel="stylesheet" type="text/css" href="<c:url value="/css/bootstrap-datetimepicker.min.css"/> "/>
    <script src="<c:url value="/js/jquery.min.js"/> "></script>
    <script src="<c:url value="/js/sb-admin-2.js"/> "></script>
    <script src="<c:url value="/js/metisMenu.min.js"/> "></script>
    <script src="<c:url value="/js/jquery.validate.min.js"/> "></script>
    <script src="<c:url value="/js/messages_zh.js"/> "></script>
    <script src="<c:url value="/js/bootstrap/bootstrap.min.js"/> "></script>
    <script src="<c:url value="/js/bootstrap-table.js"/> "></script>
    <script src="<c:url value="/js/bootstrap-datetimepicker.min.js"/>"></script>
    <script src="<c:url value="/js/bootstrap-datetimepicker.zh-CN.js"/> "></script>
    <script src="<c:url value="/js/jquery.form.min.js"/> "></script>
    <script src="<c:url value="/js/needleMaintain.js"/> "></script>
</head>
<body>
<div id="wrapper">
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" id="home" href="needleCard">TMS管理系统</a>
        </div>
        <ul class="nav navbar-top-links navbar-right">
            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                    <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                </a>
                <ul class="dropdown-menu dropdown-user">
                    <li>
                        <a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                    </li>
                    <li class="divider"></li>
                    <li>
                        <a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                    </li>
                </ul>
                <!-- /.dropdown-user -->
            </li>
            <!-- /.dropdown -->
        </ul>
        <!-- /.navbar-top-links -->
        <div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse">
                <ul class="nav" id="side-menu">
                    <!--<li class="sidebar-search">-->
                    <!--<div class="input-group custom-search-form">-->
                    <!--<input type="text" class="form-control" placeholder="Search...">-->
                    <!--<span class="input-group-btn">-->
                    <!--<button class="btn btn-default" type="button">-->
                    <!--<i class="fa fa-search"></i>-->
                    <!--</button>-->
                    <!--</span>-->
                    <!--</div>-->
                    <!--&lt;!&ndash; /input-group &ndash;&gt;-->
                    <!--</li>-->
                    <li>
                        <%--<a href="#"><i class="fa fa-book fa-fw"></i>档案管理<span class="fa arrow"></span></a>--%>
                        <ul class="nav">
                            <li>
                                <a href="needleCardRecord">针卡档案</a>
                            </li>
                            <li>
                                <a href="needleCardBuildRecord">针卡建档</a>
                            </li>
                            <li>
                                <a href="needleCardIQC">针卡IQC</a>
                            </li>
                            <li>
                                <a href="needleCardLend">针卡借出 </a>
                            </li>
                            <li>
                                <a href="needleCardReturn">针卡归还</a>
                            </li>
                            <li>
                                <a href="needleCardCheck">针卡验收</a>
                            </li>
                            <li>
                                <a href="needleCardRelease">针卡Release</a>
                            </li>
                            <li>
                                <a href="needleCardMaintain">针卡保养</a>
                            </li>
                            <li>
                                <a href="needleCardExtension">针卡展延</a>
                            </li>
                            <li>
                                <a href="needleCardAllRecord">针卡全记录</a>
                            </li>
                            <%--<li>--%>
                                <%--<a href="#">tooling档案</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">Correlation wafer档案</a>--%>
                            <%--</li>--%>

                            <%--<li>--%>
                                <%--<a href="#">消耗品档案</a>--%>
                            <%--</li>--%>
                        </ul>
                    </li>
                    <%--<li>--%>
                        <%--<a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> 进出管制<span class="fa arrow"></span></a>--%>
                        <%--<ul class="nav nav-second-level">--%>
                            <%--<li>--%>
                                <%--<a href="needleCardIQC.html">针卡IQC</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="needleCardLend.html">针卡借出 </a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="needleCardReturn.html">针卡归还</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="needleCardCheck.html">針卡验收</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="needleCardRelease.html">針卡Release</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">tooling借出 </a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">tooling归还</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#" >Correlation wafer借出</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">Correlation wafer归还 </a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">INK領出</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">INK归还</a>--%>
                            <%--</li>--%>
                        <%--</ul>--%>
                        <!-- /.nav-second-level -->
                    <%--</li>--%>
                    <%--<li>--%>
                        <%--<a href="#"><i class="fa fa-table fa-fw"></i> 针卡保养<span class="fa arrow"></span></a>--%>
                        <%--<ul class="nav nav-second-level">--%>
                            <%--<li>--%>
                                <%--<a href="needleCardMaintain">针卡保养</a>--%>
                            <%--</li>--%>
                            <%--&lt;%&ndash;<li>&ndash;%&gt;--%>
                                <%--&lt;%&ndash;<a href="#">针卡保养纪录</a>&ndash;%&gt;--%>
                            <%--&lt;%&ndash;</li>&ndash;%&gt;--%>
                        <%--</ul>--%>
                    <%--</li>--%>
                    <%--<li>--%>
                        <%--<a href="#"><i class="fa fa-edit fa-fw"></i> 进出纪录<span class="fa arrow"></span></a>--%>
                        <%--<ul class="nav nav-second-level">--%>
                            <%--<li>--%>
                                <%--<a href="#">针卡借出归还纪录</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">tooling借出归还纪录</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">Correlation wafer借出归还纪录</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">消耗品借出归还纪录</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#"> 檔案修改紀錄</a>--%>
                            <%--</li>--%>
                        <%--</ul>--%>
                    <%--</li>--%>
                    <%--<li>--%>
                        <%--<a href="#"><i class="fa fa-wrench fa-fw"></i> UI Elements<span class="fa arrow"></span></a>--%>
                        <%--<ul class="nav nav-second-level">--%>
                            <%--<li>--%>
                                <%--<a href="#">Panels and Wells</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">Buttons</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">Notifications</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">Typography</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#"> Icons</a>--%>
                            <%--</li>--%>
                            <%--<li>--%>
                                <%--<a href="#">Grid</a>--%>
                            <%--</li>--%>
                        <%--</ul>--%>
                        <%--<!-- /.nav-second-level -->--%>
                    <%--</li>--%>
                    <!--<li>
                        &lt;!&ndash;<a href="#"><i class="fa fa-sitemap fa-fw"></i> Multi-Level Dropdown<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="#">Second Level Item</a>
                            </li>
                            <li>
                                <a href="#">Second Level Item</a>
                            </li>
                            <li>
                                <a href="#">Third Level <span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level">
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                    <li>
                                        <a href="#">Third Level Item</a>
                                    </li>
                                </ul>
                                &lt;!&ndash; /.nav-third-level &ndash;&gt;
                            </li>
                        </ul>
                        &lt;!&ndash; /.nav-second-level &ndash;&gt;&ndash;&gt;
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-files-o fa-fw"></i> Sample Pages<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level">
                            <li>
                                <a href="blank.html">Blank Page</a>
                            </li>
                            <li>
                                <a href="login.html">Login Page</a>
                            </li>
                        </ul>
                        &lt;!&ndash; /.nav-second-level &ndash;&gt;
                    </li>-->
                </ul>
            </div>
        </div>
    </nav>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="panel-default panel">
                    <div class="panel-heading">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title" id="myModalLabel">Error</h4>
                    </div>
                    <div class="panel-body">
                        <h3 id="error"></h3>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="panel-default panel">
                    <div class="panel-heading">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                        <h4 class="modal-title">PM确认密码</h4>
                    </div>
                    <div class="panel-body">
                        <form  method="post" id="loginForm">
                            <p>
                                <label for="username" class="uname" data-icon="u" > 账号 </label>
                                <input id="username" name="username" required="required" type="text"/>
                            </p>
                            <p>
                                <label for="password" class="youpasswd" data-icon="p"> 密码</label>
                                <input id="password" name="password" required="required" type="password"/>
                            </p>
                            <input type="submit" class="btn btn-primary" id="PMSubmit" value="Submit">
                        </form>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div id='page-wrapper'>
        <div class="row" id="needleCardIQCPage">
            <div class="col-lg-12">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        针卡保养
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <form role="form" id="needleCardMaintain">
                                <div class="form-group" >
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">针卡编号</label>
                                        <input class="form-control" name="proberCardId"  id="proberCardId" style="width: 35%;" type="text" onchange="selectChange(this.value)">
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-3">客户</label>
                                        <input class="form-control" name="custName" id="custName" style="width: 45%" type="text" disabled>

                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">客户编号</label>
                                        <input class="form-control" name="custNo" id="custNo" style="width: 45%" type="text" disabled>

                                    </p>
                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">进厂日期</label>
                                        <input class="form-control" name="receiptTime" id="receiptTime" style="width: 50%"type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-3">厂商</label>
                                        <input class="form-control" name="vendorName" id="vendorName" style="width: 45%"type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">厂商编号</label>
                                        <input class="form-control" name="vendorNo" id="vendorNo" style="width: 45%"type="text" disabled>
                                    </p>

                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">适用机台</label>
                                        <input class="form-control" name="useEquipment" id="useEquipment" style="width: 45%" type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-3">Dut 数</label>
                                        <input class="form-control" name="dutCount" id="dutCount" style="width: 45%"type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">Pin 数</label>
                                        <input class="form-control" name="pinCount" id="pinCount" style="width: 45%"type="text" disabled>
                                    </p>
                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">TD</label>
                                        <input class="form-control" name="TD" id="TD" style="width: 45%"type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">TD Total</label>
                                        <input class="form-control" name="TDTotal" id="TDTotal" style="width: 45%"type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">PM时机</label>
                                        <input class="form-control" name="pmTd" id="pmTd"   id="pmTd" style="width: 45%" type="text" disabled>
                                    </p>
                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">针长spec</label>
                                        <input class="form-control" name="pinlenSpec"  id="pinlenSpec" style="width: 45%" type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">针径spec</label>
                                        <input class="form-control" name="pindiamSpec"  id="pindiamSpec" style="width: 45%" type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">水平spec</label>
                                        <input class="form-control" name="pinlevelSpec"  id="pinlevelSpec" style="width: 45%" type="text" disabled >
                                    </p>

                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">维修前针长</label>
                                        <input class="form-control" name="beforePinlen"  id="beforePinlen"  style="width: 45%" type="text">
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">维修前针径</label>
                                        <input class="form-control" name="beforePindiam"  id="beforePindiam" style="width: 45%" type="text">
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">维修前水平</label>
                                        <input class="form-control" name="beforePinlevel" id="beforePinlevel" style="width: 45%" type="text">
                                    </p>

                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">维修后针长</label>
                                        <input class="form-control" name="afterPinlen" id="afterPinlen" style="width: 45%"type="text">
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">维修后针径</label>
                                        <input class="form-control" name="afterPindiam" id="afterPindiam" style="width: 45%"type="text">
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">维修后水平</label>
                                        <input class="form-control" name="afterPinlevel" id="afterPinlevel" style="width: 45%" type="text">
                                    </p>

                                </div>
                                <div class="form-group">
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">是否PM</label>
                                        <select class="form-control" name="pmFlag" id="pmFlag" style="width: 45%">
                                            <option value="false">否</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">清针量测</label>
                                        <select class="form-control" name="cleanFlag" id="cleanFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">是否磨针</label>
                                        <select class="form-control" name="grindingFlag" id="grindingFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">是否腐蚀</label>
                                        <select class="form-control" name="corrosionFlag"  id="corrosionFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">是否调针</label>
                                        <select class="form-control" name="adjustmentFlag"  id="adjustmentFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">是否烘烤</label>
                                        <select class="form-control" name="bakeFlag" id="bakeFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="form-group">
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">手磨针径</label>
                                        <select class="form-control" name="handgrindFlag" id="handgrindFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">检查焊点</label>
                                        <select class="form-control" name="checksolderFlag" id="checksolderFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">整理焊点</label>
                                        <select class="form-control" name="maintsolderFlag" id="maintsolderFlag" style="width: 45%">
                                            <option value="true">是</option>
                                            <option value="false">否</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">检查零件</label>
                                        <select class="form-control" name="checkpartsFlag" id="checkpartsFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">零件更换</label>
                                        <select class="form-control" name="changepartsFlag"  id="changepartsFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                    <p class="col-lg-2">
                                        <label class="col-lg-5">是否跳线</label>
                                        <select class="form-control" name="jumperFlag" id="jumperFlag" style="width: 45%">
                                            <option value="false">否</option>
                                            <option value="true">是</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">作业人员</label>
                                        <input class="form-control" name="updateOperator" id="updateOperator" style="width: 35%" type="text">
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">上一站</label>
                                        <input class="form-control" name="lastStation" id="lastStation" style="width: 50%" type="text" disabled>
                                    </p>
                                    <p class="col-lg-4">
                                        <label class="col-lg-4">下一站</label>
                                        <select class="form-control"  name="nextStation" id="nextStation" style="width: 50%">
                                        </select>
                                    </p>
                                </div>
                                <div class="form-group">
                                    <p class="col-lg-4">
                                        <label class="col-lg-3">确认人</label>
                                        <input class="form-control" name="confirmer" id="confirmer" style="width: 35%"type="text">
                                    </p>
                                    <p class="col-lg-8">
                                        <label class="col-lg-2">备注</label>
                                        <textarea class="form-control" name="note"  id="note"  style="width: 70%" rows="3"></textarea>
                                    </p>
                                </div>
                                <div class="form-group" style="display: none">
                                    <p class="col-lg-12">
                                        <label class="col-lg-2">上一站</label>
                                        <input class="form-control" name="oldStatus" id="oldStatus" style="width: 45%" type="text">
                                    </p>
                                </div>
                                <div class="form-group" style="display: none">
                                    <p class="col-lg-12">
                                        <label class="col-lg-2">rebuildCount</label>
                                        <input class="form-control" name="rebuildCount" id="rebuildCount" style="width: 45%" type="text" value="0">
                                    </p>
                                </div>
                                <input class="button  button-primary button-pill  button-3d pull-right"  type="submit" value="Submit">
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>
</body>
</html>
