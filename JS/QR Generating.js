const main = document.querySelector(".content"),
  qrInput = main.querySelector(".form input"),
  generateBtn = main.querySelector(".form button"),
  qrImg = main.querySelector(".qr-code img");
let preValue;
generateBtn.addEventListener("click", () => {
  if_show();
  let qrValue = qrInput.value.trim();
  if (!qrValue || preValue === qrValue) return;
  btnDownload.style.display = "block";
  btnDownload.style.transition = "2s";
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  qrImg.addEventListener("load", () => {
    main.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    main.classList.remove("active");
    preValue = "";
  }
});
