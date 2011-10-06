
/**
 * Quick Filter for Jquery
 * @author Benjamin Delespierre <benjamin.delespierre@gmail.com>
 * @version 0.0.1
 * @package jQuery
 * @license GNU Lesser General Public License
 */

(function ($) {
    
    $.fn.quickFilter = function () {
        
        var o = arguments[0] || {},
            p = {
                handle: 'input[rel="filter"]',
                callback: function () {}
            };
            
        $.extend(p,o);
        
        return this.each(function (i,n) {
            $(p.handle).keyup(function () {
                var v = $(this).val();
                $('*',n).show();
                if (v) $(':not(:contains('+v+'))',n).hide();
                p.callback.call(this, v);
            });
        });
    };
    
})(jQuery);