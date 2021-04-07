/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: Yff
 * @Date: 2021-04-07 10:03:22
 * @Version: 1.0
 */
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function (result) {
        console.log(result)       
        var tmpText = doT.template(document.getElementById('hot-try-list').innerText);
        document.getElementById('hot-list').innerHTML = tmpText(result);
    }
})