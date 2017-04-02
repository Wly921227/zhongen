require('./style.less')

const React = require('react')

const Header = require('./header')
const Footer = require('./footer')

class App extends React.Component {

    render() {
        let path = this.props.route.path

        return <div className="app">
            <Header path={path}/>
            <div className="body">
                <section>
                    {this.props.children}
                </section>
            </div>
            <Footer/>
        </div>
    }
}

module.exports = App