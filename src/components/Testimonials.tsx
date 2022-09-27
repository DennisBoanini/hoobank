import * as React from 'react';
import style from "../style";
import { feedback } from "../constants";
import { FeedbackCard } from "./index";

export default function Testimonials() {
    return (
        <section id="clients" className={`${style.paddingY} ${style.flexCenter} flex-col relative`}>
            <div className="absolute z-0 w-[60%] h-[60%] rounded-full -right-[50%] blue__gradient"/>

            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1 className={style.heading2}>What people are <br className="hidden sm:block"/>saying about us</h1>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${style.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
            </div>

            <div className="flex flex-wrap sm:justify-start justify-center w-full relative feedback-container z-[1]">
                {feedback.map(feedbackItem => (
                    <FeedbackCard key={feedbackItem.id} feedback={feedbackItem}/>
                ))}
            </div>
        </section>
    );
};
