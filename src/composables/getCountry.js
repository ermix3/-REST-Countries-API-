import {ref} from "vue";
import axios from "axios";

const getCountry = () => {
    let country = ref([]);
    let borders = ref([]);
    let errors = ref(null);

    const getCountryById = (id) => {
        axios.get(`https://restcountries.com/v3.1/name/${id}?fields=flags,name,population,region,subregion,capital,cioc,tld,currencies,languages,borders`)
            .then(res => {
                country.value = res.data;
                let codeString = res.data[0].borders.join(",");
                if (codeString) {
                    axios.get(`https://restcountries.com/v3.1/alpha?codes=${codeString}`)
                        .then(res => borders.value = res.data)
                }
            })
            .catch(error => errors.value = error.message)
    };

    const getCountryByName = (name) => {
        axios.get(`https://restcountries.com/v3.1/name/${name}?fields=name,region,subregion,flags,population,capital,cioc,tld,currencies,languages,borders`)
            .then(res => {
                country.value = res.data;
            })
            .catch(error => console.log(error));
    };

    return {country, borders, errors, getCountryById, getCountryByName};
}

export default getCountry;
