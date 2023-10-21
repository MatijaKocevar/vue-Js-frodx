export default {
  beforeMount(el, binding) {
    if (el.tagName === 'P' && el.textContent.trim()) {
      el.style.color = 'white'
      el.style.backgroundColor = binding.value || 'blue'
      el.style.borderRadius = '10px'
      el.style.padding = '0 1rem'
    }

    const paragraphs = el.querySelectorAll('p')
    paragraphs.forEach((p) => {
      if (p.textContent.trim()) {
        p.style.color = 'white'
        p.style.backgroundColor = binding.value || 'blue'
        p.style.borderRadius = '10px'
        p.style.padding = '0 1rem'
      }
    })
  }
}
