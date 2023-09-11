var crsr =document.querySelector("#cursor");
var blurr =document.querySelector("#cursor-blur");


document.addEventListener('mousemove', (e) => {
    crsr.style.left = e.x + "px";
    blurr.style.left = e.x - 200 + "px";
    crsr.style.top = e.y  +"px";
    blurr.style.top = e.y  - 200 + "px";
});

var nav_h4 = document.querySelectorAll('#nav h4');

nav_h4.forEach((ele)=>{
    ele.addEventListener('mouseenter',(e)=>{
        crsr.style.scale = 3;
        crsr.style.border = `1px solid white`;
        crsr.style.backgroundColor = `transparent`;
    })

    ele.addEventListener('mouseleave',(e)=>{
        crsr.style.scale = 1;
        crsr.style.border = `none`;
        crsr.style.backgroundColor = `#95c11e`;
    })
})




gsap.to('#nav',{
    backgroundColor:"#000",
    duration:0.5,
    height:'103px',
    scrollTrigger:{
        trigger:'#nav',
        scroller:'body',
        start:'top -10%',
        end:'top -11%',
        scrub:1.5
    },
})


gsap.to('#main',{
    backgroundColor:'#000',
    scrollTrigger:{
        trigger:'#main',
        scroller:'body',
        start:'top -25%',
        end:'top -55%',
        scrub:1.5
    }
})

gsap.from('#about-us img , #about-us-in',{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:'top 60%',
        end:'top 58%',
        scrub:1,
    }
})




gsap.from('#card1',{
    x:-1000,
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        start:'top 70%',
        end:'top 69%',
        scrub:0.2,
    }
})

gsap.from('#card2',{
    y:1000,
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        start:'top 70%',
        end:'top 69%',
        scrub:0.2,
    }
})


gsap.from('#card3',{
    x:1000,
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#cards-container",
        scroller:"body",
        start:'top 70%',
        end:'top 69%',
        scrub:0.2,
    }
})

gsap.from('#colon1',{
    x:-200,
    opacity:0,
    rotate:180,
    duration:1,
    scrollTrigger:{
        trigger:'#page3',
        start:'top 60%',
        end:'top 40%',
        scrub:3,
    }
})

gsap.from('#colon2',{
    x:200,
    rotate:180,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#page3',
        start:'top 30%',
        end:'top 10%',
        scrub:3,
    }
})

gsap.from('#page3 p',{
    y:300,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:'#page3',
        start:'top 70%',
        end:'top 60%',
        scrub:3,
    }
})


var page4_h1 = document.querySelector('#page4 h1');
var page4_elem = document.querySelectorAll('.elem');

page4_elem.forEach((elem)=>{
    elem.addEventListener('mouseover',()=>{
        page4_h1.style.textShadow=`-1px -1px 0 #95c11e,1px -1px 0 #95c11e,-1px 1px 0 #95c11e,1px 1px 0 #95c11e` 
    });
})
page4_elem.forEach((elem)=>{
    elem.addEventListener('mouseout',()=>{
        page4_h1.style.textShadow=`-1px -1px 0 white,1px -1px 0 white,-1px 1px 0 white,1px 1px 0 white` 

    });
})

gsap.from('#page4 h1',{
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:'#page4 h1',
        start:'top 80%',
        end:'top 85%',
        scrub:2,
    }
})