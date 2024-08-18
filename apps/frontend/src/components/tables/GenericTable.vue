<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
    </q-card-section>

    <q-table
      :rows="data"
      :columns="columns"
      row-key="id"
      flat
      hide-bottom
      :pagination="pagination"
      
    >
      <template v-slot:no-data>
        <q-banner>
          No data available
        </q-banner>
      </template>
    </q-table>
  </q-card>
</template>

<script>
import { defineComponent, computed,ref } from 'vue';

export default defineComponent({
  name: 'GenericTable',
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  setup(props) {
  
    const columns = computed(() => {
      if (props.data.length > 0) {
        return Object.keys(props.data[0]).map(key => ({
          name: key,
          required: true,
          label: key.charAt(0).toUpperCase() + key.slice(1),
          align: 'left',
          field: row => row[key],
          format: val => `${val}`,
          sortable: true
        }));
      }
      return [];
    });
  // Configurar paginación con 100 filas por página
    const pagination = ref({
      page: 1,
      rowsPerPage: 100 // Número de filas por página
    });
    return {
      columns,
      pagination,
    };
  }
});
</script>

<style scoped>
.text-h6 {
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
