function generateNumber(){

    const entre = Math.ceil (document.querySelector(".input-entre").value)
    const e = Math.floor (document.querySelector(".input-e").value)

    const result = Math.floor (Math.random() * (e - entre + 1)) + entre;
    
    alert(result)

}