import { members } from "@/Data/members"
import { Profile } from "@/components"
import styles from "@/styles/team.module.css";
import Image from "next/image";

/*
GROUP 1: Directors
GROUP 2: WiC Officers
GROUP 3: Website Committee
GROUP 4: Design Committee
GROUP 5: Sponsorship Committee
*/

export const Team = () => {
    return (
      <div id ="teams" className={styles.teamContainer}>
        <h1 className={`${styles.teamHeading} text-5xl mb-10`}>Meet the Team</h1>
        
        {/* DIRECTORS - BACKGROUND */}
        <section id="directors"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px]
        bg-[url('/images/teams_graphics/directors_graphics2.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
              <Image
                src="/images/teams_graphics/directors_title.svg"    
                alt="Directors"
                width={350}
                height={250}
                className=""
            />
            </div>

            <div className={`${styles.memberGrid}`}>
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
        </section>
        
        {/* DESIGN - BACKGROUND */}
        <section id="design"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px]
        bg-[url('/images/teams_graphics/designteam_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
              <Image
                src="/images/teams_graphics/designteam_title.svg"    
                alt="Design"
                width={500}
                height={250}
                className=""
            />
            </div>

            <div className={styles.memberGrid}
            style={ {maxWidth:"1000px"}}>
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
        </section>

        {/* WEBSITE - BACKGROUND */}
        <section id="website"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px]
        bg-[url('/images/teams_graphics/websiteteam_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
              <Image
                src="/images/teams_graphics/websiteteam_title.svg"    
                alt="Website"
                width={500}
                height={250}
                className="mt-20"
            />
            </div>

            <div className={styles.memberGrid}
            style={ {maxWidth:"1000px"}}>
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
        </section>

        {/* SPONSORSHIP - BACKGROUND */}
        <section id="sponsorship"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px]
        bg-[url('/images/teams_graphics/sponsorship_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
              <Image
                src="/images/teams_graphics/sponsorship_title.svg"    
                alt="Sponsorship"
                width={700}
                height={250}
                className="mt-20"
            />
            </div>

            <div className={styles.memberGrid}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 5).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="sponsorshipCommittee"
                    />
                )
                })}
            </div>
        </section>
        
        {/* WIC OFFICERS - BACKGROUND */}
        <section id="officers"
        className="relative overflow-visible flex flex-col items-center min-h-[500px] md:min-h-[500px]
        bg-[url('/images/teams_graphics/wicofficers_graphics.svg')]
        bg-no-repeat bg-contain bg-center">
            
            {/* TITLE */}
            <div>
              <Image
                src="/images/teams_graphics/wicofficers_title.svg"    
                alt="WICOfficers"
                width={800}
                height={250}
                className="mt-20"
            />
            </div>

            <div className={styles.memberGrid}
            style={ {maxWidth:"2000px"}}>
                {/* Map Members of group member only */}
                {members.filter((member) => member.group === 2).map((item, index) => {
                return (
                    <Profile 
                        name={item.name} 
                        role={item.role} 
                        img={item.img} 
                        key={index}
                        committeeType="officer"
                    />
                )
                })}
            </div>
        </section>
      </div>
    )
  }