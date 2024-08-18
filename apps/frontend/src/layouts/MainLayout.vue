<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
        <q-space/>
        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round dense flat color="white" :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                 @click="$q.fullscreen.toggle()" v-if="$q.screen.gt.sm">
          </q-btn>
          <q-btn round dense flat color="white" icon="fab fa-github" type="a"
                 href="https://github.com/MauroxDesarrollador/plantilla-mpv-quasar-nest" target="_blank">
          </q-btn>
          <q-btn round dense flat style="color:red !important;" type="a" href="https://mauricioreyesdev.com/"
                 target="_blank">
            <i class="fa fa-heart fa-2x fa-beat"></i>
          </q-btn>
          <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              5
            </q-badge>
            <q-menu>
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All" style="max-width: 120px !important;" flat dense
                         class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
          </q-btn>
          <q-btn round flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary text-white"
    >
      <q-list>
        <template v-for="item in menuItems" :key="item.label">
          <q-expansion-item v-if="item.children" :icon="item.icon" :label="item.label">
            <q-list class="q-pl-lg">
              <q-item v-for="child in item.children" :key="child.label" :to="child.to" active-class="q-item-no-link-highlighting">
                <q-item-section avatar>
                  <q-icon :name="child.icon"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ child.label }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-item v-else :to="item.to" active-class="q-item-no-link-highlighting">
            <q-item-section avatar>
              <q-icon :name="item.icon"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import Messages from "./Messages.vue";

import { defineComponent, ref } from 'vue'
import { useQuasar } from "quasar";
import {menuLinks} from '../config/menuLinks.js';
export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    Messages
  },

  setup() {
    const leftDrawerOpen = ref(false)
    const $q = useQuasar()

    // Array de ítems del menú
    const menuItems = ref(menuLinks)
    return {
      $q,
      leftDrawerOpen,
      menuItems,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
