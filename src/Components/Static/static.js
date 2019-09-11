// ########################################################################################################
// ########################################################################################################
// 
//                                          เดือน
// 
// ########################################################################################################
// ########################################################################################################
export const month = [
    {
        value: 1,
        label: 'มกราคม'
    },
    {
        value: 2,
        label: 'กุมภาพันธ์'
    },
    {
        value: 3,
        label: 'มีนาคม'
    },
    {
        value: 4,
        label: 'เมษายน'
    },
    {
        value: 5,
        label: 'พฤษภาคม'
    },
    {
        value: 6,
        label: 'มิถุนายน'
    },
    {
        value: 7,
        label: 'กรกฏาคม'
    },
    {
        value: 8,
        label: 'สิงหาคม'
    },
    {
        value: 9,
        label: 'กันยายน'
    },
    {
        value: 10,
        label: 'ตุลาคม'
    },
    {
        value: 11,
        label: 'พฤศจิกายน'
    },
    {
        value: 12,
        label: 'ธันวาคม'
    }
]
export const years = () => {
    var start = 2010;
    var end = new Date().getFullYear();
    var options = [];
    for (var year = start; year <= end; year++) {
        options.push({ id: year, name: year });
    }
    return options
}
export const yearsAdjust = {
    years
}
// ########################################################################################################
// ########################################################################################################
// 
//                                          User
// 
// ########################################################################################################
// ########################################################################################################
export const user = [
    {
        id: 1,
        depname: 'ชื่อหน่วยงาน'
    }, {
        id: 2,
        depname: 'ชื่อหน่วยงาน'
    }, {
        id: 3,
        depname: 'ชื่อหน่วยงาน'
    }, {
        id: 4,
        depname: 'ชื่อหน่วยงาน'
    }, {
        id: 5,
        depname: 'ชื่อหน่วยงาน'
    }, {
        id: 6,
        depname: 'ชื่อหน่วยงาน'
    }
]
// ########################################################################################################
// ########################################################################################################
// 
//                                          Hotline
// 
// ########################################################################################################
// ########################################################################################################
export const hotline = [
    {
        id: 1,
        depName: 'ศูนย์ดำรงธรรม จังหวัดขอนแก่น',
        depAddr: 'ศาลากลางจังหวัดขอนแก่น ชั้น 1ขอนแก่น 40000',
        depPhone: '043-234384',
        depLink: 'ศูนย์ดำรงธรรมจังหวัดขอนแก่น',
    }, {
        id: 2,
        depName: 'ศูนย์ดำรบธรรม จังหวัดขอนแก่น',
        depAddr: 'ศาลากลางจังหวัดขอนแก่น ชั้น 1ขอนแก่น 40000',
        depPhone: '043-234384',
        depLink: 'ศูนย์ดำรงธรรมจังหวัดขอนแก่น',
    }, {
        id: 3,
        depName: 'ศูนย์ดำรงธรรม จังหวัดขอนแก่น',
        depAddr: 'ศาลากลางจังหวัดขอนแก่น ชั้น 1ขอนแก่น 40000',
        depPhone: '043-234380',
        depLink: 'ศูนย์ดำรงธรรมจังหวัดขอนแก่น',
    }, {
        id: 4,
        depName: 'ศูนย์ดำรงธรรม จังหวัดขอนแก่น',
        depAddr: 'ศาลากลางจังหวัดขอนแก่น ชั้น 1ขอนแก่น 40001',
        depPhone: '043-234384',
        depLink: 'ศูนย์ดำรงธรรมจังหวัดขอนแก่น',
    }, {
        id: 5,
        depName: 'ศูนย์ดำรงธรรม จังหวัดขอนแก่น',
        depAddr: 'ศาลากลางจังหวัดขอนแก่น ชั้น 1ขอนแก่น 40000',
        depPhone: '043-234384',
        depLink: 'ศูนย์ดำรงธรรมจังหวัดขอนแก่น',
    }, {
        id: 6,
        depName: 'ศูนย์ดำรงธรรม จังหวัดขอนแก่น',
        depAddr: 'ศาลากลางจังหวัดขอนแก่น ชั้น 1ขอนแก่น 40000',
        depPhone: '043-234384',
        depLink: 'ศูนย์ดำรงธรรมจังหวัดขอนแก่น',
    }, {
        id: 7,
        depName: 'ศูนย์ดำรงธรรม จังหวัดขอนแก่น',
        depAddr: 'ศาลากลางจังหวัดขอนแก่น ชั้น 1ขอนแก่น 40000',
        depPhone: '043-234384',
        depLink: 'ศูนย์ดำรงธรรมจังหวัดขอนแก่น',
    }
]

