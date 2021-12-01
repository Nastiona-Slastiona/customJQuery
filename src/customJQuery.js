function $(elem) {
    const innerObject = {};
    innerObject.element = document.querySelectorAll(elem);
    innerObject.array = [];

    innerObject.toString = function() {
        return innerObject.array.toString();
    }

    innerObject.addClass = function(...classNames) {
        
        innerObject.element.forEach(obj => {

            classNames.forEach( className => {
                obj.classList.add(className);
            });

        })
    };

    innerObject.removeClass = function(...classNames) {
        
        innerObject.element.forEach(obj => {
            classNames.forEach( className => {
                obj.classList.remove(className);
            });
        });
    };

    innerObject.append = function(...contentData) {

        innerObject.element.forEach(obj => {
            contentData.forEach(contentInfo => {
                const tempInnerHtml = obj.innerHTML;
                obj.innerHTML = tempInnerHtml + contentInfo;
            });
        });
    };

    innerObject.remove = function(selector) {

        innerObject.element.forEach(obj => {
            if(Object.prototype.toString.call(selector) === '[object Undefined]'){
                obj.remove();
            } else {
                obj.remove(selector);
            }
        })
    };

    innerObject.text = function(str) {

        if (str === undefined){
            let res = '';
            innerObject.element.forEach(obj => {
               res += obj.textContent + '\n';
            })
            return res;
        }
        innerObject.element.forEach(obj => {
            obj.textContent = str;
        })
        
    };

    innerObject.attr = function(attributeName, value){

        if(value === undefined){

            if(Object.prototype.toString.call(attributeName) == '[object Object]'){
                for (let key in attributeName){
                    innerObject.element.forEach(obj => {
                        obj.setAttribute(key, attributeName[key]);
                    })
                }
            } else if(innerObject.element[0].hasAttribute(attributeName)){
                return innerObject.element[0].getAttribute(attributeName);
            } 
        } else {
            innerObject.element.forEach(
                obj => {

                    if(Object.prototype.toString.call(value) == '[object Function]'){
                        value = value();
                    } 
                    obj.setAttribute(attributeName, value);
                }
            );
        }
    };

    innerObject.children = function() {
        innerObject.array = [];
        innerObject.element.forEach( obj => {
            for ( let child of obj.children ) {
                innerObject.array.push(child.nodeName);
            }

        });

        return innerObject;
    };

    innerObject.empty = function() {
        innerObject.element.forEach( obj => obj.innerHTML = '' );
    };

    innerObject.css = function(propertyName, value){
        const node = innerObject.array.length != 0 ?
            document.querySelectorAll(innerObject.array[0])[0] : innerObject.element[0];

        if(Object.prototype.toString.call(value) === '[object Undefined]') {
            const cssProperties = window.getComputedStyle(node);

            if(Object.prototype.toString.call(propertyName) === '[object Array]') {
                const propArray = [];
                propertyName.forEach( obj => {
                    propArray.push(obj + ': ' + cssProperties.getPropertyValue(obj));
                });
                
                return propArray;
            
            } else {

                if(Object.prototype.toString.call(propertyName) === '[object String]'){
                
                    if ( propertyName.split(' ').length < 2 ) {
                        return propertyName + ': ' + cssProperties.getPropertyValue(propertyName);
                    
                    } else {
                        node.style.cssText = propertyName; 
                    }
                } else {
                
                    for (let key in propertyName){
                        node.style.setProperty(key, propertyName[key]);
                    }
                }

            }
            
        } else {

            if(Object.prototype.toString.call(value) === '[object Number]') {
                node.style.setProperty(propertyName, value + 'px');
            } else node.style.setProperty(propertyName, value);
        }

    };

    innerObject.click = function(handler = (event) => alert(event.target.nodeName)) {   
        innerObject.element.forEach( obj => obj.addEventListener('click', handler) );
        return innerObject;
    };

    return innerObject;
};


