 $(document).ready(function (){

    $('.small-button-article div.first').click(function (){
        if($('.small-button-article p.first').is(":visible")){
            $('.small-button-article p.first').hide(500);
            $('#small-buttons .first').removeClass('changed');
            
        } else{
            $('.small-button-article p.first').show(500);
            $('#small-buttons .first').addClass('changed');
            
        }
    });
     
     $('.small-button-article div.second').click(function (){
        if($('.small-button-article p.second').is(":visible")){
            $('.small-button-article p.second').hide(500);
            $('.small-button-article .extend.second').removeClass('changed');
        } else{
            $('.small-button-article p.second').show(500);
            $('.small-button-article .extend.second').addClass('changed');
        }
    });
     
     $('.small-button-article div.third').click(function (){
        if($('.small-button-article p.third').is(":visible")){
            $('.small-button-article p.third').hide(500);
            $('.small-button-article .extend.third').removeClass('changed');
        } else{
            $('.small-button-article p.third').show(500);
            $('.small-button-article .extend.third').addClass('changed');
        }
    });
     
     $('.small-button-article div.fourth').click(function (){
        if($('.small-button-article p.fourth').is(":visible")){
            $('.small-button-article p.fourth').hide(500);
            $('.small-button-article .extend.fourth').removeClass('changed');
        } else{
            $('.small-button-article p.fourth').show(500);
            $('.small-button-article .extend.fourth').addClass('changed');
            
        }
    });
});