require('./style.less')

const React = require('react')
const PList = require('./productList')
const PContent = require('./productContent')

let data = [
    {
        item: '鸡瘟毒清饲用',
        title: '鸡瘟毒清饲用天然植物粉（饲料添加剂）',
        desc: {
            title: '鸡瘟毒清饲用天然植物粉组方依据',
            text: [
                '鸡瘟毒清饲用天然植物粉由双花、知母、黄芪、地骨皮、赤芍等10余味草药配制而成，处方依据中兽医理论，机体在致病因素作用下，外邪（主要指疫疠）由表及里，侵入营血、血热狂行，迫血离经叛道而出现组织黏膜广泛出血。方中双花等清热解毒，透热于外，使热邪传出气分而解。地骨皮、赤芍凉血散瘀，助双花排出热邪。疫毒攻于上焦心肺，恶寒发热，干扰心神，呆立似睡，呼吸喘急。配知母等清泄心肺热而解毒。热邪与湿邪相结，湿邪困脾，蕴结肠胃，阴阳不分，清气不升，浊气不降，下痢稀便，里急后重。知母等又有清热燥湿之功。热毒耗伤气血，气为血帅，以黄芪补中益气，升阳固表，调节阴阳气血平衡。上药合用，清热解毒，清热泻火，凉血止血，清热燥湿，益气升阳，“疫疠”自出，达到防治疾病的目的。'
            ]
        },
        virtue: {
            title: '鸡瘟毒清饲用天然植物粉特点及优势',
            text: [
                '鸡瘟毒清饲用天然植物粉具有广谱抗菌抗病毒的疗效，饲料添加可有效预防新城疫，马立克氏病，传染性法氏囊炎，多瘤病，黄白痢等疾病',
                '鸡瘟毒清饲用天然植物粉可以使肉鸡增重，蛋鸡的产蛋率增加',
                '鸡瘟毒清饲用天然植物粉可提高接种期雏鸡的存活率，达到免疫增强剂的效果',
                '出栏肉鸡提前饲料添加鸡瘟毒清饲用天然植物粉，可以有效地降低其体内的抗生素含量（促进体内抗生素的代泄）'
            ]
        },
        used: {
            title: '鸡瘟毒清饲用天然植物粉使用方法',
            text: [
                '雏鸡：免疫接种前5-7天开始饲料添加，直到免疫接种后5-7天，添加量为0.5%-1%',
                '出栏肉鸡：出栏前1-2周开始饲料添加，添加量为0.5%-1%',
                '下蛋鸡：产蛋期间饲料添加5-7天，间隔2-3周再继续添加，添加量为0.5%-1%',
                '疾病预防：每隔2-3周，饲喂5-7天，或长期添加，饲料添加量为0.5%-1%'
            ]
        }
    }, {
        item: '鹅鸭毒清饲用',
        title: '鹅鸭毒清饲用天然植物粉（饲料添加剂）',
        desc: {
            title: '疾病预防：每隔2-3周，饲喂5-7天，或长期添加，饲料添加量为0.5%-1%',
            text: [
                '中兽医理论中，鹅、鸭为寒性种属，当病邪侵袭机体之时，正邪相争则体温升高，外邪侵表则怕冷恶寒；湿邪黏滞，阳乃受阻则精神沉郁，食欲减退；热入营血，神志昏迷，呼吸喘促；脾胃气虚则见消瘦；后期津液丧失、热扰心室、阴虚则出现神志不清、共济失调等神经性症状。鹅鸭毒清饲用天然植物粉以中兽医理论组方，功能宣肺清热，清暑化湿，生津止渴，清营解毒，透热养阴，凉血滋阴，补益脾肾，达到提高机体免疫力的功效。'
            ]
        },
        virtue: {
            title: '鹅鸭毒清饲用天然植物粉特点及优势',
            text: [
                '中兽医理论中，鹅、鸭为寒性种属，当病邪侵袭机体之时，正邪相争则体温升高，外邪侵表则怕冷恶寒；湿邪黏滞，阳乃受阻则精神沉郁，食欲减退；热入营血，神志昏迷，呼吸喘促；脾胃气虚则见消瘦；后期津液丧失、热扰心室、阴虚则出现神志不清、共济失调等神经性症状。鹅鸭毒清饲用天然植物粉以中兽医理论组方，功能宣肺清热，清暑化湿，生津止渴，清营解毒，透热养阴，凉血滋阴，补益脾肾，达到提高机体免疫力的功效。',
                '鹅鸭毒清饲用天然植物粉可提高饲料利用率，使鹅鸭增重，产蛋量增加，羽翼丰满，有光泽',
                '鹅鸭毒清饲用天然植物粉可以提高接种期雏鸭、雏鹅的存活率，达到免疫增强剂的效果'
            ]
        },
        used: {
            title: '鹅鸭毒清饲用天然植物粉使用方法',
            text: [
                '雏鹅、雏鸭：免疫接种前5-7天开始饲料添加，直到免疫接种后5-7天，添加量为0.5%-1%',
                '产蛋鹅、鸭：产蛋期间饲料添加5-7天，间隔2-3周再继续添加，添加量为0.5%-1%',
                '疾病预防：每隔2-3周，饲喂5-7天，或长期添加，饲料添加量为0.5%-1%'
            ]
        }
    }, {
        item: '猪痢净饲用',
        title: '猪痢净饲用天然植物粉（饲料添加剂）',
        desc: {
            title: '猪痢净饲用天然植物粉组方依据',
            text: [
                '猪痢净饲用天然植物粉主要由薄荷、白芍、藿香、马齿苋、木香、蒲公英、炙甘草、双花等组成，中医认为猪的腹泻主要为湿热或寒湿之邪淤结大肠，气血壅滞，清气不升，浊气不降，阴阳失衡所致。方中薄荷舒肝，当归、白芍、甘草养血补肝，健脾益气，调节机体阴阳平衡，藿香、马齿苋，清热燥湿，健脾，木香、蒲公英清热燥湿，泻火除蒸，解毒疗疮，双花等清热解毒，透热于外，使热邪传出气分而解，佐以其他药物凉血散瘀，助双花排除热邪。该方具有清热解毒，凉血止血，调气行血，凉血散瘀，温补脾肾，涩肠固脱，益升阳气之功效。'
            ]
        },
        virtue: {
            title: '痢净饲用天然植物粉特点及优势',
            text: [
                '猪痢净饲用天然植物粉主要预防仔猪黄白痢，病毒性腹泻，换料后仔猪腹泻等症状',
                '猪痢净饲用天然植物粉可以提高饲料利用率，使肉猪增重，皮毛红亮',
                '猪痢净饲用天然植物粉可以降低机体内抗生素含量，调节肠内益生菌'
            ]
        },
        used: {
            title: '猪痢净饲用天然植物粉使用方法',
            text: [
                '仔猪：直接添加入教槽料中，连续饲喂，添加量为0.3%-1%',
                '孕期母猪、哺乳期母猪：直接添加饲料中，连续饲喂，添加量为0.3%-1%',
                '肉猪：每隔1-2周，饲喂5-7天，也可长期添加，添加量为0.3%-1%',
                '出栏肉猪：出栏前1-2周，直接添加饲料中，添加量为0.3%-1%'
            ]
        }
    }, {
        item: '猪瘟毒清饲用',
        title: '猪瘟毒清饲用天然植物粉（饲料添加剂）',
        desc: {
            title: '猪瘟毒清饲用天然植物粉组方依据',
            text: [
                '猪瘟毒清饲用天然植物粉由双花、知母、黄芪、地骨皮、赤芍等10余味草药配制而成，处方依据中兽医理论，机体在致病因素作用下，外邪（主要指疫疠）由表及里，侵入营血、血热狂行，迫血离经叛道而出现组织黏膜广泛出血。方中双花等清热解毒，透热于外，使热邪传出气分而解。地骨皮、赤芍凉血散瘀，助双花排出热邪。疫毒攻于上焦心肺，恶寒发热，干扰心神，呆立似睡，呼吸喘急。配知母等清泄心肺热而解毒。热邪与湿邪相结，湿邪困脾，蕴结肠胃，阴阳不分，清气不升，浊气不降，下痢稀便，里急后重。知母等又有清热燥湿之功。热毒耗伤气血，气为血帅，以黄芪补中益气，升阳固表，调节阴阳气血平衡。上药合用，清热解毒，清热泻火，凉血止血，清热燥湿，益气升阳，“疫疠”自出，达到防治疾病的目的。'
            ]
        },
        virtue: {
            title: '猪瘟毒清饲用天然植物粉特点及优势',
            text: [
                '猪瘟毒清饲用天然植物粉具有广谱抗菌抗病毒的疗效，饲料添加可有效预防伪狂犬、猪瘟、蓝耳病、猪痢疾等疾病',
                '猪瘟毒清饲用天然植物粉可以使育肥猪增重，提高饲料利用率',
                '猪瘟毒清饲用天然植物粉可提高免疫接种期仔猪的存活率，加快免疫接种时体内抗体形成，达到免疫增强剂的效果',
                '出栏肉猪提前饲料添加猪瘟毒清饲用天然植物粉，可以有效地降低其体内的抗生素含量（促进体内抗生素的代泄）',
                '猪瘟毒清饲用天然植物粉可提高妊娠期母猪机体免疫能力，通过母源抗体使仔猪更加强壮'
            ]
        },
        used: {
            title: '猪瘟毒清饲用天然植物粉使用方法',
            text: [
                '仔猪：免疫接种前5-7天开始饲料添加，直到免疫接种后5-7天，添加量为0.3%-1%',
                '出栏肉猪：出栏前1-2周开始饲料添加，添加量为0.3%-0.5%',
                '妊娠母猪：妊娠期间连续添加，直至仔猪断奶，添加量为0.5%-1%',
                '疾病预防：每隔2-3周，饲喂5-7天，或长期添加，饲料添加量为0.3%-1%'
            ]
        }
    }, {
        item: '百草前胃动饲用',
        title: '百草前胃动饲用天然植物粉（饲料添加剂）',
        desc: {
            title: '百草前胃动饲用天然植物粉组方依据',
            text: [
                ' 反刍动物反刍机能障碍主要表现为外来风寒传于脾经，以致寒邪直中胃腑，脾胃受邪，以致脾冷不能运化，胃寒不得受纳；湿困脾阳、中焦气滞、脾失运化导致脾虚慢窜，宿草不转；反刍兽后天脾胃失养，或长期饲喂失宜，饥饱不匀，营养缺乏损伤脾胃，致使脾虚不能升清，胃弱无力降逆，常见食后出现腹胀，反复发作，长期则身体消瘦；百草前胃动由天然植物配方，遵循中兽医理论，功能补脾益气，健胃理气，健脾除湿，理气导滞，行气消积除满，宽中理气，升清降浊，逐水通肠利湿渗水。'
            ]
        },
        virtue: {
            title: '百草前胃动饲用天然植物粉特点及优势',
            text: [
                '对前胃迟缓、脾虚、外感邪气、食滞、伤食、气胀、水胀等病因引起的反刍机能障碍（俗称不倒嚼）疗效颇好',
                '百草前胃动饲用天然植物粉对反刍兽病毒性腹泻，有帮助其自愈的作用',
                '百草前胃动饲用天然植物粉还可以提高饲料利用率，使肉牛肉羊体重增加'
            ]
        },
        used: {
            title: '百草前胃动饲用天然植物粉使用方法',
            text: [
                '羊：每隔1周，饲喂3-5天，也可长期添加，添加量为0.3%-1%；严重者成羊直接投喂40g-70g/次，一日2次',
                '牛：每隔1周，饲喂3-5天，也可长期添加，添加量为0.3%-1%；严重者成牛直接投喂200g-250g/次，一日2次'
            ]
        }
    }, {
        item: '乳炎净饲用',
        title: '乳炎净饲用天然植物粉（饲料添加剂）',
        desc: {
            title: '乳炎净饲用天然植物粉组方依据',
            text: [
                '乳房炎，中兽医称为乳痈，分为如下几种情况肝气郁滞：由于肝气不疏，或饲料问题，口感不爽，导致奶牛肝胃失和，使乳汁发生瘀滞而导致乳房出现肿块或乳汁排出不畅，出现凝乳块；郁热于乳：乳汁为气血所生化，当热毒蓄积于此，气血瘀滞，乳络阻塞而发生痈肿；正虚邪侵：当奶牛机体正气不足时，容易受外邪侵袭（细菌性乳房炎），导致乳汁不畅，乳房肿痛。乳炎净由天然植物组成，用中兽医理论组方，功能疏肝和胃，通乳消肿，清热解毒，托毒透脓，扶正祛邪，补益正气，驱邪外出。'
            ]
        },
        virtue: {
            title: '乳炎净饲用天然植物粉特点及优势',
            text: [
                '乳炎净饲用天然植物粉主要预防隐性乳房炎，效果很好，对于临床型乳房炎和慢性乳房炎可与抗生素合用',
                '乳炎净饲用天然植物粉可以增加奶牛产奶量'
            ]
        },
        used: {
            title: '乳炎净饲用天然植物粉使用方法',
            text: [
                '每隔1周，饲喂3-5天，也可长期添加，添加量为0.3%-1%'
            ]
        }
    }
]

class Product extends React.Component {
    render() {
        let {
            item
        } = this.props.params

        let leftList = data.map(value => {
            return value.item
        })

        let minHeight = window.innerHeight - 100 - 120
        let rightContent = data[parseInt(item)]

        return (<div className="product" style={{minHeight: minHeight}}>
            <div className="left-list">
                <PList list={leftList} item={item}/>
            </div>
            <div className="right-content">
                <PContent content={rightContent}/>
            </div>
        </div>)
    }
}

module.exports = Product