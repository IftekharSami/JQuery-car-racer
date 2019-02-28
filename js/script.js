// click the go button

$('#go').click(function () {


    // Build a finction check to see if a car has won 
	    function cheakifcomplete() {

        if (incomplete == false) {
            incomplete = true;
        } else {
            place = 'second';
        }

    }
	

    // Get the width of the car
    var carwidth = $('#car1').width();

    // get the width od the racetrack
    var racetrack = $(window).width() - carwidth;

    // genaret random number
    var racetime1 = Math.floor((Math.random() * 5000) + 1);
    var racetime2 = Math.floor((Math.random() * 5000) + 1);

    //set a flag variable to False defult
    var incomplete = false;

    //set a flag variable to Frist defult
    var place = 'first';

    // animate car
    $('#car1').animate({

        //Move the car width
        left: racetrack
    }, racetime1, function () {
        //animation complete

        //run a finction
        cheakifcomplete();

        // give some text feedback in the race infobox
        $('#raceinfo1 span').text('Finished in ' + place + ' place and clocked in at ' + racetime1 + ' miliseconds!')
    })


    // animate car 2
    $('#car2').animate({

        //Move the car width
        left: racetrack
    }, racetime2, function () {
        //animation complete

        //run a finction
        cheakifcomplete();

        // give some text feedback in the race infobox
        $('#raceinfo2 span').text('Finished in ' + place + ' place and clocked in at ' + racetime2 + ' miliseconds!')
    })

});

//reset teh race
$('#reset').click(function() {
    $('.car').css('left','0');
    $('.raceinfo span').text('')
});



