const axios = require('axios')
const Promise = require('promise')

const { netErrorJson } = require('../core/NetErrorJSON')

class FodderHelper {
    constructor(accessTokenHelper) {
        this.accessTokenHelper = accessTokenHelper
    }

    async uploadFodder(type){
        const accessToken = await this.accessTokenHelper.getAccessToken()
    }
}

module.exports.FodderHelper = FodderHelper