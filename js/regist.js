/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: zft
 * @Date: 2021-04-06 09:49:51
 * @Version: 1.0
 */
//表单验证
let phone_number = document.querySelector(".phone-number input");
let user = document.querySelector(".user input");
let verification_img = document.querySelector(".verification-img input")
let password = document.querySelector(".password input");
let confirm_password = document.querySelector(".confirm-password input");
let button = document.querySelector(".button button");



//手机号
phone_number.onfocus = function(){
    this.nextElementSibling.innerText="验证完成后可使用改手机号登录"
    this.nextElementSibling.style.color = "#CCD0DB"
}
let result = false;
phone_number.onblur = function(){
    let v = this.value;
    let msg = "";
    let color = "red";
    let num = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/

    if(num.test(v) ){
        msg = "格式正确"
        color = "green"
        result = true;
    }else if(v.length == 0){
        msg = "手机号不能为空"
    } 
    else{
        msg = "格式错误"
    }
    this.nextElementSibling.innerText = msg;
    this.nextElementSibling.style.color =color;
}

//图片验证码
// verification_img.onfocus = function(){
//     this.nextElementSibling.innerText="输入图片内验证码"
//     this.nextElementSibling.style.color = "#CCD0DB"
// }
// verification_img.onblur = function(){
//     let v = this.value;
//     let msg = "";
//     let color = "red";
//     let num =/r2b7/

//     if(num.test(v) ){
//         msg = "格式正确";
//         color = "green";
//         result4 = true;
//     }else{
//         msg = "验证码错误"
//     }
//     this.nextElementSibling.innerText = msg;
//     this.nextElementSibling.style.color =color;
// }

//用户名
user.onfocus = function(){
    this.nextElementSibling.innerText ="用户名要求在1-6个字符字符之间"
    this.nextElementSibling.style.color = "#CCD0DB"
}
let result1 =false;
user.onblur = function(){
    let v =this.value;
    let msg = "";
    let color ="red"
    
    if(v.length == 0){
        msg = "用户名不能为空"
    }else if(v.length < 1){
        msg = "用户名不能少于1个字符";
    }else if(v.length>7){
        msg = "用户名不能多于7个字符"
    }else{
        msg = "验证通过"
        color = "green"
        result1 = true;
    }
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.style.color = color;
}


//密码
password.onfocus = function(){
    this.nextElementSibling.innerText ="密码要求大于6个字符字符之间"
    this.nextElementSibling.style.color = "#CCD0DB"
}
let result2 =false;
password.onblur = function(){
    let v =this.value;
    let msg = "";
    let color ="red"
    
    if(v.length == 0){
       msg =  "密码不能为空"
    }else if(v.length < 6){
        msg = "密码不能少于6个字符";
    }else if(v.length > 18){
        msg = "密码不能多于18个字符"
    }else{
        msg = "验证通过"
        color = "green"
        result2 = true;
    }
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.style.color = color;
}


//确认密码
confirm_password.onfocus =function(){
    this.nextElementSibling.style.color = "#CCD0DB"
}
let result3 = false
confirm_password.onblur =function(){
    let v= this.value;
    let msg = "";
    let color ="red";

    if(v.length == 0){
        msg = "密码不能为空"
    }else if(v == password.value){
        msg = "密码正确"
        color = "green"
        result3 = true;
    }else{
        msg ="请再次确认密码"
    }
    this.nextElementSibling.innerHTML = msg;
    this.nextElementSibling.style.color = color;
}

 // 表单提交之前必须先通过验证
document.querySelector("form").onsubmit = function(){
    phone_number.focus();
    phone_number.blur();
    user.focus();
    user.blur();
    password.focus();
    password.blur();
    confirm_password.focus();
    confirm_password.blur();

    if(!result || !result1 || !result2 ||!result3)
        // 阻止事件默认行为
        // 验证未通过，阻止表单提交
       return false
}

// 按回车键提交表单
document.documentElement.onkeyup = function(e){
    if(e.keyCode === 13){
        button.click();
        
    } 
}






//获取短信验证码
let btn =document.querySelector(".btn");
let num =60;
let timer =null;

btn.onclick= function() {
    this.disabled = true;
    timer = setInterval(() =>{
        if(num>0){
            btn.innerText = num-- +"秒后重新获取"
        }else{
            clearInterval(timer)
            this.innerText="点击重新获取验证码"
            this.disabled =false;
            num =60;
        }
    },1000)
}


