const clipText = (className) => {
    const divs = document.querySelectorAll(`.${className}`);
    for (let i = 0; i < divs.length; i++) {
        if (divs[i].className === className) {
            divs[i].innerHTML = divs[i].innerHTML.substring(0, 100) + `<buton> Read More</buton>`;
        }
    }
}



// const unClipText = (className) => {
//     const div = document.querySelector(`.${className}`);

//     div.innerHTML = div.innerHTML;
// }

export {
    clipText,
    // unClipText,
}