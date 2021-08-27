{
    let i=0;
    let label = [];
    let value = [];
    let button=document.querySelector('.flax .left .shuRu button');
    button.addEventListener('click',function (){
        let name=document.querySelectorAll('.flax .left .table table .name');
        // let pf=document.querySelectorAll('.flax .left .table table .pf');
        let xz=document.querySelectorAll('.flax .left .table table .xz');
                label.push((name[i].innerHTML));
                value.push(+(xz[i].innerHTML));
        i++;
        option = {
            backgroundColor: '#0B1535',
            "textStyle": {
                "fontSize": 0,
            },
            "color": ["#00FCFF","#FFDF1C","#5AB72C","#FF715A","#2F9BFF"],
            "xAxis": {
                "nameTextStyle": {
                    "color": "#c0c3cd",
                    "padding": [0, 0, -10, 0],
                    "fontSize": 14
                },
                "axisLabel": {
                    "color": "#c0c3cd",//X轴文字
                    "fontSize": 14,
                    "interval": 0
                },
                "axisTick": {
                    "lineStyle": {
                        "color": "#0B1535",
                        "width": 1
                    },
                    "show": false
                },
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    "lineStyle": {
                        "color": "#384267",
                        "width": 1,
                        "type": "dashed"
                    },
                    "show": true
                },
                "data": label,
                "type": "category"
            },
            "yAxis": {
                "type": 'value',
                "name": "(元)",
                "nameTextStyle": {
                    "color": "#c0c3cd",
                    "padding": [0, 0, -10, 0],
                    "fontSize": 14
                },
                "axisLabel": {
                    "color": "#c0c3cd",//Y轴文字
                    "fontSize": 14
                },
                "axisTick": {
                    "lineStyle": {
                        "color": "#384267",
                        "width": 1
                    },
                    "show": true
                },
                "splitLine": {
                    "show": true,
                    "lineStyle": {
                        "color": "#384267",
                        "type": "line"
                    }
                },
                "axisLine": {
                    "lineStyle": {
                        "color": "#fff",
                        "width": 1,
                        "type": "line"
                    },
                    "show": false
                },
            },
            "series": [{
                "data": value,
                "type": "bar",
                "barMaxWidth": "auto",
                "barWidth": 30,
                "itemStyle": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "#00FCFF",
                        }, {
                            "offset": 1,
                            "color": "#0B1A39"
                        }]
                    }
                },
                "label": {
                    "show": true,
                    // "position": "top",
                    "distance": 10,
                    "color": "#fff",
                    "position": [30, 10],
                }
            }, {
                "data": [0, 0, 0],
                "type": "pictorialBar",
                "barMaxWidth": "0",
                "symbol": "diamond",
                "symbolOffset": [0, 0],
                "symbolSize": [30, 15]
            }, {
                "data": [200, 130, 84, 200, 250],
                "type": "pictorialBar",
                "barMaxWidth": "20",
                "symbolPosition": "end",
                "symbol": "diamond",
                "color": ["#00FCFF","#FFDF1C","#5AB72C","#FF715A","#2F9BFF"],
                "symbolOffset": [0, "-50%"],
                "symbolSize": [30, 10],
                "zlevel": 4
            },],
            "tooltip": {
                "trigger": "axis",
                "show": false
            }
        }
        let myChartB=document.querySelector('.flax .right .button');
        let  myChart = echarts.init(myChartB);
        myChart.setOption(option);
    })
    // let xinZi=

}