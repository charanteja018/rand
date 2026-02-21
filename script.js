async function predict() {

  const name = document
    .getElementById("nameInput")
    .value
    .toLowerCase();

  const res = await fetch("data.json");
  const data = await res.json();

  const result = data[name] || "Occupation not found";

  document.getElementById("result").innerText = result;
}