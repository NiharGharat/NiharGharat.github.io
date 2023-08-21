const iconCreditMapping = {
    "fedex": {
        "created_by": "Fedex icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/fedex"
    },
    "lti": {
        "created_by": "https://companieslogo.com/",
        "link": "https://companieslogo.com/larsen-toubro-infotech/logo/"
    },
    "stack_overflow": {
        "created_by": "Stack overflow icons created by Pixel perfect - Flaticon",
        "link": "https://www.flaticon.com/free-icons/stack-overflow"
    },
    "github": {
        "created_by": "Github icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/github"
    },
    "linkedin": {
        "created_by": "Linkedin icons created by Smashicons - Flaticon",
        "link": "https://www.flaticon.com/free-icons/linkedin"
    },
    "instagram": {
        "created_by": "Instagram icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/instagram"
    },
    "project_bash_scripts": {
        "created_by": "Linux icons created by Abu Shafiyya - Flaticon",
        "link": "https://www.flaticon.com/free-icons/linux"
    },
    "project_dropbox_photo_storage": {
        "created_by": "Dropbox icons created by Smashicons - Flaticon",
        "link": "https://www.flaticon.com/free-icons/dropbox"
    },
    "project_google_apartment_review_analyser": {
        "created_by": "Apartment icons created by amonrat rungreangfangsai - Flaticon",
        "link": "https://www.flaticon.com/free-icons/apartment"
    },
    "project_salesforce_reader": {
        "created_by": "Salesforce icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/salesforce"
    },
    "project_social_me": {
        "created_by": "Android icons created by Swifticons - Flaticon",
        "link": "https://www.flaticon.com/free-icons/android"
    },
    "project_tailor_sweat": {
        "created_by": "Gym icons created by kosonicon - Flaticon",
        "link": "https://www.flaticon.com/free-icons/gym"
    },
    "project_the_portfolio": {
        "created_by": "Cowboy created by Me - Nihar Gharat",
        "link": "https://www.instagram.com/nihar_ght/"
    },
    "project_yelp_reviews": {
        "created_by": "Yelp icons created by Smashicons - Flaticon",
        "link": "https://www.flaticon.com/free-icons/yelp"
    },
    "project_youtube_playlist_backup": {
        "created_by": "Youtube icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/youtube"
    },
    "project_personal": {
        "created_by": "Food icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/food"
    },
    "project_academic": {
        "created_by": "Medal icons created by Octopocto - Flaticon",
        "link": "https://www.flaticon.com/free-icons/medal"
    },
    "repo_private": {
        "created_by": "Privacy icons created by deemakdaksina - Flaticon",
        "link": "https://www.flaticon.com/free-icons/privacy"
    },
    "repo_public": {
        "created_by": "Public relations icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/public-relations"
    },
    "repo_me_author": {
        "created_by": "At icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/at"
    },
    "repo_me_contributor": {
        "created_by": "Team icons created by mynamepong - Flaticon",
        "link": "https://www.flaticon.com/free-icons/team"
    },
    "performance_monitoring": {
        "created_by": "Performance icons created by Parzival’ 1997 - Flaticon",
        "link": "https://www.flaticon.com/free-icons/performance"
    },
    "improvement_workflows": {
        "created_by": "Workflow icons created by ghost_icon - Flaticon",
        "link": "https://www.flaticon.com/free-icons/workflow"
    },
    "story_connector_apache_poi": {
        "created_by": "Xlsx icons created by Creativenoys01 - Flaticon",
        "link": "https://www.flaticon.com/free-icons/xlsx"
    },
    "story_connector_json": {
        "created_by": "Json icons created by Smashicons - Flaticon",
        "link": "https://www.flaticon.com/free-icons/json"
    },
    "story_git": {
        "created_by": "Git icons created by pictogramer - Flaticon",
        "link": "https://www.flaticon.com/free-icons/git"
    },
    "story_connector_jdbc": {
        "created_by": "Steam icons created by Freepik - Flaticon",
        "link": "https://www.flaticon.com/free-icons/steam"
    },
    "story_extra_bash_scripts": {
        "created_by": "Linux icons created by Abu Shafiyya - Flaticon",
        "link": "https://www.flaticon.com/free-icons/linux"
    }
}

export const CreditHandler = function({listOfCreditLogo, requiredMargins}) {
    let uniqueOnceSet = new Set(listOfCreditLogo);
    listOfCreditLogo = [...new Set(uniqueOnceSet)]
    const isPresent = listOfCreditLogo.length != 0;
    if (isPresent) {
        return (
            <div>
                {/* <hr className="my-4" /> */}
                <div className={`${requiredMargins ? requiredMargins : "mx-4 mt-4"} text-xs text-gray-400`}>
                    Icon Credits
                    <div className="m-2 flex flex-wrap">
                    {listOfCreditLogo.map((each) => {
                        let key = each.replace("mock_", "").replace(".png", "");
                        console.log(key)
                        const filteredFromMapForThatIcon = iconCreditMapping[key];
                        return (<span className="m-1 p-1 bg-gray-200 hover:bg-gray-100">{filteredFromMapForThatIcon.created_by} - {filteredFromMapForThatIcon.link}</span>)
                    })}
                    </div>
                </div>
            </div>
    )
    } else {
        return (<></>)
    }
}