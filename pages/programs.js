import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { programsArray, programsUtils} from "../components/utils"
import GetInvolved from "../components/getinvolved"

export default function Programs(){

    const [activeNumber,changeActiveNumber] = useState(0)

    return(
        <section>
            <Head>
                <link rel="preload" as="image" href="/images/pline.png" />
            </Head>

            <div className="pline py-[38px] md:py-[62px]"> 
                <div className="px-6 md:px-0 md:container mx-auto p-0 md:px-5 flex md:flex-row flex-col">
                    <div className="pb-[60px] md:pb-0 md:pr-[60px] md:w-[650px] border-[#A0AEC0] md:border-b-0 border-b-[0.5px]">
                        <h1 className="text-42 md:text-56 text-[#343232] font-[700] md:text-left text-center leading-[61px] mb-[64px] font-paytone">Our <br className="hidden md:block" /> <span className='text-pry'>programs</span></h1>
                        {programsUtils.map(program => {
                            return (
                                <div onClick={() => changeActiveNumber(program.id)} key={program.id} className={`${activeNumber === program.id ? "bg-[#E7E5EA]  border-[0.682471px] border-[#D68676]" : "transparent"} font-fellix mb-[16.3px] hover:bg-[#E7E5EA] border-[#E7E5EA] transition duration-100 cursor-pointer flex items-center rounded-[21.8391px] p-[22px] hover:border-[#D68676] border-[0.682471px]`}>
                                    <div className="relative w-[22px] h-[22px] mr-[18px]">
                                        <Image src={program.image} alt="category" layout="fill" quality={100}  priority />
                                    </div>
                                    <p className="text-14 text-[#1A202C] font-[700] leading-[19px] grow">{program.text}</p>
                            </div>
                            )
                        })}
                        
                    </div>
                    <div className="program_content md:mt-0 mt-[75px] w-[100%] md:border-t-none md:border-l-[0.5px] h-[930px] md:h-[988px]  border-[#A0AEC0] relative font-fellix ">
                        {programsArray.map(program => {
                            return (
                                <AnimatePresence>
                                    <motion.div
                                        key={activeNumber}
                                        initial={{ opacity: 0  }}
                                        animate={activeNumber === program.id ? { opacity: 1 } : { opacity: 0  }}
                                        exit={{ opacity: 0 }}
                                        className={`${activeNumber === program.id ? "block" : "hidden"} md:px-[62px] pr-3  md:py-[34px] leading-[24px] absolute`}
                                    >
                                        {program.component}
                                    </motion.div>
                                </AnimatePresence>
                            )
                        })}
                    </div>
                </div>
            </div>
            <section className="mt-[98px] md:mt-[118px] mb-[124px]">
                <GetInvolved />
            </section>
        </section>
    )

}