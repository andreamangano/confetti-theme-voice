document.addEventListener('DOMContentLoaded', function() {

  var openMenuButton = document.getElementById('js-open-menu-button');
  var closeMenuButton = document.getElementById('js-close-menu-button');

  var menuIsOpened = false;
  var menuIsOpenedClassName = 'is-menu-opened';
  var body = document.body || document.documentElement;

  /*
    Preferred respect to classList because it works cross browsers.
    */
  Element.prototype.hasClassName = function(name) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(this.className);
  };

  Element.prototype.addClassName = function(name) {
    if (!this.hasClassName(name)) {
      this.className = this.className ? [this.className, name].join(' ') : name;
    }
  };

  Element.prototype.removeClassName = function(name) {
    if (this.hasClassName(name)) {
      var c = this.className;
      this.className = c.replace(
        new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), ''
      );
    }
  };

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

  function fixCoverTop() {
    var wiewPortWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if(wiewPortWidth < 600) {
      var slideCover = document.getElementById('js-slide-image');

      window.addEventListener('scroll', function () {
          var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
              elementOffset = slideCover.offsetTop,
              distance = (elementOffset - scrollTop);

          if(distance < 0) {
            document.body.addClassName('is-slide-top');
          } else {
            document.body.removeClassName('is-slide-top');
          }
      });
    } else {
      window.removeEventListener('scroll', false);
    }
  }

  function toggleMenu() {
    menuIsOpened
      ? body.removeClassName(menuIsOpenedClassName)
      : body.addClassName(menuIsOpenedClassName);
    menuIsOpened = !menuIsOpened;
  }

  openMenuButton.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMenu();
  });
  closeMenuButton.addEventListener('click', function(event) {
    event.preventDefault();
    toggleMenu();
  });

  fixCoverTop();
  window.addEventListener('resize', fixCoverTop);
});
