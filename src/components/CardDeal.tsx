import * as React from 'react';
import styles from "../style";
import style, { layout } from "../style";
import { Button } from "./Button";
import { card } from "../assets";

export default function CardDeal() {
    return (
        <section id="card_deal" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>in few easy steps.</h2>
                <p className={`${style.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet eget mauris tortor. Aliquet ultrices ac, ametau</p>
                <Button styles="mt-10"/>
            </div>

            <div className={`${layout.sectionImg}`}>
                <img src={card} alt="card" className="w-[100%] h-[100%]"/>
            </div>
        </section>
    );
};
