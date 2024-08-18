<template>
  <q-page class="q-pa-sm">
    <div>
      <GenericTable 
        :title="tableTitle"
        :data="tableData"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue';

export default defineComponent({
  name: "Tables",
  data() {
    return {
      tableTitle: 'Usuarios',
      tableData: [
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 },
                { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 },
                { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 },
                { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 },
                { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 },
                { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 },        { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 },
                { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 34 },
        { id: 3, name: 'Sam Green', email: 'sam@example.com', age: 22 }
      ]
    };
  },
  components: {
    GenericTable: defineAsyncComponent(() => import('components/tables/GenericTable.vue')),
  }
});
</script>

<style>

</style>
