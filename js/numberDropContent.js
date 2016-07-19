 $(document).ready(function (){

    $('.article:nth-child(1)').click(function (){
        if($('.article p.first').is(":visible")){
            $('.article p.first').slideToggle("slow");
            $('.large-number.first').css('background-color', '#53B8C4');
            $('.article .extend.first').removeClass('changed');
            
        } else{
            $('.article p.first').slideToggle("slow");
            $('.large-number.first').css('background-color', '#000000');
            $('.article .extend.first').addClass('changed');
            
        }
    });
     
     $('.article:nth-child(2)').click(function (){
        if($('.article p.second').is(":visible")){
            $('.article p.second').slideToggle("slow");
            $('.large-number.second').css('background-color', '#53B8C4');
            $('.article .extend.second').removeClass('changed');
        } else{
            $('.article p.second').slideToggle("slow");
            $('.large-number.second').css('background-color', '#000000');
            $('.article .extend.second').addClass('changed');
        }
    });
     
     $('.article:nth-child(3)').click(function (){
        if($('.article p.third').is(":visible")){
            $('.article p.third').slideToggle("slow");
            $('.large-number.third').css('background-color', '#53B8C4');
            $('.article .extend.third').removeClass('changed');
        } else{
            $('.article p.third').slideToggle("slow");
            $('.large-number.third').css('background-color', '#000000');
            $('.article .extend.third').addClass('changed');
        }
    });
     
     $('.article:nth-child(4)').click(function (){
        if($('.article p.fourth').is(":visible")){
            $('.article p.fourth').slideToggle("slow");
            $('.large-number.fourth').css('background-color', '#53B8C4');
            $('.article .extend.fourth').removeClass('changed');
        } else{
            $('.article p.fourth').slideToggle("slow");
            $('.large-number.fourth').css('background-color', '#000000');
            $('.article .extend.fourth').addClass('changed');
            
        }
    });
});