/*
 * JavaScript to produce the animations of Shibe.in
 */


// add in the bounce animation
(function () {
    var bounceFunction;

    bounceFunction = function (element) {
        element.animate({"margin-top":"-50px", 
                        "margin-bottom":"50px"}, 
                        300, 
                        function () {
            element.animate({"margin-top":"0px", 
                             "margin-bottom":"0px"}, 
                             300, 
                             bounceFunction(element));
        });
    };

    // add in all the shibes
    for (var i=0; i < 15; i += 1) {
        $(document).ready(function () {
            $("#doges").append("<img class=\"doge\" src=\"https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg\" />");
            bounceFunction($(".doge"));
        });
    }
}());


// add in the audio behavior
(function () {
    var barkSoundURL,
        barkSoundAudio,
        dogMusicURL,
        dogMusicAudio;

    barkSoundURL = "http://soundjax.com/reddo/52896^Sound-Effect---Dog-Bark-03.mp3";
    barkSoundAudio = new Audio(barkSoundURL);
    barkSoundAudio.load();

    dogMusicURL = "http://50.7.60.82:777/ost/silent-hill-2-complete/dhljwlfpti/205-dog-ending-music.mp3";
    dogMusicAudio = new Audio(dogMusicURL);
    dogMusicAudio.load();
    dogMusicAudio.loop = true;

    $(document).ready(function () {
        dogMusicAudio.play();
        $("#start").click(function () {
            barkSoundAudio.currentTime=0;
            barkSoundAudio.play();
        });
    });
}());

