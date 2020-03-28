const task = document.getElementById('task')
const task_list = document.querySelector('#Todo-list ul')
const isActive = document.getElementById('isActive')
const myDate = document.getElementById('td-date')
let done = true;

let date = new Date()
let day = date.toLocaleDateString()
let month = date.getDate()
let year = date.getFullYear()
console.log(year);

myDate.innerHTML =  `${day} `


task.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){
        let a = ''
        
        if(done){
            a ='&#128466;'
        }else{
            a = '&#128467'
        }
        // done? a +='&#128466;' : a +='&#128467'

        done = !done
        console.log(done);
        let li = document.createElement('li')
        li.innerHTML = ` ${a} ${task.value}`

        // li.classList.add('marg')
        task_list.appendChild(li)
        task.value = ''
        
    }
})
