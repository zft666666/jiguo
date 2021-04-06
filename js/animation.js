/*
 * @Author: LDH
 * @Date: 2021-03-15 14:24:34
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-16 07:28:38
 * @Description: file content
 * @FilePath: \3.15\code\animation.js
 */
/**
 * @description:缓动动画函数
 * @param {object} element 要操作的元素对象 
 * @param {int} target 目标位置 
 * @param {function} callback 动画完成之后自动调用的函数 
 * @param {int} speed 动画执行的速度  
 */
function animation(element, target, callback = null, speed = 20) {
    clearInterval(element.timerId);
    element.timerId = setInterval(function() {
        let sleft = element.offsetLeft;
        let step = target - sleft > 0 ? Math.ceil((target - sleft) / 10) : Math.floor((target - sleft) / 10);

        if (sleft != target) {
            element.style.left = sleft + step + "px";
        } else {
            clearInterval(element.timerId);
            callback && callback();
        }

    }, speed)
}