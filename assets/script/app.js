// show more projects in portfolio section
const portfolioProjects = document.querySelectorAll(
  ".portfolio .projects .project"
);
const viewMoreBtn = document.querySelector(".portfolio .my_btn");
let currentItems = 3;

function showMoreProjects() {
  for (let i = currentItems; i < currentItems + 3; i++) {
    portfolioProjects[i].style.display = "block";
  }
  currentItems += 3;

  // hide show more button
  if (currentItems >= portfolioProjects.length) {
    viewMoreBtn.style.display = "none";
  }
}
viewMoreBtn.addEventListener("click", showMoreProjects);

// change active link in navbar
const navbarLinks = [
  ...document.querySelectorAll(".navbar .navbar-nav .nav-item"),
];
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveClass();
    addActiveClass(link);
  });
});

function removeActiveClass() {
  navbarLinks.forEach((navbarLink) => navbarLink.classList.remove("active"));
}

function addActiveClass(link) {
  link.classList.add("active");
}

// remove active class from all links if we are at the top of the page
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    removeActiveClass();
  }
});

// set the scroll padding property value
const navigationHeight = document.querySelector("header").offsetHeight;
document.documentElement.style.setProperty(
  "--scroll-padding",
  `${navigationHeight}px`
);

// change copyright year dynamic
function dynamicCopyRightYear() {
  const copyrightYear = document.querySelector("footer .year");
  const date = new Date();
  copyrightYear.innerHTML = date.getFullYear();
}
dynamicCopyRightYear();

// go to top btn
const goTopBtn = document.querySelector(".top_btn");
goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// show and hide go top btn depend on window scroll
window.addEventListener("scroll", () => {
  if (scrollY > 1000) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

// =============== start animation =============
// header animation
const headerTimeLine = gsap.timeline();
headerTimeLine.from("header .logo a", { opacity: 0, x: -100 });
headerTimeLine.from(".link1 a", { opacity: 0, y: -100, duration: 0.3 });
headerTimeLine.from(".link2 a", { opacity: 0, y: -100, duration: 0.3 });
headerTimeLine.from(".link3 a", { opacity: 0, y: -100, duration: 0.3 });

// hero animation
const heroTimeLine = gsap.timeline();

heroTimeLine.from(".hero .my_name", {
  opacity: 0,
  y: 100,
  duration: 0.5,
  ease: "power3.out",
});
heroTimeLine.from(".hero .my_description", {
  opacity: 0,
  y: 100,
  duration: 0.3,
});
heroTimeLine.from(".hero .buttons", { opacity: 0, y: 100, duration: 0.3 });

// about animation
const aboutSection = document.querySelector(".about");
const skills = aboutSection.querySelectorAll(".skill")
const aboutTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: aboutSection,
    start: "center bottom",
  },
});

aboutTimeLine.from(".about .about_image", { x: -100, duration: 1 })
.from(".about .about_infos h2", { opacity: 0 }, "-=.4")
.from(".about .about_infos p", { opacity: 0 }, "-=.2")
skills.forEach(skill => {
  aboutTimeLine.from(skill, {opacity:0, width: 0, duration: .3})
})

// hire me animation
const hireMeSection = document.querySelector(".hire_me");
hireMeTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: hireMeSection,
    start: "top center"
  }
})

hireMeTimeLine.from(".hire_me img", {opacity:0,duration:.5})
.from(".hire_me p:nth-child(1)",{opacity:0, x: -100, duration:.3})
.from(".hire_me p:nth-child(2)",{opacity:0, x: -100, duration:.3})
.from(".hire_me .hire_me_text div",{opacity:0, x: -100, duration:.3})

// portfolio animation

const portfolioSection = document.querySelector(".portfolio")
const portfolioTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: portfolioSection,
    start: "top center"
  }
})

portfolioTimeLine.from(".portfolio h2", {opacity: 0, y: -100, duration: .5})
portfolioProjects.forEach(project => {
  portfolioTimeLine.from(project, {opacity: 0, x: -100, duration: .6})
})
portfolioTimeLine.from(".portfolio .show_more_btn", {opacity: 0, scale: 0}, "-=3.5")

// contact animation with footer

const contactSection = document.querySelector(".contact")
const contactTimeLine = gsap.timeline({
  scrollTrigger: {
    trigger: contactSection,
    start: "center bottom"
  }
})

contactTimeLine.from(".contact h2", {opacity: 0, y: -100, duration: .5})
contactTimeLine.from(".contact .contact_infos .contact_phone", {opacity: 0, x: -100, duration: .25})
contactTimeLine.from(".contact .contact_infos .mail", {opacity: 0, x: -100, duration: .25})
contactTimeLine.from(".contact .contact_infos .contact_address", {opacity: 0, x: -100, duration: .25})
contactTimeLine.from(".contact .contact_infos > p", {opacity: 0, duration: .25})
contactTimeLine.from(".contact .contact_infos .social_media", {opacity: 0, x: -100, duration: .25})
contactTimeLine.from(".contact .contact_form input:nth-child(1)", {opacity: 0, x: 100, duration: .25})
contactTimeLine.from(".contact .contact_form input:nth-child(2)", {opacity: 0, x: 100, duration: .25})
contactTimeLine.from(".contact .contact_form textarea", {opacity: 0, x: 100, duration: .25})
contactTimeLine.from(".contact .contact_form .submit_btn", {opacity: 0, duration: .25})
contactTimeLine.from("footer", {opacity: 0, duration: .5})

// ==================== end animation ====================