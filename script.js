window.addEventListener("load", sidenVises);

// Finder den aktuelle URL-sti
var path = window.location.pathname;
var page = path.split("/").pop();

// Tjekker hvilken side vi er på og tilføjer 'active' klassen til det tilsvarende link

function sidenVises() {
  console.log("sidenVises");

  if (page == "index.html") {
    document.querySelector("#video").classList.add("link");
  } else if (page == "billeder.html") {
    document.querySelector("#billeder").classList.add("link");
  } else if (page == "video_youtube.html") {
    document.querySelector("#youtube").classList.add("link");
  }
}
