<template>
    <div class="container">
        <h1 class="text-center">Vue-Translator</h1>
        <h5 class="text-center">Vue.js Translator</h5>
        <br>
        <div class="row">
          <div class="col-md-12 text-center">
            <form class="well">
                <textarea cols="30" rows="5" class="form-control" placeholder="Insert the text that you want to translate..." v-model="textToTranslate"></textarea>
                <select class="form-control" v-model="targetLang">
                    <option v-for="item in languages" :key="item.language">{{item.language}}</option>
                </select>
                <br>
                <div class="text-left">
                    <strong>Detected Language : {{detectedLang[0].language}}</strong> 
                </div>
                <br>
                <button  class="btn btn-primary btn-block" @click="translateIt($event)">Translate!</button>
            </form>
            <h3 class="text-success text-center">{{translatedText}}</h3>
            <div class="well">
                <h3>Search History</h3>
                 <ul class="list-group text-left">
                 <li class="list-group-item" v-for="item in historySearch" :key="item.id"> 
                   <div>
                     <strong>Source Language : {{item.sourceLanguage}} >> Target Language: {{item.targetLanguage}}</strong>
                     <br>
                     <strong>Translated: {{item.text}} >> {{item.translated}}</strong>
                   </div>
                   <br>
                   <div>
                     <strong class="text-success"></strong> 
                     <span class="text-info"></span>
                   </div>
                 </li>
               </ul>
              </div>
          </div>
        </div>
      </div>
</template>


<script>
import axios from './axios/axios'

export default {
    data(){
        return{
            textToTranslate: null,
            targetLang: "en",
            detectedLang: [{
                language : "",
            }],
            languages: [{
                language: null,
            }],
            translatedText: null,
            historySearch:[]
        }
    },
    methods:{
        translateIt(event){
            event.preventDefault();
            const encodedParams = new URLSearchParams();
            encodedParams.append("q", this.textToTranslate);
            axios.post('/detect', encodedParams)
            .then((res) => {
                console.log(res.data.data.detections[0])
                
                this.detectedLang = res.data.data.detections[0];
                console.log(this.detectedLang);
            })

            const encodedParamsTranslate = new URLSearchParams();
            encodedParams.append("q", this.textToTranslate);
            encodedParams.append("target", this.targetLang);
            encodedParams.append("source", this.detectedLang[0].language);
            console.log(encodedParams);
            axios.post('/', encodedParams)
            .then((res) => {
                this.translatedText = res.data.data.translations[0].translatedText;
                this.historySearch.push({targetLanguage: this.targetLang, sourceLanguage: this.detectedLang[0].language, text: this.textToTranslate, translated: this.translatedText})
            })
        }
    },
    created(){
         axios.get('/languages').then((res) => {
                this.languages = res.data.data.languages
            }).
            catch((err) => {
                console.log(err)
            })
    }
}
</script>