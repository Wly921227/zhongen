require('./style.less')

const React = require('react')

const Header = require('./header')
const Footer = require('./footer')

class App extends React.Component {

    render() {
        let path = this.props.location.pathname

        return <div className="app">
            <Header path={path}/>
            <div className="body">
                <div className="content">
                    {this.props.children}
                </div>
            </div>
            <Footer/>
        </div>
    }
}

module.exports = App