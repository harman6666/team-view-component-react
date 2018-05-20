
export const toggleClass = (elem, className) => {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ',
    	hasClass = new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    if (hasClass) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

export const parents = (el, parentSelector) => { /* parentSelector is optional */

    // If no parentSelector defined will bubble up all the way to *document*
    if (parentSelector === undefined) {
        parentSelector = document;
    }

    var parents = [];
    var p = el.parentNode;

    while (p !== parentSelector) {
        var o = p;
        parents.push(o);
        p = o.parentNode;
    }
    parents.push(parentSelector); // Push that parentSelector you wanted to stop at

    return parents;
}