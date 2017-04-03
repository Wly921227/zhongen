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