const container = document.querySelector(".workexpcontainer");

const coffees = [
  {
    company: "National Grid",
    position: "Systems Developer & Analyst",
    dates: "June 2019 - Present",
    bullet1: "Automating daily/weekly backups and database update processes by developing Python scripts resulting in enhanced performance and reduction of manual overload.",
    bullet2: "Debugging runtime errors and iteratively refactoring code or procceses updating electricity outage data every 10 minutes.",
    bullet3: "Administering secured access to software based on business roles, scaling growth by 100 users each month and crafting important system administration documentation.",
    bullet4: "Developed a data accuracy tracking feature for high visibility ArcGIS applications to improve and maintain data integrity.",
  },
  {
    company: "City of NY - Financial Information Services Agency",
    position: "Software Developer",
    dates: "July 2016 - May 2019",
    bullet1: "Developed SQL queries, custom JavaScript formulas to produce ad-hoc reports of vital issues.",
    bullet2: "Automated, debugged, and maintained over 500 workflow applications in test and production environments leading to stronger quality control.",
    bullet3: "Executed instances of daily batch applications containing latest payroll data.",
    bullet4: "Deployed weekly JCL enhancements from stage to production following backup of existing data, improving reliability and flow of applications.",
  },
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ company, position, dates, bullet1, bullet2, bullet3, bullet4 }) =>
    (output +=`
      <div class="row">
      <div class="work col" style="width: 40rem;">

         <div id="work" class="allcards">
            <div class="skillz"><h3 class="projhead">${position}</h3></div>
            <p id="company">${company}</p>
            <p id="workdates">${dates}</p>
            <ul id="workList">
              <li>${bullet1}</li>
              <li>${bullet2}</li>
              <li>${bullet3}</li>
              <li>${bullet4}</li>
            </ul>
         </div>
         </div>
      </div>
      </div>
                `)
  );
  container.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCoffees);

function myFunction(x) {
    x.classList.toggle("change");
}

jQuery(document).ready(function($){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('#myBtn').fadeIn('slow');
        } else {
            $('#myBtn').fadeOut('slow');
        }
    });
    $('#myBtn').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
        return false;
    });
});

$(window).scroll(function(){
  if ($(window).scrollTop() >= 10) {
     $('.navbar').addClass('shadow-header');
  }
  else {
     $('.navbar').removeClass('shadow-header');
  }
});

$(document).ready(function(){
$('body').scrollspy({target: ".navbar", offset: 100});
  // Add smooth scrolling on all links inside the navbar
  $("#myNav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

var y = new Date();
document.getElementById("yearr").innerHTML = y.getFullYear();
