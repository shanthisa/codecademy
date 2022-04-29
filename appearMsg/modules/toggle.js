export const toggleDisplay = (domElement) => {
    if (domElement.style.display === 'none') domElement.style.display = 'block';
    else domElement.style.display = 'none';
}

export const displayRandomColor = (domElement) => {
    const r = Math.random()*255;
    const g = Math.random()*255;
    const b = Math.random()*255;
    domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// export {toggleDisplay, displayRandomColor}