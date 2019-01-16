$(function(){
     //场景架构右侧上部分
     

    scene_right_top();

    scene_right_bottom();

     // 场景架构点击样式切换
     $('.content_left_tab li').click(function () {
        $(this).find('a').addClass('activeClick').parent().siblings().find('a').removeClass('activeClick');
        //点击对应的图片切换
        var src_bottom = $(this).attr('src_bottom');
        $('.content_left_bottom').find('img').attr('src', src_bottom);
        var index = $(this).index();
        scene_right_top_data(index);
        scene_right_bottom_data(index);
    });
    var data ;
    var data1 ;
    function scene_right_top_data(index) {
        if (index == 0){
            data = [
            {value: 335,name: '采集'},
            {value: 310,name: '编辑'},
            {value: 234,name: '合成'},
            {value: 135,name: '上传'},
            {value: 1048,name: '存储'},
            {value: 251,name: '转码'},
            {value: 147,name: '媒资管理'},
            {value: 250,name: '智能分析'},
            { value: 400,name: '审核'},] 
        }else if(index == 1){
            data = [
            {value: 335,name: '直播'},
            {value: 310,name: '人工提取'},
            {value: 500,name: '合成'},];
        }
        else if(index == 2){
            data = [
            {value: 335,name: '采集'},
            {value: 500,name: '编辑'},
            {value: 147,name: '媒资管理'},
            {value: 250,name: '智能分析'},
            { value: 400,name: '审核'},] 
        }
        else if(index == 3){
            data = [
            {value: 335,name: '电商'},
            {value: 290,name: '社交'},
            {value: 456,name: '游戏'},] 
        }

        scene_right_top(data);
    }

    function scene_right_bottom_data(index) {
    if (index == 0){
        data1 = [['flag_name','flag_value'],['音视频点播', 30],['内容分发网络', 30],['关系型数据库', 19],
        ['视频内容审核', 8],['视频内容分析', 10]];
    }else if(index == 1){
        data1 = [['flag_name','flag_value'],['内容分发网络', 30],['关系型数据库', 19],
        ['视频内容审核', 8],['视频内容分析', 40]];
    }
    else if(index == 2){
        data1 = [['flag_name','flag_value'],['音视频点播', 23],['内容分发网络', 30],['关系型数据库', 19],
        ['视频内容审核', 8]];
    }
    else if(index == 3){
        data1 = [['flag_name','flag_value'],['视频内容审核', 8],['视频内容分析', 10]];
    }

    
    scene_right_bottom(data1);
    }
    function scene_right_top(data) {

    var myChart = echarts.init(document.getElementById('scene_right_top'));
    var option = {
        color: ['#40e0d0','#ffcc00', '#ec5111', '#fa5a13', '#9089ef','#12ef09','#41e041', '#239ee8', '#9623e8', '#11cced', ],
        title: {
            text: '短视屏场景',
            x: 'left',
            left: '20',
            top: '10',
            textStyle: { //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontSize: 15,
                fontStyle: 'normal',
                fontWeight: 'normal',
                color: '#fff'
            },
        },
        //悬浮框饼图、雷达图 : a（系列名称），b（数据项名称），c（数值）, d（百分比）
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}: {c} ({d}%)"
        },
        series: [{
                //系列名
                name: '短视屏场景',
                type: 'pie',

                selectedMode: 'single',
                center: ['50%', '50%'], //这个属性设置图的上下左右的位置
                radius: [0, '28%'],


                label: { //此处为指示线文字
                    show: true,
                    position: 'inner', //标签的位置
                    textStyle: {
                        fontWeight: 200,
                        fontSize: 13, //文字的字体大小
                    },
                },
                labelLine: {    //指示线状态
                    show: true,
                    smooth: 0.1,
                    length: 15,
                    length2:  20
                },
                data: [{
                        value: 335,
                        name: '采集'
                    },
                    {
                        value: 310,
                        name: '编辑'
                    },
                    {
                        value: 234,
                        name: '合成'
                    }
                ]
            },
            {
                name: '短视屏场景',
                type: 'pie',
                center: ['50%', '50%'], //这个属性设置图的上下左右的位置
                radius: ['40%', '58%'],
                labelLine: { //指示线状态
                    show: true,
                    smooth: 0.1,
                    length: 20,
                    length2: 20
                },
                label: {
                    normal: {
                        textStyle: {
                            fontWeight: 200,
                            fontSize: 13, //文字的字体大小
                        },
                    },

                },
                data: data==undefined ?[{
                        value: 335,
                        name: '采集'
                    },
                    {
                        value: 310,
                        name: '编辑'
                    },
                    {
                        value: 234,
                        name: '合成'
                    },
                    {
                        value: 135,
                        name: '上传'
                    },
                    {
                        value: 1048,
                        name: '存储'
                    },
                    {
                        value: 251,
                        name: '转码'
                    },
                    {
                        value: 147,
                        name: '媒资管理'
                    },
                    {
                        value: 250,
                        name: '智能分析'
                    },
                    {
                        value: 400,
                        name: '审核'
                    },
                    
                ] : data
            }
        ]

    }

    myChart.setOption(option);




    //鼠标悬浮外环的事件
    myChart.on('mouseover', function (params) {
        if (params.seriesIndex == 1) { //外环触发事件
            industry_ownship = params.data.name;
        }

    });
    }
    //场景架构右侧上部分
    function scene_right_bottom(data) {
        var myChart = echarts.init(document.getElementById('scene_right_bottom'));
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            title: {
                text: '关联产品',
                left: '20',
                top: '10',
                textStyle: {
                    color: '#ffffff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 15
                }
            },

            dataset: {
                source:data==undefined ?[['flag_name','flag_value'],['音视频点播', 9],['内容分发网络', 30],['关系型数据库', 19],
                ['视频内容审核', 8],['视频内容分析', 10]]:data,
            },
            xAxis: {
                boundaryGap: true,
                axisLine: {
                    lineStyle: {
                        color: '#ccffff',
                        width: 0, //这里是为了突出显示加上的
                    },
                },
                splitLine: {
                    lineStyle: {
                        width: 2,
                        color: 'rgb(45,73,95)'
                    }
                },
                axisTick: { //y轴刻度线(flase是不显示刻度线)
                    show: false
                },
            },
            yAxis: {
                boundaryGap: true,
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: '#ccffff',
                        width: 0, //这里是为了突出显示加上的

                    },
                },
                splitLine: {
                    show: false
                },
                axisTick: { //y轴刻度线(flase是不显示刻度线)
                    show: false
                },
            },
            grid: {
                left: '7%',
                right: '7%',
                top: '15%',
                bottom: '20%',
                containLabel: true
            },
            series: [{
                name: '商机推进度',
                type: 'bar',
                barWidth: 7,
                color: function (params) {
                    var colorList = [
                        '#ba55d3', '#40e0d0', '#ffa500', '#6b2dde', '#e0409a', '#54d1f9', 'rgba(52,90,79,0.8)',
                    ];
                    return colorList[params.dataIndex]
                },
                itemStyle: {
                    //柱形图圆角，鼠标移上去效果
                    emphasis: {
                        barBorderRadius: [15, 15, 15, 15]
                    },

                    normal: {
                        //柱形图圆角，初始化效果
                        barBorderRadius: [100, 100, 100, 100]
                    }
                },
                encode: {
                    x: 'flag_value',
                    y: 'flag_name'
                },
                barWidth: '10',
                barMinHeight: 3,

            }]
        };
        myChart.setOption(option);
    }
});