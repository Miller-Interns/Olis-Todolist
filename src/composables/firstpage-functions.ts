import { ref, computed } from 'vue'

export const isGray = ref(false)

export function toggleColor() {
  isGray.value = !isGray.value
}

export const changeColor = computed(() => {
  return isGray.value
    ? { background: 'linear-gradient(135deg, #153677, #4e085f)' }
    : { background: '#424549' }
})
