import * as React from 'react';
import { Feature } from "../models/feature.model";
import styles from "../style";

type Props = {
    index: number;
    feature: Feature;
    isLast: boolean;
};

export default function FeatureCard(props: Props) {
    return (
        <div className={`flex flex-row p-6 rounded-[20px] ${props.isLast ? 'mb-0' : 'mb-6'} feature-card`}>
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={props.feature.icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
            </div>

            <div className="flex-1 flex flex-col ml-3">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{props.feature.title}</h4>
                <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{props.feature.content}</p>
            </div>
        </div>
    );
};
