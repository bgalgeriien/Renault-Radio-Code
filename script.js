function generateCode() {
  const precode = document.getElementById("precode").value.toUpperCase();
  const result = document.getElementById("result");

  if (/^A0/.test(precode)) {
    result.textContent = currentLang === 'fr'
      ? "Le calcul ne fonctionne pas pour les précodes A0."
      : "Code generation does not work for pre-codes starting with A0.";
    return;
  }

  if (!/^[A-Z]\d{3}$/.test(precode)) {
    result.textContent = currentLang === 'fr'
      ? "Format invalide. Exemple : A123"
      : "Invalid format. Example: A123";
    return;
  }

  // Algorithme fictif simple :
  const letter = precode.charCodeAt(0) - 65;
  const number = parseInt(precode.slice(1));
  const code = ((letter + number * 3) % 10000).toString().padStart(4, '0');

  result.textContent = currentLang === 'fr'
    ? `Votre code est : ${code}`
    : `Your code is: ${code}`;
}

// Multilingue simple
const translations = {
  fr: {
    title: "Générateur de code autoradio Renault",
    label: "Entrez le précode :",
    button: "Obtenir le code",
    "instructions-title": "Comment trouver le précode ?",
    instructions: `Le précode doit être composé d'une lettre suivie de 3 chiffres (exemple : A123).<br>
    Il est inscrit à l’arrière de l’autoradio, mais peut être affiché sans démontage en appuyant sur les touches 1 et 6 (ou 1 et 5) tout en maintenant le bouton d’alimentation.<br>
    ⚠️ Le calcul du code ne fonctionne pas pour les précodes qui commencent par A0.`,
  },
  en: {
    title: "Renault Radio Code Generator",
    label: "Enter the pre-code:",
    button: "Get the code",
    "instructions-title": "How to find the pre-code?",
    instructions: `The pre-code must be a letter followed by 3 digits (e.g., A123).<br>
    It’s printed on the back of the radio, but can be shown without disassembly by pressing buttons 1 and 6 (or 1 and 5) while powering on the unit.<br>
    ⚠️ Code calculation does not work for pre-codes starting with A0.`,
  },
};

let currentLang = "fr";

function switchLang(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll("[data-lang]");
  elements.forEach(el => {
    const key = el.getAttribute("data-lang");
    el.innerHTML = translations[lang][key];
  });
}