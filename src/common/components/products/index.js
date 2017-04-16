require('./style.less')

const React = require('react')
const {Link} = require('react-router')

const Price = require('common/components/price')

let list = [
    {
        id: 0, title: '鸡瘟毒清饲用天然植物粉（饲料添加剂）', path: '0', price: 130,
        desc: [
            '鸡瘟毒清饲用天然植物粉具有广谱抗菌抗病毒的疗效，饲料添加可有效预防新城疫，马立克氏病，传染性法氏囊炎，多瘤病，黄白痢等疾病',
            '鸡瘟毒清饲用天然植物粉可以使肉鸡增重，蛋鸡的产蛋率增加',
            '鸡瘟毒清饲用天然植物粉可提高接种期雏鸡的存活率，达到免疫增强剂的效果',
            '出栏肉鸡提前饲料添加鸡瘟毒清饲用天然植物粉，可以有效地降低其体内的抗生素含量（促进体内抗生素的代泄）'
        ]
    },
    {
        id: 1, title: '鹅鸭毒清饲用天然植物粉（饲料添加剂）', path: '1', price: 120,
        desc: [
            '鹅鸭毒清饲用天然植物粉具有广谱抗菌抗病毒的疗效，饲料添加可有效预防小鹅瘟、鸭瘟、鸭霍乱、鹅鸭大肠杆菌病、鹅鸭副伤寒病等',
            '鹅鸭毒清饲用天然植物粉可提高饲料利用率，使鹅鸭增重，产蛋量增加，羽翼丰满，有光泽',
            '鹅鸭毒清饲用天然植物粉可以提高接种期雏鸭、雏鹅的存活率，达到免疫增强剂的效果'
        ]
    },
    {
        id: 2, title: '猪痢净饲用天然植物粉（饲料添加剂）', path: '2', price: 120,
        desc: [
            '猪痢净饲用天然植物粉主要预防仔猪黄白痢，病毒性腹泻，换料后仔猪腹泻等症状',
            '猪痢净饲用天然植物粉可以提高饲料利用率，使肉猪增重，皮毛红亮',
            '猪痢净饲用天然植物粉可以降低机体内抗生素含量，调节肠内益生菌'
        ]
    },
    {
        id: 3, title: '猪瘟毒清饲用天然植物粉（饲料添加剂）', path: '3', price: 130,
        desc: [
            '猪瘟毒清饲用天然植物粉具有广谱抗菌抗病毒的疗效，饲料添加可有效预防伪狂犬、猪瘟、蓝耳病、猪痢疾等疾病',
            '猪瘟毒清饲用天然植物粉可以使育肥猪增重，提高饲料利用率',
            '猪瘟毒清饲用天然植物粉可提高免疫接种期仔猪的存活率，加快免疫接种时体内抗体形成，达到免疫增强剂的效果',
            '出栏肉猪提前饲料添加猪瘟毒清饲用天然植物粉，可以有效地降低其体内的抗生素含量（促进体内抗生素的代泄）',
            '猪瘟毒清饲用天然植物粉可提高妊娠期母猪机体免疫能力，通过母源抗体使仔猪更加强壮'
        ]
    },
    {
        id: 4, title: '百草前胃动饲用天然植物粉（饲料添加剂）', path: '4', price: 120,
        desc: [
            '对前胃迟缓、脾虚、外感邪气、食滞、伤食、气胀、水胀等病因引起的反刍机能障碍（俗称不倒嚼）疗效颇好',
            '百草前胃动饲用天然植物粉对反刍兽病毒性腹泻，有帮助其自愈的作用',
            '百草前胃动饲用天然植物粉还可以提高饲料利用率，使肉牛肉羊体重增加'
        ]
    },
    {
        id: 5, title: '乳炎净饲用天然植物粉（饲料添加剂）', path: '5', price: 130,
        desc: [
            '乳炎净饲用天然植物粉主要预防隐性乳房炎，效果很好，对于临床型乳房炎和慢性乳房炎可与抗生素合用',
            '乳炎净饲用天然植物粉可以增加奶牛产奶量'
        ]
    },
]

class Product extends React.Component {

    render() {
        let {
            type
        } = this.props

        let List = list.map(value => {
            return (<li key={value.id}>
                <div className="animate">
                    <div className="left border"></div>
                    <div className="right border"></div>
                    <div className="top border"></div>
                    <div className="bottom border"></div>
                    <div className="item">
                        <div className="title">
                            <Link to={'/product/' + value.path}>{value.title}</Link>
                            <hr/>
                            <Price price={value.price}/>
                        </div>
                        <div className="desc">
                            {value.desc.map((value, key) => {
                                return <p key={key}>
                                    {value}
                                </p>
                            })}
                        </div>
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