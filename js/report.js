$(function () {

    $(".currur1").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".second").fadeIn()
        $(".first").fadeOut()
    })
    $(".currur2").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".first").fadeIn()
        $(".second").fadeOut()
    })




    $(".zan").click(function () {
        $(".zan>img").toggleClass("active");
        if ($(".zan>img").hasClass("active")) {
            $(".zan-span").html(4)
        } else {
            $(".zan-span").html(3)
        }
    })

    $(".t_rq_jz").click(function () {
        $(".t_rq_jz_div").css("display", "none");
        $(".t_rq_jz_img").css("display", "block");
        setTimeout(function () {
            console.log(2)
            $.get("http://192.168.31.254:3000/report/new", function (data) {
                console.log(data);
                arr = data;
                arr.forEach(function (val) {
                    var html = `   <li>
                    <div class="first-one">
                        <img src=${val.img} alt="">
                        <div class="showdow">
                            <div class="showdow-top">${val.text}</div>
                            <div class="showdow-bottom">
                                <div class="jlt1">
                                    <img src="./img/icon.png" alt="">

                                </div>
                                <p class="showdow-bottom-p">${val.uName}</p>
                                <span class="showdow-bottom-span">${val.endTime}</span>
                                <div class="zan">
                                    <img src="./img/icon.png" alt="">
                                </div>
                                <span class="zan-span">
                                    3
                                </span>
                                <div class="liuyan">
                                    <img src="./img/reply.png" alt="">
                                </div>
                                <span class="liuyan-span">
                                    3
                                </span>
                            </div>
                        </div>
                    </div>
                </li>`
                    $(".t_sj_ui").append(html);
                });
            }, 'json');
            $(".t_rq_jz_div").css("display", "block");
            $(".t_rq_jz_img").css("display", "none");
        }, 1000)
    });

    $(".t_rq_jz2").click(function () {
        $(".t_rq_jz_div2").css("display", "none");
        $(".t_rq_jz_img2").css("display", "block");
        setTimeout(function () {
            console.log(2)
            $.get("http://192.168.31.254:3000/report/new", function (data) {
                console.log(data);
                arr = data;
                arr.forEach(function (val) {
                    var html = `   <li>
                    <div class="first-one">
                        <img src=${val.img} alt="">
                        <div class="showdow">
                            <div class="showdow-top">${val.text}</div>
                            <div class="showdow-bottom">
                                <div class="jlt1">
                                    <img src="./img/icon.png" alt="">

                                </div>
                                <p class="showdow-bottom-p">${val.uName}</p>
                                <span class="showdow-bottom-span">${val.endTime}</span>
                                <div class="zan">
                                    <img src="./img/icon.png" alt="">
                                </div>
                                <span class="zan-span">
                                    3
                                </span>
                                <div class="liuyan">
                                    <img src="./img/reply.png" alt="">
                                </div>
                                <span class="liuyan-span">
                                    3
                                </span>
                            </div>
                        </div>
                    </div>
                </li>`
                    $(".t_sj_ui2").append(html);
                });
            }, 'json');
            $(".t_rq_jz_div2").css("display", "block");
            $(".t_rq_jz_img2").css("display", "none");
        }, 1000)
    });
})