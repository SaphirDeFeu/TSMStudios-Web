<template>
    <div class="flex h-full">
        <div :class="navbarClasses" style="width: 5.6em">
            <div class="flex flex-col items-center ">
                <div class="nav-element">
                    <nuxt-link to="/">test</nuxt-link>
                </div>
            </div>
        </div>
        <div :class="anchorClasses">
            <button @click="navbaraction">
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none" class="anim__ease"
                    :style="{ transform: isActive ? 'rotate(-180deg)' : 'rotate(0deg)' }">
                    <circle cx="50" cy="50" r="45" fill="#555555"></circle>
                    <path
                        d="M75.5 52.5981C77.5 51.4434 77.5 48.5566 75.5 47.4019L32 22.2872C30 21.1325 27.5 22.5759 27.5 24.8853L27.5 75.1147C27.5 77.4241 30 78.8675 32 77.7128L75.5 52.5981Z"
                        fill="#999999" />
                </svg>


            </button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            isActive: false,
        }
    },
    computed: {
        navbarClasses() {
            return {
                'fixed': true,
                'h-full': true,
                'shadow-lg': true,
                'bg-secondary': true,
                'navbar': true,
                'anim__ease': true,
                'navbar-inactive': !this.isActive,
                'navbar-active': this.isActive,
            }
        },
        anchorClasses() {
            return {
                'anchor-div': true,
                'shadow-2xl': true,
                'anim__ease': true,
                'anchor-inactive': !this.isActive,
                'anchor-active': this.isActive,
            }
        },
    },
    methods: {
        navbaraction() {
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/components/appheader.scss';
</style>