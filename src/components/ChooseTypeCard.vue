<template>
  <div id="quantity-container">
    <div class="type">CHOOSE TYPE</div>

    <div id="quantity">
        <md-content @click = "SelectedQuantity(mainUnit[0])" class="length_quantity" >
        <img src="../assets/scale.svg" alt="Length" />
        <p>Length</p>
        </md-content>

        <md-content @click = "SelectedQuantity(mainUnit[3])" class="temperature_quantity" >
        <img src="../assets/hot.svg" alt="Temperature" />
        <p>Tempetaure</p>
        </md-content>

        <md-content @click = "SelectedQuantity(mainUnit[1])" class="volume_quantity" >
        <img src="../assets/beaker.svg" alt="Volume" />
        <p>Volume</p>
        </md-content>
    </div>
  </div>
</template>

<script>
import {bus} from '../main'
import services from '../services/QuantityMeasurementService'
export default {
  name: 'ChooseTypeCard',
  data() {
    return {
      mainUnit:[],
    };
  },
  methods: {
    SelectedQuantity : function(clickedQuantity) {
      bus.$emit('getValue', clickedQuantity)
    },
    getMainUnits: function () {
      services.getUnits().then((response) => {
        this.mainUnit = response.data.data;
        console.log(this.mainUnit);
      })
      .catch((error) =>{
        console.log(error);
      });
    },
  },

  created() {
    this.getMainUnits();
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
  margin-top: 1vw;
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

.length_quantity:hover {
  background-color: #edfdf9;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #0ec098;
  color: #0ec098;
  filter: none !important;
}

.temperature_quantity:hover {
  background-color: #ffeef0;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #fd5160;
  color: #fd5160;
  filter: none !important;
}

.volume_quantity:hover {
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
  font-size: 15px;
  font-weight: bold;
}

.md-content > p {
  margin-top: 24px;
  font-family: "Montserrat", sans-serif;
}

.type {
  width: 100%;
  display: flex;
  text-align: start;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  padding-left: 21%;
  font-weight: 600;
  opacity: 0.8;
}
.type + div {
  padding: 10px;
}
</style>
