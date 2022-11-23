const wrap2 = document.querySelectorAll('.wrap')[0]
const travelwrap = document.querySelectorAll(`.page02`)[0]
const travelbox = document.querySelectorAll(`.travel_box`)[0]
const travel_line = document.getElementById('travel_line')
const travelitemorigin = document.querySelectorAll(`.travel_item_box`)
let travelitem = document.querySelectorAll(`.travel_item_box`)
const removebtn = document.querySelectorAll(`.remove_button`)
let tvalue = document.querySelectorAll(`.t_value`)
let ttime = document.querySelectorAll(`.t_time`)

const tlisttxt = document.getElementById('total_list')
const tvaluetxt = document.getElementById('total_value')
const ttimetxth = document.getElementById('total_time_h')
const ttimetxtm = document.getElementById('total_time_m')

let itemlength = travelitem.length


travelbox.style.height=`${(itemlength*120)+260}px`
travelwrap.style.height=`${(travelitem.length*120)+450}px`

travel_line.style.height=`${(travelitem.length*120)+30}px`

if(document.getElementById('item_contain').style.left=='-100vw'){
    wrap2.style.height=`${(itemlength*120)+450}px`
    
}else{
    
}

let total_tvalue = 0
let total_ttime = 0


for(i=0;i<removebtn.length;i++){
    removebtn[i].addEventListener('click',function(e){
        itemlength--
        ite = e.target
        travelbox.removeChild(ite.parentNode)
        wrap2.style.height=`${(itemlength*120)+450}px`
        travel_line.style.height=`${(itemlength*120)+30}px`

        total_tvalue = 0
        total_ttime = 0
        tvalue = document.querySelectorAll(`.t_value`)
        ttime = document.querySelectorAll(`.t_time`)
        travelitem = document.querySelectorAll(`.travel_item_box`)

        travelwrap.style.height=`${(travelitem.length*120)+450}px`
        

        for(i=0;i<tvalue.length;i++){
            total_tvalue = total_tvalue+Number(tvalue[i].innerText)
        }
        for(i=0;i<ttime.length;i++){
            total_ttime = total_ttime+Number(ttime[i].innerText)
        }

        tlisttxt.innerText = itemlength
        tvaluetxt.innerText = total_tvalue
        ttimetxth.innerText = Math.floor(total_ttime)
        ttimetxtm.innerText = (((total_ttime-(Math.floor(total_ttime))).toFixed(2))*10)*6
    })
}


for(i=0;i<tvalue.length;i++){
    total_tvalue = total_tvalue+Number(tvalue[i].innerText)
}
for(i=0;i<ttime.length;i++){
    total_ttime = total_ttime+Number(ttime[i].innerText)
}


console.log(itemlength)
console.log(total_tvalue)
console.log(Math.floor(total_ttime))
console.log((((total_ttime-(Math.floor(total_ttime))).toFixed(2))*10)*6)



tlisttxt.innerText = itemlength
tvaluetxt.innerText = total_tvalue
ttimetxth.innerText = Math.floor(total_ttime)
ttimetxtm.innerText = (((total_ttime-(Math.floor(total_ttime))).toFixed(2))*10)*6


