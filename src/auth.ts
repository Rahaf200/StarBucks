import { auth } from './firebase';

export const useAuthStore = () => {
  const userId = ref<string | null>(null);

  const fetchUserId = () => {
    const user = auth.currentUser;
    userId.value = user ? user.uid : null;
  };

  // Call fetchUserId on auth state change
  auth.onAuthStateChanged(() => {
    fetchUserId();
  });

  return {
    userId: computed(() => userId.value),
    fetchUserId,
  };
};
