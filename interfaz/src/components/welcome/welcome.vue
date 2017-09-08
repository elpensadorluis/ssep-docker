<template>
  <q-layout ref="layout" view="hHr LpR lFf" :right-breakpoint="1100">
      <q-card-media>
      <div class="layout-view layout-padding">
        
        <img src="~assets/gallery/01.jpg" class="responsive">
        <div class="row no-gutter">
          <q-btn color="red" @click="goTo('login')">
            Iniciar Sesión
          </q-btn>
        </div>
        <br>
        <!-- <div>
          <q-btn color="red" align="center" @click="goTo('register')">
            Register
          </q-btn>
        </div> -->
      </div>
    </q-card-media>
  </q-layout>
</template>

<style lang="stylus" scoped>
  @import "../../themes/app.variables.styl"

  @media only screen and (min-width: 601px){
    .layout-padding{
      margin 0 auto
    }
  }

  .splash {
    background url(../../statics/quasar-logo.png) no-repeat center center
    margin 0 auto
    height 150px
    width 300px
  }

  .branding {
    width 80%
    margin 0 auto
    text-align center
    max-width 350px
    padding-bottom 10px
  }

  .branding .tagline {
    color $primary
    font-size 35px
    line-height 30px
  }

  .branding p {
    color $primary
    font-size 18px
  }
  .branding hr {
    max-width 50px
    border-color $primary
    border-width 2px
    border-style solid
    margin 30px auto
  }
</style>

<script>
  import { QBtn } from 'quasar'
  import router from '../../router'

  export default {
    methods: {
      goTo (link) {
        router.push(link)
      }
    },

    components: { QBtn }
  }
</script>
