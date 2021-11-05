import models from "../models";



export default {
  //TODO Agregar un Usuario
  add: async (req, res, next) => {
    try {
      
      const reg = await models.Usuario.create(req.body);
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(error);
    }
  },
  //TODO colsultar el Usuario
  query: async (req, res, next) => {
    try {
      const reg = await models.Usuario.findOne({
        _id: req.query._id,
      });
      if (!reg) {
        res.status(404).send({
          message: "El registro no existe",
        });
      } else {
        res.status(200).json(reg);
      }
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(error);
    }
  },
  //TODO listar Usuarios
  list: async (req, res, next) => {
    try {
      let valor = req.query.valor;
      const reg = await models.Usuario.find(
        {
          $or: [
            { name: new RegExp(valor, "i") },
            { age: new RegExp(valor, "i") },
          ],
        },
        
      )
        
        
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(error);
    }
  },
  //TODO actualizar Usuario
  update: async (req, res, next) => {
    try {
      let pass = req.body.PASSWORD;
      const reg0 = await models.Usuario.findOne({ _id:req.body._id });

      if (pass != reg0.PASSWORD) {
        req.body.PASSWORD = await bcrypt.hash(req.body.PASSWORD,10);
      }

      const reg = await models.Usuario.findByIdAndUpdate(
        { _id:req.body._id },
        {
          NOMBRE: req.body.NOMBRE,
          MAIL: req.body.MAIL,
          PASSWORD: req.body.PASSWORD,
          
        }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(error);
    }
  },
  //TODO eliminar Usuario
  remove: async (req, res, next) => {
    try {
      const reg = await models.Usuario.findByIdAndDelete({ _id: req.body._id });
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(error);
    }
  },
  //TODO activar Usuario
  activate: async (req, res, next) => {
    try {
      const reg = await models.Usuario.findByIdAndUpdate(
        { _id: req.body._id },
        { estado: 1 }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(error);
    }
  },
  //TODO desactivar Usuario
  desactivate: async (req, res, next) => {
    try {
      const reg = await models.Usuario.findByIdAndUpdate(
        { _id: req.body._id },
        { estado: 0 }
      );
      res.status(200).json(reg);
    } catch (error) {
      res.status(500).send({
        message: "Ocurrio un error",
      });
      next(error);
    }
  },
  

 
};
