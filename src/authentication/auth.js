const axios = require('axios')
const Promise = require('promise')

const { netErrorJson } = require('../core/NetErrorJSON')

class AuthHelper {
    constructor(accessTokenHelper) {
        this.accessTokenHelper = accessTokenHelper
    }

    /**
     * 根据code获取成员信息，包括userid和user_ticket
     * @param {string} code 
     */
    async codeToUserInfo(code) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const codeToUserInfoURL = `https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=${accessToken.access_token}&code=${code}`
        return new Promise(resolve => {
            axios.get(codeToUserInfoURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(codeToUserInfo))
                })
        })
    }

    async userTicketToUserDetails(userTicket) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const userTicketToUserDetailsURL = `https://qyapi.weixin.qq.com/cgi-bin/user/getuserdetail?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(userTicketToUserDetailsURL, {
                "user_ticket": userTicket
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(userTicketToUserDetails))
                })
        })
    }
}

module.exports.AuthHelper = AuthHelper