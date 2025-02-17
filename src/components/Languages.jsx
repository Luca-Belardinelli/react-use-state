import { useState } from 'react';

// COMPONENTE

export default function languages(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div >
            <div >
                <button onClick={() => setIsOpen((current) => !current)}>{props.title}</button>
            </div>
            {isOpen && props.description}
        </div>
    )
}