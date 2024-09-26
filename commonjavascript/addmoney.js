
document.getElementById('first-add-money').addEventListener('click',function(){
    const addMoney= getInputByAddMoney('input-add-money')
   
    if(isNaN(addMoney)){
        alert('Invalid Donation amount')
        return
    }
    if(typeof addMoney==='number' && addMoney!==0){
        const balance= getTextByAddMoney('balance-1')
         const mainAmount=getTextByAddMoney('main-balance')
         if(addMoney<mainAmount){
            const newBalance=balance+addMoney
            document.getElementById('balance-1').innerText=newBalance;

            const newMainAmount=mainAmount-addMoney;
            document.getElementById('main-balance').innerText=newMainAmount;
            document.getElementById('input-add-money').value = '';
         //history section show
          const div=document.createElement('div');
          div.id="history-container"
          div.classList.add('border-2','rounded-3xl','space-y-3','w-[1011px]','h-[136px]','p-8','m-auto',)
          document.getElementById('history-section').appendChild(div)
          const p=document.createElement('p');
          p.classList.add('text-[20px]','font-semibold','text-[#111111')
          p.innerText=`${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh`
         div.appendChild(p)

         //Time and date sete in your history section
          const time = new Date();
          const timeP=document.createElement('p');
          timeP.innerText=`Date:${time}`
          div.appendChild(timeP)
         }
         document.getElementById("my_modal_1").showModal()
    
         }
          else if(addMoney>mainAmount){
            alert('Your Donation Invalid')
          }

      

        else{
        alert('Invalid Donation amount')
        return;
     }
})
// second card section

document.getElementById('second-add-money').addEventListener('click',function(){
    const addMoney= getInputByAddMoney('input-2-add-money')
   
    if(isNaN(addMoney)){
        alert('Invalid Donation amount')
        return
    }
    if(typeof addMoney==='number' && addMoney!==0){
        const balance= getTextByAddMoney('balance-2')
         const mainAmount=getTextByAddMoney('main-balance')
         if(addMoney<mainAmount){
            const newBalance=balance+addMoney
            document.getElementById('balance-2').innerText=newBalance;

            const newMainAmount=mainAmount-addMoney;
            document.getElementById('main-balance').innerText=newMainAmount;
            document.getElementById('input-2-add-money').value = '';
         
          //  history section
          const div=document.createElement('div');
          div.id="history-container"
          div.classList.add('border-2','rounded-3xl','space-y-3','w-[1011px]','h-[136px]','p-8','m-auto',)
          document.getElementById('history-section').appendChild(div)
          const p=document.createElement('p');
          p.classList.add('text-[20px]','font-semibold','text-[#111111')
          p.innerText=`${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh`
         div.appendChild(p)

         //Time and date sete in your history section
          const time = new Date();
          const timeP=document.createElement('p');
          timeP.innerText=`Date:${time}`
          div.appendChild(timeP)
         }
         document.getElementById("my_modal_1").showModal()
     
      }
          else if(addMoney>mainAmount){
            alert('Your Donation Invalid')
          }

       

     else{
        alert('Invalid Donation amount')
        return;
     }
})
// third card section
document.getElementById('third-add-money').addEventListener('click',function(){
    const addMoney= getInputByAddMoney('input-3-add-money')
   
    if(isNaN(addMoney)){
        alert('Invalid Donation amount')
        return
    }
    if(typeof addMoney==='number' && addMoney!==0){
        const balance= getTextByAddMoney('balance-3')
         const mainAmount=getTextByAddMoney('main-balance')
         if(addMoney<mainAmount){
            const newBalance=balance+addMoney
            document.getElementById('balance-3').innerText=newBalance;

            const newMainAmount=mainAmount-addMoney;
            document.getElementById('main-balance').innerText=newMainAmount;
            document.getElementById('input-3-add-money').value = '';
        //  history section
        const div=document.createElement('div');
        div.id="history-container"
        div.classList.add('border-2','rounded-3xl','space-y-3','w-[1011px]','h-[136px]','p-8','m-auto',)
        document.getElementById('history-section').appendChild(div)
        const p=document.createElement('p');
        p.classList.add('text-[20px]','font-semibold','text-[#111111')
        p.innerText=`${addMoney} Taka is Donated for famine-2024 at Feni, Bangladesh`
       div.appendChild(p)

       //Time and date sete in your history section
        const time = new Date();
        const timeP=document.createElement('p');
        timeP.innerText=`Date:${time}`
        div.appendChild(timeP)
     
         }
         document.getElementById("my_modal_1").showModal()
      }     
          else if(addMoney>mainAmount){
            alert('Your Donation Invalid')
          }

     

     else{
        alert('Invalid Donation amount')
        return;
     }
})


