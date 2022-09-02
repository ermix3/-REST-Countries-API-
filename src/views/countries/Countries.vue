<template>
  <!--   filter & search Bar-->
  <div class="container-fluid gap-5 px-3 px-md-5 pt-5">
    <div class="row">
      <div class="col-12 col-md-7 col-lg-5 my-1 my-sm-1 position-relative">
        <i id='loop' class="fa-solid fa-magnifying-glass position-absolute top-50 translate-middle-y "></i>
        <input type="search" name="search" id="search" v-model="search"
               class="w-100 form-control shadow-sm py-3 pe-2"
               placeholder="Search for a country...">
      </div>
      <div class="col-12 col-md-2 col-lg-5 my-1 my-sm-1"></div>
      <div class="col-7 col-sm-7 col-md-3 col-lg-2 my-4 my-sm-1">
        <select name="filter" id="filter" class="form-select p-3 shadow-sm" v-model="selected">
          <option value="" hidden selected> Filter by Region</option>
          <option value="All" >The World Wide Countries</option>
          <option v-for="region of regions" :value="region" > {{ region }}</option>
        </select>
      </div>
    </div>
  </div>

  <!--  countries data-->
  <div
      class="home container-fluid d-flex flex-wrap justify-content-center justify-content-md-start justify-content-md-between gap-5 px-3 px-md-5 mt-5">
    <div class="card shadow" v-if="countriesFiltered.length" v-for="country in countriesFiltered"
         :key="country.name.common">
      <img :src="country.flags.png" class="card-img-top h-50" alt="...">
      <div class="card-body text-start p-4">
        <router-link :to="{name:'Country',params:{id:country.name.common}}" class="nav-link text-dark">
          <h3 class="my-3">{{ country.name.common }}</h3>
        </router-link>
        <p class="my-1 country-info">Population: <span>{{ country.population.toLocaleString("en") }}</span></p>
        <p class="my-0 country-info">Region: <span>{{ country.region }}</span></p>
        <p class="my-1 country-info">Capital: <span>{{ country.capital[0] }}</span></p>
      </div>
    </div>
    <div v-else class="vh-100">
      <p class="lead" v-if="!isDone">Countries is Loading ... </p>
      <p class="lead" v-else>No Countries Found</p>
    </div>
  </div>
</template>

<script>
import {ref, watch, watchEffect} from "vue";
import getCountries from "@/composables/getCountries";

export default {
  name: 'Home',
  setup() {
    let search = ref('');
    let isDone = ref(false);
    let selected = ref('All');
    let {countries, regions, countriesFiltered, getAllCountries, filterByRegion} = getCountries();

    getAllCountries();

    // Methods
    watchEffect(() => {
      if (search.value) {
        countriesFiltered.value = countries.value.filter(country => country.name.common.toLowerCase().includes(search.value.toLowerCase()));
        isDone.value = !isDone.value
      } else {
        countriesFiltered.value = countries.value;
      }
    });

    watch(selected,() => {
      if (selected.value !== 'All') {
        filterByRegion(selected.value);
        isDone.value = !isDone.value
      } else {
        countriesFiltered.value = countries.value;
      }
    });
    return {countries, countriesFiltered, search, regions, isDone, selected, filterByRegion}
  },

}
</script>

<style scoped lang="scss">
@import '../../scss/_variables';

// Search & Filter
.row {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
}

#search {
  padding-left: 60px;
}

#filter {
  cursor: pointer;
}

#filter, #search {
  border: 0;
}

#loop {
  left: 40px;
  color: $lightModeInput;
}

::placeholder {
  color: $lightModeInput;
  font-weight: 300;
}

// countries data
.home {
  font-family: 'Nunito Sans', sans-serif;
  font-size: 14px;
}

.card {
  font-family: 'Nunito Sans', sans-serif;
  border: 0;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
    transition: all 0.2s ease-out;
  }

  h3 {
    font-weight: 600;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: $lightModeInput;
    }
  }

  .country-info {
    font-weight: 800;
    font-size: 14px;

    span {
      font-weight: 300;
      font-size: 14px;
    }
  }
}

@media (max-width: 375px) {
  .card {
    width: 17rem;
  }
}

@media (max-width: 756px) {
  .card {
    width: 12rem;
  }
}

@media (max-width: 992px) {
  .card {
    width: 19rem;
  }
}

@media (max-width: 1440px) {
  .card {
    width: 17rem;
  }
}

</style>
