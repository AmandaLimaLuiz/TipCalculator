const form = document.querySelector('#form');
let btn = [1.05,1.1,1.15,1.25,1.5];
let tipFinal = 0;
form.addEventListener('submit', function(e){
    e.preventDefault();

    const conta = e.target.querySelector('.valor');
    const btnO = e.target.querySelector('.btn-other');
    const numPessoa = e.target.querySelector('.people');

    const vconta = Number(conta.value);
    const vbtnO = Number(btnO.value);
    const vpess = Number(numPessoa.value);

    console.log(vconta, vbtnO, vpess);


    function tip () { 
        document.addEventListener('click', e =>{
           let tip = e.target;
       if(tip.classList.contains('btn5')){
           tipFinal = btn[0];
       }
       else if(tip.classList.contains('btn10')){
           tipFinal = btn[1];
       }
       else if(tip.classList.contains('btn15')){
           tipFinal = btn[2];
       }
       else if(tip.classList.contains('btn25')){
           tipFinal = btn[3];
       }
       else if(tip.classList.contains('btn50')){
           tipFinal = btn[4];
       }  
   });
   return tipFinal;
   }
   
    function setResultado() {  
        tip();
        if(tipFinal === 0){
            tipFinal = 1 + (vbtnO / 100);
        }
        let tipAmonunt = (vconta * tipFinal - vconta).toFixed(2);
        let totalPerson = ((vconta * tipFinal) / vpess).toFixed(2);
        let totalFim = (vconta * tipFinal).toFixed(2);
        
        
        
        const valorTip = document.querySelector('#valorTip');
        const totalPessoa = document.querySelector('#totalPessoa');
        const totalConta = document.querySelector('#totalConta');
    
        valorTip.innerHTML = `$${tipAmonunt}`;
        totalPessoa.innerHTML = `$${totalPerson}`;
        totalConta.innerHTML = `$${totalFim}`;

        function msg(){ 
            let msg;
            if(totalPessoa !== Number){
                msg = " Can't be zero";    
                const nump = document.getElementById('#numP');           
                numP.innerHTML = `  ${msg} `;  
            }else if (totalPessoa === Number){
                totalPessoa.innerHTML = `$${totalPerson}`;                   
            } 
        }
    msg();    
    }
    tip();
    setResultado();
    
    
});
