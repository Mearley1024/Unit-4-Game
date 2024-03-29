var targetNumber = "random";

$("#number-to-guess").text(targetNumber);

var counter = 0;

// Now for the hard part. Creating multiple crystals each with their own unique number value.
var x = document.getElementById("myImg").src;

// We begin by expanding our array to include four options.
var numberOptions = [6, 12, 24, 36];
var increment = numberOptions[Math.round(Math.random(max))];

$("#random-button").on("click", function () {

            var random = Math.floor(Math.random() * 12) + 1;
            P
            // $("#random-number").text(random) {
            //    console.log();
            // };

            // Next we create a for loop to create crystals for every numberOption.
            for (var i = 0; i < numberOptions.length; i++) {

                // For each iteration, we will create an imageCrystal
                var imageCrystal = $("<img>");

                // First each crystal will be given the class ".crystal-image".
                // This will allow the CSS to take effect.
                imageCrystal.addClass("crystal-image");
                00

                // Each imageCrystal will be given a src link to the crystal image
                imageCrystal.attr("src", "../images/citrine.jpeg");
                imageCrystal.attr("src", "../images/emerald.jpg");
                imageCrystal.attr("src", "../images/ruby.jpg");
                imageCrystal.attr("src", "../images/saphire.jpg");



                // Each imageCrystal will be given a data attribute called data-crystalValue.
                // This data attribute will be set equal to the array value.
                imageCrystal.attr("data-crystalvalue", numberOptions[i]);

                // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
                $("#crystals").append(imageCrystal);
            }

            // This time, our click event applies to every single crystal on the page. Not just one.
            $(".crystal-image").on("click", function () {

                // Determining the crystal's value requires us to extract the value from the data attribute.
                // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
                // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
                // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

                var crystalValue = ($(this).attr("data-crystalvalue"));
                crystalValue = parseInt(crystalValue);
                // We then add the crystalValue to the user's "counter" which is a global variable.
                // Every click, from every crystal adds to the global counter.
                counter += crystalValue;
                counter += increment;

                // All of the same game win-lose logic applies. So the rest remains unchanged.
                alert("New score: " + counter);

                if (counter === targetNumber) {
                    alert("You win!");
                } else if (counter >= targetNumber) {
                    alert("You lose!!");
                }

            });
        });