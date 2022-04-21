document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.header .header_btn');
  const headerContainer = document.querySelector('.header .header_container');

  if (menuBtn !== null && headerContainer !== null) {
    menuBtn.addEventListener('click', function() {
      headerContainer.classList.toggle('header_container_collapsed');
    });
  }
});