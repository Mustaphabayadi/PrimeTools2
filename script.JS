// PDF fonctions simples côté client
function pdfToWord(file) {
    const reader = new FileReader();
    reader.onload = function() {
        const blob = new Blob([reader.result], { type: "application/msword" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "converted.doc";
        link.click();
    };
    reader.readAsText(file);
}

// IA fonctions côté client
function summarizeText(text) {
    const summary = text.split(".")[0] + ".";
    document.getElementById("ia-output").innerText = summary;
}

function paraphraseText(text) {
    const paraphrased = text.replace(/est/g, "reste").replace(/le/g, "la");
    document.getElementById("ia-output").innerText = paraphrased;
}

function generateTitle(text) {
    const title = "🔹 " + text.split(" ").slice(0, 5).join(" ") + " …";
    document.getElementById("ia-output").innerText = title;
}

function generateDescription(text) {
    const description = text + " (Découvrez plus sur PrimeTools !)";
    document.getElementById("ia-output").innerText = description;
}

// Gestion des boutons
document.addEventListener("DOMContentLoaded", () => {

    // PDF buttons
    document.querySelectorAll('#outils button').forEach(btn => {
        btn.addEventListener("click", () => {
            if(btn.textContent === "PDF → Word") {
                const fileInput = document.createElement("input");
                fileInput.type = "file";
                fileInput.accept = ".txt,.pdf";
                fileInput.onchange = e => pdfToWord(e.target.files[0]);
                fileInput.click();
            } else {
                alert(`${btn.textContent} sera disponible bientôt !`);
            }
        });
    });

    // IA buttons
    document.querySelectorAll('#ia button').forEach(btn => {
        btn.addEventListener("click", () => {
            const inputText = prompt("Entrez votre texte :");
            if(!inputText) return;
            switch(btn.textContent){
                case "Résumeur de texte": summarizeText(inputText); break;
                case "Paraphraseur": paraphraseText(inputText); break;
                case "Générateur de titres": generateTitle(inputText); break;
                case "Générateur de descriptions": generateDescription(inputText); break;
            }
        });
    });

    // Convertisseurs
    document.querySelectorAll('#convertisseurs button').forEach(btn => {
        btn.addEventListener("click", () => {
            alert(`${btn.textContent} sera disponible bientôt !`);
        });
    });

});
