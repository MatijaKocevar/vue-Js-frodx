export default {
  beforeMount(el, binding) {
    const updateElement = (element) => {
      element.style.color = 'white'
      element.style.backgroundColor = binding.value || 'blue'
      element.style.borderRadius = '10px'
      element.style.padding = '0 1rem'
    }

    if (el.tagName === 'P' && el.textContent.trim()) {
      updateElement(el)
    }

    const paragraphs = el.querySelectorAll('p')
    paragraphs.forEach((p) => {
      if (p.textContent.trim()) {
        updateElement(p)
      }
    })
  }
}
