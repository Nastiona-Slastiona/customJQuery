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
    _innerObject.attr = function(attributeName, value){
        if(value === undefined){
            if(Object.prototype.toString.call(attributeName) == '[object Object]'){
                for (let key in attributeName){
                    alert(key);
                    element.forEach(obj => {
                        obj.setAttribute(key, attributeName[key]);
                    })
                }
            } else if(element[0].hasAttribute(attributeName)){
                return element[0].getAttribute(attributeName);
            } 
        } else {
            element.forEach(
                obj => {
                    if(Object.prototype.toString.call(value) == '[object Function]'){
                        value = value();
                    } 
                    obj.setAttribute(attributeName, value);
                }
            );
        }
    }
    return _innerObject;
};

$('.block').addClass('className');
$('.block').removeClass('className');
