export class Input{
    constructor(){
        document.addEventListener("keydown",(e=>{
            console.log(e)
        }))
    }
}