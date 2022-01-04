$(function () {
  // accordion
  let check = true;
  $(document).on("click", ".card_header", function () {
    if (check) {
      if ($(".active")[0] != $(this).next()[0]) {
        check = false;
        $(".active").slideUp(500, function () {
          $(this).removeClass("active");
        });
        $(this)
          .next()
          .slideDown(500, function () {
            $(this).addClass("active");
            check = true;
          });
      } else {
        check = false;
        $(".active").slideUp(500, function () {
          $(this).removeClass("active");
          check = true;
        });
      }
    }
  });

  // nav scroll
  $(window).scroll(function () {
    $("#header").toggleClass("scrolled", $(this).scrollTop() > 50);
  });

  // hamburger accordion
  let next = true;
  $(document).on("click", ".nav_link", function () {
    if (next) {
      if ($(".active")[0] != $(this).next()[0]) {
        next = false;
        $(".active").slideUp(500, function () {
          $(this).removeClass("active");
        });
        $(this)
          .next()
          .slideDown(500, function () {
            $(this).addClass("active");
            next = true;
          });
      } else {
        next = false;
        $(".active").slideUp(500, function () {
          $(this).removeClass("active");
          next = true;
        });
      }
    }
  });

  $(window).on("load", () => {
    $("#first-loader").fadeOut(300);
  });
});

let hamburger = document.querySelector(".nav_hamburger_menu");
let hamburgerMenu = document.querySelector(".hamburger_nav_menu");
let bb = 0;

hamburger.addEventListener("click", function () {
  bb++;
  if (bb % 2 == 0) {
    hamburgerMenu.style.height = "0px";
  } else {
    hamburgerMenu.style.height = "initial";
  }
});

let menuBtn = document.querySelector(".nav_hamburger_menu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
