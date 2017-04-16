require('./style.less')
const React = require('react')

class Price extends React.Component {
    render() {
        let {
            price
        } = this.props

        return (<div className="price">
            建议零售价：<span className="num">{price}元</span> /公斤
        </div>)
    }
}

module.exports = Price
