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
setTimeout( () => $('.newOne').text('There is one little joke'), 2000 ); // Set the content in to element
setTimeout( () => alert( $('p').text() ), 3000); // Read content from each element




// alert($('b').click());
// $('.block').addClass('className');
// let list = $('p').children('b');
// $('p').css({margin: '15px', background: 'rgb(255,0, 255)'});
// alert($('p').css('margin'));