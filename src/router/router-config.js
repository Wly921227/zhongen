const config = {
    path: '/',
    getComponent: (nextState, callback) => {
        require.ensure([], (require) => {
            callback(null, require('common/components/app'))
        }, 'app')
    },
    indexRoute: {
        getComponent: (nextState, callback) => {
            require.ensure([], (require) => {
                callback(null, require('pages/home'))
            }, 'hallo')
        }
    },
    childRoutes: [
        {
            path: 'about',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/aboutus'))
                }, 'about')
            }
        },
        {
            path: 'product/:item',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('pages/product'))
                }, 'product')
            }
        },
        {
            path: '/*',
            getComponent: (nextState, callback) => {
                require.ensure([], (require) => {
                    callback(null, require('common/components/404'))
                }, '404')
            }
        }
    ]
}

module.exports = config