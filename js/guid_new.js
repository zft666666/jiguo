/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: zft
 * @Date: 2021-04-03 20:49:34
 * @Version: 1.0
 */
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/guid/new',
    success: function (result) {
       
        console.log(result)
       
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("list").innerHTML = tmpText(result)
    }
});