// ########################################################################################################
// ########################################################################################################
// 
//                                          News
// 
// ########################################################################################################
// ########################################################################################################
export const news = [
    {
        id: 1,
        newsTitle: 'หัวข้อข่าวจริงประเทศไทย',
        newsDate: '10/08/2018',
        newsCont: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dfttu tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci ',
    },
    {
        id: 2,
        newsTitle: 'หัวข้อข่าวจริงประเทศไทย',
        newsDate: '10/08/2018',
        newsCont: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dfttu tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci ',
    },
    {
        id: 3,
        newsTitle: 'หัวข้อข่าวจริงประเทศไทย',
        newsDate: '10/08/2018',
        newsCont: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dfttu tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci ',
    },
    {
        id: 4,
        newsTitle: 'หัวข้อข่าวจริงประเทศไทย',
        newsDate: '10/08/2018',
        newsCont: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dfttu tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci ',
    },
    {
        id: 5,
        newsTitle: 'หัวข้อข่าวจริงประเทศไทย',
        newsDate: '10/08/2018',
        newsCont: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod dfttu tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci ',
    },
]

// ########################################################################################################
// ########################################################################################################
// 
//                                          Register
// 
// ########################################################################################################
// ########################################################################################################
export const register = [{
    type: 'selectName',
    xs: 12, md: 5,
    xsT: 12, mdT: 2,
    data: [{
        ref: 'prefix',
        title: 'คำนำหน้า',
        type: 'selected',
    }, {
        ref: 'fname',
        title: 'ชื่อจริง',
        placeholder: 'กรุณากรอกชื่อจริง',
        type: 'input',
    }, {
        ref: 'lname',
        title: 'นามสกุล',
        placeholder: 'กรุณากรอกนามสกุล',
        type: 'input',
    }]
}, {
    type: 'row',
    xs: 12, md: 6,
    data: [{
        ref: 'id_card',
        title: 'หมายเลขประจำตัวประชาชน',
        placeholder: 'กรุณากรอกหมายเลขประจำตัวประชาชน 13 หลัก',
        length: 13,
        type: 'input',
        validation: {
            type: 'number'
        }
    }, {
        ref: 'phone',
        title: 'หมายเลขโทรศัพท์',
        placeholder: 'กรุณากรอกหมายเลขโทรศัพท์',
        type: 'input',
        validation: {
            type: 'number'
        }
    }]
}, {
    type: 'rowAddr',
    xs: 12, md: 3, sm: 3,
    data: [{
        ref: 'house_number',
        title: 'บ้านเลขที่',
        placeholder: 'บ้านเลขที่',
        type: 'input',
    }, {
        ref: 'moo',
        title: 'หมู่ที่',
        placeholder: 'หมู่',
        type: 'input',
    }, {
        ref: 'alleyway',
        title: 'ตรอกซอย',
        placeholder: 'ซอย',
        type: 'input',
    }, {
        ref: 'road',
        title: 'ถนน',
        placeholder: 'ถนน',
        type: 'input',
    }]
}, {
    type: 'rowProv',
    data: [{

    }]
}, {
    type: 'rowZip',
    xs: 12, md: 4, sm: 4,
    data: [{
        ref: 'zipcode',
        title: 'รหัสไปรษณีย์',
        type: 'input',
    }]
}, {
    ref: 'username',
    type: 'input',
    title: 'ชื่อผู้ใช้ (Username)',
    placeholder: 'กรูณากรอกชื่อผู้ใช้',
}, {
    type: 'row',
    xs: 6,
    data: [{
        ref: 'password',
        title: 'รหัสผ่าน',
        placeholder: 'กรุณากรอกรหัสผ่าน',
        type: 'input',
        validation: {
            type: 'password'
        }
    }, {
        ref: 'old_password',
        title: 'ยืนยันรหัสผ่าน',
        placeholder: 'กรุณากรอกยืนยันรหัสผ่าน',
        type: 'input',
        validation: {
            type: 'password'
        }
    }]
},
]

// ########################################################################################################
// ########################################################################################################
// 
//                                          headComplaint
// 
// ########################################################################################################
// ########################################################################################################
export const headComplaint = [{
    ref: 'subject',
    title: 'หัวข้อร้องทุกข์',
    placeholder: 'กรุณากรอกหัวข้อร้องทุกข์',
    type: 'input'
}, {
    // ref: 'type',
    ref: 'select_headcomplaintTo', //test 
    title: 'ประเภทเรื่องหลัก',
    type: 'radio',
    xs: 6,
    data: [{
        label: 'ได้รับความเดือดร้อน',
        value: 1
    }, {
        label: 'ขอความช่วยเหลือ',
        value: 2
    }, {
        label: 'ขอความเป็นธรรม',
        value: 3
    }, {
        label: 'ปัญหาที่อยู่อาศัย/ที่ดิน',
        value: 4
    }, {
        label: 'แจ้งเบาะแส',
        value: 5
    }, {
        label: 'ทรัพยากรธรรมชาติและสิ่งแวดล้อม',
        value: 6
    }, {
        label: 'หนี้สิน',
        value: 7
    }, {
        label: 'ร้องเรียนกล่าวโทษเจ้าหน้าที่/หน่วยงานของรัฐ',
        value: 8.1
    }]
}, {
    ref: 'select_Complaint_channel',
    title: 'ช่องทางการร้องเรียน',
    type: 'radio',
    xs: 6,
    data: [{
        label: 'เว็บไซต์',
        value: 1
    }, {
        label: 'หน่วยงานส่วนกลาง',
        value: 2
    }, {
        label: 'LINE',
        value: 3
    }, {
        label: 'Facebook',
        value: 4
    }, {
        label: 'ไปรษณีย์',
        value: 5
    }, {
        label: 'อีเมลล์',
        value: 6
    }, {
        label: 'สายด่วน 1576',
        value: 7
    }, {
        label: 'หน่วยงานอื่น ๆ',
        value: 8
    }]
}
]

