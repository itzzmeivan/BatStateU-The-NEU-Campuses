function defineProperty() {
  var osccred = document.createElement("div");
  osccred.innerHTML = "Created by: <strong>BSIT - 1107</strong>";
  osccred.innerHTML = " Created by:<a href='https://www.facebook.com/share/18L3BbkpqU/' target='_blank'><em>BSIT - 1107 OFFICIAL PAGE</em></a>";

  osccred.style.position = "relative";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.fontWeight = "Bold";
  osccred.style.color = "#ffffff";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = " #7a0000";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px  #7a0000";
  document.body.appendChild(osccred);
}

defineProperty();

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => {
      item.classList.remove('active', 'nav-clicked');
    });

    link.classList.add('active', 'nav-clicked');

    clearTimeout(link.navTimer);
    link.navTimer = setTimeout(() => {
      link.classList.remove('nav-clicked');
    }, 350);
  });
});