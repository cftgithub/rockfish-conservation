import axios from "axios";

export default {
    getCreels: function() {
        return axios.get("/api/creels");
    },
    testCreels: function() {
        return axios.get("/api/testCreels");
    },
    getCreel: function(id) {
        return axios.get("/api/creels/" + id);
    },
    deleteCreel: function(id) {
        return axios.delete("/api/creels/" + id);
    },
    saveCreel: function(creelData) {
        return axios.post("/api/creels/", creelData);
        
    }
};