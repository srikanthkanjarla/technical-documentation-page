// add active-link css class to highlight selected menu item
let menu = document.getElementById('menu');
menu.addEventListener('click',function(e){
    let activeLinkArr = menu.querySelectorAll('.active-link');
    if(activeLinkArr){
        activeLinkArr.forEach(function(link){
            link.classList.remove("active-link");
        })
    }
 e.target.classList.add('active-link');
})
