<template>
    <div class="flex h-full invert-text-color" id="__navbar">
        <div :class="navbarClasses" style="width: 11.2em">
            <div class="socials">
                <button @click="socials('discord')">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" class="social">
                        <path
                            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z" />
                    </svg>
                </button>
            </div>
            <div>
                <nuxt-link to="/dashboard" class="account-card">
                    <svg xmlns="http://www.w3.org/2000/svg" height="3em" viewBox="0 0 1024 1024">
                        <clipPath id="circle-clip">
                            <circle cx="512" cy="512" r="512" fill="#000000" />
                        </clipPath>

                        <image x="0" y="0" width="1024" height="1024" xlink:href="~/assets/img/default-user.jpg"
                            clip-path="url(#circle-clip)" />
                    </svg>
                    <p class="account-info">{{ useAccountUsername() }}</p>
                </nuxt-link>
            </div>
            <div class="flex flex-col items-center">
                <div class="nav-element"></div>
                <NavItem to="/">Accueil</NavItem>
                <NavItem to="/projects">Projets</NavItem>
                <NavItem to="/about">Info</NavItem>
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
    <div :class="coverClasses"></div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            isActive: false,
            loggedIn: true,
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
        coverClasses() {
            return {
                'cover': true,
                'cover-inactive': !this.isActive,
            }
        },
    },
    methods: {
        navbaraction() {
            this.isActive = !this.isActive;
        },
        socials(type: string) {
            switch (type) {
                case "discord":
                    window.open("https://discord.com/invite/7CpDun29Ms", '_blank');
                    break;
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import '~/assets/css/components/navbar.css';
</style>