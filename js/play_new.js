/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: zft
 * @Date: 2021-04-03 19:07:01
 * @Version: 1.0
 */


    ajax({
        type: 'get',
        url: 'http://192.168.31.254:3000/play/new',
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



