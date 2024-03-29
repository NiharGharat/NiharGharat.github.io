import { badge_base_path } from "../constants";

const badge_title_personal_project = "Personal Project";
const badge_title_academic_project = "Academic Project";
const badge_src_personal_project = "project_personal.png";
const badge_src_academic_project = "project_academic.png";

const badge_src_private_project = "repo_private.png";
const badge_src_public_project = "repo_public.png";
const badge_title_private_project = "Private Repo";
const badge_title_public_project = "Public Repo";

const badge_src_me_author_project = "repo_me_author.png";
const badge_src_me_contributor_project = "repo_me_contributor.png";
const badge_title_me_author_project = "@Author";
const badge_title_me_contributor_project = "Contributor";

export const type_personal_project = "personalProject";
export const type_private_project = "privateProject";
export const type_author_project = "myself_author";

const EachBadge = function (props) {
    return (
        <li>
            <img title={props.badgeData.title} className="p-2 h-10 sm:h-12 inline-block float-right transform hover:scale-125 transition ease-in-out duration-300" src={props.badgeData.src} alt={props.badgeData.title} />
        </li>
    )
}

export const getBadgeInfo = function (type, isProjectPersonalBadge) {
    let jsonToReturn;
    let titleToUse;
    let srcToUse = badge_base_path;
    if (type === type_personal_project) {
        titleToUse = isProjectPersonalBadge ? badge_title_personal_project : badge_title_academic_project;
        srcToUse += isProjectPersonalBadge ? badge_src_personal_project : badge_src_academic_project;
        jsonToReturn = {
            type: type_personal_project,
            src: srcToUse,
            title: titleToUse,
        };
    } else if (type === type_private_project) {
        titleToUse = isProjectPersonalBadge ? badge_title_private_project : badge_title_public_project;
        srcToUse += isProjectPersonalBadge ? badge_src_private_project : badge_src_public_project;
        jsonToReturn = {
            type: type_personal_project,
            src: srcToUse,
            title: titleToUse,
        };
    } else if (type === type_author_project) {
        titleToUse = isProjectPersonalBadge ? badge_title_me_author_project : badge_title_me_contributor_project;
        srcToUse += isProjectPersonalBadge ? badge_src_me_author_project : badge_src_me_contributor_project;
        jsonToReturn = {
            type: type_author_project,
            src: srcToUse,
            title: titleToUse,
        };
    } else {
        console.log("----IT WENT TO ELSE----")
        // OTHER TYPES GO HERE
    }
    return jsonToReturn;
}

export const BadgesSection = function (props) {
    return (
        <ul key={props.unq} className={props.classToUse}>
            {props.badgesArray.map(e => (
                <EachBadge key={e.title} badgeData={e} />
            ))}
        </ul>
    )
}