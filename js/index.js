/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: zft
 * @Date: 2021-04-02 17:23:07
 * @Version: 1.0
 */
/* 倒计时 */
function timer(){
    let future = new Date("2021-04-10 00:00:00")
    let now = new Date();
    // 相差的秒数
    let seconds = (future - now)/1000;

    // 相差的天数
    let day = parseInt(seconds/86400);

    // 相差的小时数
    let hour = parseInt(seconds/3600) % 24;

    // 相差的分钟
    let minute = parseInt(seconds/60) % 60;

    // 相差的秒数
    let second = parseInt( seconds % 60 );

    document.querySelector(".time").innerHTML = "申请时间剩余：" + day + "天" + hour + "小时" + minute + "分钟" + second + "秒";
}
timer();
setInterval(timer,1000)



/* 轮播图 */
let lbt  = document.querySelector(".lbt")
let lbt2 = document.querySelector(".lbt2");
let lbt_main = document.querySelector(".lbt-main");
let uls = document.querySelectorAll(".lbt-main ul");
let lbt_btnleft = document.querySelector(".lbt-btnleft");
let lbt_btnright = document.querySelector(".lbt-btnright");

// 每一列表宽度
let ulsWidth = uls[0].offsetWidth;


// 假设当前要显示的图片的索引为
let focusIndex = 0;

// 点击操作控制位
let flag = true;

//轮播

function play(index){
    // 滚动的距离 
    let offsetLeft = - index * ulsWidth;

    focusIndex =  index == uls.length - 1 ?  0 : index;

    animation(lbt_main,offsetLeft,function(){
        // 判断是否是最后一张图，如果是则不加动画再跳到第一张
        if(index == uls.length - 1){
           lbt_main.style.left = 0;
       }

       flag = true;
   })  
}

// 点击左侧按钮让上一张图片显示
lbt_btnleft.onclick = function(){
    if(flag){
        flag = false;
        if(focusIndex == 0){   
            lbt_main.style.left = - (uls.length - 1)*ulsWidth + "px"
            focusIndex = uls.length - 1;
        }

        focusIndex = focusIndex>0 ? --focusIndex : uls.length - 1;

        play(focusIndex);
    }
}


lbt_btnright.onclick = function() {
    if (flag) {
        flag = false;
        focusIndex = focusIndex < uls.length - 1 ? ++focusIndex : 0;
        play(focusIndex)
    }
}

  // 自动轮播
  function autoPlay(){
    // 定义定时器
    foucusTimerId = setInterval(function(){
        lbt_btnright.click();
    },2000);
}

// // 鼠标经过图片时停止自动播放
lbt.onmouseenter = function(){
    // 清除定时器
    clearInterval(foucusTimerId);
}

// 鼠标离开开始自动播放 // 页面加载完成之后自动播放
window.onload =  lbt.onmouseleave = function(){
    autoPlay();
}




/* 返回顶部 */
document.querySelector(".gotop").onclick=function(){
    let timer =setInterval(function(){
        //当前位置
        let loc = document.documentElement.scrollTop
        //步长
        let step = Math.ceil(loc/10);
        
        if(loc!=0){
            document.documentElement.scrollTop= loc-step
        }else{
            clearInterval(timer);
        }
    },20)
}


// 数据渲染
//ajax的请求
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function (result) {
        console.log(result[0].slice(0,4))
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("list").innerHTML = tmpText(result[0]);
    }
});


//导购精选数据渲染
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function (result) {
        console.log(result[0].slice(0,4))
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("list1").innerHTML = tmpText(result[0].slice(0,4))
    }
});


//发现酷玩数据渲染


ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/play/new',
    success: function (result) {
        let arry = result.slice(0,3)
        let arry2 = [...arry[0],...arry[1],...arry[2]]
        console.log(result)
        console.log(arry)
        console.log(arry2)
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("list3").innerHTML = tmpText(arry2)
    }
});