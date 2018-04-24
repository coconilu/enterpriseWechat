const axios = require('axios')
const Promise = require('promise')

const { netErrorJson } = require('../core/NetErrorJSON')

class MenuHelper {
    constructor(accessTokenHelper) {
        this.accessTokenHelper = accessTokenHelper
    }

    async addMenu(menuJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const addMenuURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/create?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(addMenuURL, menuJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(addMenu))
                })
        })
    }

    async getMenu(agentid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getMenuURL = `https://qyapi.weixin.qq.com/cgi-bin/menu/get?access_token=${accessToken.access_token}&agentid=${agentid}`
        return new Promise(resolve => {
            axios.get(getMenuURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getMenu))
                })
        })
    }

    async deleteMenu(agentid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const deleteMenuURL = `https://qyapi.weixin.qq.com/cgi-bin/menu/get?access_token=${accessToken.access_token}&agentid=${agentid}`
        return new Promise(resolve => {
            axios.get(deleteMenuURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(deleteMenu))
                })
        })
    }
}

module.exports.MenuHelper = MenuHelper