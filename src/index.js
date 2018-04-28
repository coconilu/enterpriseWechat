const {WXHelper} = require('./core/index')
exports.WXHelper = WXHelper

const configuration = {
    corpid: 'wwceb3b7a8166cc560',
    corpsecret: '2JoQSLhMdLC7JZEt52Fm-U115MuSz4rre5sNjUU_J1U'
}
const wxHelper = new WXHelper(configuration)

wxHelper.getAccessToken().then(value => {
    console.log(value)
}, error => {
    console.log(error)
})