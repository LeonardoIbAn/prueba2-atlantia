import routerx from 'express-promise-router';
import Usuario from '../controllers/Usuario';


const router=routerx();
//SuperAdmin
router.post('/add',Usuario.add);
router.get('/query',Usuario.query);
router.get('/list', Usuario.list);
router.put('/update', Usuario.update);
router.delete('/remove', Usuario.remove);



export default router;