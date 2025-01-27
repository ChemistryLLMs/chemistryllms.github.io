import TranslationPaperButton from "../TranslationPaperButton";
import "./style.css";

function ChemicalInfoDisplay() {
  return (
    <div className="flex-column-center-align">
      <div className="chemical-research-summary">
        <TranslationPaperButton />
        <p className="chemical-info-card">
          This repository contains information about AMORE – Augmented Molecular Retrieval (♡AMORE), a flexible zero-shot framework that assesses trustworthiness of Chemical LMs of different natures:
          trained solely on molecules for chemical tasks and on a combined corpus of natural language texts and string-based structures. The framework relies on molecule augmentations that preserve an
          underlying chemical, such as kekulization and cycle replacements. The metric is based on the similarity score between distributed representations of molecules and their augmentations.
        </p>
      </div>
    </div>
  );
}

export default ChemicalInfoDisplay;
