document.addEventListener('DOMContentLoaded', function() {
  /*
   It takes the object navigation (from the template data) printed into the slide page.
   */
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    // Check left arrow pressing
    if (evt.keyCode == 37 && navigation.prev) {
      window.location = navigation.prev.data.url;
    }
    // Check right arrow pressing
    if (evt.keyCode == 39 && navigation.next) {
      window.location = navigation.next.data.url;
    }
  };
});
