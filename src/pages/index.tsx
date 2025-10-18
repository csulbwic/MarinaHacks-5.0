import Landing from "@/components/Landing";
import { NavBar } from "@/components/NavBar";         
import { Footer } from "@/components/Footer";         

import {
  Contact,
  Faq,
  Info,
  Prizes,
  Pillars,
  Team,
  Teaser,
} from "@/views";

export default function Home() {
  return (
    <div className="bg-[#DFF9FF]">
      {/* keep navbar on top without changing NavBar.tsx */}
      <div className="sticky top-0 z-[70]">
        <NavBar />
      </div>
      <Landing />
      <Info />
      <Team />
      <Pillars />
      <Prizes />
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}

/*
<Bubbles />
<Landing />
<Info />
<Team />
<Pillars />
<Prizes/>
<Faq />
<Contact />
*/