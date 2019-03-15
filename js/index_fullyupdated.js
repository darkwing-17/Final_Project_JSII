let contentData = [];

$(document).ready(function(){

    // On load, run the headshot loader.
    let ImageId = 1;
    let numberofImages = 4;

    // Load content data from the JSON file
    loadData();
    
    
    // Render the page
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
    $("#home").on('click', returnToHome);
    $("#aboutme").on('click', aboutme);
    $("#folio").on('click', folio);
    $("#CV_resume").on('click', CV_resume);

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
    $("#big_banner_content")
        .find('div')
        .find('p')
        .find('br').remove();
    
    // Run the headshot loader.
    let ImageId = 1;
    let numberofImages = 4;

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
    $("#home").on('click', returnToHome);
    $("#aboutme").on('click', aboutme);
    $("#folio").on('click', folio);
    $("#CV_resume").on('click', CV_resume);



};

const loadData = () =>
{
    // Open HTTP request to load JSON data file
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        // If data is fully loaded (status 200 / ready state of 4)
        // open HTTP request
        if ((xhr.readyState == 4) && (xhr.status) == 200) {
            setTimeout(() => {
                loadDataJSON(xhr.responseText);
            }, 2000)
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
    $(#home).css('background-color', 'orange');
    $(#home).css('border-top', '1px solid orange');
    $(#home).css('border-bottom', '1px solid orange');

    $(#aboutme).css('background-color', 'orange');
    $(#aboutme).css('border-top', '1px solid orange');
    $(#aboutme).css('border-bottom', '1px solid orange');

    $(#folio).css('background-color', 'orange');
    $(#folio).css('border-top', '1px solid orange');
    $(#folio).css('border-bottom', '1px solid orange');

    $(#CV_resume).css('background-color', 'orange');
    $(#CV_resume).css('border-top', '1px solid orange');
    $(#CV_resume).css('border-bottom', '1px solid orange');

};

const resetContentWindow = () =>
    // This clears the content window
{
    $("#big_banner_content").find('div')
                            .find('p')
                            .find('br').remove();

};

const aboutme = () => {

    // This is for About Me
    // 1. Erase previous content first
    resetButtonFocus();
    resetContentWindow();
    
    // 2. Bring background photo in and keep it there
    $(".big_banner_image").fadeIn("slow", function()
    {
        $(this).css('background-image', 'url(img/background.png)'.fadeTo('slow', 1));
    });
    
    // 3. Change button's color to show it is active
    $("#aboutme").css('background-color', 'yellow')
                 .css('border-top', '1px solid yellow')
                 .css('border-bottom', '1px solid yellow');


    // 4. Format the content
    let aboutMeHeading = contentData.aboutme.blurb;
    let aboutMeHistory = contentData.aboutme.history;
    let aboutMePersonal = contentData.aboutme.personal;

    // 5. Display content
    let aboutMeString = "<div class=\"aboutme_content\">" + aboutMeHeading + "" +
                        "<p>" + aboutMeHistory + "</p>" +
                        "<p>" + aboutMePersonal + "</p>" +
                        "</div>";
    $("#big_banner_content").append(aboutMeString);

};
const folio = () => {

    // This is for Folio
    // 1. Erase previous content first and reset button focus
    resetButtonFocus();
    resetContentWindow();

    // 1. Bring background photo in and keep it there
    $('.big_banner_image').fadeTo('slow', 100, function() 
    {
            $(this).css('background-image', 'url(img/background2.png)'.fadeTo('slow', 1));
    })

    // 2. Bring content panel in and change button's color to show it is active

    // 3. Load content from the JSON file

    // 4. Load thumbnails

    // 5. Load photo picker

};
const CV_resume = () =>
{

    // This is for the resume, or C.V. as it is called in some parts of the world
    // 1. Erase previous content first and reset button focus
    resetButtonFocus();
    resetContentWindow();
    
    // 2. Bring background photo in and keep it there
    $(".big_banner_image").fadeIn("slow", function()
    {
        $(this).css('background-image', 'url(img/background.png)'.fadeTo('slow', 1));
    });

    // 3. Change button's color to show it is active
    $("#CV_resume").css('background-color', 'yellow')
                    .css('border-top', '1px solid yellow')
                     .css('border-bottom', '1px solid yellow');


    // 4. Format the content
    // 5. Display content
    let resumeString = " "; // is blank for now but will be eventually populated and formatted
    $("#big_banner_content").append(resumeString);

};