// ########################################################################################################
// ########################################################################################################
// 
//                                          headComplaint subType
// 
// ########################################################################################################
// ########################################################################################################

export const sub_complaint = [{
    ref: 'sub_type',
    title: 'ประเภทเรื่องย่อย',
    type: 'selectedSubType',
    1:
    {
        data: [
            {
                value: 'ทุนประกอบอาชีพ',
            },
            {
                value: 'ทุนการศึกษา',

            },
            {
                value: 'สถานศึกษา',

            },
            {
                value: 'สงเคราะห์ผู้ป่วย/ผู้พิการ/เด็ก/คนชรา',

            },
            {
                value: 'ขอที่ดินทำกิน/ที่อยู่อาศัย',

            },
            {
                value: 'การช่วยเหลือผู้ประสบสาธารณภัย',

            },
            {
                value: 'การต่อสู้คดี/เร่งรัดคดี/ประกันตัว/ช่วยเหลือทางกฎหมาย',

            },
            {
                value: 'การแก้ไขปัญหาผลผลิตทางการเกษตร',

            },
            {
                value: 'หนี้สิน (ยกเว้นหนี้นอกระบบ)',

            },
            {
                value: 'สาธารณูปโภค/โครงสร้างพื้นฐาน',

            },
            {
                value: 'ขอความช่วยเหลือที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',

            },
            {
                value: 'ขอความช่วยเหลือเรื่องอื่นๆ',

            },
            {
                value: 'ได้รับผลกระทบจากแชร์ลูกโซ่',
            }
        ]
    }
    ,
    2: {
        data: [
            {
                value: 'ข้อพิพาทเรื่องเกี่ยวกับที่ดิน',

            },
            {
                value: 'ถูกปิดกั้นเส้นทาง',

            },
            {
                value: 'พิพาทน้ำอุปโภค/บริโภค/เพื่อการเกษตร',

            },
            {
                value: 'ได้รับผลกระทบด้านสิ่งแวดล้อม',

            },
            {
                value: 'งานคุ้มครองผู้บริโภค (ประเภทสินค้าอุปโภคบริโภค)',

            },
            {
                value: 'งานคุ้มครองผู้บริโภค (ประเภทบริการ)',

            },
            {
                value: 'งานคุ้มครองผู้บริโภค (ประเภทอสังหาริมทรัพย์และที่อยู่อาศัย)',

            },
            {
                value: 'ไกล่เกลี่ยทางอาญา',

            },
            {
                value: 'ไกล่เกลี่ยทางแพ่ง',

            },
            {
                value: 'ข้อร้องเรียน/ข้อพิพาทระหว่างบุคคลที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',

            },
            {
                value: 'ข้อร้องเรียน/ข้อพิพาทระหว่างบุคคล อื่นๆ',

            }
        ]
    }
    ,
    3: {
        data: [
            {
                value: 'กล่าวโทษเจ้าหน้าที่',

            },
            {
                value: 'ได้รับผลกระทบจากการบริการ/ภารกิจภาครัฐ',

            },
            {
                value: 'ร้องเรียนเจ้าหน้าที่ของรัฐที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',

            },
        ]
    },
    4: {
        data: [
            {
                value: 'ยาเสพติด',

            },
            {
                value: 'ผู้มีอิทธิพล',

            },
            {
                value: 'สถานบริการ/จัดระเบียบสังคม/ค้าประเวณี',

            },
            {
                value: 'บ่อนการพนัน/หวย',

            },
            {
                value: 'ที่ดิน/ป่าไม้/ทรัพยากรธรรมชาติ',

            },
            {
                value: 'แรงงานต่างด้าว/หลบหนีเข้าเมือง',

            },
            {
                value: 'ค้ามนุษย์',

            },
            {
                value: 'เดือดร้อนรำคาญ',

            },
            {
                value: 'แจ้งเบาะแสการกระทำความผิดที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',

            },
            {
                value: 'แจ้งเบาะแสการกระทำความผิดอื่นๆ',

            },
            {
                value: 'แจ้งเบาะแสแชร์ลูกโซ่',

            },
        ]

    },
    5: {
        data: [
            {
                value: 'โครงการตำบลละห้าล้าน',

            },
            {
                value: 'โครงการหมู่บ้านละสองแสนห้า',

            },
            {
                value: 'งบยุทธศาสตร์กลุ่มจังหวัด',

            },
            {
                value: 'งบยุทธศาสตร์จังหวัด',

            },
            {
                value: 'ร้องเรียนโครงการของรัฐอื่น ๆ',

            },
        ]
    },
    6: {
        data: [
            {
                value: 'ร้องเรียนกระบวนการจัดซื้อจัดจ้าง',

            },
            {
                value: 'ร้องเรียนกระบวนการตรวจรับ',

            },
            {
                value: 'ร้องเรียนกระบวนการเบิกจ่าย',

            },
            {
                value: 'ร้องเรียนเจ้าหน้าที่ใช้อำนาจโดยมิชอบ',

            },

        ]
    },
    7: {
        data: [
            {
                value: 'สัญญากู้ยืมเงิน',

            },
            {
                value: 'สัญญาจำนอง ',

            },
            {
                value: 'สัญญาขายฝาก',

            },
            {
                value: 'หนี้เงินกู้ดอกเบี้ยรายวัน',

            },
            {
                value: 'อื่นๆ',

            },
        ]
    },
    8.1: {
        data: [
            {
                value: 'จากสำนักงานเลขาธิการในพระองค์',

            },
            {
                value: 'จากสำนักองคมนตรี',

            },
            {
                value: 'จากสำนักพระราชวัง',

            },
        ]
    }


}]


