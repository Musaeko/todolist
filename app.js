const btn = document.querySelector('#addbtn')
const date = document.querySelector('#date')
const text = document.querySelector('#text')
const containerdivs = document.querySelector('.lists')
const info = document.querySelector('#info')

btn.addEventListener('click', () => {
  const wrapper = `  <div class="list">
  <button id="non1"><i class="fa-regular fa-trash-can"></i></button>
  <h4 id="tasks">${text.value}</h4>
  <h4 id="tasksdate">${date.value}</h4>
  <button id="non2"><i class="fa-regular fa-circle-check"></i></button>
</div>`

  if (text.value && date.value) {
    containerdivs.innerHTML += wrapper
    date.value = ''
    text.value = ''
  } else {
    alert('please enter info')
  }

  document.querySelectorAll('#non1').forEach((okbtn) => {
    okbtn.addEventListener('click', (e) => {
      e.target.closest('div').remove()
      const forinfo = document.querySelectorAll('.list')
      forinfo.length == 0
        ? (info.textContent = `nothing to do `)
        : (info.textContent = `There are ${forinfo.length} things to do`)
    })
  })

  document.querySelectorAll('#non2').forEach((okbtn) => {
    okbtn.addEventListener('click', (e) => {
      if (e.target.closest('div').classList.contains('line')) {
        e.target.closest('div').className = ' list'
      } else {
        e.target.closest('div').className += ' line'
      }
    })
  })

  const forinfo = document.querySelectorAll('.list')
  info.textContent = `There are ${forinfo.length}things to do`
})
