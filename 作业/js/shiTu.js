//封装方法
// function fh(label,value){
//     // let label=[],value=[];
//     let name=document.querySelectorAll('.flax .left .table table .name');
//     let pf=document.querySelectorAll('.flax .left .table table .pf');
//     let xz=document.querySelectorAll('.flax .left .table table .xz');
//     for(let i=0;i<name.length;i++){
//         label.push(name[i]);
//         value.push(pf[i]);
//     }
// }
//折线图
{
    let label = [];
    let value = [];
    let button=document.querySelector('.flax .left .shuRu button');
    button.addEventListener('click',function (){
        let name=document.querySelectorAll('.flax .left .table table .name');
        let pf=document.querySelectorAll('.flax .left .table table .pf');
        let xz=document.querySelectorAll('.flax .left .table table .xz');
        for(let i=0;i<name.length;i++){
           if ((name[i].innerHTML).length<8){
               label.push((name[i].innerHTML));
               // console.log(name[i].innerHTML)
               value.push(+(pf[i].innerHTML));
           }
        }
      let option = {
            backgroundColor:"#101e44",
            grid: {
                top: 100,
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(255,255,255,0)' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: 'rgba(255,255,255,1)' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(255,255,255,0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                },
            },
            xAxis: [{
                type: "category",
                boundaryGap: false,
                axisLabel: {
                    formatter: '{value}',
                    fontSize:14,
                    margin:20,
                    textStyle: {
                        color: "#7ec7ff"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#243753"
                    }
                },
                splitLine: {
                    show:true,
                    lineStyle: {
                        color: "#243753"
                    }
                },
                axisTick:{
                    show:false
                },
                data: label
            }],
            yAxis: [
                {
                    boundaryGap:false,
                    type: "value",
                    axisLabel: {
                        textStyle: {
                            color: "#7ec7ff"
                        }
                    },
                    nameTextStyle: {
                        color: "#fff",
                        fontSize: 12,
                        lineHeight: 40
                    },
                    splitLine: {
                        lineStyle: {
                            color: "#243753"
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle:{
                            color:"#283352"
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }
            ],
            series: [{
                name: "评分",
                type: "line",
                smooth: true,
                showSymbol: true,
                symbolSize: 8,
                zlevel: 3,
                itemStyle:{
                    color:'#19a3df',
                    borderColor:"#a3c8d8"
                },
                lineStyle: {
                    normal: {
                        width:6,
                        color: "#19a3df",
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                offset: 0,
                                color: "rgba(88,255,255,0.2)"
                            },
                                {
                                    offset: 0.8,
                                    color: "rgba(88,255,255,0)"
                                }
                            ],
                            false
                        ),
                    }
                },
                data: value
            }]
        };
        console.log(label,value);
        let myChartB=document.querySelector('.flax .right .top');
        let  myChart = echarts.init(myChartB);
        myChart.setOption(option,true);
    });
    // option = {
    //     backgroundColor:"#101e44",
    //     grid: {
    //         top: 100,
    //         containLabel: true
    //     },
    //     tooltip: {
    //         trigger: 'axis',
    //         axisPointer: {
    //             lineStyle: {
    //                 color: {
    //                     type: 'linear',
    //                     x: 0,
    //                     y: 0,
    //                     x2: 0,
    //                     y2: 1,
    //                     colorStops: [{
    //                         offset: 0,
    //                         color: 'rgba(255,255,255,0)' // 0% 处的颜色
    //                     }, {
    //                         offset: 0.5,
    //                         color: 'rgba(255,255,255,1)' // 100% 处的颜色
    //                     }, {
    //                         offset: 1,
    //                         color: 'rgba(255,255,255,0)' // 100% 处的颜色
    //                     }],
    //                     global: false // 缺省为 false
    //                 }
    //             },
    //         },
    //     },
    //     xAxis: [{
    //         type: "category",
    //         boundaryGap: false,
    //         axisLabel: {
    //             formatter: '{value}',
    //             fontSize:14,
    //             margin:20,
    //             textStyle: {
    //                 color: "#7ec7ff"
    //             }
    //         },
    //         axisLine: {
    //             lineStyle: {
    //                 color: "#243753"
    //             }
    //         },
    //         splitLine: {
    //             show:true,
    //             lineStyle: {
    //                 color: "#243753"
    //             }
    //         },
    //         axisTick:{
    //             show:false
    //         },
    //         data: label
    //     }],
    //     yAxis: [
    //         {
    //             boundaryGap:false,
    //             type: "value",
    //             axisLabel: {
    //                 textStyle: {
    //                     color: "#7ec7ff"
    //                 }
    //             },
    //             nameTextStyle: {
    //                 color: "#fff",
    //                 fontSize: 12,
    //                 lineHeight: 40
    //             },
    //             splitLine: {
    //                 lineStyle: {
    //                     color: "#243753"
    //                 }
    //             },
    //             axisLine: {
    //                 show: true,
    //                 lineStyle:{
    //                     color:"#283352"
    //                 }
    //             },
    //             axisTick: {
    //                 show: false
    //             }
    //         }
    //     ],
    //     series: [{
    //         name: "评分",
    //         type: "line",
    //         smooth: true,
    //         showSymbol: true,
    //         symbolSize: 8,
    //         zlevel: 3,
    //         itemStyle:{
    //             color:'#19a3df',
    //             borderColor:"#a3c8d8"
    //         },
    //         lineStyle: {
    //             normal: {
    //                 width:6,
    //                 color: "#19a3df",
    //             }
    //         },
    //         areaStyle: {
    //             normal: {
    //                 color: new echarts.graphic.LinearGradient(
    //                     0,
    //                     0,
    //                     0,
    //                     1,
    //                     [{
    //                         offset: 0,
    //                         color: "rgba(88,255,255,0.2)"
    //                     },
    //                         {
    //                             offset: 0.8,
    //                             color: "rgba(88,255,255,0)"
    //                         }
    //                     ],
    //                     false
    //                 ),
    //             }
    //         },
    //         data: value
    //     }]
    // };

}
//柱状图
