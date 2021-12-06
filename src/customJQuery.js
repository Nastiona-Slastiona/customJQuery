function $(elem) {
    const innerObject = {};
    innerObject.elements = document.querySelectorAll(elem);

    innerObject.toString = function() {
        return innerObject.elements.toString();
    }

    innerObject.addClass = function(...classNames) {
        innerObject.elements.forEach(element => {
            classNames.forEach(className => {
                if(typeof className == 'function') {
                    element.classList.add(className());
                } else {
                    element.classList.add(className);
                }
            });
        })
    };

    innerObject.removeClass = function(...classNames) {
        innerObject.elements.forEach(element => {
            classNames.forEach(className => {
                element.classList.remove(className);
            });
        });
    };

    innerObject.append = function(...contentData) {
        innerObject.elements.forEach(element => {
            contentData.forEach(contentInfo => {
                element.append(contentInfo);
            });
        });
    };

    innerObject.remove = function(selector) {
        innerObject.elements.forEach(element => {
            if(typeof selector == 'undefined') {
                element.remove();
            } else {
                element.remove(selector);
            }
        });
    };

    innerObject.text = function(str) {
        if (str === undefined) {
            let res = '';
            innerObject.elements.forEach(element => {
               res += element.textContent + '\n';
            });

            return res;
        }

        innerObject.elements.forEach(element => {
            element.textContent = str;
        });
    };

    innerObject.attr = function(attributeName, value) {
        if(value === undefined) {
            if(typeof attributeName == 'string') {
                return innerObject
                    .elements[0]
                    .getAttribute(attributeName);
            } 

            for (const key in attributeName) {
                innerObject.elements.forEach(element => {
                    element.setAttribute(key, attributeName[key]);
                });
            }
        } else {
            innerObject.elements.forEach(element => {
                if(typeof value == 'function') {
                    value = value();
                } 

                element.setAttribute(attributeName, value);
            });
        }
    };

    innerObject.children = function() {
        const tempArray = [];
        innerObject.elements.forEach(element => {
            for (const child of element.children) {
                tempArray.push(child);
            }
        });
        innerObject.elements = tempArray;

        return innerObject;
    };

    innerObject.empty = function() {
        innerObject.elements.forEach(element => element.innerHTML = '' );
    };

    innerObject.css = function(propertyName, value) {
        const node = innerObject.elements[0];

        if(typeof value == 'undefined') {
            const cssProperties = window.getComputedStyle(node);

            if(propertyName instanceof Array) {
                const propArray = [];
                propertyName.forEach(element => {
                    propArray.push(
                        element + ': ' + cssProperties.getPropertyValue(element)
                    );
                });
                
                return propArray;
            
            } 
            
            if(typeof propertyName == 'string') {
                if (propertyName.split(' ').length < 2) {
                    return propertyName + ': ' + 
                        cssProperties.getPropertyValue(propertyName);
                }
                
                node.style.cssText = propertyName;
            } else {
                for (const key in propertyName) {
                    node.style.setProperty(key, propertyName[key]);
                }
            }
        } else {
            if(typeof value == 'number') {
                node.style.setProperty(propertyName, value + 'px');
            } else {
                node.style.setProperty(propertyName, value);
            }
        }
    };

    innerObject.click = function(
        handler = event => alert(event.target.nodeName)) {   
        innerObject.elements.forEach(element => element.addEventListener('click', handler));

        return innerObject;
    };

    return innerObject;
};


