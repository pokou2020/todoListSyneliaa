import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTacheStore = defineStore('tache', () => {
  const taches = ref([])

  const ajouterTache = (tache) => {
    taches.value.push(tache)
  }

  return { taches, ajouterTache }
})
