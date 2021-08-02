<template>
  <div>
    <h1>JWT 홈 화면 입니다.</h1>
    {{ isAuthenticated ? "로그인됨" : "로그인 안됨" }}
  </div>
</template>

<script>
  import { mapGetters } from "vuex"

  export default {
    name: "JwtHome",
    components: {},
    computed: {
      ...mapGetters(["isAuthenticated"]),
    },
    methods: {},
  }
</script>

<style scoped></style>