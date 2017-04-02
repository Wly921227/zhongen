require('./style.less')

const React = require('react')

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="center">
                    <div className="footer-row">
                        <span>哈尔滨忠恩饲用天然植物有限公司</span>
                    </div>
                    <div className="footer-row">
                        <i className="icon-map-marker"></i>哈尔滨市香坊区木材街59-14号
                    </div>
                    <div className="footer-row">
                        <a href="mailto:zhongensiyong@163.com">
                            <i className="icon-envelope-alt"></i>zhongensiyong@163.com
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

module.exports = Footer
