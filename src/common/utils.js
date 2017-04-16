module.exports = {
    dataParams (data) {
        data = data || {}
        let param = ''
        for (let key in data) {
            param += key + '=' + data[key] + '&'
        }

        return '?' + param.substr(0, param.length - 1)
    },
    setMinHeight () {
        let minHeight = window.innerHeight - 220
        document.querySelector('#main .content').style.minHeight = minHeight + 'px'
    }
}