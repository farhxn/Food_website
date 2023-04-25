let cart = document.querySelector('.shopping-cart-container');
document.querySelector('#cart-btn').onclick= () =>{
    menu.classList.remove('active')
    cart.classList.toggle('active')
    login.classList.remove('active')
}

let login = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick= () =>{
    login.classList.toggle('active')
    menu.classList.remove('active')
    cart.classList.remove('active')
}

let menu = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick= () =>{
    menu.classList.toggle('active')
    login.classList.remove('active')
    cart.classList.remove('active')
}

window.onscroll= () =>{
    menu.classList.remove('active')
}


document.querySelector('.home').onmousemove=(e)=>{
    let x  = (window.innerWidth-e.pageX*2)/90;
    let y  = (window.innerHeight-e.pageY*2)/90;
    document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px)translateY(${x}px)`
}

document.querySelector('.home').onmouseleave=()=>{

    document.querySelector('.home .home-parallax-img').style.transform = `translateX(0px)translateY(0px)`
}