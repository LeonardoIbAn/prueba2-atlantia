import routerx from 'express-promise-router';

import usuarioRouter from './Usuario';


const router=routerx();


router.use('/usuario',usuarioRouter);

export default router;