import Router from './router'
import { Toast, LocalStorage, Loading } from 'quasar'
import axios from 'axios'

const LOGIN_URL = 'http://192.168.1.8:8002/rest-auth/login/'
const SIGNUP_URL = 'http://192.168.1.8:8002/rest-auth/registration/'
const USER_URL = 'http://192.168.1.8:8002/rest-auth/user/'
const REFRESH_TOKEN = 'http://192.168.1.8:8002/api-token-refresh/'

export default {

  user: {
    authenticated: false
  },

  login (creds, redirect) {
    axios.post(LOGIN_URL, creds)
      .then((response) => {
        LocalStorage.set('id_token', response.data.token)

        this.user.authenticated = true
        axios.defaults.headers.common['Authorization'] = 'Bearer: ' + LocalStorage.get.item('id_token')
        this.getAuthUser()

        if (redirect) {
          setTimeout(() => Router.replace(redirect), 700)
          Toast.create.positive('Bienvenido')
        }
      })
      .catch((error) => {
        Toast.create.negative(error.response.data.message)
      })
  },

  signup (creds, redirect) {
    axios.post(SIGNUP_URL, creds)
      .then((response) => {
        LocalStorage.set('id_token', response.data.token)

        this.user.authenticated = true
        axios.defaults.headers.common['Authorization'] = 'Bearer: ' + LocalStorage.get.item('id_token')
        this.getAuthUser()

        if (redirect) {
          setTimeout(() => Router.replace(redirect), 700)
        }
      })
      .catch((error) => {
        Toast.create.negative(error.response.data.message)
      })
  },

  logout () {
    LocalStorage.clear()
    this.user.authenticated = false
    Router.replace('/welcome')
    Toast.create.positive('Haz salido del sistema correctamente')
  },

  checkAuth () {
    let jwt = LocalStorage.get.item('id_token')

    if (jwt) {
      this.user.authenticated = true
      axios.defaults.headers.common['Authorization'] = 'Bearer: ' + LocalStorage.get.item('id_token')
      this.refreshToken()
    }
    else {
      this.user.authenticated = false
    }
  },

  refreshToken () {
    var that = this

    axios.post(REFRESH_TOKEN)
      .then((response) => {
        // Store refreshed token
        axios.defaults.headers.common['Authorization'] = 'Bearer: ' + response.data.token
        LocalStorage.set('id_token', response.data.token)
        Toast.create.positive('Haz ingresado correctamente!!')
        that.getAuthUser()
      }, () => {
        Toast.create.negative('Algo va mal con tu ingreso al sistema.!!')
        that.logout()
      })
  },

  getAuthUser () {
    axios.get(USER_URL)
      .then((response) => {
        LocalStorage.set('user', response.data)
      }, () => {
        Toast.create.negative('Algo salió mal!')
      })
  },

  showLoading () {
    Loading.show({
      message: 'Haz sido Desconectado por razones de Seridad.\n Reconectando....'
    })
    setTimeout(() => {
      Loading.hide()
    }, 2000)
  }
}
