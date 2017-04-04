require('./style.less')

const React = require('react')

const oper = require('images/banner-oper.png')

class Banner extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            num: 0,
            position: 0
        }
    }

    componentWillMount() {
        this.setState(this.state)
    }

    setPosition(type) {
        setTimeout(() => {
            if (this.state.position / 100 !== this.state.num) {
                if (type === 'add') {
                    this.state.position = this.state.position + 1
                    this.setState(this.state)
                    this.setPosition('add')
                } else {
                    this.state.position = this.state.position - 1
                    this.setState(this.state)
                    this.setPosition('sub')
                }
            }
        }, 5)
    }

    nextBanner() {
        this.state.num++
        this.setState(this.state)
        this.setPosition('add')
    }

    beforeBanner() {
        this.state.num--
        this.setState(this.state)
        this.setPosition('sub')
    }

    render() {
        let {
            list
        } = this.props
        let {
            num,
            position
        } = this.state

        const showNum = num % list.length
        const style = {transform: 'translateX(' + (position * -1) + '%)'}

        let banners = list.map((value, key) => {
            return <div className={(showNum === key ? 'active ' : '') + 'banner-item'} key={value.id}>
                <img src={value.src}/>
            </div>
        })

        return (<div className="banner">
            <div className="operation">
                {num % list.length === 0 ? null :
                    <div className="arrow left" onClick={this.beforeBanner.bind(this)}>
                        <img src={oper}/>
                    </div>}
                {num % list.length === list.length - 1 ? null :
                    <div className="arrow right" onClick={this.nextBanner.bind(this)}>
                        <img src={oper}/>
                    </div>}
            </div>
            <div className="banner-list" style={style}>
                {banners}
            </div>
        </div>)
    }
}

module.exports = Banner