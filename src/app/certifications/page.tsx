import { CertificationItem } from "@/types";
import { CERTIFICATIONS } from "../ui/config";
import CertItem from "../ui/certifications/cert-item";
export default function Projects() {
    return (
      <div className="pt-36">
        {CERTIFICATIONS.map((certItem : CertificationItem, index : number)=>(
          <a href={certItem.link} target="_blank" key={index}>
            <CertItem certItem={certItem}/>
          </a>
        ))}
      </div>
    );
  }