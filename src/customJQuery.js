function $(elem) {
    const innerObject = {};
    const element = document.querySelectorAll(elem);

    innerObject.addClass = function(...classNames) {
        
        element.forEach(obj => {

            classNames.forEach( className => {
                obj.classList.add(className);
            });

        })
    };

    innerObject.removeClass = function(...classNames) {
        
        element.forEach(obj => {
            classNames.forEach( className => {
                obj.classList.remove(className);
            });
        });
    };

    innerObject.append = function(...contentData) {

        element.forEach(obj => {
            contentData.forEach(contentInfo => {
                const tempInnerHtml = obj.innerHTML;
                obj.innerHTML = tempInnerHtml + contentInfo;
            });
        });
    };

    innerObject.remove = function(selector) {

        element.forEach(obj => {
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
            element.forEach(obj => {
               res += obj.textContent + '\n';
            })
            return res;
        }
        element.forEach(obj => {
            obj.textContent = str;
        })
        
    };

    innerObject.attr = function(attributeName, value){

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
    };

    innerObject.children = function(str) {
        const childrenArray = [];

        if(str === undefined) {
            element.forEach( obj => childrenArray.push( Array.from(obj.childNodes) ) );
        } else {

            element.forEach(obj => {
                let addChild;

                if(str[0] == '.'){
                   addChild =  Array.from( obj.getElementsByClassName(str) );
                } else {
                    addChild = Array.from( obj.getElementsByTagName(str) );
                }

                if(addChild != ''){
                    childrenArray.push(addChild);
                }
            });
        }
            
        return childrenArray;
    };

    innerObject.empty = function() {
        element.forEach( obj => obj.innerHTML = '' )
    };

    innerObject.css = function(propertyName, value){

        if(Object.prototype.toString.call(value) === '[object Undefined]') {
            const cssProperties = window.getComputedStyle(element[0]);

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
                        element[0].style.cssText = propertyName; 
                    }
                } else {
                
                    for (let key in propertyName){
                        element[0].style.setProperty(key, propertyName[key]);
                    }
                }

            }
            
        } else {

            if(Object.prototype.toString.call(value) === '[object Number]') {
                element[0].style.setProperty(propertyName, value + 'px');
            } else element[0].style.setProperty(propertyName, value);
        }

    };

    innerObject.click = function(handler = (event) => alert(event.target.nodeName)) {
        element.forEach( obj => obj.addEventListener('click', handler) );
    };

    return innerObject;
};


