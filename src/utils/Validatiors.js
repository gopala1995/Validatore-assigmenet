const formatErr = (errArr)=>{
    return errArr.map((err)=>{
    return {
        message:err.msg,
        field:err.param
    }
})
}

module.exports = {formatErr}