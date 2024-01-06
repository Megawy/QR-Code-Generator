let btnDownload = document.getElementById("canvasDownload");
let img = document.getElementById("canvas");
function if_show() {
  let img_src = img.getAttribute("src");
  if (img_src === "") {
    btnDownload.style.display = "none";
  } else {
    btnDownload.style.display = "block";
  }
}
if_show();
btnDownload.addEventListener("click", () => {
  let imagePath = img.getAttribute("src");
  let fileName = getFileName(imagePath);
  saveAs(imagePath, fileName);
});
function getFileName(str) {
  return str.substring(str.lastIndexOf("/") + 1);
}
