import { Button } from "@mui/base";
import "./style.css";

function TranslationPaperButton() {
  return (
    <div className="translation-paper-section">
      <p className="large-centered-text">
        Lost in Translation: Chemical LMs and the
        <br />
        Misunderstanding of Molecule Structures
      </p>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="purple-button">Go to the paper</Button>
    </div>
  );
}

export default TranslationPaperButton;
