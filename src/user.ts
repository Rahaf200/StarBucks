import { defineStore } from 'pinia';
import type { Product } from '@/src/types/Product';
import type { User } from '@/src/types/User';
import { ref } from 'vue';
/*
    ref()s become state properties
    computed()s become getters
    function()s become actions
*/
export const useUserStore = defineStore('user', () => {
  const user = ref<User>()
  const cartItems = ref<Product[]>([])
  const isSignedIn = ref(false)

  function setUser(newUser: User){
    user.value = newUser
    isSignedIn.value = (newUser.uid !== '')
  }
  
  return { setUser, user, cartItems, isSignedIn }
}) 