// export const headComplaint1 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'ทุนประกอบอาชีพ',
//             value: 1.01
//         },
//         {
//             option: 'ทุนการศึกษา',
//             value: 1.02
//         },
//         {
//             option: 'สถานศึกษา',
//             value: 1.03
//         },
//         {
//             option: 'สงเคราะห์ผู้ป่วย/ผู้พิการ/เด็ก/คนชรา',
//             value: 1.04
//         },
//         {
//             option: 'ขอที่ดินทำกิน/ที่อยู่อาศัย',
//             value: 1.05
//         },
//         {
//             option: 'การช่วยเหลือผู้ประสบสาธารณภัย',
//             value: 1.06
//         },
//         {
//             option: 'การต่อสู้คดี/เร่งรัดคดี/ประกันตัว/ช่วยเหลือทางกฎหมาย',
//             value: 1.07
//         },
//         {
//             option: 'การแก้ไขปัญหาผลผลิตทางการเกษตร',
//             value: 1.08
//         },
//         {
//             option: 'หนี้สิน (ยกเว้นหนี้นอกระบบ)',
//             value: 1.09
//         },
//         {
//             option: 'สาธารณูปโภค/โครงสร้างพื้นฐาน',
//             value: 1.10
//         },
//         {
//             option: 'ขอความช่วยเหลือที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',
//             value: 1.11
//         },
//         {
//             option: 'ขอความช่วยเหลือเรื่องอื่นๆ',
//             value: 1.12
//         },
//         {
//             option: 'ได้รับผลกระทบจากแชร์ลูกโซ่',
//             value: 1.13
//         },
//     ]
// }]
// #######################################################################################################
// export const headComplaint2 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'ข้อพิพาทเรื่องเกี่ยวกับที่ดิน',
//             value: 2.01
//         },
//         {
//             option: 'ถูกปิดกั้นเส้นทาง',
//             value: 2.02
//         },
//         {
//             option: 'พิพาทน้ำอุปโภค/บริโภค/เพื่อการเกษตร',
//             value: 2.03
//         },
//         {
//             option: 'ได้รับผลกระทบด้านสิ่งแวดล้อม',
//             value: 2.04
//         },
//         {
//             option: 'งานคุ้มครองผู้บริโภค (ประเภทสินค้าอุปโภคบริโภค)',
//             value: 2.05
//         },
//         {
//             option: 'งานคุ้มครองผู้บริโภค (ประเภทบริการ)',
//             value: 2.06
//         },
//         {
//             option: 'งานคุ้มครองผู้บริโภค (ประเภทอสังหาริมทรัพย์และที่อยู่อาศัย)',
//             value: 2.07
//         },
//         {
//             option: 'ไกล่เกลี่ยทางอาญา',
//             value: 2.08
//         },
//         {
//             option: 'ไกล่เกลี่ยทางแพ่ง',
//             value: 2.09
//         },
//         {
//             option: 'ข้อร้องเรียน/ข้อพิพาทระหว่างบุคคลที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',
//             value: 2.10
//         },
//         {
//             option: 'ข้อร้องเรียน/ข้อพิพาทระหว่างบุคคล อื่นๆ',
//             value: 2.11
//         },
//     ]
// }]
// #######################################################################################################
// export const headComplaint3 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'กล่าวโทษเจ้าหน้าที่',
//             value: 3.01
//         },
//         {
//             option: 'ได้รับผลกระทบจากการบริการ/ภารกิจภาครัฐ',
//             value: 3.02
//         },
//         {
//             option: 'ร้องเรียนเจ้าหน้าที่ของรัฐที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',
//             value: 3.03
//         },
//     ]
// }]
// #######################################################################################################
// export const headComplaint4 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'ยาเสพติด',
//             value: 4.01
//         },
//         {
//             option: 'ผู้มีอิทธิพล',
//             value: 4.02
//         },
//         {
//             option: 'สถานบริการ/จัดระเบียบสังคม/ค้าประเวณี',
//             value: 4.03
//         },
//         {
//             option: 'บ่อนการพนัน/หวย',
//             value: 4.04
//         },
//         {
//             option: 'ที่ดิน/ป่าไม้/ทรัพยากรธรรมชาติ',
//             value: 4.05
//         },
//         {
//             option: 'แรงงานต่างด้าว/หลบหนีเข้าเมือง',
//             value: 4.06
//         },
//         {
//             option: 'ค้ามนุษย์',
//             value: 4.07
//         },
//         {
//             option: 'เดือดร้อนรำคาญ',
//             value: 4.08
//         },
//         {
//             option: 'แจ้งเบาะแสการกระทำความผิดที่สามารถแก้ไข/ยุติ (ยุติได้หน้างาน)',
//             value: 4.09
//         },
//         {
//             option: 'แจ้งเบาะแสการกระทำความผิดอื่นๆ',
//             value: 4.10
//         },
//         {
//             option: 'แจ้งเบาะแสแชร์ลูกโซ่',
//             value: 4.11
//         },
//     ]
// }]
// #######################################################################################################
// export const headComplaint5 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'โครงการตำบลละห้าล้าน',
//             value: 5.01
//         },
//         {
//             option: 'โครงการหมู่บ้านละสองแสนห้า',
//             value: 5.02
//         },
//         {
//             option: 'งบยุทธศาสตร์กลุ่มจังหวัด',
//             value: 5.03
//         },
//         {
//             option: 'งบยุทธศาสตร์จังหวัด',
//             value: 5.04
//         },
//         {
//             option: 'ร้องเรียนโครงการของรัฐอื่น ๆ',
//             value: 5.05
//         },
//     ]
// }]
// #######################################################################################################
// export const headComplaint6 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'ร้องเรียนกระบวนการจัดซื้อจัดจ้าง',
//             value: 6.01
//         },
//         {
//             option: 'ร้องเรียนกระบวนการตรวจรับ',
//             value: 6.02
//         },
//         {
//             option: 'ร้องเรียนกระบวนการเบิกจ่าย',
//             value: 6.03
//         },
//         {
//             option: 'ร้องเรียนเจ้าหน้าที่ใช้อำนาจโดยมิชอบ',
//             value: 6.04
//         },
//     ]
// }]
// #######################################################################################################
// export const headComplaint7 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'สัญญากู้ยืมเงิน',
//             value: 7.01
//         },
//         {
//             option: 'สัญญาจำนอง ',
//             value: 7.02
//         },
//         {
//             option: 'สัญญาขายฝาก',
//             value: 7.03
//         },
//         {
//             option: 'หนี้เงินกู้ดอกเบี้ยรายวัน',
//             value: 7.04
//         },
//         {
//             option: 'อื่นๆ',
//             value: 7.05
//         },
//     ]
// }]
// #######################################################################################################
// export const headComplaint8 = [{
//     ref: 'sub_type',
//     title: 'ประเภทเรื่องย่อย',
//     type: 'selectedSubType',
//     data: [
//         {
//             option: 'จากสำนักงานเลขาธิการในพระองค์',
//             value: 8.01
//         },
//         {
//             option: 'จากสำนักองคมนตรี',
//             value: 8.02
//         },
//         {
//             option: 'จากสำนักพระราชวัง',
//             value: 8.03
//         },
//     ]
// }]

