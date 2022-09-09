<script>
export default {
    name: 'SearchBarComponent',
    data() {
        return {
            searchText: "",
        };
    },
    methods: {
        submit: async function () {
            this.$router.push({ path: "/blocks/" + this.searchText });
            this.searchText = "";
        },
    },
};
</script>

<template>
    <form class="d-flex" role="search" @submit.prevent="submit">
        <input
            class="form-control me-2"
            v-model="searchText"
            placeholder="Search block by height or hash"
        />
        <button class="btn btn-light" type="submit">Search</button>
    </form>
</template>

<style scoped>
.me-2 {
    width: 500px;
}
</style>
