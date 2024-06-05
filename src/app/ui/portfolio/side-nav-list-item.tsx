interface SideNavListItem{
    text? : string,
    href? : string
}

export default function SideNavListItem(props : SideNavListItem){
    return(
        <a href={props.href}>
            <li className="text-base font-medium hover:font-semibold mb-2">{props.text}</li>
        </a>
    )
}