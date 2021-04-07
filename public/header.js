/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: zft
 * @Date: 2021-04-06 09:24:33
 * @Version: 1.0
 */


//搜索框
let register = document.querySelector(".r-img");
register.onmouseover= function(){
    this.style.display = "none";
    document.querySelector(".register input").style.display ="block"
}

document.querySelector(".register input").onmouseout = function(){
    this.style.display = "none";
    register.style.display ="block";

}


/* 返回顶部 */
document.querySelector(".gotop").onclick = function(){
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

