import { ExperienceItem } from "@/types";
import { EXPERIENCE } from "../ui/config";
import ExpItem from "../ui/experience/experience-item";

export default function Experience() {
    return (
      <div className="pt-11">
        {EXPERIENCE.map((expItem : ExperienceItem)=>(<ExpItem expItem={expItem}/>))}
      </div>
    );
  }