const axios = require('axios')
const Promise = require('promise')

const { netErrorJson } = require('../core/NetErrorJSON')

class AgentHelper {
    constructor(accessTokenHelper) {
        this.accessTokenHelper = accessTokenHelper
    }

    async getAgent(agentid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getAgentURL = `https://qyapi.weixin.qq.com/cgi-bin/agent/get?access_token=${accessToken.access_token}&agentid=${agentid}`
        return new Promise(resolve => {
            axios.get(getAgentURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getAgent))
                })
        })
    }

    async updateAgent(agentJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const updateAgentURL = `https://qyapi.weixin.qq.com/cgi-bin/agent/set?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.get(updateAgentURL, agentJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(updateAgent))
                })
        })
    }

    async getAgents() {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getAgentsURL = `https://qyapi.weixin.qq.com/cgi-bin/agent/list?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.get(getAgentsURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getAgents))
                })
        })
    }
}

module.exports.AgentHelper = AgentHelper