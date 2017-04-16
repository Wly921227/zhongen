require('./style.less')

const React = require('react')
const Title = require('common/components/title')
const Price = require('common/components/price')

class ProductContent extends React.Component {

    getContentText(list, style) {
        return (list && Array.isArray(list)) ? (list.map((value, key) => {
                return (<p key={key} className={style ? style : null}>
                    {value}
                </p>)
            })) : null
    }

    render() {
        let {
            content
        } = this.props

        return (<div className="p-content">
            <Title text={content.title}/>
            <Price price={content.price}/>
            <div className="text">
                <div className="h3">{content.desc.title}</div>
                {this.getContentText(content.desc.text)}
                <div className="h3">{content.virtue.title}</div>
                {this.getContentText(content.virtue.text, 'red')}
                <div className="h3">{content.used.title}</div>
                {this.getContentText(content.used.text, 'blue')}
            </div>
        </div>)
    }
}

module.exports = ProductContent