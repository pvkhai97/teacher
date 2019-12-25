<template>
  <v-navigation-drawer clipped app>
    <v-list dense nav>
      <v-list-item
        to="/"
        active-class="success white--text"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        to="/teacher"
        active-class="success white--text"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Danh sách giảng viên</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        to="/thesis"
        active-class="success white--text"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Quản lý đồ án</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        to="/profile"
        active-class="success white--text"
        link
      >
        <v-list-item-icon>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Thông tin cá nhân</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
