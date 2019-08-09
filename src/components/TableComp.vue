<template>
    <div class="wrapTable">
  <table class="table">
    <caption class="table__caption_bg">
      <slot></slot>
    </caption>
    <thead class="table__thead">
      <tr class="table-row">
        <th class="table-row__th">Price</th>
        <th class="table-row__th">Ammount</th>
        <th class="table-row__th table-row__th-total_hide">Total</th>
      </tr>
    </thead>
    <tbody class="table__tbody">
      <tr class="table-row" v-for="(item, index) in items" :key="index">
        <td class="table-row__td">{{ item[0] }}</td>
        <td class="table-row__td">{{ item[1] }}</td>
        <td class="table-row__td table-row__td-total_hide">
          {{ item[0] * item[1] }}
        </td>
      </tr>
    </tbody>
  </table>
    </div>
</template>

<script>
export default {
  name: "TableComp",
  props: ["items"]
};
</script>

<style scoped>

.wrapTable {
    height: calc(100vh - 120px);
    overflow: auto;
    width: 100%;
}
.table {
  border-collapse: collapse; /*убираем пустые промежутки между ячейками*/
  border: 2px solid grey; /*устанавливаем для таблицы внешнюю границу серого цвета толщиной 1px*/
  width: 100%;
  background-color: gold;
  text-align: center;
}
.table-row__th,
.table-row__td {
  border: 1px solid grey;
  padding: 10px 15px;
}
table-row__th {
  width: 20%;
}
.table__caption_bg {
  background-color: floralwhite;
}


@media screen and (max-device-width: 840px) {
  .table-row__th-total_hide {
    display: none;
  }
  .table-row__td-total_hide {
    display: none;
  }
}
</style>
