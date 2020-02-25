// JavaScript II - Ed Chu
// JS code for final project / personal website


let contentData = [],
    homeWindowsetIntervalID;

$(document).ready(function(){

    // On load, run the headshot loader.
    let ImageId = 1;
    let numberofImages = 4;

    // Load content data from the JSON file
    loadData();
    
    
    // Render the page
    homeWindowsetIntervalID =
        window.setInterval(function () {
        $('.big_banner_content').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(img/' + ImageId + '.png').fadeTo('slow', 1);
        });
        ImageId = (ImageId + 1) % numberofImages;

    }, 3 * 1000);


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
    $("#home").on('click', returnToHome);
    $("#aboutme").on('click', aboutme);
    $("#folio").on('click', folio);
    $("#CV_resume").on('click', CV_resume);
    $("#blog").on('click', blog);

});


// This function will open a whole page window telling user that no content is available
const noContentAvailable = () =>
{

    // No Content Available warning message
    let noContentAvail = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
    noContentAvail += 'Link not active at this time.</div>';

    // Create content for No Content Available message
    let elNote = document.createElement('div');
    elNote.setAttribute('id', 'note');
    elNote.innerHTML = noContentAvail;
    document.body.appendChild(elNote);

    // Closes No Content Available
    function dismissNote() {
        document.body.removeChild(elNote);
    }

    let elClose = document.getElementById('close');
    $(elClose).on('click', dismissNote);
};

const returnToHome = () => {
  // Return to home page

    // Erase content first
    resetButtonFocus();
    resetContentWindow();
    clearInterval(homeWindowsetIntervalID);

    // Run the headshot loader.
    let ImageId = 1;
    let numberofImages = 4;

    homeWindowsetIntervalID =
        window.setInterval(function () {
        $('.big_banner_content').fadeTo('slow', 0, function () {
            $(this).css('background-image', 'url(img/' + ImageId + '.png').fadeTo('slow', 1);
        });
        ImageId = (ImageId + 1) % numberofImages;

    }, 4 * 1000);
};

const loadData = () =>
{
    // Open HTTP request to load JSON data file
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        // If data is fully loaded (status 200 / ready state of 4)
        // open HTTP request
        if ((xhr.readyState === 4) && (xhr.status) === 200) {
            setTimeout(() => {
                loadDataJSON(xhr.responseText);
            },  2000)
        }
    };
    let url = "content.json";
    // Open URL
    xhr.open("GET", url, true);
    xhr.send();
};

const loadDataJSON = (responseText) =>
{
    // Output JSON data to an array
    contentData = JSON.parse(responseText);
};


const resetButtonFocus = () =>
    // This will reset the button's focus to the default state, largely when the
    // user goes to another page.

{
    $("#home").css('background-color', 'orange')
            .css('border-top', '1px solid orange')
            .css('border-bottom', '1px solid orange');

    $("#aboutme").css('background-color', 'orange')
               .css('border-top', '1px solid orange')
               .css('border-bottom', '1px solid orange');

    $("#folio").css('background-color', 'orange')
             .css('border-top', '1px solid orange')
             .css('border-bottom', '1px solid orange');

    $("#CV_resume").css('background-color', 'orange')
                 .css('border-top', '1px solid orange')
                 .css('border-bottom', '1px solid orange');

    $("#blog").css('background-color', 'orange')
                 .css('border-top', '1px solid orange')
                 .css('border-bottom', '1px solid orange');

};

const resetContentWindow = () =>
    // This clears the content window
{

    $(".big_banner_content").find('div')
                            .find('a')
                            .find('img')
                            .find('h3')
                            .find('p')
                            .find('br')
                            .remove();
    $(".aboutme_content").html('');
    $(".media_container").html('');
    $(".CV_content").html('');
    $(".blog").html('');
    clearInterval(homeWindowsetIntervalID);

};

