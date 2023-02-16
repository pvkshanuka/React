import "./Navbaritem.scss"

export interface NavbaritemProps {
  text: string;
  refer: string;
}

export const Navbaritem: React.FC<NavbaritemProps> = ({ text, refer }) => {
  return <a href={refer}>
  <span>{text}</span>
</a>;
};
