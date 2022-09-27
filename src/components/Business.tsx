import * as React from 'react';
import styles, { layout } from "../style";
import style from "../style";
import { Button } from "./Button";
import { features } from "../constants";
import { FeatureCard } from "./index";

export default function Business() {
    return (
        <section id="features" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/>we'll handle the money.</h2>
                <p className={`${style.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundred of credit cards on the market.</p>
                <Button styles="mt-10"/>
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} index={index} feature={feature} isLast={features.length - 1 === index} />
                ))}
            </div>
        </section>
    );
};
