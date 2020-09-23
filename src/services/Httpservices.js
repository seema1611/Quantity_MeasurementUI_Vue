import axios from "axios";

const baseUrl = 'http://localhost:8091/units'

export default {

    post(convertURL, conversionDTO) {
        return axios({
            method: 'post',
            url: `${baseUrl}/${convertURL}`,
            data: conversionDTO,
        })
    },

    get(subUnitURL) {
        return axios (
            {
                method: 'get',
                url: `${baseUrl}/${subUnitURL}`,

            }
        )
    },

    get(mainUnitURL) {
        return axios (
            {
                method: 'get',
                url: `${baseUrl}/${mainUnitURL}`
            }
        )
    }
}