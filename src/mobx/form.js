import { observable, action, computed } from 'mobx'
import { get } from '../api'

class Form {
    // ข้อมูลที่แจ้ง
    @observable subject
    @observable director
    @observable type
    @observable disclose
    @observable id_line
    @observable email
    @observable complainant
    @observable location_name
    @observable lat
    @observable lng
    @observable detail
    @observable objective

    // ข้อมูลที่อยู่
    @observable house_number
    @observable moo
    @observable alleyway
    @observable road
    @observable sub_district
    @observable district
    @observable province
    @observable zipcode

    // ข้อมูลผู้แจ้งเรื่อง
    @observable id_card
    @observable fname
    @observable lname
    @observable prefix
    @observable phone

    @action
    async intiUserData() {
        try {
            const userData = await get('/auth/profile')
            // address data
            this.house_number = userData.house_number
            this.moo = userData.moo
            this.alleyway = userData.alleyway
            this.road = userData.road
            this.sub_district = userData.sub_district
            this.district = userData.district
            this.province = userData.province
            this.zipcode = userData.zipcode
            // user data
            this.fname = userData.fname
            this.lname = userData.lname
            this.prefix = userData.prefix
            this.id_card = userData.id_card
            this.phone = userData.phone

        } catch (error) {
            console.warn('initial userdata error')
        }
    }

    @action
    setUserData(data_name, value) {
        this[data_name] = value
    }

}

export const form = new Form()

class FormDepartment {

}

export const form_department = new FormDepartment()

class FormPerson {

}

export const form_person = new FormPerson()




