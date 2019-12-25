<template>
  <v-app>
    <router-view name="header"/>
    <router-view name="navigation"/>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
