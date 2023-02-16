import { Label } from "../../Atoms/Label/Label";
import "./Summary.scss";

export interface SummaryProps {
  orgCount: number;
  userCount: number;
}

export const Summary: React.FC<SummaryProps> = ({ orgCount, userCount }) => {

    const getOrgCount = () =>{
        return orgCount;
    }

    const getUserCount = () =>{
        return userCount;
    }

  return (
    <div className="summary_card">
      <div className="card">
        <Label text={`Organizations(${getOrgCount()})`} variant="title2" />
        <Label text="Overview of Organizations" variant="gray_title3" />
      </div>
      <div className="card">
        <Label text={`Users(${getUserCount()})`} variant="title2" />
        <Label text="Overview of Users" variant="gray_title3" />
      </div>
    </div>
  );
};
