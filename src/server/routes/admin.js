const router = require('express-promise-router')();
const AdminController = require('../controllres/admin');
const cors = require('cors');


router.route('/')
.options(cors())
.post(AdminController.GoToAdminPage);

router.route('/notice')
.options(cors())
.post(AdminController.AddNewNotice)
.get(AdminController.ReadAllNotice);

router.route('/event')
.options(cors())
.post(AdminController.AddNewEvent)
.get(AdminController.ReadAllEvent);

router.route('/newsfeed')
.options(cors())
.post(AdminController.AddNewNews)
.get(AdminController.ReadAllNews);

router.route('/result')
.options(cors())
.post(AdminController.AddNewResult)
.get(AdminController.ReadAllResult);
router.route('/:resultId')
    .put(AdminController.UpdateResult)
    .delete(AdminController.DeleteResultById);


module.exports =router;