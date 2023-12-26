import React from "react";
import styles from "@/styles/index";
import SGrid from "../SGrid";
import { RatesInfo } from "@/constants/events";
import { TitleText } from "../CustomTexts";
import Link from "next/link";

const Rates = () => {
  return (
    <section id="rates" className={`flexCenter ${styles.paddings} z-2`}>
      <TitleText title={<>Rates</>} />
      <div className="grid grid-cols-3 gap-4 pl-20">
          <SGrid
            title={RatesInfo[0].title}
            context={RatesInfo[0].context}
            content={Object.values(RatesInfo[0])
              .slice(2)
              .map((rate) => (
                <li key={rate}>{rate}</li>
              ))}
          />
          <SGrid
            title={RatesInfo[1].title}
            context={RatesInfo[1].context}
            content={Object.values(RatesInfo[1])
              .slice(2)
              .map((rate) => (
                <li key={rate}>{rate}</li>
              ))}
          />
          <SGrid
            title={RatesInfo[2].title}
            context={RatesInfo[2].context}
            content={Object.values(RatesInfo[2])
              .slice(2)
              .map((rate) => (
                <li key={rate}>{rate}</li>
              ))}
          />
          <SGrid
            title={RatesInfo[3].title}
            context={RatesInfo[3].context}
            content={Object.values(RatesInfo[3])
              .slice(2)
              .map((rate) => (
                <li key={rate}>{rate}</li>
              ))}
          />
          <SGrid
            title={RatesInfo[4].title}
            context={RatesInfo[4].context}
            content={Object.values(RatesInfo[4])
              .slice(2)
              .map((rate) => (
                <li key={rate}>{rate}</li>
              ))}
          />
          <SGrid title='Custom' context='Anything on mind?' content={<Link href='/getInTouch'> Contact Us </Link>}  />
      </div>
    </section>
  );
};

export default Rates;
