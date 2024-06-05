import { SOCIALS_LINKS } from "../config"
import { SocialIcon } from "react-social-icons"


export default function Socials(){
    return(
        <>
            <SocialIcon url= {SOCIALS_LINKS.linkedin} target="_blank"/>
            <SocialIcon url= {SOCIALS_LINKS.github} target="_blank"/>
                
        </>
    )
}