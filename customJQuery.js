function $(elem) {
    let _innerObject = {};
    let element = document.querySelectorAll(elem);

    _innerObject.addClass = function(className) {
        element.forEach(obj => {
            obj.classList.add(className);
        })
    };
    _innerObject.removeClass = function(className) {
        element.forEach(obj => {
            obj.classList.remove(className);
        })
    };

    return _innerObject;
};

$('.block').addClass('className');
$('.block').removeClass('className');
