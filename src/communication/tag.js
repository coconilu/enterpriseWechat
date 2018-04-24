const axios = require('axios')
const Promise = require('promise')

const { netErrorJson } = require('../core/NetErrorJSON')

class TagHelper {
    constructor(accessTokenHelper) {
        this.accessTokenHelper = accessTokenHelper
    }

    async addTag(tagJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const addTagURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/create?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(addTagURL, tagJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(addTag))
                })
        })
    }

    async updateTag(tagJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const updateTagURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/update?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(updateTagURL, tagJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(updateTag))
                })
        })
    }

    async deleteTag(tagid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const deleteTagURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/delete?access_token=${accessToken.access_token}&tagid=${tagid}`
        return new Promise(resolve => {
            axios.get(deleteTagURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(deleteTag))
                })
        })
    }

    async getTagMembers(tagid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getTagMembersURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/get?access_token=${accessToken.access_token}&tagid=${tagid}`
        return new Promise(resolve => {
            axios.get(getTagMembersURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getTagMembers))
                })
        })
    }

    async addTagMembers(tagid, userIdList, departmentIdList) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const addTagMembersURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/addtagusers?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(addTagMembersURL, {
                "tagid": tagid,
                "userlist": userIdList,
                "partylist": departmentIdList
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(addTagMembers))
                })
        })
    }

    async deleteTagMembers(tagid, userIdList, departmentIdList) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const deleteTagMembersURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/addtagusers?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(deleteTagMembersURL, {
                "tagid": tagid,
                "userlist": userIdList,
                "partylist": departmentIdList
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(deleteTagMembers))
                })
        })
    }

    async getTags() {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getTagsURL = `https://qyapi.weixin.qq.com/cgi-bin/tag/list?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.get(getTagsURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getTags))
                })
        })
    }
}

module.exports.TagHelper = TagHelper