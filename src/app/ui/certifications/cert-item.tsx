import { CertificationItem } from "@/types"

interface CertItemProps{
    certItem : CertificationItem
}

export default function CertItem(props : CertItemProps){
    const {certItem} = props;
    return(
        <div id= "experience-item" className="bg-slate-100 hover:bg-slate-200 transition duration-500 ease-in-out rounded-md mb-6 px-2 pt-2">
            <div className="flex flex-row justify-between" id="title-duration">
                <h3 className="font-bold text-lg">{certItem.title}</h3>
                {/* svg heroicon*/}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
            </div>
            <h4 className="text-base font-semibold">{certItem.issuer}</h4>
            <p className="text-sm font-normal pb-2">- {certItem.description}</p>
        </div>
    );
}