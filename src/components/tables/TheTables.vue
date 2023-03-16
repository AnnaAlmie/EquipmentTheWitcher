<script setup lang="ts">
import TheTableArmor from '@/components/tables/TheTableArmor.vue'
import TheTableStones from '@/components/tables/TheTableStones.vue'

</script>

<template>
    <div>
        <TheTableArmor />
        <!--  -->
        <TheTableStones />
    </div>
</template>

<style lang="scss">
table {
    padding: 20px 0;
    width: max-content;
    border: 1px solid transparent;
    background-color: transparent;
    position: relative;
    margin: 0 auto;

    td,
    th {
        font-weight: 600;
        border: 1px solid #000;
        background-color: rgba($color: #fff, $alpha: 0.7);
        white-space: nowrap;
        padding: 10px;

        &:not(:first-child) {
            width: 100px;
            text-align: center;
        }

        &.td-point {
            cursor: pointer;
            transition: var(--default-transition);

            &:hover {
                background-color: rgba($color: #fff, $alpha: 0.7);
            }
        }

        //status
        &.default {
            background-color: rgba($color: #fff, $alpha: 0.2);
        }

        &.loot {
            background-color: var(--color-loot);
        }

        &.craft {
            background-color: var(--color-craft);
        }

        &.noexist {
            background-color: transparent;
            border-color: rgba(#000, .2);
            pointer-events: none;
        }
    }

    th {
        position: sticky;
        top: 0;
        background-color: rgba($color: #fff, $alpha: 1);
    }
}
</style>