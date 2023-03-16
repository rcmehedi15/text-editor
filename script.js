const boldBtn = document.getElementById("bold-btn");
const italicBtn = document.getElementById("italic-btn");
const underlineBtn = document.getElementById("underline-btn");
const fontSize = document.getElementById("font-size");
const saveBtn = document.getElementById("save-btn");
const content = document.querySelector(".content");

boldBtn.addEventListener("click", () => {
  document.execCommand("bold", false, null);
});

italicBtn.addEventListener("click", () => {
  document.execCommand("italic", false, null);
});

underlineBtn.addEventListener("click", () => {
  document.execCommand("underline", false, null);
});

fontSize.addEventListener("change", () => {
  const size = fontSize.value;
  content.style.fontSize = size;
});

saveBtn.addEventListener("click", () => {
  const text = content.innerHTML;
  const filename = prompt("Enter filename:");
  if (filename != null) {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, filename + ".txt");
  }
});
