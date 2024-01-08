export const useStore = defineStore('store', {
  state: () => {
    return {
      floor: 2,
      floors: 4,
      // floors: 4,
      highlight: null,
    }
  },
})
