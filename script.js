
function nextStep() {
  document.getElementById("story").innerText = "तुम दरवाज़े के पास पहुँचते हो... खटखटाहट फिर से होती है...";
  document.querySelector("button").style.display = "none";
  document.getElementById("choices").style.display = "block";
}

function choose(option) {
  let result = "";
  if (option === "yes") {
    result = "दरवाज़ा खुलता है... और एक परछाई तुम्हारी तरफ दौड़ती है!";
  } else {
    result = "तुम पीछे हटते हो... लेकिन दरवाज़ा अपने आप खुल जाता है!";
  }
  document.getElementById("result").innerText = result;
  document.getElementById("choices").style.display = "none";
}
