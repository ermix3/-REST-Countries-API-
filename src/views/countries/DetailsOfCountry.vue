<template>
  <div class="container py-5 px-lg-0 fs-5">
    <router-link to="/">
      <button class="btn btn-white px-5 ps-4 fs-6 ms-4 ms-lg-0"><i class="fa-solid fa-arrow-left-long fa-lg mx-2"></i>Back
      </button>
    </router-link>
    <div v-if="country.length" class="row justify-content-center mt-5 gx-5 ">
      <div class="col-12 col-lg-5 text-center my-5 my-lg-0 ">
        <img :src="country[0].flags.png" alt="" class="shadow" >
      </div>
      <div class="col-12 col-lg-7 ">
        <h1 class="fw-bold fs-1 mb-3 mt-2 mb-lg-3 mt-lg-5">{{ country[0].name.common }}</h1>
        <div class="d-block d-lg-flex flex">
          <ul class="p-0 w-50 ">
            <li class="nav-link text-start "><span class="fw-bold me-2">Native Name: </span>{{
                country[0].name.nativeName[Object.keys(country[0].name.nativeName)[0]].common
              }}</li>
            <li class="nav-link"><span class="fw-bold me-2">Population: </span>{{ country[0].population.toLocaleString("en") }}</li>
            <li class="nav-link"><span class="fw-bold me-2">Region: </span>{{ country[0].region }}</li>
            <li class="nav-link"><span class="fw-bold me-2">Sub Region: </span>{{ country[0].subregion }}</li>
            <li class="nav-link"><span class="fw-bold me-2">Capital: </span>{{ country[0].capital[0] }}</li>
          </ul>
          <ul class="p-0 w-50 ms-lg-4">
            <li class="nav-link"><span class="fw-bold me-2">Top Level Domain:</span>
              <span v-for="top in country[0].tld">{{ top }}</span>
            </li>
            <li class="nav-link"><span class="fw-bold me-2">Currencies: </span>{{ Object.keys(country[0].currencies)[0] }}</li>
            <li class="nav-link"><span class="fw-bold me-2">Languages:</span>
<!--              <span v-for="lang in Object.values(country[0].languages)">{{ lang }}</span>-->
              {{ Object.values(country[0].languages).join(', ') }}
            </li>
          </ul>
        </div>
        <div class="d-lg-flex flex-wrap align-items-center">
          <h5 class="mt-4 mt-lg-1 mb-3 me-3 fw-bold" >Border Countries:</h5>
          <router-link :to="{name:'Country',params:{id:nameCountry.name.common}}"
                       v-for="nameCountry in borders " v-if="borders.length"
                       @click="getCountryByName(nameCountry.name.common)">
            <button class="btn btn-sm btn-lg-lg shadow px-4 me-2 mb-2 ">
              {{ nameCountry.name.common }}
            </button>
          </router-link>
          <p v-else>No Borders Found!!</p>
        </div>
      </div>
    </div>
    <div v-else-if="errors" class="container my-5">
      <p>404</p>
      <p>This is not the web page you are looking for.</p>
      <p>Click in the  button Back to get principle page.</p>
    </div>
    <div v-else class="container my-5">
      <p>Data Is Loading ...</p>
    </div>
  </div>
</template>

<script>
import getCountry from "@/composables/getCountry";

export default {
  name: 'Country',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    let {country, borders,errors ,getCountryById, getCountryByName} = getCountry();
    getCountryById(props.id);
    return {country, borders, errors, getCountryByName};
  },
}
</script>

<style scoped lang="scss">
@import '../../scss/_variables';

.container{
  padding-bottom: 14.2rem !important;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

button {
  background-color: $darkModeText_LightModeElements !important;
  color: $lightModeText;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.2);
  text-align: left !important;
}

.details {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 16px;
  text-align: left;
}

button {
  background: $lightModeInput;
}
</style>


