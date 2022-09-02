import {ref} from "vue";
import axios from "axios";

const getCountries = () => {
    let countries = ref([]);
    let regions = ref([]);

    const getAllCountries = () => {
        axios.get(`https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,cioc`)
            .then(response => {
                countries.value = response.data;
                regions.value = countries.value.map(country => country.region);
                regions.value = regions.value.filter((region, index) => regions.value.indexOf(region) === index).sort();
            })
            .catch(error => console.log(error));
    };

    const filterByRegion = (region) => {
        if (region === 'All') {
            getAllCountries();
        } else {
            axios.get(`https://restcountries.com/v3.1/region/${region}?fields=name,region,flags,population,capital,currencies,languages,tld,borders,subregion`)
                .then(res => countries.value = res.data)
                .catch(err => console.log(err));
        }
    };

    return {countries, regions, getAllCountries, filterByRegion};
}

export default getCountries;