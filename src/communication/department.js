const axios = require('axios')
const Promise = require('promise')

const { netErrorJson } = require('../core/NetErrorJSON')

class DepartmentHelper {
    constructor(accessTokenHelper) {
        this.accessTokenHelper = accessTokenHelper
    }

    async addDepartment(departmentJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const addDepartmentURL = `https://qyapi.weixin.qq.com/cgi-bin/department/create?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(addDepartmentURL, departmentJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(addDepartment))
                })
        })
    }

    async updateDepartment(departmentJSON) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const updateDepartmentURL = `https://qyapi.weixin.qq.com/cgi-bin/department/update?access_token=${accessToken.access_token}`
        return new Promise(resolve => {
            axios.post(updateDepartmentURL, departmentJSON)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(updateDepartment))
                })
        })
    }

    async deleteDepartment(departmentId) {
        const accessToken = await this.accessTokenHelper.getAccessToken()
        const deleteDepartmentURL = `https://qyapi.weixin.qq.com/cgi-bin/department/delete?access_token=${accessToken.access_token}&id=${departmentId}`
        return new Promise(resolve => {
            axios.get(deleteDepartmentURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(deleteDepartment))
                })
        })
    }

    async getDepartments(departmentId) {
        const access_token = await this.accessTokenHelper.getAccessToken()
        let getDepartmentsURL = `https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=${access_token}`
        if (departmentId) {
            getDepartmentsURL = `https://qyapi.weixin.qq.com/cgi-bin/department/list?access_token=${access_token}&id=${departmentId}`
        }
        return new Promise(resolve => {
            axios.get(getDepartmentsURL)
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    console.log(error)
                    resolve(netErrorJson(getDepartments))
                })
        })
    }
}

module.exports.DepartmentHelper = DepartmentHelper