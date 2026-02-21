document
.getElementById("nameInput")
.addEventListener("keypress",function(e){
  if(e.key==="Enter") generateQuote();
});

async function generateQuote(){

  let name=document
    .getElementById("nameInput")
    .value;

  const box=document.getElementById("resultBox");

  // ✅ Remove spaces & make lowercase
  name=name.trim().toLowerCase();

  // ✅ Only letters allow (name validation)
  const namePattern=/^[a-zA-Z]+$/;

  if(!name){
    box.innerHTML="⚠️ Please enter a name";
    return;
  }

  if(!namePattern.test(name)){
    box.innerHTML="❌ Enter a valid name (letters only)";
    return;
  }

  const res=await fetch("data.json");
  const data=await res.json();

  let quotes=data[name];

  // Default quotes if name not found
  if(!quotes){
    const defaultQuotes=[
      "Your story is still being written.",
      "Believe in the process.",
      "You are stronger than yesterday."
    ];

    const random=defaultQuotes[
      Math.floor(Math.random()*defaultQuotes.length)
    ];

    box.innerHTML=`<div class="result-card">✨ ${random}</div>`;
    return;
  }

  const randomQuote=quotes[
    Math.floor(Math.random()*quotes.length)
  ];

  box.innerHTML=`<div class="result-card">💬 ${randomQuote}</div>`;
}