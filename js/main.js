$(function(){

    // 헤더와 메인 고정
    
    $('.box_wrap').masonry({
        itemSelector: '.sub_box',
        // columnWidth: 297, //너비크기
        gutter:36 //각 레이아웃간의 간격
      });
    //   $('.box_wrap').masonry('reload');


    $('.btn-dark').click(function(e){
        e.preventDefault();
        $('body').toggleClass('dark');
    })


    //탑 버튼

    $('.top_btn').click(function(){
        $('html, body').animate({scrollTop:0},1);
        return false;
    });
    
})