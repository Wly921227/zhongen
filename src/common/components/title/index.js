require('./style.less')

const React = require('react')
const {Link} = require('react-router')

class Title extends React.Component {
    render() {
        let {
            text,
            link
        } = this.props

        return <div className="item-title">
            {text}
            {link ? (<div className="link">
                    <Link to={link}>更多<i></i></Link>
                </div>) : null
            }
        </div>
    }
}

module.exports = Title