// ########################################################################################################
// ########################################################################################################
// 
//                                          Complaint
// 
// ########################################################################################################
// ########################################################################################################
export const complaint = [{
    // ref: 'select_info', ==> disclose
    ref: 'disclose',
    title: 'ข้อมูลผู้ร้องทุกข์',
    type: 'radio',
    xs: 3,
    data: [{
        label: 'ปกปิดชื่อ',
        value: 8
    }, {
        label: 'เปิดเผยข้อมูล',
        sublabel: 'ระบบดึงข้อมูลที่ลงทะเบียนมาใช้',
        value: 9
    }]
},
{
    ref: 'id_card',
    type: 'cardno',
    title: 'เลขที่บัตรประจำตัวประชาชนผู้ร้องทุกข์',
    length: 13
}, {
    type: 'selectName',
    xs: 12, md: 5,
    xsT: 12, mdT: 2,
    data: [{
        ref: 'prefix',
        title: 'คำนำหน้า',
        type: 'selected',
    }, {
        ref: 'fname',
        title: 'ชื่อผู้ร้องทุกข์',
        placeholder: 'กรุณากรอกชื่อผู้ร้องทุกข์',
        type: 'input',
    }, {
        ref: 'lname',
        title: 'นามสกุลผู้ร้องทุกข์',
        placeholder: 'กรุณากรอกนามสกุลผู้ร้องทุกข์',
        type: 'input',
    }]
}, {
    type: 'row',
    xs: 12, md: 4,
    data: [{
        ref: 'phone',
        title: 'เบอร์โทรศัพท์ผู้ร้องทุกข์',
        placeholder: 'กรุณากรอกเบอร์โทรศัพท์ผู้ร้องทุกข์',
        type: 'input'
    }, {
        ref: 'id_line',
        title: 'ID Line ผู้ร้องทุกข์',
        placeholder: 'กรุณากรอก ID Line ผู้ร้องทุกข์',
        type: 'input'
    }, {
        ref: 'email',
        title: 'E-mail ผู้ร้องทุกข์',
        placeholder: 'กรุณากรอก E-mail ผู้ร้องทุกข์',
        type: 'input'
    }]
}, {
    type: 'row',
    xs: 12, md: 3, sm: 6,
    data: [{
        ref: 'house_number',
        title: 'อยู่บ้านเลขที่',
        placeholder: 'กรุณากรอกบ้านเลขที่',
        type: 'input'
    }, {
        ref: 'moo',
        title: 'หมู่ที่',
        placeholder: 'กรุณากรอกหมู่ที่',
        type: 'input'
    }, {
        ref: 'alleyway',
        title: 'ตรอกซอย',
        placeholder: 'กรุณากรอกตรอกซอย',
        type: 'input'
    }, {
        ref: 'road',
        title: 'ถนน',
        placeholder: 'กรุณากรอกถนน',
        type: 'input'
    }]
}, {
    type: 'rowProv',

},
]
// ########################################################################################################
// ########################################################################################################
// 
//                                          complaint To
// 
// ########################################################################################################
// ########################################################################################################
export const selectComplaint = [{
    ref: 'select_complaintTo',
    title: 'ผู้ถูกร้อง',
    type: 'radio',
    data: [{
        label: 'หน่วยงาน',
        value: 10
    }, {
        label: 'บุคคล',
        value: 11
    }, {
        label: 'นิติบุคคล',
        value: 12
    }]
}]
export const complaintToLeft = [{
    ref: 'select_depart',
    title: 'หน่วยงานที่ถูกร้อง',
    type: 'radioDepart',
    data: [{
        label: 'หน่วยงานที่ 2',
        value: 13
    }, {
        label: 'หน่วยงานที่ 3',
        value: 14
    }, {
        label: 'หน่วยงานที่ 4',
        value: 15
    }, {
        label: 'หน่วยงานที่ 5',
        value: 16
    }, {
        label: 'หน่วยงานที่ 6',
        value: 17
    }, {
        label: 'หน่วยงานที่ 7',
        value: 18
    }, {
        label: 'หน่วยงานที่ 8',
        value: 19
    }, {
        label: 'หน่วยงานที่ 9',
        value: 20
    },]
},
]
// *************************************************************************************************************************

