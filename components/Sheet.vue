<template>
  <div class="sheet-container">
    <div v-for="column in columns" :key="column.title" class="sheet-item">
      <h3>
        {{ column.title | capitalize }}
      </h3>
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">
                {{ $t('number') | capitalize }}
              </th>
              <th class="text-left">
                {{ $t('text') | capitalize }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in column.data"
              :key="item.number"
            >
              <td>{{ item.number }}</td>
              <td>{{ item.text }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import { KOREAN_NUMBERS_DISPLAYED, CHINESE_NUMBERS_DISPLAYED } from '@/utils/constants'

const koreanNumbersMapped = Object.entries(KOREAN_NUMBERS_DISPLAYED).map(([key, value]) => ({ number: key, text: value }))

const chineseNumbersMapped = Object.entries(CHINESE_NUMBERS_DISPLAYED).map(([key, value]) => ({ number: key, text: value }))

export default {
  data () {
    return {
      columns: [
        {
          title: this.$t('chinese'),
          data: chineseNumbersMapped
        },
        {
          title: this.$t('korean'),
          data: koreanNumbersMapped
        }
      ]
    }
  }
}
</script>

<style scoped>
.sheet-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 500px;
  overflow-y: scroll;
}
.sheet-item {
  padding: .5em;
}

.sheet-table {
  border: .5px solid var(--primary-color-light);
  border-collapse: collapse;
  width: 100%;
}

/* td, th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: var(--primary-color-light);
} */
</style>
