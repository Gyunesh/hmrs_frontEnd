import axios from "axios"

export default class JobAdvertService {
    getAll() {
        return axios.get("http://localhost:8080/api/verifications/getall")
    }
    getAllConfirmed() {
        return axios.get(`http://localhost:8080/api/statuses/getall`)
    }
    getById(employerId) {
        return axios.get(`http://localhost:8080/api/jobadverts/getallbyemployerid?employerId=${employerId}`)
    }

    addAdvert(advertisement) {
        return axios.post("http://localhost:8080/api/jobadverts/add", advertisement)
    }
}