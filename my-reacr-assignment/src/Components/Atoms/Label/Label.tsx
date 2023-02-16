import "./Label.scss";

export interface LabelProps {
  text: string;
  variant:
    | "title1"
    | "title2"
    | "gray_title2"
    | "gray_title3"
    | "body_main"
    | "body_sub"
    | "red_route";
}

export const Label: React.FC<LabelProps> = ({ text, variant }) => {
  return <label className={`label ${variant}`}>{text}</label>;
};
