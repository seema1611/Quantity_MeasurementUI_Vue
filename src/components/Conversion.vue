<template>
  <div id="conversion-container">

    <div class="from-content">
      <div class="from-to-text">FROM</div>
      <input 
        @input="changedSecondUnit()" 
        class="from-to-input" 
        type="number" 
        v-model="firstTextValue">      
      <select class="select-unit" @change="changedFirstUnit()" v-model="selectedFirstUnit">
        <option v-for= "subUnit in subUnits"
         v-bind:key= "subUnit"
         > {{ subUnit }}</option>
      </select>
    </div>

    <div class="to-content">
      <div class="from-to-text">TO</div>
      <input 
        @input="changedFirstUnit()" 
        type="number" 
        class="from-to-input" 
        v-model="secondTextValue">      
      <select class="select-unit" @change="changedSecondUnit()" 
        v-model="selectedSecondUnit">
        <option v-for= "subUnit in subUnits"
         v-bind:key= "subUnit"
         > {{ subUnit }}</option>
      </select>
    </div>

  </div>
</template>

<script>
import {bus} from '../main' 
import services from '../services/QuantityMeasurementService'
export default { 
    name:'Conversion',
    data : () => ({
      firstTextValue: "1",
      secondTextValue : "",
      selectedMainUnit : "",
      
      selectedFirstUnit: null,
      selectedSecondUnit: null,
      subUnits:[],
      }),

    methods: {
      updateSubUnits : function (selectedMainUnit) {
      services
        .getSubUnits(selectedMainUnit)
        .then((response) => {
          this.subUnits = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    changedFirstUnit:  function () {
     services
        .getConvertedValue(
          this.secondTextValue,
          this.selectedSecondUnit,
          this.selectedFirstUnit
        )
        .then((response) => {
          this.firstTextValue = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changedSecondUnit:  function () {
      services
        .getConvertedValue(
          this.firstTextValue,
          this.selectedFirstUnit,
          this.selectedSecondUnit
        )
        .then((response) => {
          this.secondTextValue = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  watch: {
    subUnits: function () {
      this.selectedFirstUnit = this.subUnits[0];
      this.selectedSecondUnit = this.subUnits[1];
      this.firstTextValue='1';
      this.changedSecondUnit();
    },
  },

    mounted (){
    bus.$on('getValue',(unit)=>{  
        this.selectedMainUnit = unit;
        console.log(this.selectedMainUnit);
        this.updateSubUnits(this.selectedMainUnit);
      });
      this.selectedFirstUnit = this.subUnits[0];
      this.selectedSecondUnit = this.subUnits[1];
    },
}
</script>

<style lang="scss" scoped>
#conversion-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.from-content {
  display: flex;
  flex-direction: column;
  margin-left: 20%;
}

.to-content {
  display: flex;
  flex-direction: column;
  margin-right: 20%;
}

.from-to-text {
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
}

.from-to-input {
  width: 28vw;
  font-size: 25px;
  line-height: 40px;
  text-align: left;
  border: none;
  outline: none;
  padding: 1vh;
  padding-left: 10%;
  border: solid 1px rgba($color: #000000, $alpha: 0.2);
}

.select-unit {
  width: 28vw;
  height: 7vh;
  font-size: 12px;
  line-height: 15px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  padding-left: 10%;
  border: solid 1px rgba($color: #000000, $alpha: 0.2);
  border-top: none;
}

@media screen and (max-width: 780px) {
  #conversion-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.from-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 5%;
}

.to-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5%;
}

.from-to-input {
  width: 45vw;
  font-size: 20px;
}

.select-unit {
  width: 45vw;
  margin-bottom: 25%;
  font-size: 20px;
}

.from-to-text {
  font-size: 20px;
  margin-bottom: 8%;
}

}

</style>