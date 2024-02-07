(function($){
	$(function(){
		var user_agent = navigator.userAgent;
		var is_opera_edge;
		var browser = user_agent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))/i) || [];
		var browser_name = '';
		var browser_class = '';

		if ( /trident/i.test( browser[0] ) ) {
			browser_name = 'ie';
		} else if ( browser[0] === 'Chrome' ) {
			is_opera_edge = user_agent.match(/\b(OPR|Edge)/);

			if ( is_opera_edge !== null ) {
				browser_name = is_opera_edge[0].replace('OPR', 'opera');
			}
		}

		// use navigator.appName as browser name if we were unable to get it from user_agent
		if ( '' === browser_name ) {
			if ('standalone' in window.navigator && !window.navigator.standalone) {
				browser_name = 'uiwebview';
			} else {
				browser_name = browser[0] && '' !== browser[0] ? browser[0] : navigator.appName;
			}
		}

		browser_name = browser_name.toLowerCase();

		// convert browser name to class. Some classes do not match the browser name
		switch( browser_name ) {
			case 'msie' :
				browser_class = 'ie';
				break;
			case 'firefox' :
				browser_class = 'gecko';
				break;
			default :
				browser_class = browser_name;
				break;
		}

		// add `iphone` class if browsing from iphone
		if ( user_agent.match(/iPhone/) ) {
			browser_class += ' iphone';
		}

		$( 'body' ).addClass( browser_class );
	});
})(jQuery);
$(document).ready(function() {
    function Timer() {
        function e(e) {
            var i = t(new Date(e).getHours()),
                o = t(new Date(e).getMinutes()),
                n = t(new Date(e).getSeconds());
            s.each(function() {
                $(this).find(".hours").text(i), $(this).find(".minutes").text(o), $(this).find(".seconds").text(n)
            })
        }

        function t(e) {
            return e >= 10 ? e : "0" + e
        }

        function i() {
            a == r ? clearInterval(d) : (a -= 1e3, e(a))
        }

        function o() {
            d = setInterval(i, 1e3)
        }
        var s = $(".timer"),
            n = new Date,
            r = 60 * n.getTimezoneOffset() * 1e3,
            l = new Date((new Date).getTime() + 864e5);
        l.setHours(0), l.setMinutes(0), l.setSeconds(0);
        var a = l - n + r;
        i(), o();
        var d
    }
    Timer();
});