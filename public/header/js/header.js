// 导航栏js


// 顶部-左浮动导航
// 鼠标移入，显示navitem
$('.l_nav').find('.navTitle').mouseenter(function(){
    $(this).find('.navItem').fadeIn(300);
});
// 鼠标移出，隐藏navitem
$('.l_nav').find('.navTitle').mouseleave(function(){
    $(this).find('.navItem').fadeOut(300);
    // 初始化所有产品的    navitem   样式----保证每次移入到产品都是第一行“全部产品”显示
    setTimeout( function(){
        // 给第一个li添加样式，其余li清除样式
        $('.navItem .l_aside').find('li').eq(0).addClass('active')
        .siblings().removeClass('active');
        // 给第一个右侧具体产品项目items，添加显示，其余隐藏
        $('.navItem .r_items').find('.items').eq(0).addClass('itemsActive')
        .siblings().removeClass('itemsActive');
    },300);
});

// 产品----navitem----all
// 左侧侧边栏
// 鼠标移入，显示对应的右侧具体产品项目items
$('.navItem .l_aside').find('li').mouseenter(function(){
    // 当前li添加样式，其余li清除样式
    $(this).addClass('active').siblings().removeClass('active');
    // 保存当前li的索引
    var inx = $(this).index();
    // 找到与当前li对应索引位置的右侧具体产品项目items，添加显示，其余隐藏
    $('.navItem .r_items').find('.items').eq(inx).addClass('itemsActive')
    .siblings().removeClass('itemsActive');
});



// 导航栏搜索框点击事件
$('.l_searchBox').click(function(){
    $('.l_searchBox').animate({
        width:185
    },300);
    $('.l_searchText').css('display','block').animate({
        width:185
    },300);
    $('.l_searchText').focus();
});
// 导航栏搜索框失去焦点事件
$('.l_searchText').blur(function(){
    $('.l_searchBox').animate({
        width:40
    },200);
    $('.l_searchText').animate({
        width:40
    },200);
    $('.l_searchText').val('').css('display','none');
});

