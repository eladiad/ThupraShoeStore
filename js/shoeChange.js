function changeImgs() {
  var shoeImg = document.getElementById("shoe-img");
  var shoeNo = document.getElementById("shoeCounter").value;
  if (shoeNo == 1) {
    shoeImg.src = "img/a.png";
    document.getElementById("shoeCounter").value = 2;
  } else if (shoeNo == 2) {
    shoeImg.src = "img/n.png";
    document.getElementById("shoeCounter").value = 3;
  } else if (shoeNo == 3) {
    shoeImg.src = "img/p.png";
    document.getElementById("shoeCounter").value = 1;
  }
  setTimeout(changeImgs, 5000);
}
changeImgs();
