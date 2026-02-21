document
.getElementById("nameInput")
.addEventListener("keypress",function(e){
  if(e.key==="Enter") generateQuote();
});

async function generateQuote(){

  const name=document
    .getElementById("nameInput")
    .value
    .toLowerCase();

  const res=await fetch("data.json");
  const data=await res.json();

  const box=document.getElementById("resultBox");

  if(!name){
    box.innerHTML="⚠️ Please enter a name";
    return;
  }

  let quotes=data[name];

  // If name not found → default AI style quotes
  if(!quotes){
    const defaultQuotes=[
      "Your story is still being written.",
      "Believe in the process.",
      "You are closer than you think."
    ];

    const random=defaultQuotes[
      Math.floor(Math.random()*defaultQuotes.length)
    ];

    box.innerHTML=`<div class="result-card">✨ ${random}</div>`;
    return;
  }

  // Random quote from name list
  const randomQuote=quotes[
    Math.floor(Math.random()*quotes.length)
  ];

  box.innerHTML=`<div class="result-card">
  💬 ${randomQuote}
  </div>`;
}