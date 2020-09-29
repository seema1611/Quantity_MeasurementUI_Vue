<template>
  <div class="conversion-container">

    <div class="values-units-container">

      <div class="input-container">
        
        <div class="values-units-container">
          <div class="from-to-text">From</div>
          <div class="from-to-box">
            <input
              @input="updateSecondUnit()"
              class="textbox"
              type="text"
              v-model="formValue"
            />
            <select  class="selectbox" 
              @change="updateFirstUnit()"
               v-model="selectedFirstUnit">
              <option
                class="option-box"
                v-for="subUnit in subUnitsArray"
                v-bind:key="subUnit"
              >{{subUnit}}</option>
            </select>
          </div>
        </div>


        <div class="values-units-container">
          <div class="from-to-text">To</div>
          <div class="from-to-box">
            <input
              @input="updateFirstUnit()"
              class="textbox"
              type="text"
              v-model="toValue"
            />
            <select 
              class="selectbox" 
              @change="updateSecondUnit()" 
              v-model="selectedSecondUnit">
              <option
                class="option-box"
                v-for="subUnit in subUnitsArray"
                v-bind:key="subUnit">
                {{subUnit}}
                </option>
            </select>
          </div>
        </div>


      </div>
      
    </div>

  </div>
</template>


<script>
import {bus} from '../main' 
import services from '../services/QuantityMeasurementService'
export default { 
    name:'Conversion',
    data : () => ({
      selectedMainUnit : "",
      formValue: "1",
      toValue : "",
      
      selectedFirstUnit: null,
      selectedSecondUnit: null,
      subUnitsArray:[],
      }),

    methods: {
      updateSubUnits : function (selectedMainUnit) {
      services
        .getSubUnits(selectedMainUnit)
        .then((response) => {
          this.subUnitsArray = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateFirstUnit:  function () {
     services
        .getConvertedValue(
          this.toValue,
          this.selectedSecondUnit,
          this.selectedFirstUnit
        )
        .then((response) => {
          this.formValue = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    updateSecondUnit:  function () {
      services
        .getConvertedValue(
          this.formValue,
          this.selectedFirstUnit,
          this.selectedSecondUnit
        )
        .then((response) => {
          this.toValue = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  watch: {
    subUnitsArray: function () {
      this.selectedFirstUnit = this.subUnitsArray[0];
      this.selectedSecondUnit = this.subUnitsArray[1];
      this.formValue='1';
      this.updateSecondUnit();
    },
  },

    mounted (){
    bus.$on('getValue',(unit)=>{  
        this.selectedMainUnit = unit;
        console.log(this.selectedMainUnit);
        this.updateSubUnits(this.selectedMainUnit);
      });
      this.selectedFirstUnit = this.subUnitsArray[0];
      this.selectedSecondUnit = this.subUnitsArray[1];
    },
}
</script>

<style scoped>
.conversion-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
}

.values-units-container {
  flex-direction: column;
    max-width: -webkit-fill-available;
}

.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.from-to-box {
  display: flex;
  flex-direction: column;
  margin: 5px 25px;
}

.from-to-text {
  top: 397px;
  left: 520px;
  width: 38px;
  height: 15px;
  text-align: left;
  margin-left: 8%;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0px;
  color: #000000;
  text-transform: uppercase;
  opacity: 0.8;
}

.textbox {
  height: 62px;
  max-width: 350px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #e5dafc;
  border-radius: 1px;
  opacity: 1;
  padding: 18px 27px;
  text-align: left;
  font: normal normal bold 31px/40px Roboto;
  letter-spacing: 0px;
  color: #000000;
}
.selectbox {
  max-width: 350px;
  height: 48px;
  border: 1px solid #e7dcfe;
  border-radius: 3px;
  padding: 15px 27px;
  font: normal normal normal 15px/19px Montserrat;
  text-transform: uppercase;
  -webkit-appearance: none;
  -moz-appearance: none;
}

select:focus {
 outline: none ;
}

</style>