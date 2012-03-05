
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
        
        var filter = function (event, value) {
            $('*',this).show();
            if (value) $(':not(:contains('+value+'))',this).hide();
            p.callback.call(this, value);
        };
        
        var clear = function (event) {
            $(this).trigger('filter');
        }
        
        return this.each(function (i,n) {
            $(n).bind('filter', filter).bind('clear', clear);
            $(p.handle).bind('keyup.filter', function (event) {
                $(n).trigger('filter', [$(this).val()]);
            });
        });
    };
    
})(jQuery);