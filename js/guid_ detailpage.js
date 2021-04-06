/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: zft
 * @Date: 2021-04-04 10:40:08
 * @Version: 1.0
 */
let span = document.querySelector(".num");
let img =document.querySelector(".live img");
let img_share=document.querySelector(".share img");
let flag = true;
document.querySelector(".live").onclick = function(){
   if(flag){
      img.src ="../images/css/img/xinRedh.png"
      span.innerText = 16 ;
   }else{
      img.src ="../images/css/img/xinRedo.png"
      span.innerText = 15 ;
   }
    flag=!flag;
}

document.querySelector(".share img").onclick = function(){
   if(flag){
      img_share.src = "../images/css/img/shareh_yj1.png";
   }else{
      img_share.src = "../images/css/img/share_yj1.png";
   }
   flag=!flag;
}
