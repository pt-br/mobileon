module.exports = function(callback, data, mappingUrl, contentType) {

    /* Global DOM variables */
    html = $('html');
    body = $('body');
    head = $('head');

    require('./keep_js.js')();
    require('./core_functions.js');

    removeAllStyles();
    removeJS();
    removeHtmlComments();
    insertVendorScripts();
    fixPampaImgSrc();
    insertMainStyle();

    require('./mapping.js')(mappingUrl, contentType);

    finalHtml = $('html').toString();
    // Output final content
    callback(null, finalHtml);

};
