function get_src() {
  let img = document.getElementById("canvas");
  const link = (img = URL.createObjectURL);
  const msg = encodeURIComponent("My QR Code");
  const title = encodeURIComponent("Article or Post Title Here");

  const fb = document.querySelector(".facebook");
  fb.href = `https://www.facebook.com/share.php?u=${link}`;

  const twitter = document.querySelector(".twitter");
  twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

  const whatsapp = document.querySelector(".whatsapp");
  whatsapp.href = `https://api.whatsapp.com/send?text=${msg}: ${link}`;

  const telegram = document.querySelector(".telegram");
  telegram.href = `https://telegram.me/share/url?url=${link}&text=${msg}`;
}
