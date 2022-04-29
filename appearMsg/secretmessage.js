    import {toggleDisplay, displayRandomColor} from '../modules/toggle.js';
    
    let btn = document.getElementById('dare');
    let pElement = document.getElementById('message');

    // const toggleDisplay = (domElement) => {
    //     if (domElement.style.display === 'none') domElement.style.display = 'block';
    //     else domElement.style.display = 'none';
    // }

    btn.addEventListener('click', () => {
        toggleDisplay(pElement);
        displayRandomColor(btn);
    })
