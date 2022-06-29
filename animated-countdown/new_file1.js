let counter = document.querySelector('.counter')
let nums = document.querySelectorAll('.nums span')
let final = document.querySelector('.final')
let replay = document.querySelector('#replay')

function ResetDOM(){
	counter.classList.remove('hide')
	final.classList.remove('show')
	nums.forEach(num=>{
		num.classList.value = ''
	})
	nums[0].classList.add('in')
}

function runAnimation(){
	nums.forEach((num,index)=>{
		let lastIndex = nums.length - 1
		num.addEventListener('animationend',e=>{
			if(e.animationName === 'out' && num.nextElementSibling){
				num.nextElementSibling.classList.add('in')
			}else if(e.animationName === 'in' && num.nextElementSibling){
				num.classList.remove('in')
				num.classList.add('out')
			}else{
				counter.classList.add('hide')
				final.classList.add('show')
			}
		})
	})
}


replay.addEventListener('click',()=>{
	ResetDOM()
	runAnimation()
})

runAnimation()