import Link from "next/link";
import { pre_contact_badges } from "../constants";

export const Channel = function(props) {
    const srcToUse = "/logos/badges/" + pre_contact_badges + props.data.logo;
    return (
        <li>
            <Link href={props.data.url} target="_blank" rel='noopener noreferrer'><img className="p-2 h-10 sm:h-12 inline-block float-right transform hover:scale-125 transition ease-in-out duration-300" src={srcToUse} title={props.data.title} alt={props.data.title} /></Link>
        </li>
    )
}