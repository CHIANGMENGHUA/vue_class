<template>
    <div>
        <h1> @About@ </h1>
        <hr>
        <p class="context">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur illo labore neque quam
            hic fugit itaque eaque, delectus minus voluptatem doloremque corrupti maxime a ipsam nisi repellendus eius
            sequi exercitationem.</P>
        <hr>
        <router-link class="link" to="/about/us">About us</router-link>
        <br>
        <router-link class="link" to="/about/others">About others</router-link>
        <router-view></router-view>
    </div>
</template>