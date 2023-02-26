import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

global.API_V4_AUTH = 'API_V4_AUTH'
global.mockStore = configureMockStore([thunk])