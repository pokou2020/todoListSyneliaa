

<!-- //letemplate html qui me permet de faire la page d'acceuil simple -->

<template>
  <div class="accueil-container">
    <div class="content">
         <h1>
      Bienvenue sur <span class="green">notre application de gestion de tâches</span><span class="blue">To-Do List Vue.js</span>
    </h1>
      <p>Gérez vos tâches facilement avec notre To-Do List Vue.js</p>

      <div class="buttons">
        <router-link to="/formulaire">
          <button>Ajouter une tâche</button>
        </router-link>

        <router-link to="/actions">
          <button>Voir les tâches</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style >

/* .accueil-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
} */

.content {
    justify-content: center;
     align-items: center;
  text-align: center;
  background-color: white;
justify-content: center;
  padding: 40px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1 {
  margin-bottom: 10px;
}
p {
  margin-bottom: 30px;
  color: #555;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>
