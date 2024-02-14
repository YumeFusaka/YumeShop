import { ref } from 'vue'
import type { XtxGuessInstance } from '@/types/components'

export const useGuessList = () => {
  const guessRef = ref<XtxGuessInstance>()
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }
  return {
    guessRef,
    onScrolltolower,
  }
}
