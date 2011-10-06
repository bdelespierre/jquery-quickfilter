jQuery QuickFilter
==================

Author: Benjamin Delespierre <benjamin.delespierre@gmail.com>

Description
-----------

Quick and dirty implementation for data filtering on input.

Usage
-----

$('#list').quickFilter();

// or

$('#list').quickFilter({
    handle: 'input#filter',
    callback: function (val) {
        console.log(this, val);
    }
});
