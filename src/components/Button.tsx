import * as React from 'react';

type Props = {
    styles?: string
}

export function Button(props: Props) {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${props.styles}`}>
            Get Started
        </button>
    );
};
