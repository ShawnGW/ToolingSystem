$(document).ready(function() {
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }
    function getSmpFormatDate(date, isFull) {
        var pattern = "";
        if (isFull == true || isFull == undefined) {
            pattern = "yyyy-MM-dd hh:mm:ss";
        } else {
            pattern = "yyyy-MM-dd";
        }
        return getFormatDate(date, pattern);
    }
    function getSmpFormatNowDate(isFull) {
        return getSmpFormatDate(new Date(), isFull);
    }
    function getSmpFormatDateByLong(l, isFull) {
        return getSmpFormatDate(new Date(l), isFull);
    }
    function getFormatDateByLong(l, pattern) {
        return getFormatDate(new Date(l), pattern);
    }
    function getFormatDate(date, pattern) {
        if (date == undefined) {
            date = new Date();
        }
        if (pattern == undefined) {
            pattern = "yyyy-MM-dd hh:mm:ss";
        }
        return date.format(pattern);
    }
    var custNameSet=new Set();
    var nameList=new Array();
    $.ajax({
        type:"get",
        async: false,
        dataType:"json",
        url:"/toolingweb/needleCard/getAllProberCardInfos",
        success:function (data) {
            $.each(data,function (i,item) {
                custNameSet.add(item.custName);
            })
        }
    });
    for (var item of custNameSet){
        $("#custNameSelect").append('<option value="'+item+'">'+item+'</option>');
    }
    $("#custNameSelect").change(function () {
            nameList.push($(this).val());
        $.ajax({
            type:"get",
            async: false,
            dataType:"json",
            url:"/toolingweb/needleCard/getProberCardId?custNameArrays="+nameList.toString(),
            success:function (data) {
                $.each(data,function (i,item) {
                    $("#needleCardSelect").append('<option value="'+item.proberCardId+'">'+item.proberCardId+'</option>');
                })
            }
        })
        $('#needleCardSelect').selectpicker('refresh');

    })

    $("#confirm").click(function () {
        var dataList=new Array();
        $("#needleCardSelect option:selected").each(function () {
            dataList.push($(this).val());
        })
        $("#tableBody").html("");
        var infoFlag=false;
        var iqcFlag=false;
        var outFlag=false;
        var backFlag=false;
        var maintainFlag=false;
        var releaseFlag=false;
        var extensionFlag=false;
        $("#typeSelect option:selected").each(function () {
            if($(this).val()=="info"){
                infoFlag=true;
            }
            if($(this).val()=="iqc"){
                iqcFlag=true;
            }
            if($(this).val()=="out"){
                outFlag=true;
            }
            if($(this).val()=="back"){
                backFlag=true;
            }
            if($(this).val()=="maintain"){
                maintainFlag=true;
            }
            if($(this).val()=="release"){
                releaseFlag=true;
            }
            if($(this).val()=="extension"){
                extensionFlag=true;
            }
        })

        if(infoFlag){
            $("#tableBody").append('<table id="needleCardInfoTable"></table>');
            var proberCardInfos=[];
            $.ajax({
                type:"get",
                async: false,
                dataType:"json",
                url:"/toolingweb/needleCard/getInfoProberCard?proberCardIdArrays="+dataList.toString(),
                success:function (data) {
                    $.each(data,function (i,item) {
                        item.loadTime=getSmpFormatDateByLong(item.loadTime,true);
                        var releaseFlag=item.releaseFlag;
                        if(releaseFlag){
                            item.releaseFlag="是";
                        }else {
                            item.releaseFlag="否";
                        }
                    })
                    proberCardInfos=data;
                }
            })
            $('#needleCardInfoTable').bootstrapTable({
                data:proberCardInfos,
                toolbar: '.scroll',                //工具按钮用哪个容器
                striped: true,                      //是否显示行间隔色
                cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true,                   //是否显示分页（*）
                sortable: false,                     //是否启用排序
                sortOrder: "asc",                   //排序方式
                sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                pageNumber: 1,                       //初始化加载第一页，默认第一页
                pageSize: 25,                       //每页的记录行数（*）
                pageList: [25, 50, 100],        //可供选择的每页的行数（*）
                search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                strictSearch: true,
                minimumCountColumns: 2,             //最少允许的列数
                clickToSelect: true,                //是否启用点击选中行
                fixedColumns:true,
                fixedNumber:1,
                height:420,
                uniqueId: "proberCardId",
                showExport: true,  //是否显示导出按钮
                buttonsAlign:"right",  //按钮位置
                exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
                Icons:'glyphicon glyphicon-export', //导出图标
                exportTypes:[ 'excel','doc','xlsx'],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
                exportOptions:{
                    // ignoreColumn: [0,1],  //忽略某一列的索引
                    fileName: 'proberCardInfos',  //文件名称设置
                    worksheetName: 'proberCardInfos',  //表格工作区名称
                    tableName: 'proberCardInfos',
                    // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
                },
                columns:[
                    {
                        title:"客户",field:"custName"
                    },
                    {
                        title:"厂商",field:"vendorName"
                    },
                    {
                        title:"型号",field:"cardModel"
                    },
                    {
                        title:"编号",field:"proberCardId"
                    },
                    {
                        title:"客户编号",field:"custNo"
                    },
                    {
                        title:"厂商编号",field:"vendorNo"
                    },{
                        title:"测试机台",field:"useEquipment"
                    },
                    {
                        title:"Dut数",field:"dutCount"
                    },{
                        title:"Pin数",field:"pinCount"
                    },
                    {
                        title:"柜位",field:"cabPosition"
                    },{
                        title:"财产单位",field:"belongDept"
                    },
                    {
                        title:"PM时机",field:"pmTd"
                    },
                    {
                        title:"新旧",field:"newOld"
                    },
                    {
                        title:"cleanType",field:"cleanType"
                    },{
                        title:"针长Spec",field:"pinlenSpec"
                    },{
                        title:"针径Spec",field:"pindiamSpec"
                    },
                    {
                        title:"水平Spec",field:"pinlevelSpec"
                    },
                    {
                        title:"depth",field:"pindepthSpec"
                    },
                    {
                        title:"TDTotal",field:"tdTotal"
                    },
                    {
                        title:"cardModel",field:"cardModel"
                    },{
                        title:"rebuildCount",field:"rebuildCount"
                    },{
                        title:"是否Release",field:"releaseFlag"
                    },{
                        title:"glassMask",field:"glassMask"
                    },
                    {
                        title:"mylarMask",field:"mylarMask"
                    },
                    {
                        title:"建档人员",field:"creator"
                    },
                    {
                        title:"确认人",field:"confirmer"
                    },
                    {
                        title:"备注",field:"note"
                    },{
                        title:"建档时间",field:"loadTime"
                    }]
            })
        }
        if(iqcFlag){
            $("#tableBody").append('<table id="needleCardIQCTable"></table>');
    var IQCRecord=[];
    $.ajax({
        type:"get",
        async: false,
        dataType:"json",
        url:"/toolingweb/needleCard/getIQCProberCard?proberCardIdArrays="+dataList.toString(),
        success:function (data) {
            $.each(data,function (i,item) {
                item.loadTime=getSmpFormatDateByLong(item.loadTime,true);
            })
            IQCRecord=data;
        }
    })
    $('#needleCardIQCTable').bootstrapTable({
        data:IQCRecord,
        toolbar: '.scroll',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 25,                       //每页的记录行数（*）
        pageList: [25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height:420,
        uniqueId: "proberCardId",
        showExport: true,  //是否显示导出按钮
        buttonsAlign:"right",  //按钮位置
        exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
        Icons:'glyphicon glyphicon-export', //导出图标
        exportTypes:[ 'excel','doc','xlsx'],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
        exportOptions:{
            // ignoreColumn: [0,1],  //忽略某一列的索引
            fileName: 'IQCRecord',  //文件名称设置
            worksheetName: 'IQCRecord',  //表格工作区名称
            tableName: 'IQCRecord',
            // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
        },
        columns:[
            {
                title:"针卡编号",field:"proberCardId"
            },
            {
                title:"最大针长",field:"pinMaxlen"
            },
            {
                title:"最小针长",field:"pinMinlen"
            },{
                title:"最大针径",field:"pinMaxdiam"
            },
            {
                title:"最小针径",field:"pinMindiam"
            },{
                title:"水平",field:"pinLevel"
            },
            {
                title:"深度",field:"pinDepth"
            },{
                title:"更新人员",field:"updateOperator"
            },{
                title:"上一站",field:"lastProcess"
            },
            {
                title:"下一站",field:"nextStation"
            },
            {
                title:"备注",field:"note"
            },
            {
                title:"建档时间",field:"loadTime"
            }]
    })
}
        if(backFlag){
            $("#tableBody").append('<table id="needleCardBackTable"></table>');
            var backProberCardRecord=[];
            $.ajax({
                type:"get",
                async: false,
                dataType:"json",
                url:"/toolingweb/needleCard/getBackProberCard?proberCardIdArrays="+dataList.toString(),
                success:function (data) {
                    $.each(data,function (i,item) {
                        item.loadTime=getSmpFormatDateByLong(item.loadTime,true);
                        var issueFlag=item.issueFlag;
                        if(issueFlag){
                            item.issueFlag="是";
                        }else {
                            item.issueFlag="否";
                        }
                    })
                    backProberCardRecord=data;
                }
            })
            $('#needleCardBackTable').bootstrapTable({
                data:backProberCardRecord,
                toolbar: '.scroll',                //工具按钮用哪个容器
                striped: true,                      //是否显示行间隔色
                cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true,                   //是否显示分页（*）
                sortable: false,                     //是否启用排序
                sortOrder: "asc",                   //排序方式
                sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                pageNumber: 1,                       //初始化加载第一页，默认第一页
                pageSize: 25,                       //每页的记录行数（*）
                pageList: [25, 50, 100],        //可供选择的每页的行数（*）
                search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                strictSearch: true,
                minimumCountColumns: 2,             //最少允许的列数
                clickToSelect: true,                //是否启用点击选中行
                height:420,
                uniqueId: "proberCardId",
                showExport: true,  //是否显示导出按钮
                buttonsAlign:"right",  //按钮位置
                exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
                Icons:'glyphicon glyphicon-export', //导出图标
                exportTypes:[ 'excel','doc','xlsx'],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
                exportOptions:{
                    // ignoreColumn: [0,1],  //忽略某一列的索引
                    fileName: 'backProberCardRecord',  //文件名称设置
                    worksheetName: 'backProberCardRecord',  //表格工作区名称
                    tableName: 'backProberCardRecord',
                    // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
                },
                columns:[
                    {
                        title:"针卡编号",field:"proberCardId"
                    },
                    {
                        title:"归还机台",field:"backuseEquipment"
                    }, {
                        title:"归还人员",field:"backOperator"
                    },
                    {
                        title:"是否异常",field:"issueFlag"
                    },
                    {
                        title:"异常描述",field:"issueDesc"
                    }
                    ,
                    {
                        title:"归还状态",field:"nextStation"
                    }
                    ,
                    {
                        title:"备注",field:"note"
                    },
                    {
                        title:"建档时间",field:"loadTime"
                    }]
            })
        }
        if(outFlag){
            $("#tableBody").append('<table id="needleCardOutTable"></table>');
            var outProberCardRecord=[];
            $.ajax({
                type:"get",
                async: false,
                dataType:"json",
                url:"/toolingweb/needleCard/getOutProberCard?proberCardIdArrays="+dataList.toString(),
                success:function (data) {
                    $.each(data,function (i,item) {
                        item.loadTime=getSmpFormatDateByLong(item.loadTime,true);
                    })
                    outProberCardRecord=data;
                }
            })
            $('#needleCardOutTable').bootstrapTable({
                data:outProberCardRecord,
                toolbar: '.scroll',                //工具按钮用哪个容器
                striped: true,                      //是否显示行间隔色
                cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true,                   //是否显示分页（*）
                sortable: false,                     //是否启用排序
                sortOrder: "asc",                   //排序方式
                sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                pageNumber: 1,                       //初始化加载第一页，默认第一页
                pageSize: 25,                       //每页的记录行数（*）
                pageList: [25, 50, 100],        //可供选择的每页的行数（*）
                search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                strictSearch: true,
                minimumCountColumns: 2,             //最少允许的列数
                clickToSelect: true,                //是否启用点击选中行
                height:420,
                uniqueId: "proberCardId",
                showExport: true,  //是否显示导出按钮
                buttonsAlign:"right",  //按钮位置
                exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
                Icons:'glyphicon glyphicon-export', //导出图标
                exportTypes:[ 'excel','doc','xlsx'],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
                exportOptions:{
                    // ignoreColumn: [0,1],  //忽略某一列的索引
                    fileName: 'outProberCardRecord',  //文件名称设置
                    worksheetName: 'outProberCardRecord',  //表格工作区名称
                    tableName: 'outProberCardRecord',
                    // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
                },
                columns:[
                    {
                        title:"针卡编号",field:"proberCardId"
                    },
                    {
                        title:"借出机台",field:"outUseEquipment"
                    },{
                        title:"借出人员",field:"outOperator"
                    },
                    {
                        title:"借出用途",field:"nextStation"
                    },
                    {
                        title:"备注",field:"note"
                    },
                    {
                        title:"建档时间",field:"loadTime"
                    }]
            })
        }
if(maintainFlag){
    $("#tableBody").append('<table id="needleCardMaintainTable"></table>');
    var maintainRecord=[];
    $.ajax({
        type:"get",
        async: false,
        dataType:"json",
        url:"/toolingweb/needleCard/getMaintainProberCard?proberCardIdArrays="+dataList.toString(),
        success:function (data) {
            $.each(data,function (i,item) {
                item.loadTime=getSmpFormatDateByLong(item.loadTime,true);
                var cleanFlag=item.cleanFlag;
                var grindingFlag=item.grindingFlag;
                var corrosionFlag=item.corrosionFlag;
                var adjustmentFlag=item.adjustmentFlag;
                var bakeFlag=item.bakeFlag;
                var handgrindFlag=item.handgrindFlag;
                var checksolderFlag=item.checksolderFlag;
                var maintsolderFlag=item.maintsolderFlag;
                var checkpartsFlag=item.checkpartsFlag;
                var changepartsFlag=item.changepartsFlag;
                var jumperFlag=item.jumperFlag;
                if(jumperFlag){
                    item.jumperFlag="是";
                }else {
                    item.jumperFlag="否";
                }
                if(changepartsFlag){
                    item.changepartsFlag="是";
                }else {
                    item.changepartsFlag="否";
                }
                if(checkpartsFlag){
                    item.checkpartsFlag="是";
                }else {
                    item.checkpartsFlag="否";
                }
                if(maintsolderFlag){
                    item.maintsolderFlag="是";
                }else {
                    item.maintsolderFlag="否";
                }
                if(checksolderFlag){
                    item.checksolderFlag="是";
                }else {
                    item.checksolderFlag="否";
                }
                if(handgrindFlag){
                    item.handgrindFlag="是";
                }else {
                    item.handgrindFlag="否";
                }
                if(cleanFlag){
                    item.cleanFlag="是";
                }else {
                    item.cleanFlag="否";
                }
                if(grindingFlag){
                    item.grindingFlag="是";
                }else {
                    item.grindingFlag="否";
                }
                if(corrosionFlag){
                    item.corrosionFlag="是";
                }else {
                    item.corrosionFlag="否";
                }
                if(adjustmentFlag){
                    item.adjustmentFlag="是";
                }else {
                    item.adjustmentFlag="否";
                }
                if(bakeFlag){
                    item.bakeFlag="是";
                }else {
                    item.bakeFlag="否";
                }
            })
            maintainRecord=data;
        }
    })
    $('#needleCardMaintainTable').bootstrapTable({
        data:maintainRecord,
        toolbar: '.scroll',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 25,                       //每页的记录行数（*）
        pageList: [25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        fixedColumns:true,
        fixedNumber:1,
        height:420,
        uniqueId: "proberCardId",
        showExport: true,  //是否显示导出按钮
        buttonsAlign:"right",  //按钮位置
        exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
        Icons:'glyphicon glyphicon-export', //导出图标
        exportTypes:[ 'excel','doc','xlsx'],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
        exportOptions:{
            // ignoreColumn: [0,1],  //忽略某一列的索引
            fileName: 'maintainRecord',  //文件名称设置
            worksheetName: 'maintainRecord',  //表格工作区名称
            tableName: 'maintainRecord',
            // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
        },
        columns:[
            {
                title:"针卡编号",field:"proberCardId"
            },
            {
                title:"维修前针长",field:"beforePinlen"
            },
            {
                title:"维修前针径",field:"beforePindiam"
            },{
                title:"维修前水平",field:"beforePinlevel"
            },
            {
                title:"维修后针长",field:"afterPinlen"
            },
            {
                title:"维修后针径",field:"afterPindiam"
            },
            {
                title:"维修后水平",field:"afterPinlevel"
            }
            ,
            {
                title:"清针量测",field:"cleanFlag"
            },
            {
                title:"是否磨针",field:"grindingFlag"
            },{
                title:"是否腐蚀",field:"corrosionFlag"
            },
            {
                title:"是否调针",field:"adjustmentFlag"
            },
            {
                title:"是否烘烤",field:"bakeFlag"
            },
            {
                title:"手磨针径",field:"handgrindFlag"
            }
            ,
            {
                title:"检查焊点",field:"checksolderFlag"
            },
            {
                title:"整理焊点",field:"maintsolderFlag"
            }
            ,
            {
                title:"检查零件",field:"checkpartsFlag"
            },
            {
                title:"零件更换",field:"changepartsFlag"
            }
            ,
            {
                title:"是否跳线",field:"jumperFlag"
            } ,
            {
                title:"更新人员",field:"updateOperator"
            }
            ,
            {
                title:"下一站",field:"nextStation"
            },
            {
                title:"rebuildCount",field:"rebuildCount"
            }
            ,
            {
                title:"备注",field:"note"
            },
            {
                title:"建档时间",field:"loadTime"
            }]
    })
}
if(releaseFlag){
    $("#tableBody").append('<table id="needleCardReleaseTable"></table>');
    var releaseRecord=[];
    $.ajax({
        type:"get",
        async: false,
        dataType:"json",
        url:"/toolingweb/needleCard/getReleaseProberCard?proberCardIdArrays="+dataList.toString(),
        success:function (data) {
            $.each(data,function (i,item) {
                item.loadTime=getSmpFormatDateByLong(item.loadTime,true);
                var releaseFlag=item.releaseFlag;
                if(releaseFlag){
                    item.releaseFlag="是";
                }else {
                    item.releaseFlag='否';
                }
            })
            releaseRecord=data;
        }
    })
    $('#needleCardReleaseTable').bootstrapTable({
        data:releaseRecord,
        toolbar: '.scroll',                //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: false,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                       //初始化加载第一页，默认第一页
        pageSize: 25,                       //每页的记录行数（*）
        pageList: [25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
        strictSearch: true,
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        height:420,
        uniqueId: "proberCardId",
        showExport: true,  //是否显示导出按钮
        buttonsAlign:"right",  //按钮位置
        exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
        Icons:'glyphicon glyphicon-export', //导出图标
        exportTypes:[ 'excel','doc','xlsx'],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
        exportOptions:{
            // ignoreColumn: [0,1],  //忽略某一列的索引
            fileName: 'releaseRecord',  //文件名称设置
            worksheetName: 'releaseRecord',  //表格工作区名称
            tableName: 'releaseRecord',
            // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
        },
        columns:[
            {
                title:"针卡编号",field:"proberCardId"
            },
            {
                title:"工程验收",field:"pteOperator"
            },
            {
                title:"良率",field:"cardYield"
            },{
                title:"针痕验收",field:"cardOperator"
            },
            {
                title:"针痕",field:"pinMarks"
            },
            {
                title:"客戶是否同意release",field:"releaseFlag"
            },
            {
                title:"作业人员",field:"updateOperator"
            }
            ,
            {
                title:"备注",field:"note"
            },
            {
                title:"建档时间",field:"loadTime"
            }]
    })
}
        if(extensionFlag){
            $("#tableBody").append('<table id="needleCardExtensionTable"></table>');
            var extensionRecord=[];
            $.ajax({
                type:"get",
                async: false,
                dataType:"json",
                url:"/toolingweb/needleCard/getEXRecord?proberCardIdArrays="+dataList.toString(),
                success:function (data) {
                    $.each(data,function (i,item) {
                        item.loadTime=getSmpFormatDateByLong(item.loadTime,true);
                        var marksFlag=item.marksFlag;
                        var extenFlag=item.extenFlag;
                        if(marksFlag){
                            item.marksFlag="PASS";
                        }else {
                            item.marksFlag="FAIL";
                        }
                        if(extenFlag){
                            item.extenFlag="YES";
                        }else {
                            item.extenFlag="NO";
                        }
                    })
                    extensionRecord=data;
                }
            })
            $('#needleCardExtensionTable').bootstrapTable({
                data:extensionRecord,
                toolbar: '.scroll',                //工具按钮用哪个容器
                striped: true,                      //是否显示行间隔色
                cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
                pagination: true,                   //是否显示分页（*）
                sortable: false,                     //是否启用排序
                sortOrder: "asc",                   //排序方式
                sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                pageNumber: 1,                       //初始化加载第一页，默认第一页
                pageSize: 25,                       //每页的记录行数（*）
                pageList: [25, 50, 100],        //可供选择的每页的行数（*）
                search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
                strictSearch: true,
                minimumCountColumns: 2,             //最少允许的列数
                clickToSelect: true,                //是否启用点击选中行
                height:420,
                uniqueId: "proberCardId",
                showExport: true,  //是否显示导出按钮
                buttonsAlign:"right",  //按钮位置
                exportDataType: 'all',   //导出的方式 all全部 selected已选择的  basic', 'all', 'selected'.
                Icons:'glyphicon glyphicon-export', //导出图标
                exportTypes:[ 'excel','doc','xlsx'],  //导出文件类型 'csv', 'txt', 'sql', 'doc', 'excel', 'xlsx', 'pdf'
                exportOptions:{
                    // ignoreColumn: [0,1],  //忽略某一列的索引
                    fileName: 'releaseRecord',  //文件名称设置
                    worksheetName: 'releaseRecord',  //表格工作区名称
                    tableName: 'releaseRecord',
                    // excelstyles: ['background-color', 'color', 'font-size', 'font-weight'], 设置格式
                },
                columns:[
                    {
                        title:"针卡编号",field:"proberCardId"
                    },
                    {
                        title:"适用机台",field:"useEquipment"
                    },
                    {
                        title:"Dut数",field:"dutCount"
                    },{
                        title:"Pin数",field:"pinCount"
                    },
                    {
                        title:"TD",field:"currTd"
                    },
                    {
                        title:"TD Total",field:"tdTotal"
                    },
                    {
                        title:"类型",field:"cardType"
                    }
                    ,
                    {
                        title:"已展延lot数",field:"extenCount"
                    },
                    {
                        title:"上一站",field:"lastProcess"
                    },{
                        title:"维修前针长",field:"pinLen"
                    },
                    {
                        title:"维修前针径",field:"pinDiam"
                    },{
                        title:"维修前水平",field:"pinLevel"
                    },
                    {
                        title:"针痕检查",field:"marksFlag"
                    },
                    {
                        title:"良率",field:"cardYield"
                    },
                    {
                        title:"下一站",field:"currentProcess"
                    }
                    ,
                    {
                        title:"是否展延",field:"extenFlag"
                    },
                    {
                        title:"作业人员",field:"creator"
                    },{
                        title:"备注",field:"note"
                    }]
            })
        }
    })

})