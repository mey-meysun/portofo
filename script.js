
const navbar = document.querySelector(".nav-link");

document.querySelector("#icon").onclick = () => {
  navbar.classList.toggle("active");
  icon.classList.toggle('bx-x');
};


const icon = document.querySelector("#icon");

document.addEventListener("click", function (e) {
  if (!icon.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

var typing = new Typed (".typing", {
  strings : ["Student of SMKN 1 Cirebon", "Junior Front-end Developer", "UI/UX Designer", "Insya Allah"],
  typeSpeed : 100,
  backSpeed : 50,
  loop : true
});

const btn = document.getElementById("btn-onclick");
btn.addEventListener("click", function () {
    const boom = document.getElementById("boom");
    boom.style.display = "block";

    // Periksa apakah layar dalam mode mobile
    if (window.innerWidth <= 480) {
        boom.style.marginBottom = "50px"; // Sesuaikan margin untuk mode mobile
        const contact = document.getElementById("contact");
        contact.style.paddingTop = "77rem"; // Sesuaikan padding untuk mode mobile
    } else {
        boom.style.marginBottom = "200px"; // Gunakan margin aslinya untuk mode desktop
        const contact = document.getElementById("contact");
        contact.style.paddingTop = "450px"; // Gunakan padding aslinya untuk mode desktop
    }

    const hidden = document.getElementById("btn-onclick");
    hidden.style.display = "none";
});

const close = document.getElementById("btn-close");
close.addEventListener("click", function () {
    const boom = document.getElementById("boom");
    boom.style.display = "none";
    const visible = document.getElementById("btn-onclick");
    visible.style.display = "block";

    // Kembalikan padding ke nilai aslinya saat tombol ditutup
    const contact = document.getElementById("contact");
    contact.style.paddingTop = "50px";
});


const button = document.getElementById("button");
const ikon = document.getElementById("ikon");
const meDiv = document.getElementById("home");
const footer = document.querySelector(".footer-bottom");
const haOne = document.querySelector("h1");
const paragRaf = document.querySelector(".p");
const aLink = document.querySelectorAll(".a-link"); 
const iconBX = document.getElementById("icon");

button.onclick = function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    // Aktifkan dark mode
    ikon.className = "fas fa-sun"; 
    meDiv.style.backgroundImage = "url('./img/bck-drk.jpg')";
    footer.style.backgroundColor = "#2222";
    footer.style.color = "#fff";
    haOne.style.color = "#fff";
    paragRaf.style.color = "#fff";
    for (let link of aLink) {
      link.style.color = "#fff";
      link.addEventListener('mouseenter', function() {
        this.style.color = '#03A9F4';
      });
  
      link.addEventListener('mouseleave', function() {
        this.style.color = '#fff';
      });
    }
    iconBX.style.color = "#fff";
  } else {
    ikon.className = "fas fa-moon";
    meDiv.style.backgroundImage = "url('./img/background.png.png')"; 
    footer.style.backgroundColor = "#fff";
    footer.style.color = "#111";
    haOne.style.color = "#111";
    paragRaf.style.color = "#5e5d5d";
    for (let link of aLink) { 
      link.style.color = "#272343";
    }
    iconBX.style.color = "#212121";
  }
};
