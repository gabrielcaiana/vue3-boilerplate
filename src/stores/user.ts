import { acceptHMRUpdate, defineStore } from 'pinia'

import { ref, Ref, computed, ComputedRef } from 'vue'

export const useUserStore = defineStore('user', () => {
  // define state
  const user: Ref<string> = ref('')

  // define getters
  const $getUser: ComputedRef<string> = computed(() => user.value)

  // define methods
  const setNewUser = (name: string): string => {
    return user.value = name
  }

  return {
    user,
    setNewUser
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore as any, import.meta.hot))
