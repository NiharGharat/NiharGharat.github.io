const badge_title_personal_project = "Personal Project";
const badge_title_academic_project = "Academic Project";
const badge_src_personal_project = "/logos/badges/mock_project_personal.png";
const badge_src_academic_project = "/logos/badges/mock_project_academic.png";

const badge_src_private_project = "/logos/badges/mock_repo_private.png";
const badge_src_public_project = "/logos/badges/mock_repo_public.png";
const badge_title_private_project = "Private Repo";
const badge_title_public_project = "Public Repo";

const badge_src_me_author_project = "/logos/badges/mock_repo_me_author.png";
const badge_src_me_contributor_project = "/logos/badges/mock_repo_me_contributor.png";
const badge_title_me_author_project = "@Author";
const badge_title_me_contributor_project = "Contributor";

export const type_personal_project = "personalProject";
export const type_private_project = "privateProject";
export const type_author_project = "myself_author";

const EachBadge = function(props) {
    console.log("Inside")
    console.log(props.badgeData)
    return (
        <li>
            <img title={props.badgeData.title} className="p-2 h-10 sm:h-12 inline-block float-right" src={props.badgeData.src} alt={props.badgeData.title} />
        </li>
    )
}

export const getBadgeInfo = function(type, isProjectPersonalBadge) {
    let jsonToReturn;
    let titleToUse;
    let srcToUse;
    if (type === type_personal_project) {
        titleToUse = isProjectPersonalBadge ? badge_title_personal_project : badge_title_academic_project;
        srcToUse = isProjectPersonalBadge ? badge_src_personal_project : badge_src_academic_project;
        jsonToReturn = {
            type: type_personal_project,
            src: srcToUse,
            title: titleToUse,
        };
    } else if (type === type_private_project) {
        titleToUse = isProjectPersonalBadge ? badge_title_private_project : badge_title_public_project;
        srcToUse = isProjectPersonalBadge ? badge_src_private_project : badge_src_public_project;
        jsonToReturn = {
            type: type_personal_project,
            src: srcToUse,
            title: titleToUse,
        };
    } else if (type === type_author_project) {
        titleToUse = isProjectPersonalBadge ? badge_title_me_author_project : badge_title_me_contributor_project;
        srcToUse = isProjectPersonalBadge ? badge_src_me_author_project : badge_src_me_contributor_project;
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

export const BadgesSection = function(props) {
    return (
        <ul key={props.unq} className={props.classToUse}>
            {props.badgesArray.map(e => (
                <EachBadge key={e.title} badgeData={e} />
            ))}
        </ul>
    )
}

/*export const badgeSelection = function(boolCndn, title1, title2, src1, src2, type) {
    let theMap = new Map();
    let badgeCompSrc;
    let title;
    if (boolCndn) {
        badgeCompSrc = src1
        title = title1
    } else {
        badgeCompSrc = src2
        title = title2
    }
    theMap.set('src', badgeCompSrc)
    theMap.set('type', type)
    theMap.set('title', title)
    return theMap
}*/