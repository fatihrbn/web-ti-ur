   /*profileDropdown */
    const profileDropdown = document.getElementById('profileDropdown' );
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    let isMouseOverDropdown = false;

    profileDropdown.addEventListener('mouseenter', function() {
      dropdownMenu.style.display = 'block';
    });

    profileDropdown.addEventListener('mouseleave', function() {
      setTimeout(function() {
        if (!isMouseOverDropdown) {
          dropdownMenu.style.display = 'none';
        }
      }, 200);
    });

    dropdownMenu.addEventListener('mouseenter', function() {
      isMouseOverDropdown = true;
    });

    dropdownMenu.addEventListener('mouseleave', function() {
      isMouseOverDropdown = false;
      dropdownMenu.style.display = 'none';
    });

    dropdownItems.forEach(function(item) {
      item.addEventListener('mouseenter', function() {
        this.classList.add('selected');
      });

      item.addEventListener('mouseleave', function() {
        this.classList.remove('selected');
      });

      item.addEventListener('click', function() {
        dropdownItems.forEach(function(item) {
          item.classList.remove('selected');
        });
        this.classList.add('selected');
      });
    });

    /*akademikDropdown */