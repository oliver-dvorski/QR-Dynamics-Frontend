import eventBus from './eventBus'

function flash (message) {
  eventBus.$emit('flash', message)
}

function getCookie (name) {
  let re = new RegExp(name + '=([^;]+)')
  let value = re.exec(document.cookie)
  return (value != null) ? unescape(value[1]) : null
}

export { flash, getCookie }
