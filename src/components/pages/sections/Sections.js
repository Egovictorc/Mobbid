import React, {Suspense} from 'react';

import Definition from './Definition';
import Work from './Work';
import { default as Experience, Improve } from './Experience';


const Sections = () => {
    const fallBack = <p>Loading ...</p>;

    return (
        <Suspense fallback={fallBack}>
            <Definition />
            <Work />
            <Experience />
            <Improve />
        </Suspense>
    )
}


export default Sections;