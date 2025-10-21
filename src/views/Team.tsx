import { members } from "@/Data/members"
import { Profile } from "@/components"
import styles from "@/styles/team.module.css";

export const Team = () => {
    return (
      <div id ="teams" className={styles.teamContainer}>

         <h1 className={`${styles.teamHeading} text-5xl mb-20`}>MarinaHacks Team</h1>
         <div>
            <div className={styles.websiteCommitteeWrap}>
                {/* DIRECTORS GRAPHICS */}
                <img
                    src="/images/teams_graphics/directors_graphics2.svg"    
                    alt="Directors"
                    className={`${styles.websiteBG} -mb-80`}
                />
            </div>

            {/* MARINAHACKS DIRECTORS */}
            <img
                src="/images/teams_graphics/directors_title.svg"    
                alt="Directors"
                className={`${styles.committeeImage} -mb-80`}
            />

            <div className={`${styles.memberContainer} mb-20`}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 1).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="marinaHacksCommittee"
                            />
                )
                })}
            </div>
            </div>
        
        <div className={styles.committeeHeading}>

            <div className={styles.websiteCommitteeWrap}>
                {/* DESIGN GRAPHICS */}
                <img
                    src="/images/teams_graphics/designteam_graphics.svg"    
                    alt="Design"
                    className={`${styles.websiteBG} -mb-80`}
                />
            </div>

            {/* DESIGN TEAM */}
            <img
                src="/images/teams_graphics/designteam_title.svg"    
                alt="Design Team"
                className={`${styles.committeeImage} mt-40`}
            />
            
            <div className={styles.memberContainer}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 4).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="designCommittee"
                        />
                )
                })}
            </div>
        </div>

        <div className={styles.committeeHeading}>
            <div className={styles.websiteCommitteeWrap}>
                {/* WEBSITE TEAM GRAPHICS */}
                <img
                    src="/images/teams_graphics/websiteteam_graphics.svg"    
                    alt="Website"
                    className={`${styles.websiteBG} -mb-80`}
                />
            </div>
            
            {/* WEBSITE TEAM */}
            <img
                src="/images/teams_graphics/websiteteam_title.svg"    
                alt="Website"
                className={`${styles.committeeImage} -mb-80`}
            />

            <div className={styles.memberContainer}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 3).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="websiteCommittee"
                        />
                )
                })}
            </div>
        </div>
        
        <div>

            <div className={styles.websiteCommitteeWrap}>
                {/* WIC OFFICERS GRAPHICS */}
                <img
                    src="/images/teams_graphics/wicofficers_graphics.svg"    
                    alt="Website"
                    className={`${styles.websiteBG} -mb-80`}
                />
            </div>

            <div className={styles.memberContainer}>
                {/* WOMEN IN COMPUTING OFFICER */}
                <img
                    src="/images/teams_graphics/wicofficers_title.svg"    
                    alt="Officers"
                    className={`${styles.committeeImage} -mb-40`}
                />
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 2).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="officersCommittee"
                            />
                )
                })}
            </div>
        </div>
      </div>
    )
  }