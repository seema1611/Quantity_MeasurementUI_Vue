<template>
  <div id="quantity-container">
    <div id="quantity">
      <div class="cards">
        <md-content @click = "SelectedQuantity('Length')" >
        <img src="../assets/scale.svg" alt="Length" />
        <p>Length</p>
        </md-content>

        <md-content @click = "SelectedQuantity('Temperature')">
        <img src="../assets/hot.svg" alt="Temperature" />
        <p>Tempetaure</p>
        </md-content>

        <md-content @click = "SelectedQuantity('Volume')">
        <img src="../assets/beaker.svg" alt="Volume" />
        <p>Volume</p>
        </md-content>

      </div>
    </div>       
  </div>
</template>

<script>
import {bus} from '../main'
export default {
  name: 'ChooseTypeCard',
  data() {
    return {
    };
  },
  methods: {
    SelectedQuantity : function(clickedQuantity) {
      bus.$emit('getValue', clickedQuantity)
    }
  }
};
</script>

<style scoped>
#quantity-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 16px;  
  margin-top: 4vw;
}

#quantity {
  padding: 16px;  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

.md-content {
  width: 226px;
  height: 190px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 7px;
  filter: grayscale();
}
.md-content:nth-child(1):hover {
  background-color: #edfdf9;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #0ec098;
  color: #0ec098;
  filter: none !important;
}
.md-content:nth-child(2):hover {
  background-color: #ffeef0;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #fd5160;
  color: #fd5160;
  filter: none !important;
}
.md-content:nth-child(3):hover {
  background-color: #e8ddff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #7224ff;
  color: #7224ff;
  filter: none !important;
}

p {
  margin: 0 32px;
  font-family: "Montserrat", sans-serif;
  text-transform: capitalize;
}

.md-content > p {
  margin-top: 24px;
}
</style>