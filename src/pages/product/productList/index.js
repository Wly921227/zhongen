require('./style.less')

const React = require('react')
const {Link} = require('react-router')

class ProductList extends React.Component {
    render() {
        let {
            list,
            item
        } = this.props

        let List = list.map((value, key) => {
            return (<li key={key}>
                <Link to={'product/' + key}>
                    <div className={'item' + (key === parseInt(item) ? ' active' : '')}>
                        {value}
                    </div>
                </Link>
            </li>)
        })

        return (<div className="p-list">
            <ul>
                {List}
            </ul>
        </div>)
    }
}

module.exports = ProductList