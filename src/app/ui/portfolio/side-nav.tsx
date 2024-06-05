import {ROUTES}  from '../config';
import SideNavListItem from './side-nav-list-item';

export default function SideNav(){
    return(
        <>
            <ul>
                <SideNavListItem text="ABOUT" href={ROUTES.about}/>
                <SideNavListItem text="EXPERIENCE" href={ROUTES.experience}/>
                <SideNavListItem text="CERTIFICATIONS" href={ROUTES.certification}/>
            </ul>
        </>
    )
}