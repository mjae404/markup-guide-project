function scrollToHash() {
    const id = window.location.hash.substr(1);

    if(id) {
        const anchor = document.getElementById(id);

        if(anchor) {
            anchor.scrollIntoView();
        }
    }
}

export {
    scrollToHash
}