const aboutme = () => {

    // This is for About Me
    // 1. Erase previous content first
    resetButtonFocus();
    resetContentWindow();
    clearInterval(homeWindowsetIntervalID);

    // 2. Bring background photo in and keep it there

    $(".big_banner_content").css('background-image', 'url(img/background.png)')
        .animate({
            opacity: 0.95,
            duration: 2000
        })

    // 3. Change button's color to show it is active
    $('#aboutme').css('background-color', 'yellow')
                 .css('border-top', '1px solid yellow')
                 .css('border-bottom', '1px solid yellow');


    // 4. Format the content
    let aboutMeHeading = contentData[0].aboutme.blurb;
    let aboutMeHistory = contentData[0].aboutme.history;
    let aboutMePersonal = contentData[0].aboutme.personal;

    // 5. Display content
    let aboutMeString = "<div class=\"aboutme_content\">" +
                        "<h3>About Me</h3>" +
                        "<p>" + aboutMeHeading + "</p>" +
                        "<h3>History</h3>" +
                        "<p>" + aboutMeHistory + "</p>" +
                        "<h3>Personal</h3>" +
                        "<p>" + aboutMePersonal + "</p>" +
                        "</div>";
    $(".big_banner_content").append(aboutMeString);

    // 5 with JQueryUI - Format the content into an accordion widget
    $(".aboutme_content").accordion({
        collapsible: true,
        heightStyle: "content",
    }).animate({
        opacity: 1
    });



};
const folio = () => {

    // This is for Folio
    // 1. Erase previous content first and reset button focus
    resetButtonFocus();
    resetContentWindow();
    clearInterval(homeWindowsetIntervalID);

    // 1. Bring background photo in and keep it there

        $('.big_banner_content').css('background-image', 'url(img/background2.png)')
            .animate({
            opacity: 0.95,
            duration: 2000
        });



    // 2. Bring content panel in and change button's color to show it is active
    $("#folio").css('background-color', 'yellow')
        .css('border-top', '1px solid yellow')
        .css('border-bottom', '1px solid yellow');



    // 4. Load HTML for photo content panel and thumbnails
    let mediaContent =  "<div class=\"media_container\">"
                        + "<div id=\"photo-viewer\">" + "</div>"
                        + "<div id=\"thumbnails\">"
                        + "<a href=\"img_folio/0-small.jpg\" class=\"thumbnail active\">"
                        + "<img src=\"img_folio/0-thumb.jpg\" alt=\"image-0\" />"
                        + "</a>"
                        + "<a href=\"img_folio/1-small.jpg\" class=\"thumbnail\">"
                        + "<img src=\"img_folio/1-thumb.jpg\" alt=\"image-1\" />"
                        + "</a>"
                        + "<a href=\"img_folio/2-small.jpg\" class=\"thumbnail\">"
                        + "<img src=\"img_folio/2-thumb.jpg\" alt=\"image-2\" />"
                        + "</a>"
                        + "<a href=\"img_folio/3-small.jpg\" class=\"thumbnail\">"
                        + "<img src=\"img_folio/3-thumb.jpg\" alt=\"image-3\" />"
                        + "</a>"
                        + "<a href=\"img_folio/4-small.jpg\" class=\"thumbnail\">"
                        + "<img src=\"img_folio/4-thumb.jpg\" alt=\"image-4\" />"
                        + "</a>"
                        + "<p>" + "photos by Ed D. Chu" + "</p>"
                        + "</div>";
    $('.big_banner_content').append(mediaContent);

    // 5. Load photo picker. The code for the photo viewer is from Jon Duckett's textbook

    let request;                         // Latest image to be requested
    let $current;                        // Image currently being shown
    let cache = {};                      // Cache object
    let $frame = $('#photo-viewer');     // Container for image
    let $thumbs = $('.thumbnail');           // Thumbnails

    const crossfade = ($img) => {           // Function to fade between images
        // Pass in new image as parameter
        if ($current) {                    // If there is currently an image showing
            $current.stop().fadeOut('slow'); // Stop any animation & fade it out
        }

        $img.css({                         // Set the CSS margins for the image
            marginLeft: -$img.width() / 2,   // Negative margin of half image's width
            marginTop: -$img.height() / 2    // Negative margin of half image's height
        });

        $img.stop().fadeTo('slow', 1);     // Stop animation on new image & fade in

        $current = $img;                   // New image becomes current image

    };

    $(document).on('click', '.thumbnail', function(e){ // When a thumb is clicked on
        var $img,                               // Create local variable called $img
            src = this.href;                    // Store path to image
        request = src;                      // Store latest image request

        e.preventDefault();                     // Stop default link behavior

        $thumbs.removeClass('active');          // Remove active from all thumbs
        $(this).addClass('active');             // Add active to clicked thumb

        if (cache.hasOwnProperty(src)) {        // If cache contains this image
            if (cache[src].isLoading === false) { // And if isLoading is false
                crossfade(cache[src].$img);         // Call crossfade() function
            }
        } else {                                // Otherwise it is not in cache
            $img = $('<img/>');                   // Store empty <img/> element in $img
            cache[src] = {                        // Store this image in cache
                $img: $img,                         // Add the path to the image
                isLoading: true                     // Set isLoading property to false
            };

            // Next few lines will run when image has loaded but are prepared first
            $img.on('load', function(){           // When image has loaded
                $img.hide();                        // Hide it
                // Remove is-loading class from frame & append new image to it
                $frame.removeClass('is-loading').append($img);
                cache[src].isLoading = false;       // Update isLoading in cache
                // If still most recently requested image then
                if (request === src) {
                    crossfade($img);                  // Call crossfade() function
                }                                   // Solves asynchronous loading issue
            });

            $frame.addClass('is-loading');        // Add is-loading class to frame

            $img.attr({                           // Set attributes on <img> element
                'src': src,                         // Add src attribute to load image
                'alt': this.title || ''             // Add title if one was given in link
            });

        }

    });

// Final line runs once when rest of script has loaded to show the first image
    $('.thumbnail').eq(0).click();                // Simulate click on first thumb

};






