$('b').addClass('firstClass'); // Adding one class to tag/class
$('.block').addClass('firstAddedClass', 'secondAddedClass', 'thirdClass'); // Adding many classes to tag/class

$('b').addClass('Class');
$('b').removeClass('Class'); // Removing one class from tag/class
$('.block').addClass('oneClass', 'anotherClass', 'superClass');
$('.block').removeClass('anotherClass', 'superClass') // Removing many classes from tag/class


$('.block').append('<p>Test</p>', '<b> Great Day </b>'); // Inserting content to the end of element(s) 
$('.firstClass').append('<p>Temporary string</p>');

$('.oneClass').append('<b>Cool</b>', '<p>Also <b> very </b> Cool</p>');
$('.firstClass').remove('<p>Temporary string</p>'); // Removing content from element(s)
setTimeout( () => $('.oneClass').remove(), 1000 ); // Removing by selector

$('body').append('<div class=\'newOne\'> New data </div>'); 
setTimeout( () => $('.newOne').text('There is another one string'), 2000 ); // Set the content in to element
setTimeout( () => alert( $('p').text() ), 3000); // Read content from each element

setTimeout( () => alert( $('body').attr('id') ), 4000); //Showing attribute
setTimeout( () => $('img').attr('class', 'image-instance'), 5000); // Setting attribute
setTimeout( () => $('img').attr('class', ''), 6500);
setTimeout( () => $('img').attr({ class: 'image-instance', alt: 'Tribore'}), 7000 ) //Setting attributes from class

setTimeout( () => alert( $('.image-container').children() ), 1500); // Return children nodes

setTimeout( () => $('.first').empty(), 8000); // Remove all chiled nodes 


$('.image-container').css('border: solid rgb(255, 0, 255) 5px; background: #fff;'); //Set CSS-Style
setTimeout( () => $('.main-style').children().css('background: yellow; color: #000;'));

$('.main-style').click((event) => alert(event.target.nodeName)); //Set eventHadler after click
$('.string--improved').click(function() {
    $('.string--improved').addClass('afterClickClass');
});