export const complaintToCenter = [{
    type: 'row',
    xs: 12, md: 4, sm: 4,
    data: [{
        ref: 'fname_person',
        title: 'ชื่อผู้ถูกร้องทุกข์',
        placeholder: 'กรุณากรอกชื่อผู้ถูกร้องทุกข์',
        type: 'input'
    }, {
        ref: 'lname_person',
        title: 'นามสกุลผู้ถูกร้องทุกข์',
        placeholder: 'กรุณากรอกนามสกุลผู้ถูกร้องทุกข์',
        type: 'input'
    }, {
        ref: 'phone_person',
        title: 'เบอร์โทรศัพท์ผู้ถูกร้องทุกข์',
        placeholder: 'กรุณากรอกเบอร์โทรศัพท์ผู้ถูกร้องทุกข์',
        type: 'input'
    }]

}, {
    type: 'row',
    xs: 12, md: 3, sm: 6,
    data: [{
        ref: 'house_number_person',
        title: 'อยู่บ้านเลขที่',
        placeholder: 'บ้านเลขที่',
        type: 'input',
    }, {
        ref: 'moo_person',
        title: 'หมู่ที่',
        placeholder: 'หมู่ที่',
        type: 'input',
    }, {
        ref: 'alleyway_person',
        title: 'ตรอกซอย',
        placeholder: 'ตรอกซอย',
        type: 'input',
    }, {
        ref: 'road_person',
        title: 'ถนน',
        placeholder: 'ถนน',
        type: 'input',
    }]
}, {
    type: 'rowProv'
},
]
export const complaintToRight = [
    { type: 'corporationType' },
    {
        type: 'row',
        xs: 12, md: 6, sm: 6,
        data: [{
            ref: 'corporation_name',
            title: 'ชื่อนิติบุคคลหรือบริษัท',
            placeholder: 'กรุณากรอกชื่อนิติบุคคลหรือบริษัท',
            type: 'input'
        }, {
            ref: 'corporation_phone',
            title: 'หมายเลขโทรศัพท์',
            placeholder: 'กรุณากรอกหมายเลขโทรศัพท์',
            type: 'input'
        }]
    },
    { type: 'rowProv' }
]
export const detailComplaint = [{
    ref: 'location_name',
    title: 'สถานที่เกิดเหตุ',
    type: 'input'
}, {
    ref: 'detail',
    title: 'รายละเอียด',
    placeholder: 'กรุณากรอก รายละเอียด',
    type: 'textarea',
}, {
    ref: 'objective',
    title: 'วัตถุประสงค์',
    placeholder: 'กรุณากรอก วัตถุประสงค์',
    type: 'textarea',
},
]
// ########################################################################################################
// ########################################################################################################
// 
//                                          Question
// 
// ########################################################################################################
// ########################################################################################################
export const QnA = [
    {
        id: 1,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `Lorem ipsum dolor sit amet,  consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. Excepteur 
              sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt 
              mollit anim id est laborum.`
    }, {
        id: 2,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `Lorem ipsum dolor sit amet,  consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis  nostrud exercitation ullamco laboris`
    }, {
        id: 3,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `t enim ad minim veniam, quis  nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`
    }, {
        id: 4,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `t enim ad minim veniam, quis  nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`
    }, {
        id: 5,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `t enim ad minim veniam, quis  nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`
    }, {
        id: 6,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `t enim ad minim veniam, quis  nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`
    }, {
        id: 7,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `t enim ad minim veniam, quis  nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`
    }, {
        id: 8,
        title: "หัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถามหัวข้อคำถาม ?",
        content: `t enim ad minim veniam, quis  nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.  Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore  eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident,  sunt in culpa qui officia deserunt 
        mollit anim id est laborum.`
    },
]

