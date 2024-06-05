import { ABOUT_TEXT } from "../ui/config";

export default function About() {
    return (
      <div className="pt-40">
        <p className="pb-5">{ABOUT_TEXT.para1}</p>
        <p>{ABOUT_TEXT.para2}</p>
      </div>
      
    );
  }