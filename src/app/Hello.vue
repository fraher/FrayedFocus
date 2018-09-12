<style lang="css">
@import '../assets/css/FrayedFocus.css';

</style>

<template>
  <div>
    <TopMenuBar></TopMenuBar>
    <img class="photox" v-bind:src="location" v-on:click="animate"/>
    <img class="photoy" v-bind:src="location2" v-on:click="animate"/>
    <md-button class="md-raised md-primary">Refresh Page</md-button>
    
  </div>
</template>

<script>
import anime from 'animejs'
import TopMenuBar from './Menu.vue'
var tX = 1200
var tY = 50

export default {
  name: 'Hello',
  data() {
    return {
      
        location: '../assets/images/TheCosmos2.png' ,
        location2: '../assets/images/sun.png'      
    };
  },
  components: {
    TopMenuBar
  },
  methods: {
    animate: function(event) {

      var randNum = Math.random();

      anime({
      targets: event.target,
      translateX: tX,
      translateY: tY,
      rotate: randNum.toString() + 'turn'
    });

      if(x==2) {        
        tX = -20
        tY = -10
      } 
      else {         
         tX = 200
         tY = 50
      }
    }
  }, 
  mounted: function() {


anime({
      targets: '.photox',
      translateX: Math.random() * 1800 + 100,
      translateY: Math.random() * 300 + 300,
      duration: 3000,
      rotate: Math.random().toString() + 'turn',
      easing: 'easeInOutQuad'
    })

    anime({
      targets: '.photoy',
      translateX: Math.random() * 1800 + 100,
      translateY: Math.random() * 300 + 300,
      duration: 3000,
      rotate: Math.random().toString() + 'turn',
      easing: 'easeInOutQuad'

    })
  }
};
</script>
