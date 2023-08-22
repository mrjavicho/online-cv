jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            try {
                var highColor = getComputedStyle(document.documentElement).getPropertyValue('--high-color').trim();
                var mediumColor = getComputedStyle(document.documentElement).getPropertyValue('--medium-color').trim();
                var lowColor = getComputedStyle(document.documentElement).getPropertyValue('--low-color').trim();
            
                console.log('highColor:', highColor);
                console.log('mediumColor:', mediumColor);
                console.log('lowColor:', lowColor);
                console.log(highColor);
                console.log(mediumColor);
                var itemWidthNumber = parseInt(itemWidth.replace('%', ''), 0);
                console.log(itemWidthNumber);
                if (itemWidthNumber > 85) {
                    console.log(this);
                    this.style.backgroundColor =  highColor;
                } else if (itemWidthNumber > 60) {
                    this.style.backgroundColor =  mediumColor;
                } else {
                    this.style.backgroundColor =  lowColor;
                }    
            } catch (error) {
                console.log(error)
            }            
            console.log(this) 

            $(this).animate({
                width: itemWidth
            }, 800);            
        });
    });       
});