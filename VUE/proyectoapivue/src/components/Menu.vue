<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample08">
            <img src="./../assets/img/LOGO_PERSONAL.png" class="rounded-circle border border-2 border-white" width="75px"/>
            <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                <li class="nav-item">
                    <router-link to="/" class="nav-link active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/coches" class="nav-link active">Coches</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/empleado" class="nav-link active">Detalles empleado</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/oficios" class="nav-link active">Detalles oficios</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/servicios" class="nav-link active">Servicios</router-link>
                </li>
                <li class="nav-item dropdown">
                    <span class="nav-link dropdown-toggle" id="desplegable" data-bs-toggle="dropdown"
                        aria-expanded="false">Empleados</span>
                    <ul class="dropdown-menu" aria-labelledby="desplegable">
                        <li><router-link to="/empleado" class="dropdown-item">Detalles empleado</router-link></li>
                    </ul>
                </li>
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="text" placeholder="Buscar" aria-label="Search">
                <button class="btn btn-outline-success">Buscar</button>
            </form>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Menu",

}
</script>