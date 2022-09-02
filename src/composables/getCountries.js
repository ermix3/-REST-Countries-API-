import {ref} from "vue";
import axios from "axios";

const getCountries = () => {
    let countries = ref([]);
    let regions = ref([]);
    let countriesFiltered = ref([]);


    const getAllCountries = () => {
        axios.get(`https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital`)
            .then(res => {
                countries.value = res.data;
                regions.value = countries.value.map(country => country.region);
                regions.value = regions.value.filter((region, index) => regions.value.indexOf(region) === index).sort();
            })
            .catch(err => console.log(err));
    };

    const filterByRegion = region => {
        if (region === 'All') {
            getAllCountries();
        } else {
           axios.get(`https://restcountries.com/v3.1/region/${region}?fields=flags,name,population,region,capital`)
                .then(res => countriesFiltered.value = res.data)
                .catch(err => console.log(err));
        }
    };
    return {countries, regions, countriesFiltered, getAllCountries, filterByRegion};
}

export default getCountries;