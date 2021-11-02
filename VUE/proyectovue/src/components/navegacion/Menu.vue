<template>
    <div>
        <nav>
            <ul id="menu">
                <li>
                <router-link to="/">Menu</router-link>
                </li>
                <li>
                <router-link to="/cine">Cine</router-link>
                </li>
                <li>
                <router-link to="/television">Television</router-link>
                </li>
                <li>
                <router-link to="/musica">Musica</router-link>
                </li>
                <li>
                <router-link to="/hooks">Hooks</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name:"Menu"
}
</script>

<style scoped>
ul#menu li {
    display: inline;
    padding-left: 10px;
    padding-right: 10px;
}
</style>