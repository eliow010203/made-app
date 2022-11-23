const m01 = document.getElementById('m01')
const m02 = document.getElementById('m02')
const m03 = document.getElementById('m03')
const m04 = document.getElementById('m04')
const selectEl = document.getElementById('select')
const pageEl = document.getElementById('item_contain')
const pageNEl = document.getElementById('pagename')
const pagename = ['탐색','여행 일정','이벤트','내 정보']

const sub_all = document.getElementById('sub_contain')
const sub_bg = document.getElementById('sub_bg')
const subEl = document.getElementById('sub_wrap')
const sub_open = document.getElementById('sub_open')
const sub_close = document.getElementById('sub_close')

const wrap = document.querySelectorAll('.wrap')[0]
const pageitem = document.querySelectorAll('.page')

const traveltotal = document.querySelectorAll(`.travel_total_box`)[0]

subpage(0)

m01.addEventListener('click',function(){sel(0)})
m02.addEventListener('click',function(){sel(1)})
m03.addEventListener('click',function(){sel(2)})
m04.addEventListener('click',function(){sel(3)})

sub_bg.addEventListener('click',function(){subpage(0)})
sub_open.addEventListener('click',function(){subpage(1)})
sub_close.addEventListener('click',function(){subpage(0)})

let on =0
let scrX = 0
let scrpX = 0
let winXper = (window.innerWidth/100)


window.addEventListener('resize',function(){
    winXper = (window.innerWidth/100)
})

pagemove=0



// pageEl.addEventListener('mousedown',function(e1){
//     on=1
//     scrX = e1.pageX
// })
// pageEl.addEventListener('mouseup',function(e2){
//     on=0
//     if(scrpX>=0){
//         let nValue = scrpX/100

//         numA = Math.abs((((scrX-e2.pageX))/winXper)-50)
//         numB = Math.abs((((scrX-e2.pageX))/winXper)+50)
//         if((Math.abs(numA-numB))>=60){
//             if(numA>numB){
//                 if(nValue==0){
//                     sel(nValue)
//                 }else{
//                     sel(nValue-1)
//                 }
                
//             }
            
//             if(numA<numB){
//                 if(nValue==3){
//                     sel(nValue)
//                 }else{
//                     sel(nValue+1)
//                 }
//             }
//         }else{
//             sel(nValue)
//         }
//     }

//     if(scrpX<0){
//         scrpX=0
//     }

//     if(scrpX>300){
//         scrpX=300
//     }
// })
// pageEl.addEventListener('mousemove',function(e3){
//     if(on==1){
//         pageEl.style.transition=`0s`
//         pageEl.style.left=`${(scrpX+(((scrX-e3.pageX))/winXper))*-1}vw`
//         if(((scrpX+(((scrX-e3.pageX))/winXper))*-1)>0){
//             pageEl.style.left=`0vw`
//         }

//         if(((scrpX+(((scrX-e3.pageX))/winXper))*-1)<-300){
//             pageEl.style.left=`-300vw`
//         }
//     }
// })





// tscrpX=0

// pageEl.addEventListener('touchstart',function(e4){
//     on=1
//     scrX = e4.targetTouches.item(0).pageX
// })
// pageEl.addEventListener('touchend',function(e5){
//     on=0
//     if(scrpX>=0){
//         let nValue = scrpX/100

//         numA = Math.abs((tscrpX/winXper)-50)
//         numB = Math.abs((tscrpX/winXper)+50)
//         if((Math.abs(numA-numB))>=20){
//             if(numA>numB){
//                 if(nValue==0){
//                     sel(nValue)
//                 }else{
//                     sel(nValue-1)
//                 }
                
//             }
            
//             if(numA<numB){
//                 if(nValue==3){
//                     sel(nValue)
//                 }else{
//                     sel(nValue+1)
//                 }
//             }
//         }else{
//             sel(nValue)
//         }
//     }


//     if(scrpX<0){
//         scrpX=0
//     }

//     if(scrpX>300){
//         scrpX=300
//     }
// })


// pageEl.addEventListener('touchmove',function(e6){
//     if(on==1){
//         pageEl.style.transition=`0s`
//         pageEl.style.left=`${(scrpX+(((scrX-e6.targetTouches.item(0).pageX))/winXper))*-1}vw`
//         if(((scrpX+(((scrX-e6.targetTouches.item(0).pageX))/winXper))*-1)>0){
//             pageEl.style.left=`0vw`
//         }

//         if(((scrpX+(((scrX-e6.targetTouches.item(0).pageX))/winXper))*-1)<-300){
//             pageEl.style.left=`-300vw`
//         }
//         tscrpX=(((scrX-e6.targetTouches.item(0).pageX))/winXper)
//     }
// })










function subpage(num1) {
    if(num1==1){
        sub_bg.style.pointerEvents=`all`
        sub_bg.style.opacity=`1`
        subEl.style.right=`-100px`
        pagemove=1
    }
    
    if(num1==0){
        sub_bg.style.pointerEvents=`none`
        sub_bg.style.opacity=`0`
        subEl.style.right=`-550px`
        pagemove=0
    }
}



let selW
let slidepagenum = 0
let itemheight = 0
let page_scroll = new Array(4)
page_scroll.fill(0)

sel(0)

function sel(num) {
  scrpX = 100*num
  scrpvX = 100*(num+1)
  selW=20*num
  pageEl.style.transition=`.3s`
  pageEl.style.left=`${-100*num}vw`
  selectEl.style.left=`${selW+(5*num)+4.5}%`
  pageNEl.innerText=`${pagename[num]}`



  slidepagenum=num

    itemheight = pageitem[slidepagenum].offsetHeight
    wrap.style.height=`${itemheight}px`

  window.scrollTo(0, page_scroll[slidepagenum])

  if(num==1){
    traveltotal.style.display=`block`
  }else{
    traveltotal.style.display=`none`
  }
}



window.addEventListener('scroll',function(e){
  page_scroll[slidepagenum]=window.scrollY
  // console.log(page_scroll)
})


