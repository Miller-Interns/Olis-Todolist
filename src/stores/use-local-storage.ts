import { watch } from 'vue'
import { boxes } from '@/composable/todo-functions'

export const useLocalStorage = () => {
  const useLocalStorage = window.localStorage.getItem('boxes')

  if (useLocalStorage) {
    boxes.value = JSON.parse(useLocalStorage)
  }

  watch(
    boxes,
    (val) => {
      window.localStorage.setItem('boxes', JSON.stringify(val))
    },
    { deep: true }
  )
}
