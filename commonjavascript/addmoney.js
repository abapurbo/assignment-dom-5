document.getElementById('first-add-money').addEventListener('click',function(){
    const addMoney= getInputByAddMoney('input-add-money')
   
    if(isNaN(addMoney)){
        alert('Invalid Donation amount')
        return
    }
    if(typeof addMoney==='number' && addMoney>=0){
        const balance= getTextByAddMoney('balance-1')
         const mainAmount=getTextByAddMoney('main-balance')
         if(addMoney<mainAmount){
            const newBalance=balance+addMoney
            document.getElementById('balance-1').innerText=newBalance;

            const newMainAmount=mainAmount-addMoney;
            document.getElementById('main-balance').innerText=newMainAmount;
            

         }
          else if(addMoney>mainAmount){
            alert('Your Donation Invalid')
          }

        }

     else{
        alert('Invalid Donation amount')
        return;
     }
})
// second card section
document.getElementById('second-add-money').addEventListener('click',function(){
    const addMoney= getInputByAddMoney('input-add-money')
   
    if(isNaN(addMoney)){
        alert('Invalid Donation amount')
        return
    }
    if(typeof addMoney==='number' && addMoney>=0){
        const balance= getTextByAddMoney('balance-2')
         const mainAmount=getTextByAddMoney('main-balance')
         if(addMoney<mainAmount){
            const newBalance=balance+addMoney
            document.getElementById('balance-2').innerText=newBalance;

            const newMainAmount=mainAmount-addMoney;
            document.getElementById('main-balance').innerText=newMainAmount;
         }
          else if(addMoney>mainAmount){
            alert('Your Donation Invalid')
          }

        }

     else{
        alert('Invalid Donation amount')
        return;
     }
})
// third card section
document.getElementById('third-add-money').addEventListener('click',function(){
    const addMoney= getInputByAddMoney('input-add-money')
   
    if(isNaN(addMoney)){
        alert('Invalid Donation amount')
        return
    }
    if(typeof addMoney==='number' && addMoney>=0){
        const balance= getTextByAddMoney('balance-3')
         const mainAmount=getTextByAddMoney('main-balance')
         if(addMoney<mainAmount){
            const newBalance=balance+addMoney
            document.getElementById('balance-3').innerText=newBalance;

            const newMainAmount=mainAmount-addMoney;
            document.getElementById('main-balance').innerText=newMainAmount;
         }
          else if(addMoney>mainAmount){
            alert('Your Donation Invalid')
          }

        }

     else{
        alert('Invalid Donation amount')
        return;
     }
})