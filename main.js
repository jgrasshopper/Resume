// We are grabbing all the list items in our #timeline and were putting it in a variable called items
const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// We have a function called "run" which is going to each item and it's checking to see if it's the viewport and if it's in the viewport, it's going to add the class of show
const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events - were firing this "run" when the page loads, when resizing and scrolling
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
