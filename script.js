function calculateCode() {
  const precode = document.getElementById("precode").value.toUpperCase();

  if (!/^[A-Z][0-9]{3}$/.test(precode)) {
    document.getElementById("result").innerText = "Format de précode invalide. Exemple : A123";
    return;
  }

  if (precode.startsWith("A0")) {
    document.getElementById("result").innerText = "Les précodes commençant par A0 ne sont pas supportés.";
    return;
  }

  // Exemple simple de calcul simulé
  const letter = precode.charCodeAt(0) - 65;
  const number = parseInt(precode.slice(1));
  const code = ((letter + number) * 7) % 10000;

  document.getElementById("result").innerText = "Code de déverrouillage : " + code.toString().padStart(4, "0");
}

function setLanguage(lang) {
  // Tu peux étendre cette fonction plus tard si tu veux gérer plusieurs langues
  alert("Langue changée en : " + lang.toUpperCase());
}
