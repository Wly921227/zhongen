require('./style.less')

const React = require('react')

const Banner = require('common/components/banner')
const Material = require('common/components/material')
const Title = require('common/components/title')

const banner1 = require('images/banner1.png')
const banner2 = require('images/banner2.png')
const banners = [{
    id: 0,
    src: banner1
}, {
    id: 1,
    src: banner2
}]
class Home extends React.Component {

    render() {
        return <div>
            <Banner list={banners}/>
            <div className="home">
                <Title text="天然植物原料"/>
                <Material/>
            </div>
        </div>
    }
}

module.exports = Home