// ########################################################################################################
// ########################################################################################################
// 
//                                          News
// 
// ########################################################################################################
// ########################################################################################################
export const newsToday = [
    {
        news_id: 0,
        path: require('../../Asset/icons/Asset32.png'),
        title: "หัวข้อข่าวจริงประเทศไทยหัวข้อข่าวจริงประเทศไทย ",
        date: "10/08/2018",
        detail: "💥💥รัฐบาลสั่งปิดโรงเรียนในพื้นที่ กทม. 2 วัน แก้ปัญหาฝุ่นละอองเกินค่ามาตรฐาน และป้องกันผลกระทบด้านสุขภาพสำหรับเด็ก 👉🏻👉🏻https://www.facebook.com/183675461657982/posts/3001236563235177/",
    }, {
        news_id: 1,
        path: require('../../Asset/icons/Asset33.png'),
        title: "หัวข้อข่าวจริงประเทศไทย",
        date: "10/08/2018",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
        news_id: 2,
        path: require('../../Asset/icons/Asset34.png'),
        title: "หัวข้อข่าวจริงประเทศไทย",
        date: "10/08/2018",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  sunt in culpa qui officia deserunt mollit anim id est laborum  sunt in culpa qui officia deserunt mollit anim id est laborum  sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
        news_id: 3,
        path: require('../../Asset/icons/Asset36.png'),
        title: "หัวข้อข่าวจริงประเทศไทยหัวข้อข่าวจริงประเทศไทย ",
        date: "10/08/2018",
        detail: "💥💥รัฐบาลสั่งปิดโรงเรียนในพื้นที่ กทม. 2 วัน แก้ปัญหาฝุ่นละอองเกินค่ามาตรฐาน และป้องกันผลกระทบด้านสุขภาพสำหรับเด็ก 👉🏻👉🏻https://www.facebook.com/183675461657982/posts/3001236563235177/",
    }, {
        news_id: 4,
        path: require('../../Asset/icons/Asset37.png'),
        title: "หัวข้อข่าวจริงประเทศไทย",
        date: "10/08/2018",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
        news_id: 5,
        path: require('../../Asset/icons/Asset38.png'),
        title: "หัวข้อข่าวจริงประเทศไทย",
        date: "10/08/2018",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  sunt in culpa qui officia deserunt mollit anim id est laborum  sunt in culpa qui officia deserunt mollit anim id est laborum  sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, {
        news_id: 6,
        path: require('../../Asset/icons/Asset35.png'),
        title: "หัวข้อข่าวจริงประเทศไทยหัวข้อข่าวจริงประเทศไทย ",
        date: "10/08/2018",
        detail: "💥💥รัฐบาลสั่งปิดโรงเรียนในพื้นที่ กทม. 2 วัน แก้ปัญหาฝุ่นละอองเกินค่ามาตรฐาน และป้องกันผลกระทบด้านสุขภาพสำหรับเด็ก 👉🏻👉🏻https://www.facebook.com/183675461657982/posts/3001236563235177/",
    }, {
        news_id: 7,
        path: require('../../Asset/icons/Asset37.png'),
        title: "หัวข้อข่าวจริงประเทศไทย",
        date: "10/08/2018",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
]
export const newsDetail = [{
    imageDetail: require('../../Asset/icons/Asset32.png'),
}, {
    imageDetail: require('../../Asset/icons/Asset33.png'),
}, {
    imageDetail: require('../../Asset/icons/Asset34.png'),
}, {
    imageDetail: require('../../Asset/icons/Asset36.png'),
}, {
    imageDetail: require('../../Asset/icons/Asset37.png'),
}, {
    imageDetail: require('../../Asset/icons/Asset38.png'),
}, {
    imageDetail: require('../../Asset/icons/Asset35.png'),
}, {
    imageDetail: require('../../Asset/icons/Asset37.png'),
},
]

// ########################################################################################################
// ########################################################################################################
// 
//                                          News
// 
// ########################################################################################################
// ########################################################################################################
export const lookcomp = [
    {
        id: 1,
        ref: 'comp',
        title: "เรื่องร้องทุกข์",
        content: `t enim ad minim veniam`,
        data: [

        ]
    }, {
        id: 2,
        ref: 'trackHis',
        title: 'Tracking History',
        data: [{
            date: '10 ตุลาคม 2560 , 10.30 น.',
            status: 'เจ้าหน้าที่รับเรื่อง , สถานะเรื่อง กำลังตรวจสอบคำร้อง',
        },
        {
            date: '10 ตุลาคม 2560 , 10.30 น.',
            status: 'เจ้าหน้าที่รับเรื่อง , สถานะเรื่อง กำลังตรวจสอบคำร้อง',
        },
        {
            date: '10 ตุลาคม 2560 , 10.30 น.',
            status: 'เจ้าหน้าที่รับเรื่อง , สถานะเรื่อง กำลังตรวจสอบคำร้อง',
        },
        ]

    }
]
// ########################################################################################################
// ########################################################################################################
// 
//                                          News
// 
// ########################################################################################################
// ########################################################################################################
export const changeStatusRadio = [{
    ref: 'radiorow',
    type: 'radio',
    data: [{
        label: 'รอเจ้าหน้าที่รับเรื่อง',
        value: 0
    }, {
        label: 'กำลังตรวจสอบคำร้อง',
        value: 1
    }, {
        label: 'เสนอผู้อำนวยการกลุ่มงานศุนย์ดำรงธรรมจังหวัดขอนแก่นพิจรณา',
        sublabel: '(สั่งการให้หน่วยงานตรวจสอบข้อเท็จจริง)',
        value: 2
    }, {
        label: 'เสนอหัวหน้าสำนักงานจังหวัดขอนแก่นพิจารณา',
        sublabel: '(อยู่ระหว่างการดำเนินการของหน่วยงานหรือจังหวัด)',
        value: 3
    }, {
        label: 'เสนอรองผู้ว่าราชการจังหวัดขอนแก่น/ผู้ว่าราชการจังหวัดขอนแก่นพิจารณา',
        sublabel: '(รายละเอียดคำร้องไม่ชัดเจน)',
        value: 4
    }, {
        label: 'สั่งการให้หน่วยงานตรวจสอบข้อเท็จจริง',
        value: 5
    }, {
        label: 'อยู่ระหว่างการดำเนินการของหน่วยงานหรือจังหวัด',
        value: 6
    }, {
        label: 'รายระเอียดคำร้องไม่ชัดเจน',
        value: 7
    }, {
        label: 'ยุติเรื่อง',
        value: 8
    },]
},
]

export const prefixData = [{
    label: 'นาย',
    value: 'MR'
}, {
    label: 'นาง',
    value: 'MRS'
}, {
    label: 'นางสาว',
    value: 'MS'
},

]
export const disTrict = [
    {
        label: 'กระนวน',
        value: ''
    }, {
        label: 'เขาสวนกวาง',
        value: ''
    },
    {
        label: 'โคกโพธิ์ไชย',
        value: ''
    },
    {
        label: 'ชนบท',
        value: ''
    },
    {
        label: 'ชุมแพ',
        value: ''
    },
    {
        label: 'ซำสูง',
        value: ''
    },
    {
        label: 'น้ำพอง',
        value: ''
    },
    {
        label: 'โนนศิลา',
        value: ''
    },
    {
        label: 'บ้านไผ่',
        value: ''
    },
    {
        label: 'บ้านฝาง',
        value: ''
    },
    {
        label: 'บ้านแฮด',
        value: ''
    },
    {
        label: 'เปือยน้อย',
        value: ''
    },
    {
        label: 'พระยืน',
        value: ''
    },
    {
        label: 'พล',
        value: ''
    },
    {
        label: 'ภูผาม่าน',
        value: ''
    },
    {
        label: 'ภูเวียง',
        value: ''
    },
    {
        label: 'เมืองขอนแก่น',
        value: ''
    },
    {
        label: 'มัญจาคีรี',
        value: ''
    },
    {
        label: 'แวงน้อย',
        value: ''
    },
    {
        label: 'แวงใหญ่',
        value: ''
    },
    {
        label: 'เวียงเก่า',
        value: ''
    },
    {
        label: 'สีชมพู',
        value: ''
    },
    {
        label: 'หนองนาคำ',
        value: ''
    },
    {
        label: 'หนองเรือ',
        value: ''
    },
    {
        label: 'หนองสองห้อง',
        value: ''
    },
    {
        label: 'อุบลรัตน์',
        value: ''
    },
]


// ########################################################################################################
// ########################################################################################################
// 
//                                            Response time
// 
// ########################################################################################################
// ########################################################################################################
export const responseTime = [
    {
        label: '3 วัน',
        value: 3
    },
    {
        label: '5 วัน',
        value: 5
    },
    {
        label: '7 วัน',
        value: 7
    },
    {
        label: '15 วัน',
        value: 15
    },
    {
        label: '30 วัน',
        value: 30
    },
]