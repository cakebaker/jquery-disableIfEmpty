/* Licensed under the MIT license by Daniel Hofstetter (http://cakebaker.42dh.com) */
(function($) {
  $.fn.disableIfEmpty = function(elementToObserve) {
    var elementToDisable, disableElement;

    return this.each(function() {
      elementToDisable = $(this);
      disableElement = function() {
        elementToDisable.attr('disabled', !$(elementToObserve).val());
      };
      disableElement();
      $(elementToObserve).keyup(disableElement);
    });
  }
})(jQuery);
