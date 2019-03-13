$(document).ready(function(){

    // On load, run the headshot loader.
    var ImageId = 1;
    var numberofImages = 4;

    window.setInterval(function () {
        $('.big_banner_image').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(img/' + ImageId + '.png').fadeTo('slow', 1);
        });
        ImageId = (ImageId + 1) % numberofImages;

    }, 4 * 1000);


    // Set up a changing mouseover color for each of the buttons.
    $('li').hover(
        function() {
            $(this).css('background-color', '#2543cc');
            $(this).css('border-top', '1px solid #2543cc');
            $(this).css('border-bottom', '1px solid #2543cc');

        },
        function() {
            $(this).css('background-color', 'orange');
            $(this).css('border-top', '1px solid orange');
            $(this).css('border-bottom', '1px solid orange');

        }
    );

    // Set up listeners for each of the buttons.




    $("#aboutme").on('click', noContentAvailable);
    $("#folio").on('click', noContentAvailable);
    $("#CV").on('click', noContentAvailable);

});

// The plan is to -- most likely -- use the links as if they were buttons,
// and load the content into a JavaScript driven window.
//

function noContentAvailable()
{

    // No Content Available warning message
    var noContentAvail = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
    noContentAvail += 'Link not active at this time.</div>';

    // Create content for No Content Available message
    var elNote = document.createElement('div');
    elNote.setAttribute('id', 'note');
    elNote.innerHTML = noContentAvail;
    document.body.appendChild(elNote);

    // Closes No Content Available
    function dismissNote() {
        document.body.removeChild(elNote);
    }

    var elClose = document.getElementById('close');
    $(elClose).on('click', dismissNote);
}

function aboutme(){}
function folio(){}
function CV_resume(){}