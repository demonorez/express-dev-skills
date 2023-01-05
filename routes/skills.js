import { Router } from 'express'
//import the skills data
import { skills } from '../data/skills-data.js'

import * as skillsCtrl from '../controllers/skills.js'

const router = Router()

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource')
})

router.get('/', skillsCtrl.index)

export {
  router
}
