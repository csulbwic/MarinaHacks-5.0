import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/prizes.module.css"; //A missing import
import {PrizeBubbleComponent} from "../components/PrizeBubbleComponent"
import { Prize } from "@/Data/prize"


export const Prizes = () => {
  
  return (
    <section id="prizes" className="py-24 flex flex-col items-center">
      <h1 className="text-6xl text-center font-extrabold text-[#FBACCC] mb-5 mt-1 font-nunito [text-shadow:0px_4px_3px_rgba(0,0,0,0.25)]">
        Prizes
      </h1>

      <div className="mt-12 grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-12 xl:gap-16">
  {Prize.slice(0, 4).map((item, index) => (
    <PrizeBubbleComponent
      key={index}
      name={item.name}
      img={item.PrizeImg}
    />
  ))}
</div>

    </section>
  )
}