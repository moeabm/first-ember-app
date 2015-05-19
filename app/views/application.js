// app/views/application.js
import Ember from "ember";

export default Ember.View.extend({
    didInsertElement: function() {
        // Bootstrap collapsible navigation bar
        $('.nav li a').on('click', function(){
            Ember.run(function(){
                var toggle = $('.navbar-toggle');
                // Only click if toggle is visible and ...
                if (toggle && toggle.is(':visible') && 
                    // ... menu item is not a dropdown toggle.
                    !$(this).hasClass('dropdown-toggle')) {
                        toggle.trigger("click");
                }
            });
        });
        $('.navbar .navbar-brand').on('click', function(){
        	console.log('stuff just happened')
            Ember.run(function(){
                var toggle = $('.navbar-toggle');
                // Only click if toggle is visible and ...
                if (toggle && toggle.is(':visible')) {
                        toggle.trigger("click");
                }
            });
        });
    }
});