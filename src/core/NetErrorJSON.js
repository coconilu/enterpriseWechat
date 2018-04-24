const netErrorJson = fun => {
    return {
        "errcode": -3,
        "errmsg": "网络故障：" + fun.name
    }
}

module.exports.netErrorJson = netErrorJson