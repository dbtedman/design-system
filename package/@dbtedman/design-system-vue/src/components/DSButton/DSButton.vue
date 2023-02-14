<script setup lang="ts">
defineProps<{}>()
</script>

<template>
    <button>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@use "sass:math";

button {
    font-size: 1em;
    padding: 1em 2em;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #333;
    border-radius: .5em;

    &:hover {
        background-color: darken(#fff, 5);
    }

    @media (prefers-color-scheme: dark) {
        color: #fff;
        background-color: #333;
        border: 1px solid #666;

        &:hover {
            background-color: lighten(#333, 5);
        }
    }

    html.dark & {
        color: #fff;
        background-color: #333;
        border: 1px solid #666;

        &:hover {
            background-color: lighten(#333, 5);
        }
    }
}
</style>
