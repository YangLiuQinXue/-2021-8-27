{
    //给window设置rem
    function setFont(){
        let htmlWidth=document.querySelector('html').clientWidth;
        let htmlHeight=document.querySelector('html').clientHeight;
        // if (htmlWidth<1024)htmlWidth=1024;
        // if (htmlWidth>1920)htmlWidth=1920;
        htmlWidth<1024&&(htmlWidth=1024);
        htmlWidth>1920&&(htmlWidth=1920);
        document.querySelector('html').style.fontSize=(htmlWidth/80+'px');
        document.querySelector('.flax').style.height=(htmlHeight+'px');
    }
    setFont();
    window.onresize=function (){
        setFont();
    };
}
{
    let button=document.querySelector('.flax .left .shuRu button');
    button.addEventListener('click',function (){
        let name=document.getElementById('name');
        let pf=document.getElementById('fen');
        let xz=document.getElementById('xz');
        let shu=document.querySelector('.flax .left .table table');
        if((name.value)&&(parseInt(pf.value))&&(parseInt(xz.value))&&(xz.value>2000)&&(pf.value<=100)&&(pf.value>0)){
            shu.innerHTML+=
                            `<tr class="top">
                            <td class="name">${name.value}</td>
                            <td class="pf">${pf.value}</td>
                            <td class="xz">${xz.value}</td>
                            </tr>`;
            name.value='';
            pf.value='';
            xz.value='';
            // console.log(shu);
            // let i=0;
            // let a=document.querySelectorAll('.flax .left .table table');
            // console.log(a[i])
        }else {
            !(name.value)&&alert('请输入姓名');
            !(parseInt(pf.value))&&alert('请正确输入评分');
            (pf.value>100)&&alert('请正确输入评分');
            (pf.value<0)&&alert('请正确输入评分');
            !(parseInt(xz.value))&&(!xz.value>2000)&&alert('请正确输入薪资');
            name.value='';
            pf.value='';
            xz.value='';
        }
    });
}