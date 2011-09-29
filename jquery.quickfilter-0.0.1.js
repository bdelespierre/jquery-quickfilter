
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
                handle: 'input[rel="filter"]'
            };
            
        $.extend(p,o);
        
        return this.each(function (i,n) {
            $(p.handle).keyup(function () {
                $('*',n).show();
                $(':not(:contains('+$(this).val()+'))',n).hide();
            });
        });
    };
    
})(jQuery);