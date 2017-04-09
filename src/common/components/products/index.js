require('./style.less')

const React = require('react')
const {Link} = require('react-router')

let list = [
    {
        id: 0, img: require('images/niu.png'), title: '乳炎净饲用（饲料添加剂）', path: '5',
        desc: [
            '乳炎净饲用天然植物粉主要预防隐性乳房炎，效果很好，对于临床型乳房炎和慢性乳房炎可与抗生素合用',
            '乳炎净饲用天然植物粉可以增加奶牛产奶量'
        ]
    },
    {
        id: 1, img: require('images/zhu.png'), title: '猪痢净饲用（饲料添加剂）', path: '2',
        desc: [
            '猪痢净饲用天然植物粉主要预防仔猪黄白痢，病毒性腹泻，换料后仔猪腹泻等症状',
            '猪痢净饲用天然植物粉可以提高饲料利用率，使肉猪增重，皮毛红亮',
            '猪痢净饲用天然植物粉可以降低机体内抗生素含量，调节肠内益生菌'
        ]
    },
    {
        id: 3, img: require('images/ji.png'), title: '鸡瘟毒清饲用（饲料添加剂）', path: '0',
        desc: [
            '鸡瘟毒清饲用天然植物粉具有广谱抗菌抗病毒的疗效，饲料添加可有效预防新城疫，马立克氏病，传染性法氏囊炎，多瘤病，黄白痢等疾病',
            '鸡瘟毒清饲用天然植物粉可以使肉鸡增重，蛋鸡的产蛋率增加',
            '鸡瘟毒清饲用天然植物粉可提高接种期雏鸡的存活率，达到免疫增强剂的效果',
            '出栏肉鸡提前饲料添加鸡瘟毒清饲用天然植物粉，可以有效地降低其体内的抗生素含量（促进体内抗生素的代泄）'
        ]
    },
    {
        id: 4, img: require('images/ya.png'), title: '鹅鸭毒清饲用（饲料添加剂）', path: '1',
        desc: [
            '鹅鸭毒清饲用天然植物粉具有广谱抗菌抗病毒的疗效，饲料添加可有效预防小鹅瘟、鸭瘟、鸭霍乱、鹅鸭大肠杆菌病、鹅鸭副伤寒病等',
            '鹅鸭毒清饲用天然植物粉可提高饲料利用率，使鹅鸭增重，产蛋量增加，羽翼丰满，有光泽',
            '鹅鸭毒清饲用天然植物粉可以提高接种期雏鸭、雏鹅的存活率，达到免疫增强剂的效果'
        ]
    }
]

class Product extends React.Component {

    render() {
        let {
            type
        } = this.props

        let List = list.map(value => {
            return (<li key={value.id}>
                <div className="item">
                    <div className="img">
                        <Link to={'/product/' + value.path}><img src={value.img} alt={value.title}/></Link>
                    </div>
                    <div className="title">
                        <Link to={'/product/' + value.path}>{value.title}</Link>
                    </div>
                    <div className="desc">
                        {value.desc.map((value, key) => {
                            return <p key={key}>
                                {value}
                            </p>
                        })}
                    </div>
                </div>
            </li>)
        })

        return (<div className={'product-list ' + (type === 'row' ? 'rows' : 'cols')}>
            <ul>
                {List}
            </ul>
        </div>)
    }
}

module.exports = Product