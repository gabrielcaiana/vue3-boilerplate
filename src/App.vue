<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from './stores/user';

const userStore = useUserStore()

onMounted(() => {
  userStore.setNewUser('Gabriel Caiana')
})
</script>

<template>
  <div>
    {{ userStore.user }}
  </div>
</template>
