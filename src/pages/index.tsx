import { Landing, NavBar } from "@/components"
import { Contact, Faq, Info, Application, Prizes, Pillars, Sponsors, Team, Teaser} from "@/views"
import Bubbles from "@/components/Bubbles/Bubbles"
import IdeaGen from "@/components/IdeaGen"

export default function Home() {
  return (
    <div>
      <Bubbles />
      <NavBar />
      <Landing />
      <Info />
      <Application />
      <Team />
      <Pillars />
      <Prizes/>
      <IdeaGen />
      <Faq />
      <Contact />
    </div>
  )
}

/*
<Bubbles />
<Landing />
<Info />
<Application />
<Team />
<Pillars />
<Prizes/>
<IdeaGen />
<Faq />
<Contact />
*/