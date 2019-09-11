import React, { Component } from 'react'
const data = [
    {
        fname: '11111',
        lname: 'ชื่อหน่วยงาน',
        age: 27,
        location: ["Rongkhom", "Kalasin"],
    },
    {
        fname: '22222',
        lname: 'ชื่อหน่วยงาน',
        age: 20,
        location: ["Bankok", "Thailand"],
    },
    {
        fname: '33333',
        lname: 'ชื่อหน่วยงาน',
        age: 26,
        location: ["Canada", " Ottawa‎"],
    },
]
const data2 = [
    {
        fname: 'กกกก',
        location: ["Bankok"]
    }, {
        fname: "ขขขขข",
        location: ["Thailand"]
    }
]
export default class Test extends Component {

    render() {
        const insideMap = (el, index) => {
            return el.fname + " " + el.lname + " " + el.age
        }

        // Array.map
        const dataFullname = data.map(insideMap)

        // Fillter
        const insideFillter = (el, index) => el.age > 25
        const FillterAge = data.filter(insideFillter).map(insideMap)

        // Find
        const insideFind = (el, index) => el.location.find(el => el === 'Thailand')
        const findThailand = data.find(insideFind)

        // Fillter some
        const sameData2 = data.filter(el => {
            if (data2.some(e => e.fname === el.fname)) {
                return true
            } else {
                if (data2.some(e => intersection(new Set(e.location), new Set(el.location)).size > 0)) {
                    return true
                } else {
                    return false
                }
            }
        })
        function intersection(setA, setB) {
            var _intersection = new Set(); // resulting set 
            for (var elem of setB) {
                if (setA.has(elem)) { // if elements of setB contains setA
                    _intersection.add(elem);
                }
            }
            return _intersection;
        }


        console.log('dataFullname', dataFullname)
        console.log('FillterAge', FillterAge)
        console.log('findThailand', findThailand)
        console.log('sameData2', sameData2)

        return (
            <div>

            </div>
        )
    }
}


// const insideFillter


// -----------------------------------------------------------------------------------------
// Array.map
// fillter
// find
// findIndex
// reduce //จะส่งเป็น func เช่น reduce(()=>{})
// slice //เอาเฉพาะบางช่วง
// -----------------------------------------------------------------------------------------
// Array.map //เป็น data สูง เช่น 
// const not = fn  => !fn()             รับ fn เข้ามากระทำด้านในของมัน
// const older = age => age >50
// const younger = not(older)
// console.log(younger(49)) ======> true