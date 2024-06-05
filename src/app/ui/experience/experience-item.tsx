import { ExperienceItem } from "@/types"

interface ExperienceItemProps{
    expItem : ExperienceItem
}

export default function ExpItem(props : ExperienceItemProps){
    const {expItem} = props;
    return(
        <div id= "experience-item" className="bg-slate-100 hover:bg-slate-200 transition duration-500 ease-in-out rounded-md mb-11 px-2 pt-2">
            <div className="flex flex-row justify-between" id="title-duration">
              <h3 className="font-bold text-lg">{expItem.title.toUpperCase()}</h3>
              <h4 className="font-normal text-sm">{expItem.duration}</h4>
            </div>
            <h4 className="text-base font-semibold">{expItem.companyName}</h4>
            <div className="gap-1 flex flex-col pb-2">
              {expItem.description.map((desc : string)=>(
                <div className="flex flex-row gap-2 justify-between items-start">
                  <p className="text-sm font-normal">- {desc}</p>
                </div>
              ))}
            </div>
        </div>
    )
}