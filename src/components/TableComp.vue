<template>
    <table class="table">
        <tbody class="table__tbody">
        <tr class="table-row">
            <th class="table-row__th">Price</th>
            <th class="table-row__th">Ammount</th>
            <th class="table-row__th table-row__th-total_hide">Total</th>
        </tr>
        <tr class="table-row" v-for="(item, index) in items" :key="index">
            <td class="table-row__td">{{ item[0] }}</td>
            <td class="table-row__td">{{ item[1] }}</td>
            <td class="table-row__td table-row__td-total_hide">{{ item[0] * item[1] }}</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name: "TableComp",
        props : ['items']
    }
</script>

<style scoped>
    .table {
        font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
        font-size: 14px;
        border-collapse: collapse;
        text-align: center;
        width: 50%;
        display: block;
    }
    .table-row__th {
        width: 100%;
        height: 20px;
    }
    .table-row__th,
    .table-row__td {
        border-style: solid;
        border-width: 0 1px 1px 0;
        border-color: white;
        width: 100%;
    }
    .table-row__td {
        background: #d8e6f3;
        padding: 5px;
        width: 100%;
    }
    .table__thead {
        width: 100%;
        height: 20px;
    }
    .table__tbody {
        height: calc(100vh - 100px);
        display: block;
        width: 100%;
        overflow: auto;
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