/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

    var defaults = {
        position: 'top-right', // top-left, top-right, bottom-left, or bottom-right
        speed: 'fast', // animations: fast, slow, or integer
        allowdupes: true, // true or false
        autoclose: 1000,  // delay in milliseconds. Set to 0 to remain open.
        classList: '' // arbitrary list of classes. Suggestions: success, warning, important, or info. Defaults to ''.
    };

    module('Sticky', {
        setup: function() {
            // pass
        },
        teardown: function() {
            // delete the things before moving on to the next test
            $('.sticky').remove();
        }
    });

    test('can be created', function() {
        // test create the thing
        $.sticky('I am a plain text note. Nothing special about me.', defaults);
        equal( $('.sticky').length, 1, 'A Sticky note was created');
    });

    test('can be positioned correctly', function() {
        // test create the thing
        $.sticky('I am a plain text note. Nothing special about me.', defaults);
        equal( $('.sticky').hasClass('border-top-right'), 1, 'The note had the border-top-right class');
    });

    test('can be auto-closed after specified interval', function() {
        // test create the thing
        $.sticky('I am a plain text note. Nothing special about me.', defaults);
        equal( $('.sticky').length, 1, 'The note was opened');

        // pause for x milliseconds
        stop(); // Pause the test
        //Add your wait
        setTimeout(function() {
            // After the assertion called, restart the test
            start();
            // nothing should be there
            equal( $('.sticky').length, 0, 'The note closed automatically');
            // add some buffer to allow time for the note to close
        }, defaults.autoclose + 500);
    });

    test('can add custom class to note', function() {
        // test create the thing
        $.sticky('Upload complete', {classList: 'success', speed: 'slow'});
        equal( $('.sticky').hasClass('success'), 1, 'The note has the "success" class');
    });

    test('can create note which must be clicked to close', function() {
        // test create the thing
        var newDefaults = $.extend(defaults, {autoclose: 0});
        $.sticky('Close me please.', newDefaults);

        // pause for x milliseconds
        stop();

        // begin waiting
        setTimeout(function() {
                // restart the test
            start();

            // the note should still be open
            equal( $('.sticky').length, 1, 'The note is still open');

            // close the note
            $('.sticky-close').trigger('click');

            // pause for x milliseconds
            stop();

            // begin waiting
            setTimeout(function() {

                // restart the test
                start();

                // the note should be closed
                equal( $('.sticky').length, 0, 'The note has been closed');

                // add some buffer to allow time for the note to close
            }, 1000);

            // add some buffer to allow time for the note to close
        }, defaults.autoclose + 2000);
    });

    test('can prevent duplicate notes from being created', function() {
        // test create the thing
        var newDefaults = $.extend(defaults, {allowdupes: false});
        $.sticky('Warning. Only show me one time!! Or else!', newDefaults);
        $.sticky('Warning. Only show me one time!! Or else!', newDefaults);
        $.sticky('Warning. Only show me one time!! Or else!', newDefaults);

        equal( $('.sticky').length, 1, 'Only 1 Sticky note was created');
    });

    asyncTest('can execute callback function', 1, function() {
        // test create the thing
        $.sticky('Warning. Only show me one time!! Or else!', defaults, function(){
            ok( true, 'callback was fired');
            start();
        });
    });

}(jQuery));
