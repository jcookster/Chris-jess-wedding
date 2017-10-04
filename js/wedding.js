(function ($) {
    this.W = this.W || {};
    W.wedding = W.wedding || {};

    //function initMap() {
    //    var uluru = { lat: -25.363, lng: 131.044 };

    //    var mapProp = {
    //        center: new google.maps.LatLng(32.864452, -117.254089), //**Change the co-ordinates as you want**
    //        zoom: 13,
    //        mapTypeId: google.maps.MapTypeId.ROADMAP
    //    };

    //    var map = new google.maps.Map(document.getElementById('map'), mapProp );
       
    //}

    //W.wedding.initMap = initMap;

    function leftSlide(tab) {
        $(tab).addClass('animated slideInLeft');
    }

    function rightSlide(tab) {
        $(tab).addClass('animated slideInRight');
    }

    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
        
        var tab = $(this).attr('href'),
            previousIndex = $(e.relatedTarget).parent().index(),
            currentIndex = $(this).parent().index()

        $(tab).removeClass('animated slideInRight slideInLeft');

        if (previousIndex < currentIndex) {
            rightSlide(tab);
        } else {
            leftSlide(tab);
        }
    });

})(jQuery);
