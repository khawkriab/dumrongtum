import React, { useState, useEffect } from 'react'
import { Row } from 'reactstrap'
import { Label } from '../../Asset/styled';
import { get, post } from '../../api';

export const Selecter = ({ name, onChange = () => { }, active = true, value }) => {
    const [province, setProvince] = useState([]); // allProvince
    const [province_name, setProviceName] = useState('');
    const [district, setDistrict] = useState([]); // all
    const [district_name, setDistrictName] = useState('');
    const [tumbon, setTumbon] = useState([]); // all
    const [tumbon_name, setTumbonName] = useState('')
    const [zipcode, setZipcode] = useState('');

    const [province_selected, setSelectProvince] = useState(null)
    const [district_selected, setSelectDistrict] = useState(null)
    const [sub_district_selected, setSelectSubDistrict] = useState(null)


    useEffect(() => {
        get_province()

    }, [])

    // set province if have got
    useEffect(() => {
        const idProvince = province.find(el => el.label === value.province)
        if (idProvince) {
            get_district(value.province, idProvince.value)
        }
    }, [province, value.province])

    // set district 
    useEffect(() => {
        const idDistrict = district.find(el => el.label === value.district)
        if (idDistrict) {
            get_tombon(value.district, idDistrict.value)
        }
    }, [district, value.district])

    // set sub district
    useEffect(() => {
        const idSubDistrict = tumbon.find(el => el.label === value.sub_district)
        if (idSubDistrict) {
            setSelectSubDistrict(idSubDistrict.value)
            setTumbonName(value.sub_district)
        }
    }, [tumbon, value.sub_district])

    useEffect(() => {
        if (value) {
            setZipcode(value.zipcode)
        }
    }, [value.zipcode])

    useEffect(() => {
        onChange(name, { province: province_name, district: district_name, tumbon: tumbon_name, zipcode })
    }, [zipcode])

    async function get_province() {
        try {
            const allProvince = await get('/homeland/provinces')
            setProvince(allProvince)
        } catch (err) {
            console.log(err)
        }
    }

    async function get_district(province_name, province_id) {
        try {
            const allDistrict = await post(`/homeland/districts`, { province_id })

            setDistrict(allDistrict)
            setProviceName(province_name)
            setSelectProvince(province_id)
        } catch (err) {
            console.log(err)
        }
    }

    async function get_tombon(district_name, district_id) {
        try {
            const allTombon = await post(`/homeland/sub_districts`, { district_id })
            setTumbon(allTombon)
            setDistrictName(district_name)
            setSelectDistrict(district_id)
        } catch (err) {
            console.log(err)
        }
    }


    function _updateProvince(event) {
        var index = event.nativeEvent.target.selectedIndex;
        get_district(event.nativeEvent.target[index].text, event.target.value)
    };
    function _updateDistrict(event) {
        var index = event.nativeEvent.target.selectedIndex;
        get_tombon(event.nativeEvent.target[index].text, event.target.value)
    };
    function _updateTombon(event) {
        const [tumbon, zipcode] = event.target.value.split(',')
        setTumbonName(tumbon)
        setZipcode(zipcode)
    }

    return (
        <Row style={{ paddingTop: 10 }} >
            <div className='col-sm-3 LabelInput-panel'>
                <Label>จังหวัด</Label>
                <select disabled={!active} className="selectTitleName" onChange={_updateProvince} value={province_selected} >
                    <option value='all' >โปรดเลือกจังหวัด</option>
                    {
                        province.map(el => <option key={el.label} value={el.value} >{el.label}</option>)
                    }
                </select>
            </div>

            <div className='col-sm-3 LabelInput-panel'>
                <Label>อำเภอ</Label>
                <select disabled={!active} className="selectTitleName" onChange={_updateDistrict} value={district_selected} >
                    <option value='all' >โปรดเลือกอำเภอ</option>
                    {
                        district.map(el => <option key={el.label} value={el.value} >{el.label}</option>)
                    }
                </select>
            </div>
            <div className='col-sm-3 LabelInput-panel'>
                <Label>ตำบล</Label>
                <select disabled={!active} className="selectTitleName" onChange={_updateTombon} value={sub_district_selected}>
                    <option value='all' >โปรดเลือกตำบล</option>
                    {
                        tumbon.map(el => <option key={el.label} value={[el.label, el.zipcode]} >{el.label}</option>)
                    }
                </select>
            </div>
            <div className='col-sm-3 LabelInput-panel zipcodeStyle2'>
                <Label>รหัสไปรษณีย์</Label>
                <input type='text' name='inputZipcode' value={zipcode} className="" disabled placeholder='รหัสไปรษณีย์' />
            </div>
        </Row>
    )
}