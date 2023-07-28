export const badge_src_personal_project = "/logos/badges/mock_project_personal.png";
export const badge_src_academic_project = "/logos/badges/mock_project_academic.png";
export const badge_src_private_project = "/logos/badges/mock_repo_private.png";
export const badge_src_public_project = "/logos/badges/mock_repo_public.png";
export const badge_title_personal_project = "Personal Project";
export const badge_title_academic_project = "Academic Project";
export const badge_title_private_project = "Private Repo";
export const badge_title_public_project = "Public Repo";

const EachBadge = function(props) {
    return (
        <li>
            <img title={props.badgeData.get('title')} className="p-2 h-10 sm:h-12 inline-block float-right" src={props.badgeData.get('src')} alt={props.badgeData.get('title')} />
        </li>
    )
}

// const pushData = (dataArray, key, value) => {
//     dataArray.push({key, value});
// };

/*
TODO
- Write this logic better
*/
export const handleBadges = function(projectPersonalBadge, projectPrivateBadge) {
    let badgesArray = []
    badgesArray.push(badgeSelection(projectPersonalBadge, badge_title_personal_project, badge_title_academic_project, badge_src_personal_project, badge_src_academic_project))
    badgesArray.push(badgeSelection(projectPrivateBadge, badge_title_private_project, badge_title_public_project, badge_src_private_project, badge_src_public_project))
    return badgesArray
}

export const BadgesSection = function(props) {
    return (
        <ul key={props.unq} className={props.classToUse}>
            {props.badgesArray.map(e => (
                <EachBadge key={e.get('title')} badgeData={e} />
            ))}
        </ul>
    )
}

export const badgeSelection = function(boolCndn, title1, title2, src1, src2, type) {
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
}