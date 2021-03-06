require('./style.less')

const React = require('react')

import {setMinHeight} from 'common/utils'

class About extends React.Component {

    componentDidMount() {
        setMinHeight()
    }

    render() {
        return (<div className="about">
            <h1>关于我们</h1>
            <p>
                哈尔滨忠恩饲用天然植物有限公司成立于2013年，秉承中国农业部开发绿色饲料添加剂原料的思想组建而成。本公司依据农业部新发行的饲料原料目录中新增的饲用天然植物部分，主要经营以天然植物（中草药）为原料的饲料添加剂。
            </p>
            <p>
                公司下属养殖之家兽药经销部，拥有50年临床经验的东北农业大学郭贵强教授出诊，时刻关注国内兽医与畜牧行情的变动，并随时为广大养殖户排忧解难。针对国内现有的养殖难题，经过大量前期试验与市场调研，推出提高肉、蛋鸡机体免疫力（鸡瘟毒清饲用天然植物粉）；预防鹅、鸭疾病的发生（鹅鸭毒清饲用天然植物粉）；预防各阶段猪类病毒性、细菌性腹泻（猪痢净饲用天然植物粉）；提高猪只机体免疫力（猪瘟毒清饲用天然植物粉）；降低反刍兽前胃迟缓、病毒性肠胃炎的发生（百草前胃动饲用天然植物粉）；预防奶牛乳房炎（乳炎净饲用天然植物粉）等产品。
            </p>
            <p>
                公司现有核心人员7名，其中博士1名，硕士3名，本科3名。忠恩团队的梦想就是用自己学到的专业知识，给养殖户解决难题，提升利益，推动本行业的发展，为祖国成为真正的农业强国献出自己的绵薄之力。
            </p>
            <p>
                公司所有产品均为天然植物（中草药）制品，绿色、健康、环保。公司本着绿色养殖、科学环保、健康食品、良心企业、共建和谐的宗旨，以呵护动物健康为使命。忠恩人的原则是诚心、尊重、开放、互助，诚心与您携手共建绿色无公害的养殖产业链，让中国人吃上真正的健康食品。
            </p>
        </div>)
    }
}

module.exports = About