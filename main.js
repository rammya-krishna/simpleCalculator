
const btn = document.querySelectorAll("button");
let total=0
let input=""
Array.from(btn).forEach(element => {
            element.addEventListener('click',()=>{
                if (event.target.innerHTML==='0' && input=="0"){
                    return ;
                }
                if (event.target.innerHTML==='.' && input.at(-1)=="."){
                    return ;
                }
                if(event.target.innerHTML==='AC'){
                        total=0
                        input=""
                        document.getElementById("total").innerText=total;       
                }
                else if (event.target.innerHTML==='='){
                    if ( ['/','+','-','*'].includes(input.at(-1))){
                        input=input.slice(0,-1)
                    }

                    total =calc(input.match(/(\d+(?:\.\d+)?|\+|\-|\*|\/)/g))
                    document.getElementById("total").innerText=total;
                }
                else{
                    if ( ['/','+','-','*'].includes(event.target.innerText) && ['/','+','-','*'].includes(input.at(-1))){
                        input=input.slice(0,-1)
                    }
                    input+=(event.target.innerText)
                    document.getElementById("total").innerText=event.target.innerText;
                }
                document.getElementById("allinput").innerText=input;
                
            })
            
});

function calc(elements){
    result=parseFloat(elements[0])
    console.log(elements)
    for (let i = 1; i < elements.length; i += 2) {
        let operator = elements[i];
        let num = parseFloat(elements[i + 1]);
        if (operator === '+') {
            result += num;
        } else if (operator === '-') {
            result -= num;
        } else if (operator === '*') {
            result *= num;
        } else if (operator === '/') {
            result /= num;
        }
    }
   
    return result.toFixed(1)
}


