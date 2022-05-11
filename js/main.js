document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.header .header_btn');
  const headerContainer = document.querySelector('.header .header_container');

  if (menuBtn !== null && headerContainer !== null) {
    menuBtn.addEventListener('click', function() {
      headerContainer.classList.toggle('header_container_collapsed');
    });
  }

  // Slider
  const sliderButtons = document.querySelectorAll('.connected_platforms_icons .connected_platforms_button');
  const sliderItems = document.querySelectorAll('.connected_platforms_slides .connected_platforms_slides_item');

  if (sliderButtons.length > 0 && sliderButtons.length === sliderItems.length) {
    const itemsAmount = sliderButtons.length;

    for (let i = 0; i < itemsAmount; i++) {
      const sliderButton = sliderButtons[i];
      const sliderItem = sliderItems[i];

      sliderButton.addEventListener('click', function() {
        // Remove active state from all items
        removeClassFromAll(sliderButtons, 'active');
        removeClassFromAll(sliderItems, 'active');

        // Active selected items
        sliderButton.classList.add('active');
        sliderItem.classList.add('active');
      });
    }
  }
});

function removeClassFromAll(items, classToRemove) {
  items.forEach((item) => {
    item.classList.remove(classToRemove);
  });
}