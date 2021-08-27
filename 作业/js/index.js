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