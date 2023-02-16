import { Label } from "../../Atoms/Label/Label";
import "./Titlecard.scss"


export const Titlecard: React.FC = () => {
  return (
    <div className="title_card">
      <Label text="Welcome, Leo Blair" variant="title1" />
      <Label text="Lorem because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module." variant="gray_title3"/>
    </div>
  );
};
