 function defineProperty() {
  var osccred = document.createElement("div");
 osccred.innerHTML =
        "Created by: <strong>BSIT - 1107</strong>";

  osccred.style.position = "relative";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.fontWeight = "Bold";
  osccred.style.color = "#black";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();