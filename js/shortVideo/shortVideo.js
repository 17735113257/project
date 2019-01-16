$(function () {

    

    //获取banner标题元素距离上面的滚动条的距离
    var shortvideoNavBarTop =  $('.shortvideo-nav-bar').offset().top;


    // shortvideo-nav-bar悬浮样式切换
    $('.shortvideo-nav-bar ul li').mouseenter(function () {
        //dataClickOn


        //以下用的是属性选择器
        // var dataClickOn  =  $('.shortvideo-nav-bar ul').find('li[dataclick="on"]')  ;
        $(this).find('a').addClass('active').parent().siblings().not('li[dataclick="on"]')
        .find('a').removeClass('active');

    });
    
    // bnner的点击跳到对应的内容区域
    var windowscrollFlag = true;
    $('.shortvideo-nav-bar').find('li').click(function () {
        windowscrollFlag = false;
        if (!windowscrollFlag) {
            //点击的时候移除滚动条的滑动监听
            $(window).off("scroll",windowscroll);
            $(window).on("scroll",windowscrollClick);
            
        }

        $('.shortvideo-nav-bar').find('li').attr({
            dataclick:'off'
        });
        $(this).attr({
            dataclick:'on'
        })



        $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');

        var index = $(this).index();
        var offsetTop =  $('.modulars').eq(index).offset().top;
        $('html,body').stop()
        .animate({
            scrollTop:offsetTop-40
        },500,function(){
            windowscrollFlag = true;
            $(window).off("scroll",windowscrollClick);
            $(window).on("scroll",windowscroll);
        });

    })









    // 场景架构悬停样式切换
    $('.content_left_tab li').mouseenter(function () {
        $(this).find('a').addClass('activeHover').parent().siblings().find('a').removeClass('activeHover');
    });

   


    // 方案优势item悬浮
    $('.project ul li').mouseenter(function () {
        $(this).find('.bg').css({
            background: '#108cee',
            opacity: 0.5
        });
        $(this).find('.start').stop().animate({
            top: -60.
        }, 300);
        $(this).find('.start').find('.line').css({
            display: 'none',
        })

        $(this).find('.start').find('a').css({
            display: 'inline-block',
        });
        $(this).find('.start').find('.desc').css({
            display: 'inline-block',
        });
        var endSrc = $(this).find('img').attr('endSrc');
        var src = $(this).find('img').attr('src');
        $(this).find('img').attr({
            src: endSrc,
            endSrc: src
        });
    });

    $('.project ul li').mouseleave(function () {
        $(this).find('.bg').css({
            background: '#000',
            opacity: 0.5
        });
        $(this).find('.start').stop().animate({
            top: -0.
        }, 300);

        $(this).find('.start').find('.line').css({
            display: 'block',
        })
        $(this).find('.start').find('a').css({
            display: 'none',
        });
        $(this).find('.start').find('.desc').css({
            display: 'none',
        });

        var endSrc = $(this).find('img').attr('endSrc');
        var src = $(this).find('img').attr('src');
        $(this).find('img').attr({
            src: endSrc,
            endSrc: src
        });
    });


    // 典型应用
    $('.apply').find('.apply_right').find('li').mouseenter(function () {
        var srcHover = $(this).find('.point').attr('src');
        var src = '../../images/shortVideo/apply_right_point.png';
        $(this).find('.point').css({
            background: 'url(' + srcHover + ')',
        }).parent().siblings().find('.point').css({
            background: 'url(' + src + ')',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
        });

        //进入的时候对应的content显示
        $(this).find('.container').find('.content').stop().animate({
                height: 90,
                borderWidth: 1,
                paddingBottom: 18,
            }, 500)
            .parent().parent().siblings().find('.container')
            .find('.content').stop().animate({
                height: 0,
                paddingBottom: 0,
                borderWidth: 0,
            }, 500)


        $(this).find('.container').find('.title').find('span')
            .css({
                borderLeft: '1px solid #ccc',
                borderTop: '1px solid #ccc'
            }).parent().parent().parent().siblings()
            .find('.container').find('.title').find('span')
            .css({
                borderLeft: '1px solid #fff',
                borderTop: '1px solid #fff'
            })



        // 左侧图片动画
        var index = $(this).index();

        $('.apply_left_inside').find('ul').find('li').eq(index).css({
                zIndex: 100
            })
            .stop().animate({
                top: 0,
            }, 500, function () {
                $(this).siblings().stop().animate({
                    top: 510,
                }, 0)
            }).siblings().css({
                zIndex: 10
            });

    });


    //默认进来以后的行为：
    //设立一个定时器

    var apply_left_inside_li = 4;
    var apply_left_inside_li_timer;


    apply_left_inside_li_timer = setInterval(function () {

        apply_left_inside_li--;
        //如果为0 则后3个一起移动
        if (apply_left_inside_li == 0) {
            $('.apply_left_inside').find('ul').find('li:nth-child(1)').find('img').eq(1)
                .stop().animate({
                    left: 45,
                }, 1000);
            $('.apply_left_inside').find('ul').find('li:nth-child(1)').find('img').eq(2)
                .stop().animate({
                    left: 90,
                }, 1000);
            $('.apply_left_inside').find('ul').find('li:nth-child(1)').find('img').eq(3)
                .stop().animate({
                    left: 135,
                }, 1000);

            apply_left_inside_li = 4;

            // clearInterval(apply_left_inside_li_timer);
        } else {

            var offsetLeft = $('.apply_left_inside')
                .find('ul').find('li:nth-child(1)').find('img').eq(apply_left_inside_li)[0].offsetLeft;
            $('.apply_left_inside').find('ul').find('li:nth-child(1)').find('img').eq(apply_left_inside_li)
                .stop().animate({
                    left: offsetLeft + 100,
                }, 1000);
        }

    }, 1000);



    // 相关产品
    // 下面鼠标悬停
  


    $('.relatedProduct').find('.container').find('.content_item').find('.item').mouseenter(function(){
        $(this).stop().animate({
            marginTop:-15,
        },1000).find('.header').css({borderWidth:1,});
    });

    
    $('.relatedProduct').find('.container').find('.content_item').find('.item').mouseleave(function(){
        $(this).stop().animate({
            marginTop:0,
        }).find('.header').css({borderWidth:1,});
    });

    







    //标题鼠标悬停
    $('.relatedProduct').find('.container').find('.title').find('li').mouseenter(function(){
        $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
        var index = $(this).index();
        // 对应内容的显示
        $('.relatedProduct').find('.container')
        .find('.content').find('.content_item').eq(index)
        .removeClass('hide')
        .siblings().addClass('hide');


        
        //相关产品判断里面的左右箭头是否显示
        var length = $('.relatedProduct')
        .find('.container').find('.content_item').eq(index).find('.item').length;

        if (length >2) {
            $('.relatedProduct .left-arrow ').show();
            $('.relatedProduct .right-arrow ').show();
        }else {
            $('.relatedProduct .left-arrow ').hide();
            $('.relatedProduct .right-arrow ').hide();
        }
    });

    //标题鼠标点击
    $('.relatedProduct').find('.container').find('.title').find('li').click(function(){
        $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
        // 对应内容的显示
        var index = $(this).index();
        $('.relatedProduct').find('.container')
        .find('.content').find('.content_item').eq(index)
        .removeClass('hide')
        .siblings().addClass('hide');

        //相关产品判断里面的左右箭头是否显示
        var length = $('.relatedProduct')
        .find('.container').find('.content_item').eq(index).find('.item').length;

        if (length >2) {
            $('.relatedProduct .left-arrow ').show();
            $('.relatedProduct .right-arrow ').show();
        }else {
            $('.relatedProduct .left-arrow ').hide();
            $('.relatedProduct .right-arrow ').hide();
        }

    });




    //点击左右箭头执行事件


    var content_item_item_count =  $('.relatedProduct').find('.container').find('.content_item')
    .eq(1)
    .find('.item').length;

    var indexClick = 0;
    $('.relatedProduct .right-arrow').click(function(){
        if (indexClick <= content_item_item_count -2 ) {
            indexClick ++;
            $('.relatedProduct').find('.container').find('.content_item').eq(1)
            .stop().animate({
                left:-600 * (indexClick),
            },1000);
        }else {

        }
    });


    $('.relatedProduct .left-arrow').click(function(){
        indexClick --
        if (indexClick >= 0 ) {
            //获取第二个
            $('.relatedProduct').find('.container').find('.content_item').eq(1)
            .stop().animate({
                left:-600 * indexClick,
            },1000);
        }
        

    });

   



    // 优质渠道分发
    //鼠标悬停在li上向上移动 添加阴影
    $('.channel li').mouseenter(function(){
        $(this).css({
            boxShadow:'0px 0px 10px #888888',   
        }).stop().animate({
            marginTop:-5,
        },500);
    });
    //鼠标移出
    $('.channel li').mouseleave(function(){
        $(this).css({
            boxShadow:'',
        }).stop().animate({
            marginTop:0,
        },500);
    });
      

    //文档/支持
   
    //点击右面的箭头
    $('.document').find('.right-arrow').find('i').click(function(){
        var offsetContentWidth = $(this).parent().parent()[0].offsetWidth;
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().parent().find('.left-arrow').find('i').addClass('active');
            $(this).parent().parent().find('.content')
            .stop().animate({
                left:-offsetContentWidth,
            },1000);
        }
    });

    //点击左面的箭头
    $('.document').find('.left-arrow').find('i').click(function(){
        var offsetContentWidth = $(this).parent().parent()[0].offsetWidth;
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).parent().parent().find('.right-arrow').find('i').addClass('active');
            $(this).parent().parent().find('.content')
            .stop().animate({
                left:0,
            },1000)
        }
    });








    function windowscroll() {
        var scrollTop = $('html,body').scrollTop();
        // window滚动监听是否固定导航
        //监听回到顶部的菜单是否显示

        if (scrollTop >= shortvideoNavBarTop) {
            $('.shortvideo-nav-bar').addClass('fixed');
            $('.backTop').fadeIn(200);
        }else{
            $('.shortvideo-nav-bar').removeClass('fixed');
            $('.backTop').fadeOut(200);
        }


        //滚到某一个位置让对应的导航栏显示
        for ( var i = 0 ; i <  $('.modulars').length-1; i++) {
            if (scrollTop >= $('.modulars').eq(i).offset().top- $('.shortvideo-nav-bar').height()) {
                console.log($('.modulars').eq(i).offset().top);
                $('.shortvideo-nav-bar').find('li').eq(i).find('a').addClass('active')
                .parent().siblings().find('a').removeClass('active');
            }
        }  
    }

    function windowscrollClick() {
        var scrollTop = $('html,body').scrollTop();
        // window滚动监听是否固定导航
        //监听回到顶部的菜单是否显示

        if (scrollTop >= shortvideoNavBarTop) {
            $('.shortvideo-nav-bar').addClass('fixed');
            $('.backTop').fadeIn(200);
        }else{
            $('.shortvideo-nav-bar').removeClass('fixed');
            $('.backTop').fadeOut(200);
        }

    }

    $(window).on('scroll',windowscroll);





    //右侧固定按钮 
    $('.fix-right').find('li').mouseenter(function(){
        $(this).find('i').hide()
        .next('.desc').show()
        .parent().siblings().find('.desc').hide()
        .prev('i').show();
    });

    //点击回到顶部
    $('.backTop').click(function(){
        $('html,body').stop()
        .animate({
            scrollTop:0
        },500);
    });





    
    
});