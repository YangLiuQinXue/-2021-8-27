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
     // let reg=/^[0-9]*$/;
    button.addEventListener('click',function (){
        let name=document.getElementById('name').value;
        let pf=document.getElementById('fen').value;
        let xz=document.getElementById('xz').value;
        let shu=document.querySelector('.flax .left .table table');
        if(name&&(parseInt(pf))&&(parseInt(xz))){
            shu.innerHTML+=
                            `<tr class="top">
                            <td>${name}</td>
                            <td>${pf}</td>
                            <td>${xz}</td>
                            </tr>`;
            // console.log(shu);
        }else {
            !name&&alert('请输入姓名');
            !name&&alert('请输入评分');
            !name&&alert('请输入薪资');
        }
    });
}