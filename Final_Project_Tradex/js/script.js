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