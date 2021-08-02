<template>
  <div>
    <h1>JWT 회원가입 화면 입니다.</h1>
    <ValidationObserver>
      <form @submit.prevent="formSubmit" method="post">
        <ValidationProvider ref="refEmail" rules="required|email">
          <div>
            <label for="email">email</label>
            <input id="email" type="text" v-model="email" />
          </div>
        </ValidationProvider>
        <ValidationProvider
          ref="refPassword"
          rules="required|min:8|max:20|alpha_dash"
        >
          <div>
            <label for="password">password</label>
            <input id="password" type="text" v-model="password" />
          </div>
        </ValidationProvider>
        <ValidationProvider ref="refName" rules="required">
          <div>
            <label for="name">name</label>
            <input id="name" type="text" v-model="name" />
          </div>
        </ValidationProvider>
        <button type="submit">Register</button>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
  export default {
    name: "JwtResiter",
    components: {},
    data() {
      return {
        email: "",
        password: "",
        name: "",
      }
    },
    computed: {},
    methods: {
      async formSubmit() {
        const refEmail = await this.$refs.refEmail.validate()
        if (!refEmail.valid) {
          alert(refEmail.errors[0])
          return false
        }
        const refPassword = await this.$refs.refPassword.validate()
        if (!refPassword.valid) {
          alert(refPassword.errors[0])
          return false
        }
        const refName = await this.$refs.refName.validate()
        if (!refName.valid) {
          alert(refName.errors[0])
          return false
        }

        this.$store
          .dispatch("register", {
            email: this.email,
            password: this.password,
            name: this.name,
          })
          .then(response => {
            if (response.status == 200) {
              this.$router.push({
                name: "JwtMypage",
              })
            }
          })
          .catch(({ message }) => alert(message))

        return true
      },
    },
  }
</script>

<style scoped></style>