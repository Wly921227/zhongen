require('./style.less')

const React = require('react')

let imgList = [
    {id: 0, text: '白芍', img: require('images/baishao.jpg')},
    {id: 1, text: '白术', img: require('images/baishu.jpg')},
    {id: 2, text: '茯苓', img: require('images/fucen.jpg')},
    {id: 3, text: '杜仲', img: require('images/duzhong.jpg')},
    {id: 4, text: '川芎', img: require('images/chuangong.jpg')},
    {id: 5, text: '党参', img: require('images/dangshen.jpg')},
    {id: 6, text: '干姜', img: require('images/ganjiang.jpg')},
    {id: 7, text: '甘草', img: require('images/gancao.jpg')},
    {id: 8, text: '葛根', img: require('images/gegen.jpg')},
    {id: 9, text: '厚朴', img: require('images/houpu.jpg')},
    {id: 10, text: '黄芪', img: require('images/huangshi.jpg')},
    {id: 11, text: '金银花', img: require('images/jinyinhua.jpg')},
]

class Material extends React.Component {

    constructor(props) {
        super(props)
        this.state = {position: 0, width: 160, list: imgList, interval: 0}
    }

    setPosition() {
        if (this.state.position <= this.state.width) {
            this.state.position = this.state.position + 0.5
            this.setState(this.state)
        } else {
            this.state.position = 0
            let list = this.state.list
            let item = list.shift()
            list.push(item)
            this.state.list = list
            this.setState(this.state)
            this.setState(this.state)
        }
    }

    setScroll(state) {
        if (state) {
            this.state.interval = setInterval(this.setPosition.bind(this), 10)
            this.setState(this.state)
        } else {
            clearTimeout(this.state.interval)
        }
    }

    componentWillMount() {
        this.setState(this.state)
    }

    componentDidMount() {
        this.state.interval = setInterval(this.setPosition.bind(this), 10)
        this.setState(this.state)
    }

    componentWillUnmount() {
        clearTimeout(this.state.interval)
    }

    render() {
        let {
            position,
            list
        } = this.state

        const style = {
            transform: 'translateX(' + (position * -1) + 'px)'
        }

        const List = list.map((value) => {
            return <li key={value.id}>
                <div className="item">
                    <div className="img">
                        <img src={value.img} alt={value.text}/>
                    </div>
                    <div className="text">
                        {value.text}
                    </div>
                </div>
            </li>
        })

        return (<div className="material-list" onMouseOver={this.setScroll.bind(this, false)}
                     onMouseOut={this.setScroll.bind(this, true)}>
            <ul className="list" style={style}>
                {List}
            </ul>
        </div>)
    }
}

module.exports = Material
