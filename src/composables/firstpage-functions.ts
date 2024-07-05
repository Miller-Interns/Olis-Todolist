import { ref, computed } from 'vue'

export const isGay = ref(false)

export function toggleSlayColor() {
  isGay.value = !isGay.value
}

export const sassify = computed(() => {
  return isGay.value
    ? { background: 'linear-gradient(135deg, #153677, #4e085f)' }
    : { background: '#424549' }
})
