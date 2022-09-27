import * as React from 'react';
import { Feedback } from "../models/feedback.model";
import { quotes } from "../assets";

type Props = {
    feedback: Feedback
}

export default function FeedbackCard(props: Props) {
    return (
        <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px] object-contain"/>
            <p className="font-poppins font-normal text-[18px] text-white leading-[32px] my-10">{props.feedback.content}</p>
            <div className="flex flex-row">
                <img src={props.feedback.img} alt={props.feedback.name} className="w-[48px] h-[48px] rounded-full"/>
                <div className="flex flex-col ml-4">
                    <h4 className="font-poppins font-semibold text-[20px] text-white leading-[32px]">{props.feedback.name}</h4>
                    <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">{props.feedback.title}</p>
                </div>
            </div>
        </div>
    );
};
