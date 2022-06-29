const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMessage = document.querySelector('.final')
const replay = document.querySelector('#replay')

function resetDOM(){
	counter.classList.remove('hide')
	finalMessage.classList.remove('show')
	nums.forEach(num=>{
		num.classList.value = ''
	})
	nums[0].classList.add('in')
}

function runAnimation(){
	nums.forEach((num,index)=>{
		const numsLen = nums.length-1
		num.addEventListener('animationend',e=>{
			if(e.animationName === 'goOut' && num.nextElementSibling){
				num.nextElementSibling.classList.add('in')
			}else if (e.animationName === 'goIn' && index !== numsLen){
				num.classList.remove('in')
				num.classList.add('out')
			}else{
				counter.classList.add('hide')
				finalMessage.classList.add('show')
			}
			
		})
	})
}
runAnimation()

replay.addEventListener('click', () => {
  resetDOM()
  runAnimation()
})