// Magnific Popup Documentation http://dimsemenov.com/plugins/magnific-popup/
$(document).ready(function() {
  $('.post-content').each(function() { // the containers for all your galleries
    $(this).find('a > img').parent().magnificPopup({
      type: 'image',
      overflowY: 'hidden',
      gallery: {
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out' // CSS transition easing function
      },
      retina: {
        ratio: 1, // Increase this number to enable retina image support.
        // Image in popup will be scaled down by this number.
        // Option can also be a function which should return a number (in case you support multiple ratios). For example:
        // ratio: function() { return window.devicePixelRatio === 1.5 ? 1.5 : 2  }

        replaceSrc: function(item, ratio) {
          return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; });
        } // function that changes image source
      }
    });
  });
});
