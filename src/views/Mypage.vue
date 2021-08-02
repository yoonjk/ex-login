<template>
  <div>
    <h1>JWT 마이페이지 화면 입니다.</h1>
    <button @click="logout()">Logout</button>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: "JwtMypage",
    components: {},
    computed: {
      ...mapGetters(["isAuthenticated"]),
    },
    methods: {
      redirect() {
        console.log("redirect")
        console.log("isAuthenticated : " + this.isAuthenticated)
        if (!this.isAuthenticated) {
          this.$router.push({
            name: "JwtHome",
          })
        }
      },
      logout() {
        this.$store
          .dispatch("logout", {})
          .then(() => this.redirect())
          .catch(({ message }) => alert(message))
      },
    },
  }
</script>

<style scoped></style>