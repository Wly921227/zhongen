require('./style.less')

const React = require('react')
const VelocityComponent = require('velocity-react').VelocityComponent
const Link = require('react-router').Link

const logo = require('images/logo.png')

const nav = [
    {
        path: '/',
        title: '首页'
    },
    {
        path: '/product/0',
        title: '产品'
    },
    {
        path: '/profile',
        title: '公司简介'
    },
    {
        path: '/about',
        title: '关于我们'
    }
]

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {width: 0, left: 0, display: 'none'}
    }

    componentDidMount() {
        this.state.width = this.refs.linked.offsetWidth
        this.state.left = this.refs.linked.parentNode.offsetLeft
        this.state.display = 'none'
        this.setState(this.state)
    }

    moveUnderline(event) {
        this.state.width = event.target.offsetWidth
        this.state.left = event.target.parentNode.offsetLeft
        this.state.display = 'inline-block'
        this.setState(this.state)
    }

    disableUnderline() {
        this.state.display = 'none'
        this.setState(this.state)
    }

    render() {
        let {
            path
        } = this.props

        let navDom = nav.map((value, key) => {
            if (path.indexOf('product') > -1) {
                path = '/product/0'
            }

            return <li key={key} className={path === value.path ? 'active' : ''}>
                <Link to={value.path}>
                    <span ref={path === value.path ? 'linked' : ''}
                          onMouseOver={this.moveUnderline.bind(this)}
                          onMouseOut={this.disableUnderline.bind(this)}>{value.title}</span>
                </Link>
            </li>
        })

        let ulStyle = {
            width: this.state.width,
            left: this.state.left,
            display: this.state.display
        }

        return (<header className="header column-mid">
            <section>
                <div className="left-title-warp">
                    <Link to="/">
                        <div className="title">
                            <img className="logo" src={logo} alt="忠恩饲用"/>
                            <span>忠恩饲用</span>
                        </div>
                    </Link>
                </div>
                <div className="right-nav-warp">
                    <div className="right-nav-inline">
                        <ul>
                            {navDom}
                        </ul>
                        <VelocityComponent duration={300}
                                           animation={{left: ulStyle.left, width: ulStyle.width}}>
                            <div ref="underline" className="underline" style={{display: ulStyle.display}}></div>
                        </VelocityComponent>
                    </div>
                </div>
            </section>
        </header>)
    }
}

module.exports = Header