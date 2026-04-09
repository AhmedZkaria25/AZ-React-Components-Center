export const fetchComponents = async (projectName, componentFile, arrayModify, indexModify, propertyModify) => {
    const url = `https://raw.githubusercontent.com/AhmedZkaria25/AZ-React-Components-Center/refs/heads/main/src/components/${projectName}/components/${componentFile}`;
    await fetch(url).then(res => res.text()).then(content => {
        arrayModify[indexModify][`${propertyModify}`] = content;
        return content;
    });
}

export const fetchStyles = async (projectName, styleFile, arrayModify, indexModify, propertyModify) => {
    const url = `https://raw.githubusercontent.com/AhmedZkaria25/AZ-React-Components-Center/refs/heads/main/src/components/${projectName}/styles/${styleFile}`;
    await fetch(url).then(res => res.text()).then(content => {
        arrayModify[indexModify][`${propertyModify}`] = content;
        return content;
    });
}

export const fetchComponentsStyles = async (projectName, componentFolder, componentStyleFile, arrayModify, indexModify, propertyModify) => {
    const url = `https://raw.githubusercontent.com/AhmedZkaria25/AZ-React-Components-Center/refs/heads/main/src/components/${projectName}/components/${componentFolder}/${componentStyleFile}`;
    await fetch(url).then(res => res.text()).then(content => {
        arrayModify[indexModify][`${propertyModify}`] = content;
        return content;
    });
}