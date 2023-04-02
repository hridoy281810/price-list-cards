import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'

const Features = ({feature}) => {
    return (
        <div className='flex items-center gap-3'>
            <CheckCircleIcon className='h-5 w-5 text-orange-300'></CheckCircleIcon>
            <span>{feature}</span>
        </div>
    );
};

export default Features;