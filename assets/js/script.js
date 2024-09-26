let tabs = Array.from(document.querySelectorAll("button[data-tab]"));

tabs.map(tab => {
  if (tabs.length > 0) {
    tabs[0].click();
  }
  tab.addEventListener("click", function() {
    let selector = `.featured-courses-${tab.dataset.tab} .carousel-item`;
    
    let courses = document.querySelectorAll(selector);

    courses.forEach((el) => {
      const minPerSlide = 4;
      let next = el.nextElementSibling;
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
          next = courses[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  });
});
