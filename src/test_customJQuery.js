$('b').addClass('firstClass'); // Adding one class to tag/class
$('.block').addClass('firstAddedClass', 'secondAddedClass', 'thirdClass'); // Adding many classes to tag/class

$('b').addClass('Class');
$('b').removeClass('Class'); // Removing one class from tag/class
$('.block').addClass('oneClass', 'anotherClass', 'superClass');
$('.block').removeClass('anotherClass', 'superClass') // Removing many classes from tag/class

const p = document.createElement('p');
p.innerHTML = 'Test';
const b = document.createElement('b');
b.innerHTML = 'Great Day';
$('.block').append(p, b); // Inserting content to the end of element(s) 
p.innerHTML = 'Temporary string';
$('.firstClass').append(p);
b.innerHTML = 'Cool';
p.innerHTML = 'Also <b> very </b> Cool';

setTimeout($('.oneClass').append(b, p), 2000);
setTimeout($('.firstClass').remove('<p>Temporary string</p>'), 4000); // Removing content from element(s)
setTimeout(() => $('.oneClass').remove(), 1000); // Removing by selector

const div = document.createElement('div');
div.className = "new";
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
$('body').append(div); 
setTimeout(() => $('.newOne').text('There is another one string'), 2000); // Set the content in to element
setTimeout(() => alert( $('p').text() ), 3000); // Read content from each element

setTimeout(() => alert( $('body').attr('id') ), 4000); //Showing attribute
setTimeout(() => $('img').attr('class', 'image-instance'), 5000); // Setting attribute
setTimeout(() => $('img').attr('class', ''), 6500);
setTimeout(() => $('img').attr({ class: 'image-instance', alt: 'Tribore'}), 7000 ) //Setting attributes from class

setTimeout(() => alert( $('.image-container').children() ), 1500); // Return children nodes

setTimeout(() => $('.first').empty(), 8000); // Remove all chiled nodes 


$('.image-container').css('border: solid rgb(255, 0, 255) 5px; background: #fff;'); //Set CSS-Style
setTimeout(() => $('.first').text('Yellow'), 8500);
setTimeout(() => $('.main-style').children().css('background: yellow; color: #000'), 9000);

$('.main-style').click(event => alert(event.target.nodeName)); //Set eventHadler after click
$('.string--improved').click(function() {
    $('.string--improved').addClass('afterClickClass');
});

