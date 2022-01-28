$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Tech Enthusiast", "Developer", "Learner", "Student", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Tech Enthusiast", "Developer", "Learner", "Student", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    const li = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");

    function activemenu() {
        let len = sec.length;
        while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
        li.forEach(ltx => ltx.classList.remove("highlight"));
        li[len].classList.add("highlight");
    }
    activemenu();
    window.addEventListener("scroll", activemenu);
});