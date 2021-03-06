document.addEventListener('DOMContentLoaded', function () {
    if (typeof ($.fn.lightGallery) === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item', loop: true, escKey: true, keyPress: true});
    }
    if (typeof ($.fn.justifiedGallery) === 'function') {
        if ($('.justified-gallery > p > .gallery-item').length) {
            $('.justified-gallery > p > .gallery-item').unwrap();
        }
        // $('.justified-gallery').justifiedGallery({rowHeight:230, margins:4};
        $('.justified-gallery').justifiedGallery({rowHeight:160, margins:4});
    }
});