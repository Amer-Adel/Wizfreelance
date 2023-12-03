// Increase statistics on scrolling
let nums = document.querySelectorAll(".statistics .num span");
let sectionHeight = document.querySelector(".who-us").offsetTop;
let started = false;
window.onscroll = function () {
  if (window.scrollY >= sectionHeight) {
    if (!started) nums.forEach((num) => startCount(num));
    started = true;
  }
};
function startCount(e) {
  let goal = e.dataset.goal;
  let count = setInterval(() => {
    e.textContent++;
    if (e.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// Stretch the wiper items
let swiperWrappers = document.getElementsByClassName("swiper-wrapper");
for (let i = 0; i < swiperWrappers.length; i++) {
  let swiperHeight = getComputedStyle(swiperWrappers[i]).getPropertyValue('height');
  let swiperItems = swiperWrappers[i].getElementsByClassName("swiper-slide");
  for (let j = 0; j < swiperItems.length; j++) 
    swiperItems[j].style.height = swiperHeight;
}

// Send email from contact form
document.querySelector("form").onsubmit = () => {
  Email.send({
    SecureToken : "385cd9db-1a68-43b8-b155-f6184f166f63",
    To : 'support@wizfreelance-agency.com',
    From : document.getElementById("email").value,
    Subject : "Contact from the website",
    Body : "Name: " + document.getElementById("name").value
        +  "<br> Company: " + document.getElementById("comp").value
        +  "<br> Phone: " + document.getElementById("num").value
        +  "<br> Message: " + document.getElementById("msg").value
  }).then(
    message => alert("تم الارسال بنجاح")
  );
  reset();
  return false;
}