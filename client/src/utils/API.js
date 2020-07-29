import axios from "axios";

export default {
    getCreels: function(){
        console.log("API.js")
        return axios.get("/api/creels");
    },
    getCreel: function(id){
        return axios.get("/api/creels/" + id);
    },
    deleteCreel: function(id){
        return axios.delete("/api/creels/" + id);
    },
    saveCreel :function(creelData){
        return axios.post("/api/creels/",creelData);
    }
};