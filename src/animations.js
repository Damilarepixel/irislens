/*Cool slide in animation code*/
/* eslint-disable */
/*Cool slide in animation code*/
import $ from 'jquery'
// decided not to use jquery again



// window.onload = () => {
    
// (function($) {

//     /**
//      * Copyright 2012, Digital Fusion
//      * Licensed under the MIT license.
//      * http://teamdf.com/jquery-plugins/license/
//      *
//      * @author Sam Sehnert
//      * @desc A small plugin that checks whether elements are within
//      *     the user visible viewport of a web browser.
//      *     only accounts for vertical position, not horizontal.
//      */
  
//     $.fn.visible = function(partial) {
  
//         var $t            = $(this),
//             $w            = $(window),
//             viewTop       = $w.scrollTop(),
//             viewBottom    = viewTop + $w.height(),
//             _top          = $t.offset().top,
//             _bottom       = _top + $t.height(),
//             compareTop    = partial === true ? _bottom : _top,
//             compareBottom = partial === true ? _top : _bottom;
  
//       return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  
//     };
  
//   })(jQuery);
  
  
//   var allMods = $(".animate");
  
//   allMods.each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("already-visible");
//     }
//   });
//   var determinant = 0;

//   window.addEventListener('scroll',function(event) {
//     let latestValue = window.pageYOffset;
//     if(latestValue < determinant){

//       console.log('scrolling up');

//     }else {
//       // we're scrolling down
//       console.log('scrollin down')
//       allMods.each(function(i, el) {
//         var el = $(el);
//         if (el.visible(true)) {
//           el.addClass("come-in");
//         }
//       });
  
//     }
//   determinant = window.pageYOffset;
//   });
  
//   /*========================================================*/
// }