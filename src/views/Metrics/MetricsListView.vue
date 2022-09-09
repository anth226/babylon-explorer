<script>
export default {
    computed: {
        metrics() {
            return this.$store.getters["prometheus/metrics"];
        },
    },
};
</script>

<template>
    <div class="metrics-list-view-container">
        <div style="font-size: 3em">All Metrics</div>
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Metrics Parameter</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(value, key) in metrics">
                    <td>{{ key }}</td>
                    <td>{{ value }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.metrics-list-view-container {
    max-width: 1280px;
}
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
}

.styled-table thead tr {
    background-color: black;
    color: #ffffff;
    text-align: left;
}
.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid black;
}
</style>
