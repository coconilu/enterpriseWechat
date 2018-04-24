const axios = require('axios')
const Promise = require('promise')

const { netErrorJson } = require('../core/NetErrorJSON')

class MemberHelper {
    constructor(accessTokenHelper) {
        this.accessTokenHelper = accessTokenHelper
    }

    /**
     * 创建成员
     * @param {string} memberJSON 
     */
    async addMember(memberJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const addMemberURL = `https://qyapi.weixin.qq.com/cgi-bin/user/create?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(addMemberURL, memberJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(addMember))
                })
        })
    }

    /**
     * 读取成员
     * @param {string} userid 
     */
    async getMember(userid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getMemberURL = `https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=${accessToken.access_token}&userid=${userid}`
        return new Promise(resolve => {
            axios.get(getMemberURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getMember))
                })
        })
    }

    /**
     * 更新成员
     * @param {JSON} memberJSON 
     */
    async updateMember(memberJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const updateMemberURL = `https://qyapi.weixin.qq.com/cgi-bin/user/update?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(updateMemberURL, memberJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(updateMember))
                })
        })
    }

    /**
     * 删除成员
     * @param {string} userid 
     */
    async deleteMember(userid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const deleteMemberURL = `https://qyapi.weixin.qq.com/cgi-bin/user/delete?access_token=${accessToken.access_token}&userid=${userid}`
        return new Promise(resolve => {
            axios.get(deleteMemberURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(deleteMember))
                })
        })
    }

    /**
     * 批量删除成员
     * @param {Array} useridsArray 
     */
    async deleteMembers(useridsArray) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const deleteMembersURL = `https://qyapi.weixin.qq.com/cgi-bin/user/batchdelete?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(deleteMembersURL, {
                "useridlist": useridsArray
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(deleteMembers))
                })
        })
    }

    /**
     * 获取部门成员
     * @param {string} departmentId 
     * @param {number} fetchChild 
     */
    async getMembersFromDepartment(departmentId, fetchChild) {
        let fC = 0
        if (fetchChild === 1) {
            fC = 1
        }
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getMembersFromDepartmentURL = `https://qyapi.weixin.qq.com/cgi-bin/user/simplelist?access_token=${accessToken.access_token}&department_id=${departmentId}&fetch_child=${fC}`
        return new Promise(resolve => {
            axios.get(getMembersFromDepartmentURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getMembersFromDepartment))
                })
        })
    }

    /**
     * 获取部门成员详情
     * @param {string} departmentId 
     * @param {number} fetchChild 
     */
    async getMembersDetailFromDepartment(departmentId, fetchChild) {
        let fC = 0
        if (fetchChild === 1) {
            fC = 1
        }
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const getMembersDetailFromDepartmentURL = `https://qyapi.weixin.qq.com/cgi-bin/user/list?access_token=${accessToken.access_token}&department_id=${departmentId}&fetch_child=${fC}`
        return new Promise(resolve => {
            axios.get(getMembersDetailFromDepartmentURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getMembersDetailFromDepartment))
                })
        })
    }

    /**
     * 把 userid 转换为 openid
     * @param {string} userid 
     */
    async convertToOpenid(userid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const convertToOpenidURL = `https://qyapi.weixin.qq.com/cgi-bin/user/convert_to_openid?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(convertToOpenidURL, {
                "userid": userid
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(convertToOpenid))
                })
        })
    }

    /**
     * 把 openid 转换为 userid
     * @param {string} openid 
     */
    async convertToUserid(openid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const convertToUseridURL = `https://qyapi.weixin.qq.com/cgi-bin/user/convert_to_userid?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(convertToUseridURL, {
                "openid": openid
            })
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(convertToUserid))
                })
        })
    }

    /**
     * 二次验证
     * @param {string} userid 
     */
    async authsucc(userid) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const authsuccURL = `https://qyapi.weixin.qq.com/cgi-bin/user/authsucc?access_token=${accessToken.access_token}&userid=${userid}`
        return new Promise(resolve => {
            axios.get(authsuccURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(authsucc))
                })
        })
    }
}

module.exports.MemberHelper = MemberHelper