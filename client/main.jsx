import React from 'react'
import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'
import {renderRoutes} from '../imports/startup/client/routes.jsx'

import ons from 'onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

Meteor.startup(() => {
  ons.ready(() => {
    render(renderRoutes(), document.getElementById('app'))
  })
})
