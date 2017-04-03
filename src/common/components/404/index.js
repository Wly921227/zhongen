require('./style.less')

const React = require('react')
const Router = require('react-router')

const Link = Router.Link

class Hallo extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.setState({
            seconds: 10,
            height: 0
        })
    }

    componentDidMount() {
        this.$header = document.getElementsByTagName('header')[0]
        this.$footer = document.getElementsByTagName('footer')[0]
        this.state.height = window.innerHeight - this.$header.offsetHeight - this.$footer.offsetHeight
        this.interval = setInterval(() => {
            if (this.state.seconds === 0) {
                this.props.history.push('/')
            } else {
                this.state.seconds--
                this.setState(this.state)
            }
        }, 1000)
        this.setState(this.state)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        let {
            height,
            seconds
        } = this.state
        return <div className="error-404" style={{height: height}}>
            <div className="message">
                页面不见了!!!<br/>
                {seconds}秒后或点击<Link to="/">这里</Link>返回首页
            </div>
        </div>
    }
}

module.exports = Hallo