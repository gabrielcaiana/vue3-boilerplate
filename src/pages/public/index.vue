
<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/user';

const userStore = useUserStore()

onMounted(() => {
  userStore.setNewUser('User')
})
</script>

<template>
  <div>
    {{ userStore.user }}

    <HelloWorld />
  </div>
</template>


