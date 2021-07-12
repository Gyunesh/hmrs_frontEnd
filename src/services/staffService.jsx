import axios from "axios"

export default class StaffService {
    getAll() {
        return axios.get("http://localhost:8080/api/staffs/getall")

    }

    confirm(status) {
        return axios.post("http://localhost:8080/api/staffs/confirm", status)
    }
}