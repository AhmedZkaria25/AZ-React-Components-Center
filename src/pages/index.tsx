import React, { useEffect } from 'react'
import TabsPage from '../components/TabsPage'
import { url } from 'inspector/promises';

interface Props {
    
}

const Page = (props: Props) => {
    // const fs = require('node:fs/promises'); // Use the promises API
    // const path = require('path');

    // async function fetchExternalFile() {
    //     try {
    //         // Construct an absolute path to the file outside the project, 
    //         // e.g., in a 'common' directory adjacent to the project root
            
    //         // const externalPath = path.resolve(__dirname, '../../common/externalFile.js'); 
    //         // const externalPath = path.resolve(__dirname, 'https://github.dev/AhmedZkaria22/Vue.js-Todo-App/blob/main/src/components/TodosList.vue'); 
    //         // const data = await fs.readFile(externalPath, { encoding: 'utf8' });

    //         const response = await fetch('https://github.dev/AhmedZkaria22/Vue.js-Todo-App/blob/main/src/components/TodosList.vue');
    //         const data = await response.text();
    //         console.log('ddd', data);
    //     } catch (error) {
    //         console.error('Error reading file:', error);
    //     }
    // }
    
    // useEffect(() => {
    //     fetchExternalFile();    
    // }, [])

    return (
        // <div>
        //     <h1>AZ React Components Center</h1>
            <TabsPage />
        // </div>
    )
}

export default Page
