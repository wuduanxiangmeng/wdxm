// hedad引入js
$(function(){
    var bannerSrc=["image/banner0.png","image/banner1.png","image/banner2.png","image/banner3.png"];
    var bannerIndex=0;
    var serverItem = [{ itemSrc: "image/icon1.png", itemTitle: "我是卖家", itemText: "shopcmd云电商解决方案，我们不仅仅是领先的独立商城建站系统。我们从互联网时代品牌建设和品牌营销的全新视角，赋予了品牌商城及独立电商更大的生存空间和存在价值。", itemBtn: "我要建站" },
                      { itemSrc: "image/icon2.png", itemTitle: "我是营销", itemText: "云道不断完善的营销系统，联合优质媒体资源，集成常用的网络营销模式及终端，以最简单的产品形态，帮助独立商城实现店铺及商品信息在全网的快速分销。", itemBtn: "我要推广" },
                      { itemSrc: "image/icon3.png", itemTitle: "媒体合作", itemText: "真正的全民营销时代，无需学习，无需维护。通过您的网站，朋友圈，媒体流量，移动展现，媒体解决方案获取收益。我们致力于实现合作媒体流量价值的最大化。", itemBtn: "我要合作" }];
    var vedioSrc=["https://vd2.bdstatic.com/mda-mgd9uv7vvfdq93jc/sc/cae_h264_clips/1626247044333311421/mda-mgd9uv7vvfdq93jc.mp4?auth_key=1631196637-0-0-dc1a9300fad7156a98626bec95365e68&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000187_1",
                "https://vd3.bdstatic.com/mda-mgj8r75eu4w90x2n/1080p/cae_h264/1626763991467218844/mda-mgj8r75eu4w90x2n.mp4?v_from_s=hkapp-haokan-hna&auth_key=1631196833-0-0-b023a2964ca9b2b70ceabb21391c8cb8&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000187_1",
                "https://vd4.bdstatic.com/mda-mgb9zu9d52qbip6r/sc/cae_h264_clips/1626078282835256682/mda-mgb9zu9d52qbip6r.mp4?auth_key=1631196949-0-0-baaab13e9f6391b59a040839799feb89&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=3000187_1"];
    var vedioPlay=false;
    //动态渲染轮播图
    for (let i = 0; i < bannerSrc.length; i++) {
        // 模板字符串
        // $(".banner-imgs").append("<img src="+bannerSrc[i]+">");
        $(".banner-imgs").append(`<img src="${bannerSrc[i]}">`);
        $(".banner-btn").append(`<span>${i}</span>`);
        //设置默认第一张图片
        if (i==0) {
            $(".banner-imgs img").addClass("select");
            $(".banner-btn span").addClass("select");
        }
    }
    //轮播图切换
    $(".banner-btn span").click(function(){
        //每次点击同步显示图片所在位置
        bannerIndex=$(this).index();
        bannerMove();
    })
    //自动轮播
    var bannerTime=setInterval(function(){
        bannerIndex++;
        //设置图片位置,到极限后返回第一个
        if(bannerIndex>bannerSrc.length-1){
            bannerIndex=0;
        }        
       bannerMove();
    }, 4000);
    function bannerMove(){
        // 先删除所有class,然后选择添加class
        $(`.banner-imgs img`).removeClass();
        $(`.banner-imgs img:eq(${bannerIndex})`).addClass("select");
        $(`.banner-btn span`).removeClass();
        $(`.banner-btn span:eq(${bannerIndex})`).addClass("select");
    }
    //放上去清除定时器，移开，添加定时器
    $(".header-banner").hover(function(){
        clearInterval(bannerTime);
    },function(){
         bannerTime=setInterval(function(){
            bannerIndex++;
            //设置图片位置,到极限后返回第一个
            if(bannerIndex>bannerSrc.length-1){
                bannerIndex=0;
            }        
           bannerMove();
        }, 4000);
    })
//左右按钮切换
    $(".banner-btn1 img").click(function(){
        if($(this).index()==0){
            //三元运算符 条件？成立：不成立
           // bannerIndex<0?bannerIndex=0:bannerIndex--;
           // bannerIndex<=0?bannerIndex=bannerSrc.length-1:bannerIndex--;
           // bannerIndex--;
           bannerIndex<=0 ? bannerIndex=bannerSrc.length-1:bannerIndex--;
           console.log("left");
        }else{
            bannerIndex>=bannerSrc.length-1?bannerIndex=0:bannerIndex++;
            console.log("right");
        }
        bannerMove();
    })

    //渲染服务板块
    for (i = 0; i< serverItem.length; i++) {
        $(".server-item ul").append(`
        <li>
        <img src="${serverItem[i].itemSrc}" alt="">
        <h4>${serverItem[i].itemTitle}</h4>
        <p>${serverItem[i].itemText}</p>
        <button>${serverItem[i].itemBtn}</button>
        </li>    
        `);   
    }
   //渲染视频
   for (let i= 0; i < vedioSrc.length; i++) {
       $(".record-videos ul").append(`
       <li>
       <img src="image/suspend.png" alt="">
       <video src="${vedioSrc[i]}"></video>
       </li>
       `);
   }
   //点击视频
//    $(".record-videos ul li img").click(function(){

//        if(vedioPlay){
//         $(this).attr("src","image/suspend.png")
//         $(this).next().trigger("pause");
//        }else{
//         $(this).attr("src","image/play.png")
//         $(this).next().trigger("play");
//        }
//        vedioPlay=!vedioPlay;
//    });

   $(".record-videos ul li").click(function(){

    if(vedioPlay){
     $(this).children("img").attr("src","image/suspend.png")
     $(this).children("video").trigger("pause");
     $(this).children("img").fadeIn();
    }else{
     $(this).children("img").attr("src","image/play.png")
     $(this).children("video").trigger("play");
     $(this).children("img").fadeOut();
    }
    vedioPlay=!vedioPlay;
    // $(this).children("img");
    // $(this).children("video");
});

})