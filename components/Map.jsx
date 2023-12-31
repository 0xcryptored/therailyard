'use client';
import { motion } from "framer-motion"
import styles from "@/styles";
import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText } from "./CustomTexts";
import React from "react";
import Image from "next/image";

const Map = () => {
  return (
    <section className={`relative ${styles.paddings}`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={<>Railyard Grounds</>}
          textStyles="text-center"
        />
      {/* Positionamiento Lineas con nombre */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative flex w-full h-full"
        >
          <div className="absolute left-0 top-0 md:w-[500px] h-[500px] bg-center bg-cover rail-2 z-0" style={{ transform: 'rotate(-145deg)' }} />
          <div className="absolute md:right-0 md:bottom-0 w-[510px] h-[500px] bg-center bg-cover rail-2 z-0" style={{ transform: 'rotate(-155deg)' }} />
          <div className="relative mx-auto w-[445px] h-[730px]">
            <Image src="/map.png" alt="map" className="md:w-full md:h-full" width={410} height={730}/>
          </div>
          <div className="absolute top-[22%] left-[55%] cursor-pointer" >
            <div className="w-[15px] h-[15px] rounded-full md:w-[255px] md:h-[4px] bg-blue-500 border border-white"/>
            <p className="absolute right-0 text-white font-bold custom-shadow" >PARKING</p>
          </div>

          <div className="absolute top-[22%] md:left-[22%] left-[10%] cursor-pointer" >
            <div className="w-[15px] h-[15px] rounded-full md:w-[255px] md:h-[4px] bg-blue-500 border border-white" />
            <p className="absolute left-0 text-white font-bold custom-shadow" >MAIN ENTRANCE</p>
          </div>

          <div className="absolute top-[39%] left-[57%] cursor-pointer">
            <div className="w-[15px] h-[15px] rounded-full md:w-[160px] md:h-[4px] bg-blue-500 border border-white" />
            <p className="absolute left-0 text-white font-bold custom-shadow" >SODA FOUNDATION</p>
          </div>

          <div className="absolute top-[50%] left-[23%] cursor-pointer">
            <div className="w-[15px] h-[15px] rounded-full md:w-[255px] md:h-[4px] bg-blue-500 border border-white" />
            <p className="absolute left-0 text-white font-bold custom-shadow" >THE BARN</p>
          </div>

          <div className="absolute md:bottom-[31%] bottom-[35%] left-[23%] cursor-pointer">
            <div className="w-[15px] h-[15px] rounded-full md:w-[255px] md:h-[4px] bg-blue-500 border border-white"/>
            <p className="absolute left-0 text-white font-bold custom-shadow">GARDEN SHED</p>
          </div>

          <div className="absolute md:bottom-[10%] bottom-[15%] left-[24%] cursor-pointer">
            <div className="w-[15px] h-[15px] rounded-full md:w-[255px] md:h-[4px] bg-blue-500 border border-white"/>
            <p className="absolute left-0 text-white font-bold custom-shadow">RAIL HOUSE</p>
          </div>

          <div className="absolute md:bottom-[32%] bottom-[36%] md:left-[55%] left-[67%] cursor-pointer">
            <div className="w-[15px] h-[15px] rounded-full md:w-[255px] md:h-[4px] bg-blue-500 border border-white"/>
            <p className="absolute right-0 text-white font-bold custom-shadow">SERVICE STATION</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
};

export default Map;
