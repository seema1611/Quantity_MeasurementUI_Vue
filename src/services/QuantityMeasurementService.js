import services from './Httpservices'

class QuantityMeasurementService {
    getUnits() {
        return services.get(`mainunits`)
    }

    getSubUnits(mainunits) {
        return services.get(`subunits?unit=${mainunits}`)
    }

    getConvertedValue(valueOfConvert, firstSubUnit, secondSubUnit) {
        const convertDTO = {
        valueOfInitialUnit : valueOfConvert,
        baseUnit : firstSubUnit,
        targetUnit : secondSubUnit
    }
        return services.post('convert', convertDTO)
    }
}

export default new QuantityMeasurementService;