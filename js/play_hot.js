/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: zft
 * @Date: 2021-04-03 18:45:48
 * @Version: 1.0
 */
document.querySelector(".clicks").onclick=function(){
     setTimeout(function(){
        ajax({
            type: 'get',
            url: 'http://192.168.31.254:3000/play/hot',
            success: function (result) {
                let arry = result.slice(0,4)
                let arry2 = [...arry[0],...arry[1]]
                console.log(result)
                console.log(arry)
                console.log(arry2)
                var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
                document.getElementById("list").innerHTML = tmpText(arry2)
            }
        });
     },1000)

}
