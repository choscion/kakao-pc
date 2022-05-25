$(function(){
    $(window).scroll(function(){
        crrentScroll = $(this).scrollTop();
        targetScroll = $('.sc_today .title').offset().top;

        if (crrentScroll >= targetScroll) {
            $('.sc_today_top').addClass('fixed');
        }else{
            $('.sc_today_top').removeClass('fixed');
            $('.sc_today_top').removeClass('up')
        }
        if (crrentScroll >= targetScroll+5) {
            $('header').addClass('hide');
            $('.gnb-item .cont').removeClass('on');
            $('.sc_today_top').addClass('up');
        }else{
            $('header').removeClass('hide');
            $('.sc_today_top').removeClass('up');
        }

        if (crrentScroll>0){
            $('header').addClass('bdbottom');
        }else{
            $('header').removeClass('bdbottom');
        }
    })

    searchMo = gsap.timeline({
        defaults:{
            ease:'ease-in'
        }
    })
    searchMo.addLabel('m1')
    .to('.search_wrap',{display:'block',opacity:1},'m1')
    .to('main',{y:300},'m1')
    .fromTo('.search_content',{opacity:0,y:-200},{opacity:1,y:0})
    searchMo.pause();

        
        $('.btn-srh').click(function(e){
            $('body').addClass('noscroll');
            e.preventDefault();
            searchMo.play();
            gsap.set('html,body',{scrollTop:0})
        })
        $('.btn-close').click(function(e){
            e.preventDefault();
            searchMo.reverse();
            $('body').removeClass('noscroll');
        })

    $('.btn-hamburger-mb').click(function(e){
        e.preventDefault();
        $(this).parent().siblings('.nav-ham').addClass('on');
        $('body').addClass('noscroll');
    })
    $('.nav-ham .btn-close').click(function(e){
        e.preventDefault();
        $(this).siblings('.gnb-list').find('.gnb_cont').removeClass('on');
        $(this).parent().parent('.nav-ham').removeClass('on');
        $('body').removeClass('noscroll');
    })
    $('.gnb_title').click(function(e){
        e.preventDefault();
        
        if ($(this).hasClass('on')) {
            $(this).parent().find('.gnb_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).parent().find('.gnb_cont').addClass('on');
            $(this).addClass('on');
        }
    })
    
    $('.cc_wrap .link_title').click(function(e){
        e.preventDefault();
        
        if ($(this).hasClass('on')) {
            $(this).siblings().removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).siblings().addClass('on');
            $(this).addClass('on');
        }
    })



    


    $('.gnb-list .down').click(function(e){
        e.preventDefault();
        if ($(this).hasClass('on')) {
            $(this).siblings('.cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $('.cont').removeClass('on');
            $(this).siblings('.cont').addClass('on');
            $(this).addClass('on');
        }
    })
    $('.serv-item .list_title').click(function(e){
        e.preventDefault();
        
        if ($(this).hasClass('on')) {
            $(this).siblings('.list_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).siblings('.list_cont').addClass('on');
            $(this).addClass('on');
        }
    })





    $('.ft_policy .more').click(function(e){
        e.preventDefault();
        // $('.link_cont').removeClass('on');
        // $(this).sibilings('.link_cont').addClass('on');
        
        
        if ($(this).hasClass('on')) {
            // $('.link_cont').addClass('on');
            $(this).siblings('.link_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $('.link_cont').removeClass('on');
            $(this).siblings('.link_cont').addClass('on');
            $(this).addClass('on');
            $(this).parent().siblings().find('.more').removeClass('on');
        }
    })

    $('.site_link .link_title').click(function(e){
        e.preventDefault();
        // $('.link_cont').removeClass('on');
        // $(this).sibilings('.link_cont').addClass('on');
        
        
        if ($(this).hasClass('on')) {
            $(this).siblings('.link_cont').removeClass('on');
            $(this).removeClass('on');
        } else {
            $(this).siblings('.link_cont').addClass('on');
            $(this).addClass('on');
        }
    })







})