
document.getElementById('btn-show-donation').addEventListener('click',function(){
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById('home-page-section').classList.add('hidden')
   
})
document.getElementById('btn-show-history').addEventListener('click',function(){
    document.getElementById('history-section').classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('home-page-section').classList.add('hidden')
   
    
})

// blog page section
document.getElementById('blog-section').addEventListener('click',function(){
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('blog-section').classList.add('hidden');
    document.getElementById('home-page-section').classList.remove('hidden');
    document.getElementById('home-section').classList.remove('hidden');
    document.getElementById('nav-border').classList.add('hidden')
  


    
   
})
// home page section
document.getElementById('home-section').addEventListener('click',function(){
    document.getElementById('donation-section').classList.remove('hidden');
    document.getElementById('blog-section').classList.remove('hidden');
    document.getElementById('home-page-section').classList.add('hidden');
    document.getElementById('home-section').classList.add('hidden');
    document.getElementById('nav-border').classList.remove('hidden')
   
})

