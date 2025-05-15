<template>
  <div class="formulaire-page">
    <div class="formulaire-container">
      <h2>Ajouter une tâche</h2>
      <form @submit.prevent="ajouterTache">
        <div class="form-group">
          <label>Nom :</label>
          <input v-model="nom" required />
        </div>

        <div class="form-group">
          <label>Description :</label>
          <textarea v-model="description" required></textarea>
        </div>

        <div class="form-group">
          <label>Statut :</label>
          <select v-model="statut">
            <option value="à venir">À venir</option>
            <option value="en cours">En cours</option>
            <option value="terminé">Terminé</option>
          </select>
        </div>

        <div class="form-group">
          <label>Personnes assignées :</label>
          <input v-model="personne" />
        </div>

        <button type="submit">Ajouter</button>
      </form>

    
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const nom = ref('')
const description = ref('')
const statut = ref('à venir')
const personne = ref('')
const taches = ref([])

const ajouterTache = () => {
  const nouvelleTache = {
    nom: nom.value,
    description: description.value,
    statut: statut.value,
    personne: personne.value,
    date: new Date().toLocaleString(),
  }

  taches.value.push(nouvelleTache)

  // Réinitialiser le formulaire
  nom.value = ''
  description.value = ''
  statut.value = 'à venir'
  personne.value = ''
}

</script>

<style scoped>
.formulaire-page {
  display: flex;
  justify-content: center;
  align-items: start;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding-top: 40px;
}

.formulaire-container {
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #444;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  box-sizing: border-box;
}

textarea {
  min-height: 80px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}

.liste-taches {
  margin-top: 40px;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.liste-taches h3 {
  margin-bottom: 15px;
  color: #333;
}

.liste-taches ul {
  list-style: none;
  padding: 0;
}

.liste-taches li {
  padding: 10px;
  background-color: #f9fafb;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
