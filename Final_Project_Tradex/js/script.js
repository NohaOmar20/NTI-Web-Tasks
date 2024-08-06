// counters
let counts = setInterval(updated);
let upto = 0;
function updated() {
  let count1 = document.getElementById("counter1");
  let count2 = document.getElementById("counter2");
  let count3 = document.getElementById("counter3");
  let count4 = document.getElementById("counter4");
  count1.innerHTML = ++upto;
  count2.innerHTML = ++upto;
  count3.innerHTML = ++upto;
  count4.innerHTML = ++upto;
  if (upto === 1000) {
    clearInterval(counts);
  }
}
//filter 
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

//  toggle buttons -- price 
function showPlans(planType) {
  const monthlyPlans = document.getElementById('monthly-plans');
  const yearlyPlans = document.getElementById('yearly-plans');
  const monthlyBtn = document.getElementById('monthly-btn');
  const yearlyBtn = document.getElementById('yearly-btn');

  if (planType === 'monthly') {
    monthlyPlans.style.display = 'flex';
    yearlyPlans.style.display = 'none';
    monthlyBtn.classList.add('btn-primary');
    monthlyBtn.classList.remove('btn-secondary');
    yearlyBtn.classList.add('btn-secondary');
    yearlyBtn.classList.remove('btn-primary');
  } else if (planType === 'yearly') {
    monthlyPlans.style.display = 'none';
    yearlyPlans.style.display = 'flex';
    monthlyBtn.classList.add('btn-secondary');
    monthlyBtn.classList.remove('btn-primary');
    yearlyBtn.classList.add('btn-primary');
    yearlyBtn.classList.remove('btn-secondary');
  }
}

// Initialize with monthly plans visible
showPlans('monthly');

// Slider responsive owl 
jQuery(document).ready(function ($) {
  var owl = $("#owl-demo-2");
  owl.owlCarousel({
    dots: false,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    // items: 3,
    loop: true,
    center: false,
    rewind: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,
    margin: 0,
    stagePadding: 0,
    merge: false,
    mergeFit: true,
    autoWidth: false,
    startPosition: 0,
    rtl: false,
    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsive: {
      0: {
        items: 1
        // nav: true
      },
      480: {
        items: 2,
        nav: false
      },
      768: {
        items: 2,
        // nav: true,
        loop: false
      },
      992: {
        items: 2,
        nav: true,
        loop: false
      }
    },
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    fallbackEasing: "swing",
    info: false,
    nestedItemSelector: false,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
    autoHeight: false,
    lazyLoad: false
  });

  $(".next").click(function () {
    owl.trigger("owl.next");
  });
  $(".prev").click(function () {
    owl.trigger("owl.prev");
  });
});

