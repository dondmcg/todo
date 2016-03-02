var TTDModule = (function () {



    // set up vars

    // public get hash
    var getHashParams = function() {

        var hashParams = {};
        var e,
            a = /\+/g,  // Regex for replacing addition symbol with a space
            r = /([^&;=]+)=?([^&;]*)/g,
            d = function (s) {
                return decodeURIComponent(s.replace(a, " "));
            },
            q = window.location.hash.substring(1);

        while (e = r.exec(q))
            hashParams[d(e[1])] = d(e[2]);

        return hashParams;
    };

    // public delay method
    var delay = (function () {
        var timer = 0;
        return function (callback, ms) {
            clearTimeout(timer);
            timer = setTimeout(callback, ms);
        };
    })();

    var createThing = function() {

    };

    var addTag = function() {

    };

    var clearActive = function(pagLinks) {
        for (var i = 0; i < pagLinks.length; i++) {
            pagLinks[i].parentNode.className = '';
        }
    };

    // Check the query string for keywords
    var hasKeywords = getHashParams().keywords;

    createBtn.onclick = function (e) {
        e.preventDefault();
        // show create modal

    };

    return {
        //publicMethods
        getHashParams: getHashParams,
        delay: delay,
        // make public for testing
        createThing: createThing
    };

})();