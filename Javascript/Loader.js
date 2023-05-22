window.addEventListener("load", function () {
    var LoaderContainer = document.getElementById('LoaderContainer');
    var Loader = document.getElementById('Loader');

    LoaderContainer.style.opacity = "1"; // Set initial opacity

    setTimeout(function () {
        LoaderContainer.style.opacity = "0";
         Loader.style.opacity=".6"

        setTimeout(function () {
            LoaderContainer.style.display = "none";
            Loader.style.opacity=".8" 
        }, 1500);
    }, 2000); 
})


window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const scrollToTopButton = document.getElementById('scrollToTopButton');
  if (window.pageYOffset > 250) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function scrollToBottom() {
  window.scroll({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}
