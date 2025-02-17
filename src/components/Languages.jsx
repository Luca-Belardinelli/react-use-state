import { useState } from 'react';

// COMPONENTE

export default function languages(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='lang' >
            <div>
                <button className='btn' onClick={() => setIsOpen((current) => !current)}>{props.title}</button>
            </div>
            {isOpen && props.description}
        </div>
    )
}