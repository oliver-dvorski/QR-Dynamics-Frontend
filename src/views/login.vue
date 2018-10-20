<template>
  <div/>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('auth/SET_API_TOKEN', this.$route.params.token)
    this.$router.push({ name: 'web' })
  }
}
</script>
