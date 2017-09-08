<template>
  <q-layout ref="layout" view="hHh LpR fFf" :right-breakpoint="1100">
    <q-toolbar color="red" slot="header">
      <q-btn flat round @click="$refs.layout.toggleLeft()">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        {{ titulo }} | {{ title }}
      </q-toolbar-title>
      <q-btn flat round>
        <q-icon name="email" />
      </q-btn>
      <q-btn flat round>
        <q-icon name="add_alert" />
      </q-btn>
      <q-btn flat round>
        <q-icon name="account_circle" />
      </q-btn>
      <q-btn flat round @click="$refs.layout.toggleRight()">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <!-- Left Side Panel -->
    <div slot="left">
      <q-list-header>Menu</q-list-header>
      <q-list no-border link inset-separator>
        <q-side-link item to="/registrat">
          <q-item-side icon="assessment" />
          <q-item-main label="Fujo de Actividades"/>
        </q-side-link>
        <q-side-link disabled item to="/reporta">
          <q-item-side icon="assignment" />
          <q-item-main label="Tareas"/>
        </q-side-link>
        <q-side-link disabled item to="/profile">
          <q-item-side icon="event" />
          <q-item-main label="Calendario" />
        </q-side-link>
        <q-side-link disabled item to="/jokes">
          <q-item-side icon="cloud" />
          <q-item-main label="Nube de Almacenamiento"/>
        </q-side-link>
        <q-side-link disabled item to="/reporta">
          <q-item-side icon="chat" />
          <q-item-main label="Comunicaciones"/>
        </q-side-link>
        <q-side-link disabled item to="/profile">
          <q-item-side icon="email" />
          <q-item-main label="Correo" />
        </q-side-link>
        <hr>
        <q-item class="item" v-go-back="'/'" @click="logout()">
          <q-item-side>
            <q-item-tile icon="exit_to_app" />
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Salir</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </div>

    <div slot="right">
      <q-list-header>Menu</q-list-header>
      <q-list no-border link inset-separator>
        <q-side-link disabled item to="/registrat">
          <q-item-side color="red" icon="add_circle_outline" />
          <q-item-main label="Registra tu Tropa"/>
        </q-side-link>
        <q-side-link disabled item to="/reporta">
          <q-item-side icon="assignment" />
          <q-item-main label="Rendimiento"/>
        </q-side-link>
        <q-side-link disabled item to="/profile">
          <q-item-side icon="event" />
          <q-item-main label="Anuncios" />
        </q-side-link>
        <q-side-link disabled item to="/jokes">
          <q-item-side icon="cloud" />
          <q-item-main label="Mis Tareas"/>
        </q-side-link>
      </q-list>
    </div>

    <!-- Footer -->
    <q-toolbar slot="footer" color="red">
      <q-toolbar-title>
        PSUV 2017
      </q-toolbar-title>
    </q-toolbar>

    <router-view />

  </q-layout>
</template>

<style></style>

<script>
  import { GoBack, QLayout, QToolbar, QBtn, QIcon, QToolbarTitle, QList, QSideLink, QItemSide, QItemMain, QItem, QItemTile, QListHeader } from 'quasar'
  import Auth from '../../auth'

  export default{
    data () {
      return {
        titulo: 'Sala Situacional PSUV'
      }
    },

    watch: {
      '$route' () {
        this.title = this.$route.meta.title
      }
    },

    mounted () {
      this.title = this.$route.meta.title
    },

    methods: {
      logout () {
        Auth.logout()
      }
    },

    components: { QLayout, QToolbar, QBtn, QIcon, QToolbarTitle, QList, QSideLink, QItemSide, QItemMain, QItem, QItemTile, QListHeader },

    directives: { GoBack }
  }
</script>
