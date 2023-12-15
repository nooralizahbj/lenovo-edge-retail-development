export const useStore = defineStore('store', {
  state: () => {
    return {
      floor: 2,
      floors: 3,
      highlight: null,
    }
  },
})
