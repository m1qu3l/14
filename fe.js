
let he = document.querySelector('.he');
let body = document.querySelector('body');
let todos = [document.querySelector('.n2'),document.querySelector('.n3'),document.querySelector('.n4'),document.querySelector('.n5'),document.querySelector('.n6'),document.querySelector('.n7'),document.querySelector('.n8'),document.querySelector('.n9'),document.querySelector('.n10'),];

let todos1 = [document.querySelector('.n1_2'),document.querySelector('.n1_3'),document.querySelector('.n1_4'),document.querySelector('.n1_5'),document.querySelector('.n1_6'),document.querySelector('.n1_7'),document.querySelector('.n1_8'),document.querySelector('.n1_9'),document.querySelector('.n1_10'),];
let todos2 = [document.querySelector('.n2_2'),document.querySelector('.n2_3'),document.querySelector('.n2_4'),document.querySelector('.n2_5'),document.querySelector('.n2_6'),document.querySelector('.n2_7'),document.querySelector('.n2_8'),document.querySelector('.n2_9'),document.querySelector('.n2_10'),];
let todos3 = [document.querySelector('.n3_2'),document.querySelector('.n3_3'),document.querySelector('.n3_4'),document.querySelector('.n3_5'),document.querySelector('.n3_6'),document.querySelector('.n3_7'),document.querySelector('.n3_8'),document.querySelector('.n3_9'),document.querySelector('.n3_10'),];

let todos4 = [document.querySelector('.n4_2'),document.querySelector('.n4_3'),document.querySelector('.n4_4'),document.querySelector('.n4_5'),document.querySelector('.n4_6'),document.querySelector('.n4_7'),document.querySelector('.n4_8'),document.querySelector('.n4_9'),document.querySelector('.n4_10'),];

let todos5 = [document.querySelector('.n5_2'),document.querySelector('.n5_3'),document.querySelector('.n5_4'),document.querySelector('.n5_5'),document.querySelector('.n5_6'),document.querySelector('.n5_7'),document.querySelector('.n5_8'),document.querySelector('.n5_9'),document.querySelector('.n5_10'),];
let todos6 = [document.querySelector('.n6_2'),document.querySelector('.n6_3'),document.querySelector('.n6_4'),document.querySelector('.n6_5'),document.querySelector('.n6_6'),document.querySelector('.n6_7'),document.querySelector('.n6_8'),document.querySelector('.n6_9'),document.querySelector('.n6_10'),];
let todos7 = [document.querySelector('.n7_2'),document.querySelector('.n7_3'),document.querySelector('.n7_4'),document.querySelector('.n7_5'),document.querySelector('.n7_6'),document.querySelector('.n7_7'),document.querySelector('.n7_8'),document.querySelector('.n7_9'),document.querySelector('.n7_10'),];

let nuevo = [document.querySelector('.n1'),document.querySelector('.n1_1'),document.querySelector('.n2_1'),document.querySelector('.n3_1'),document.querySelector('.n4_1'),document.querySelector('.n5_1'),document.querySelector('.n6_1'),document.querySelector('.n7_1'),]

let a = 0;const num = ()=>{return parseInt(Math.random()*255)};
const color = (pa,pro)=>{pa.style.setProperty(pro, `rgba(${num()},${num()},${num()},0.5 )`)};
setInterval(()=>{color(he,'color');},900);
setTimeout(()=>{color(he,'color');},1);
let si = true;

const elfoireachque = (elarreglo)=>{
    elarreglo.forEach(element => {setInterval(()=>{color(element,'background');},900);
    setTimeout(()=>{color(element,'background');},1);});
}

he.addEventListener('click',()=>{
    if (si == true){
        nuevo.forEach(element => {
            element.classList.add('activo')
        });
        
        elfoireachque(todos)
        elfoireachque(todos1)
        elfoireachque(todos2)
        elfoireachque(todos3)
        elfoireachque(todos4)
        elfoireachque(todos5)
        elfoireachque(todos6)
        elfoireachque(todos7)
 

        setInterval(()=>{color(body,'background');},900);
        setTimeout(()=>{color(body,'background');},1);
    }si = false;})