const CV_resume = () =>
{

    // This is for the resume, or C.V. as it is called in some parts of the world
    // 1. Erase previous content first and reset button focus
    resetButtonFocus();
    resetContentWindow();
    clearInterval(homeWindowsetIntervalID);

    // 2. Bring background photo in and keep it there

        $('.big_banner_content').css('background-image', 'url(img/background2.png)')
            .animate({
            opacity: 0.95,
            duration: 2000
        });


    // 3. Change button's color to show it is active
    $("#CV_resume").css('background-color', 'yellow')
                    .css('border-top', '1px solid yellow')
                     .css('border-bottom', '1px solid yellow');


    // 4. Format the content
    let resumeEmail = contentData[1].resume.email;
    let resumeObjective = contentData[1].resume.objective;
    let resumeSummary = contentData[1].resume.resumesummary;
    let resumeLinkedIn = contentData[1].resume.linkedin;
    let resumeWorkTimeline1 = contentData[1].resume.workhistory.work_timeline;
    let resumeWorkAchievements = contentData[1].resume.achievements;


    // 5. Display content
    let resumeString =    "<div class=\"CV_content\">" +

                          "<h3>Contact via email</h3>" +
                          "<p>" + resumeEmail + "</p>" +
                            "<h3>LinkedIn</h3>" +
                            "<p>" + "<a href=\"" + resumeLinkedIn + "\" target=\"_blank\">" + resumeLinkedIn + "</a>" + "</p>" +
                          "<h3>Objective</h3>" +
                          "<p>" + resumeObjective + "</p>" +
                          "<h3>Summary</h3>" +
                          "<p>" + resumeSummary + "</p>" +
                            "<h3>Work history</h3>" +
                            "<p>" + resumeWorkTimeline1 + "</p>" +
                            "<h3>Awards</h3>" +
                            "<p>" + resumeWorkAchievements + "</p>" +
                            "</div>";
    $('.big_banner_content').append(resumeString);
    // 6 with JQueryUI - Format the content into an accordion widget
    $(".CV_content").accordion({
        collapsible: true,
        autoHeight: false,
        heightStyle: "content",
    }).animate({
        opacity: 1
    }
    );
};
const blog = () =>
{

    // Blog page
    // 1. Erase previous content first and reset button focus
    resetButtonFocus();
    resetContentWindow();
    clearInterval(homeWindowsetIntervalID);

    // 2. Bring background photo in and keep it there

        $('.big_banner_content').css('background-image', 'url(img/background2.png)')
            .animate({
            opacity: 0.95,
            duration: 2000
        });


    // 3. Change button's color to show it is active
    $("#blog").css('background-color', 'yellow')
                    .css('border-top', '1px solid yellow')
                     .css('border-bottom', '1px solid yellow');

    // 4. Format the content
    let blogLink = contentData[2].blog.blog_link;
    // 5. Display content
    let blogString = "<div class=\"blog\>" + 
                     "<h3>Link opens in new window</h3>"   +
                     "<p>" + "<a href=\"" + blogLink + "\" target=\"_blank\">" + blogLink + "</a>" + "</p>" +
                     "</div>";
    $('.big_banner_content').append(blogString);
    
    $(".blog").accordion({
        collapsible: true,
        autoHeight: false,
        heightStyle: "content",
    }).animate({
        opacity: 1
    }
    );
};