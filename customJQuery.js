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
    _innerObject.append = function(...className) {
        element.forEach(obj => {
            className.forEach(classToAppend => obj.classList.append(classToAppend));
        })
    };
    _innerObject.remove = function() {
        element.forEach(obj => {
            obj.remove();
        })
    };
    _innerObject.text = function(str) {
        if (str === undefined){
            let res = '';
            element.forEach(obj => {
               res += obj.textContent + '\n';
            })
            return res;
        }
        element.forEach(obj => {
            obj.textContent = str;
        })
        
    };
    return _innerObject;
};

$('.block').addClass('className');
$('.block').removeClass('className');
