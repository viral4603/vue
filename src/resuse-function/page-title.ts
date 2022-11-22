export default function pageTitle() {
    function setPageTitle(pTitle:string){
        document.title = pTitle
    }
    return {
        setPageTitle
    }
}