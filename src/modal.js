(function() {
  const images = document.querySelectorAll("img");
  const modal = document.getElementById("modal");
  const backdrop = document.getElementById("backdrop");
  var modalImg = document.getElementById("ImgModal");

  images.forEach(image => {
    image.onclick = () => {
      modal.style.display = "flex";
      modalImg.src = image.src;
      backdrop.style.display = "block";
      backdrop.onclick = () => {
        backdrop.style.display = "none";
        modal.style.display = "none";
      };
    };
  });
})();
