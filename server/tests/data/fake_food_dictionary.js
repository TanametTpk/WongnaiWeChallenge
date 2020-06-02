let keywords = `
โรตีทุเรียน
ตำร้อยเอ็ด
สันคอย่างแจ่ว
`.split('\n').map((kw,index) => {

    return {
        _id:index + 1,
        keyword: kw.trim()
    }

})

module.exports = keywords