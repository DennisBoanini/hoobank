import * as React from 'react';
import style from "../style";
import { clients } from "../constants";

export default function Clients() {
    return (
        <section id="clients" className={`${style.flexCenter} my-4`}>
            <div className={`${style.flexCenter} flex-wrap w-full`}>
                {clients.map(client => (
                    <div key={client.id} className={`flex-1 ${style.flexCenter} ms:min-w-[192px] min-w-[120px]`}>
                        <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
                    </div>
                ))}
            </div>
        </section>
    );
};
