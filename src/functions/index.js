export const fullname = (name = '', lastname = '') => {
    return `${name} ${lastname}`
}

export const address = (object = {}) => {
    // alert(JSON.stringify(object))
    let short = {
        province: 'จ. ', 
        district: 'อ. ', 
        tumbon: 'ต. ', 
        moo: 'หมู่ ', 
        soi: 'ซอย ', 
        road: 'ถนน ',
        defendant_moo: 'หมู่ ',
        defendant_soi: 'ซอย ',
        defendant_road: 'ถนน ',
        alleyway: 'ซอย ',
        moo_person: 'หมู่ ',
        alleyway_person: 'ซอย ',
        road_person: 'ถนน ',
        house_number_person: 'บ้านเลขที่ ',
        sub_district: 'ต. ',
    }
    let address = ""
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            const takeShort = element ? (short[key] || '') : '';
            address += takeShort + element + ' '
            // switch(key){
            //     case "":
            // }
        }
    }

    return address
}