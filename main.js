document.querySelector(".date").textContent = new Date().getFullYear();

document.querySelector(".btn").addEventListener("click", () => {
  const mainElement = document.createElement("div");

  const title = document.createElement("h2");

  // remove the element
  const close = document.createElement("span");

  // element holding the text section
  const textBox = document.createElement("div");

  /* product info */
  const attr = document.createElement("div");

  attr.classList = "layout";

  const name = document.createElement("h2");
  const family = document.createElement("h2");
  const series = document.createElement("h2");
  const board = document.createElement("h2");
  const oS = document.createElement("h2");
  const power = document.createElement("h2");

  name.appendChild(document.createTextNode("Name"));
  family.appendChild(document.createTextNode("Family"));
  series.appendChild(document.createTextNode("Series"));
  board.appendChild(document.createTextNode("Board Type"));
  oS.appendChild(document.createTextNode("OS Support"));
  power.appendChild(document.createTextNode("Power Connector"));

  attr.appendChild(name);
  attr.appendChild(family);
  attr.appendChild(series);
  attr.appendChild(board);
  attr.appendChild(oS);
  attr.appendChild(power);
  /* product info */

  const val = document.createElement("div");

  val.classList = "layout";

  /*product details */

  const nameVal = document.createElement("h2");
  const familyVal = document.createElement("h2");
  const seriesVal = document.createElement("h2");
  const boardVal = document.createElement("h2");
  const oSVal = document.createElement("h2");
  const powerVal = document.createElement("h2");

  nameVal.appendChild(document.createTextNode("AMD RX 9070 XT"));
  familyVal.appendChild(document.createTextNode("Radeon RX"));
  seriesVal.appendChild(document.createTextNode("RX 9000 Series"));
  boardVal.appendChild(document.createTextNode("Desktop"));
  oSVal.appendChild(document.createTextNode("Windows 10 - 11, Linux"));
  powerVal.appendChild(document.createTextNode("2x8-Pin"));

  val.appendChild(nameVal);
  val.appendChild(familyVal);
  val.appendChild(seriesVal);
  val.appendChild(boardVal);
  val.appendChild(oSVal);
  val.appendChild(powerVal);
  /*product details */

  title.appendChild(document.createTextNode("General"));
  textBox.classList = "text-section";

  close.className = "close";
  mainElement.className = "main-box";

  close.appendChild(document.createTextNode("x"));

  // to remove the element
  close.onclick = () => {
    mainElement.remove();
  };

  //

  textBox.appendChild(attr);
  textBox.appendChild(val);

  mainElement.appendChild(close);
  mainElement.appendChild(title);
  mainElement.appendChild(textBox);
  document.querySelector("main").appendChild(mainElement);
});
