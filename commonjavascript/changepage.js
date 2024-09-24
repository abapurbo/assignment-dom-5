
document.getElementById('btn-show-donation').addEventListener('click',function(){
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')
})
document.getElementById('btn-show-history').addEventListener('click',function(){
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
   
    
})