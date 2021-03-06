const axios = require('axios')
const Promise = require('promise')

/**
 * 企业微信辅助类
 * 增加两个非官方的错误码：-2（表示还没请求成功）、-3（表示网络故障）
 */
class AcessTokenHelper {
    constructor(configuration) {
        this.corpid = configuration.corpid
        this.corpsecret = configuration.corpsecret
        this.accessToken = { errcode: -2 }
    }

    async getAccessToken() {
        // 返回 accessToken
        if (this.accessToken.errcode !== 0) {
            this.accessToken = await this.exchangeAccessTokenFromWechat(this.corpid, this.corpsecret)
            return this.accessToken
        } else {
            return this.accessToken
        }
    }

    exchangeAccessTokenFromWechat(corpid, corpsecret) {
        // 从企业微信获取 accessToken
        const wxURI = `https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=${corpid}&corpsecret=${corpsecret}`
        return new Promise(resolve => {
            axios.get(wxURI)
                .then((response) => {
                    this.accessToken = response.data
                    resolve(this.accessToken)
                    // 设置两个小时候后更新 accessToken
                    this.updateAccessToken(corpid, corpsecret, 7200000)
                })
                .catch((error) => {
                    // 即使报错也要返回一个accessToken
                    console.log(error)
                    this.accessToken.errcode = -3
                    this.accessToken.errmsg = '网络故障：' + 'exchangeAccessTokenFromWechat'
                    resolve(this.accessToken)
                })
        })
    }

    updateAccessToken(corpid, corpsecret, interval) {
        setTimeout(() => {
            this.exchangeAccessTokenFromWechat(corpid, corpsecret)
        }, interval)
    }
}

module.exports.AcessTokenHelper = AcessTokenHelper