function generateNumber(){

    const entre = Math.ceil (document.querySelector(".input-entre").value)
    const e = Math.floor (document.querySelector(".input-e").value)


    if(e > entre & e >= 0 & entre >= 0){
        const result = Math.floor (Math.random() * (e - entre + 1)) + entre;

        alert(result)
  
    }
    else if( e < 0 || entre < 0){
        alert("Favor escolher numeros positivos")
    }

    else{
        
        alert("O valor a esquerda precisa ser MENOR do que o valor a direita")
    }
    
    
    

}