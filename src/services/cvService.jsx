import axios from "axios"


export default class CvService{
    getAll(jobSeekerId){
        return axios.get("http://localhost:8080/api/jobseekers/cv?jobSeekerId="+{jobSeekerId})
    }

    getAllCities(){
        return axios.get("http://localhost:8080/api/cities/getall")
    }
}