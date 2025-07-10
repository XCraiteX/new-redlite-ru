export const handleHash = () => {
    const hash = window.location.hash;
    if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
            element.scrollIntoView( { behavior: "auto" } );
        }
    }
};