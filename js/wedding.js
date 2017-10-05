(function ($) {
    this.W = this.W || {};
    W.wedding = W.wedding || {};

    function initMap() {

        var scrippsContent = '<div id="content">' +
                '<div id="siteNotice"></div>' +
                '<h1 id="firstHeading" class="firstHeading">Scripps Seaside Forum</h1>' +
                '<div id="bodyContent"><a href="https://goo.gl/maps/bS2aiYg2Cry" style="color:black" target="_blank"><strong>8610 Kennel Way, La Jolla, CA 92037</strong></a>' +
                '<p>Chris and Jessica have chosen the the Scripps Seaside Forum because it offers a tasteful blend of function and style that celebrates Southern California\'s unrivaled coastal environment. It truly is a reflection of their unique styles. </p>' +
                '<p>The multifunctional and beautiful Scripps Seaside Forum oceanfront venue won an "orchid" for its architecture from the San Diego Architectural Foundation at the 2009 Orchids & Onions Awards Ceremony as well as a Merit Award from the American Institute of Architects-San Diego at their 50th anniversary design awards in June 2010.</p></div>' +
                '</div>',
            scrippsInfo = new google.maps.InfoWindow({ content: scrippsContent }),
            marriottContent = '<div id="content"> <h1>San Diego Marriott La Jolla</h1>' +
                '<div id="bodyContent"><a href="http://www.marriott.com/hotels/travel/sanlj-san-diego-marriott-la-jolla/" style="color:black" target="_blank"><strong>4240 La Jolla Village Drive  La Jolla  California  92037</strong></a>' +
                '<p>Effortless elegance awaits at San Diego Marriott La Jolla. With our hotel\'s prime location, you\'ll be able to make new memories at an array of popular La Jolla attractions, including the famous Sunny Jim Sea Cave, Westfield UTC Mall and La Jolla Beach. Following an adventurous day, make yourself at home in our spacious rooms and suites, complete with luxurious bedding, 24-hour room service and an exclusive concierge lounge. Many of our rooms also boast balconies displaying the beauty of La Jolla. After a relaxing evening, wake up to an energizing breakfast and coffee at Fresh, then return for lunch or dinner at Amuse, our lively restaurant featuring authentic California cuisine. Once you\'ve filled up, burn some of those calories at our fitness center and outdoor pool. When it comes to your business needs, we have you covered. Host your meeting or conference in one of our 25 versatile venues. At San Diego Marriott La Jolla, the only hard part is leaving.</p></div>',
            marriottInfo = new google.maps.InfoWindow({ content: marriottContent }),
            hyattContent = '<div id="content"> <h1>Hyatt Regency La Jolla at Aventine</h1>' +
                '<div id="bodyContent"><a href="https://lajolla.regency.hyatt.com/en/hotel/home.html" style="color:black" target="_blank"><strong>3777 La Jolla Village Drive San Diego, California, USA, 92122</strong></a>' +
                '<p>Find yourself at Hyatt Regency La Jolla at Aventine, blending the charm of a European village with the panache of Southern California. Located in the city known as "The Jewel of the Pacific," our hotel offers an ideal location near boutique shopping, fine dining and a short drive from the beach.</p></div>',
            hyattInfo = new google.maps.InfoWindow({ content: hyattContent }),
            shoresContent = '<div id="content"> <h1>La Jolla Shores Hotel</h1>' +
                '<div id="bodyContent"><a href="http://www.ljshoreshotel.com/" style="color:black" target="_blank"><strong>8110 Camino Del Oro La Jolla, CA 92037</strong></a>' +
                '<p>For decades, the La Jolla Shores Hotel has been the year-round beach retreat of choice for families and vacationers of all types. Nestled right on the ocean in the popular La Jolla Shores, CA community, the hotel\'s friendly, warm and welcoming staff is a highlight of the experience. Here, a room isn\'t just a room. It\'s an extension of the pristine Pacific Ocean just outside your door. From the panoramic views, to the airy breezeways and balconies, to the relaxed beach vibe, each room is infused with the laid-back spirit of California.</p></div>',
            shoresInfo = new google.maps.InfoWindow({ content: shoresContent }),
            estanciaContent = '<div id="content"> <h1>Estancia La Jolla Hotel & Spa</h1>' +
                '<div id="bodyContent"><a href="http://meritagecollection.com/estancialajolla/" style="color:black" target="_blank"><strong>9700 N Torrey Pines Rd La Jolla, CA 92037 </strong></a>' +
                '<p>Find true California comfort in Estancia’s thoughtfully designed guestrooms and La Jolla hotel suites. Accented by verdant gardens and rancho-style architecture, accommodations feature casually elegant furnishings and plenty of natural light, compliments of broad windows and San Diego’s perpetual sunshine.  Each room comes equipped with plush signature bathrobes, Fresh amenities, a Keurig, mini fridge, spacious work desk, 37” HD flat-screen television, and ultra-fast wireless internet, blending premium, modern amenities and a historic hacienda-style setting for an unforgettable stay.</p></div>',
            estanciaInfo = new google.maps.InfoWindow({ content: estanciaContent }),
            sheratonContent = '<div id="content"> <h1>Sheraton La Jolla Hotel</h1>' +
                '<div id="bodyContent"><a href="http://www.sheratonlajolla.com/" style="color:black" target="_blank"><strong>3299 Holiday Court, La Jolla, CA, 92037</strong></a>' +
                '<p>Enjoy the nearby beaches, Torrey Pines Golf Course, and the romantic La Jolla Cove. Our low-rise resort-style hotel provides the perfect backdrop for a family vacation or romantic weekend getaway. Just a short walk away are theaters, restaurants, and shopping centers. The Sheraton La Jolla Hotel is also located in La Jolla\'s business triangle and just a few miles from the world famous San Diego Zoo and popular Gaslamp Quarter.</p></div>',
            sheratonInfo = new google.maps.InfoWindow({content: sheratonContent});

        var dialogs = [scrippsInfo, marriottInfo, hyattInfo, shoresInfo, estanciaInfo, sheratonInfo];

        function closeDialogs() { dialogs.forEach(function(dialog) { dialog.close(); })}

        var scrippsCoords = { lat: 32.864452, lng: -117.254089 },
            marriottCoords = { lat: 32.873115, lng: -117.215567 },
            hyattCoords = { lat: 32.870949,  lng: -117.225539 },
            shoresCoords = { lat: 32.852545,  lng: -117.260938 },
            estanciaCoords = { lat: 32.884461,  lng: -117.245134 },
            sheratonCoords = { lat: 32.870723, lng: -117.231284 };
        
        var mapProp = {
            center: new google.maps.LatLng(32.864452, -117.254089), 
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById('map'), mapProp);

        var markers = [];

        var hotelIcon = "http://maps.google.com/mapfiles/kml/pal2/icon20.png";

        var scrippsMarker = new google.maps.Marker({ position: scrippsCoords, map: map, icon: "http://maps.google.com/mapfiles/kml/pal2/icon11.png" });
        scrippsMarker.addListener('click', function () { closeDialogs(); scrippsInfo.open(map, this); });
        markers.push(scrippsMarker);

        var marriottMarker = new google.maps.Marker({ position: marriottCoords, map: map, icon: hotelIcon });
        marriottMarker.addListener('click', function () { closeDialogs(); marriottInfo.open(map, this); });
        markers.push(marriottMarker);

        var hyattMarker = new google.maps.Marker({ position: hyattCoords, map: map, icon: hotelIcon });
        hyattMarker.addListener('click', function () { closeDialogs(); hyattInfo.open(map, this); });
        markers.push(hyattMarker);

        var shoresMarker = new google.maps.Marker({ position: shoresCoords, map: map, icon: hotelIcon });
        shoresMarker.addListener('click', function () { closeDialogs(); shoresInfo.open(map, this); });
        markers.push(shoresMarker);

        var estanciaMarker = new google.maps.Marker({ position: estanciaCoords, map: map, icon: hotelIcon });
        estanciaMarker.addListener('click', function () { closeDialogs(); estanciaInfo.open(map, this); });
        markers.push(estanciaMarker);

        var sheratonMarker = new google.maps.Marker({ position: sheratonCoords, map: map, icon: hotelIcon });
        sheratonMarker.addListener('click', function () { closeDialogs(); sheratonInfo.open(map, this); });
        markers.push(sheratonMarker);

        map.addListener('click', closeDialogs);
    }

    W.wedding.initMap = initMap;

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
