require('./style.less')

const React = require('react')

const Banner = require('common/components/banner')
const Material = require('common/components/material')
const Title = require('common/components/title')
const Product = require('common/components/products')

const banner1 = require('images/banner1.jpg')
const banner2 = require('images/banner2.jpg')
const banner3 = require('images/banner3.jpg')
const banners = [{
    id: 2,
    src: banner3
}, {
    id: 0,
    src: banner1
}, {
    id: 1,
    src: banner2
}]
class Home extends React.Component {

    render() {
        return <div className="home">
            <Banner list={banners}/>
            <div className="home-item">
                <Title text="毒清饲用天然植物粉"/>
                <Product type="row"/>
            </div>
            <div className="home-item">
                <Title text="天然植物原料"/>
                <Material/>
            </div>
        </div>
    }
}

module.exports = Home