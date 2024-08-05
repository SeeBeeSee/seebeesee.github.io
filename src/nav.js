// navigation bar functionality

// Pages to populate the navbar with, and accompanying data
// (update here instead of re-writing navbar for each page)
const pages = [
  {
    title: "Seeb's Grocery List",
    link: "grocery.html",
  },
  {
    title: "Sample page",
    link: "sample.html",
  },
];

// When the page is ready, populate the navbar
$(document).ready(function () {
  let urlSplit = document.location.href.split("/");
  let currentPage = urlSplit[urlSplit.length - 1];

  // distinguish whether we're at top-level index or a sub-page (assuming only 1 level of depth)
  if (currentPage === "index.html") {
    // append home link
    $(".navigation-bar").append(
      "<button class='nav-button'><a href='index.html'>Home</a></button>"
    );

    // append remaining pages
    pages.forEach((pageData) => {
      let newButton =
        "<button class='nav-button'><a href='./pages/" +
        pageData.link +
        "'>" +
        pageData.title +
        "</a></button>";
      $(".navigation-bar").append(newButton);
    });
  } else {
    // append home link
    $(".navigation-bar").append(
      "<button class='nav-button'><a href='../index.html'>Home</a></button>"
    );

    // append remaining pages
    pages.forEach((pageData) => {
      let newButton =
        "<button class='nav-button'><a href='" +
        pageData.link +
        "'>" +
        pageData.title +
        "</a></button>";
      $(".navigation-bar").append(newButton);
    });
  }
});
