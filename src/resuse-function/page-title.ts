export default function pageTitle() {
    function setPageTitle(dtitle:string){
        document.title = dtitle
    }
    return {
        setPageTitle
    }
}