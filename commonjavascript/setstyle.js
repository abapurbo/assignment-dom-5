const donationTab=document.getElementById('btn-show-donation');
donationTab.addEventListener('click',function(){
    donationTab.classList.add('bg-[#B4F461]', 'text-[#111111]');
    document.getElementById('btn-show-history').classList.add( 'text-[#111111B3]')
    donationTab.classList.remove('border-2')
    document.getElementById('btn-show-history').classList.remove('bg-[#B4F461]', 'text-[#111111]')
    document.getElementById('btn-show-history').classList.add('border-2')
    
})



//history section
const historyTab = document.getElementById('btn-show-history');
historyTab.addEventListener('click', function() {
    historyTab.classList.add('bg-[#B4F461]', 'text-[#111111]');
    document.getElementById('btn-show-donation').classList.add( 'text-[#111111B3]')
    historyTab.classList.remove('border-2')
    document.getElementById('btn-show-donation').classList.remove('bg-[#B4F461]', 'text-[#111111]')
    document.getElementById('btn-show-donation').classList.add('border-2')
 

});
