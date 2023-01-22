<template>
<div class="container">
    <div class="header-section">
        <p>Drug Record Application Finder</p>
    </div>
    <div class="form-wrapper">
        <div class="custom-text">
            <label>FDA Manufacturer name</label>
            <input type="text"  placeholder="Required" v-model="searchText"/>
        </div>
        <div class="custom-text">
            <label>FDA Brand name</label>
            <input type="text" placeholder="Optional" v-model="searchOptionalText"/>
        </div>
        <div class="custom-text search-button">
            <button @click="searchFdaRecordApplication(searchText,searchOptionalText)">Search</button>
        </div>
    </div>

    <div class="table-body">
        <table>
            <thead>
                <tr>
                    <th>
                        Manufacturer name(s)
                    </th>
                    <th>
                        Brand name(s)
                    </th>
                    <th>
                        Product(s)
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="drugRecordResult in data.results" :key="drugRecordResult.sponsor_name">
                    <td>
                        <div class="result-row">
                            <div class="manufacurer-data" v-for="manufacturerName in drugRecordResult.openfda.manufacturer_name" :key="manufacturerName.manufacturer_name.length">
                                {{ manufacturerName.manufacturer_name }}{{','}}
                            </div>

                        </div>
                    </td>
                    <td>
                        <div class="result-row">
                            <div class="brand-name-data" v-for="brandName in drugRecordResult.openfda.brand_name" :key="brandName.brand_name.length">
                                {{ brandName.brand_name }}{{','}}
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="result-row">
                            <div class="product-data" v-for="productName in drugRecordResult.products" :key="productName.brand_name">
                                {{ productName.brand_name}}
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="footer-section">
        <p>&#169;Drug Record Application Finder</p>
    </div>
</div>
</template>

<script lang="ts">
import {stringLiteral} from "@babel/types";
import {defineComponent,reactive,ref,toRefs} from "vue";
import {findDrugRecordApplications} from "./services/drugRecordFinderAPI";
import {DrugRecordTypes, MarketingStatus} from "./types/DrugRecordTypes.interface";

export default defineComponent({
    name: "App",
    components: {
    },

    setup() {
        let drugRecords = reactive < {data: DrugRecordTypes} > ({data: {}});
        let searchText = ref("");
        let searchOptionalText = ref("")
        const searchFdaRecordApplication = async (search: string,searchOptionalText:string): Promise < void > => {
          if(searchText.value === ''){
            alert("Please provide value for FDA manufacturer name field");
            console.log("value after presss",searchText.value);
          }
          
           const value = await findDrugRecordApplications(search,searchOptionalText);
           drugRecords.data = value;
           const results = JSON.parse(JSON.stringify(drugRecords));
           console.log("data-deepanshu", results);
        };
        return {searchFdaRecordApplication, ...toRefs(drugRecords), searchText,searchOptionalText};
    }
});
</script>

<style>
@import './assets/style.css';
</style>
