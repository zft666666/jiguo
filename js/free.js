/*
 * @description: 
 * @param: params
 * @return: 
 * @Author: Yff
 * @Date: 2021-04-03 10:58:21
 * @Version: 1.0
 */
// 大众试用

ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/public',
    success: function (result) {
        console.log(result)
        // let newaraay=result.slice(0,2)
        // let array2=[...newaraay[0],...newaraay[1]]
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("list").innerHTML = tmpText(result);
    }
});

// 体验师专享
ajax({
    type: 'get',
    url: 'http://192.168.31.254:3000/useing/master',
    success: function (result) {
        console.log(result)
        // let newaraay=result.slice(0,2)
        // let array2=[...newaraay[0],...newaraay[1]]
        var tmpText = doT.template(document.getElementById('li_tmpl').innerText);
        document.getElementById("TY-list").innerHTML = tmpText(result);
    }
});




// $(function(){
//    $('.more div').click(function(){
//        $(this).css('display','none').siblings().css('display','block')
//         // console.log($(this).siblings())
//     })
// })



