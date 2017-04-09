require('./style.less')

const React = require('react')

class Title extends React.Component {
    render() {
        return <div className="title">
            {this.props.text}
        </div>
    }
}

module.exports = Title