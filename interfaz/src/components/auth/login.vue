<template>
  <div>
    <q-toolbar color="red">
      <q-btn flat v-go-back="'/welcome'">
        <q-icon name="arrow_back" />
      </q-btn>
      <q-toolbar-title>
        Iniciar Sesión
      </q-toolbar-title>
    </q-toolbar>
    <div class="layout-view layout-padding">
      <q-field icon="account_circle">
        <q-input v-model="credentials.username" placeholder="Tu cédula de Identidad" class="full-width" />
      </q-field>
      <q-field icon="vpn_key">
        <q-input v-model="credentials.password" type="password" placeholder="Tú contraseña" class="full-width" />
      </q-field>
      <q-btn color="red"class="full-width" @click="submit()">Iniciar</q-btn>
    </div>
  </div>
</template>

<script>
  import { GoBack, QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput } from 'quasar'
  import auth from '../../auth'

  export default {
    data () {
      return {
        credentials: {
          username: '',
          password: ''
        }
      }
    },

    methods: {
      submit () {
        auth.login(this.credentials, 'profile')
      }
    },

    components: { QBtn, QToolbar, QIcon, QToolbarTitle, QField, QInput },

    directives: { GoBack }
  }
</script>
