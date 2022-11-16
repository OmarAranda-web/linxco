//enviar conexion hacia los modelos
const {Maestro,MaestroSchema}=require('./maestro.model')
const {Alumno,AlumnoSchema}=require('./alumno.model')

function setupModels(sequelize) {
  Maestro.init(MaestroSchema, Maestro.config(sequelize));//enviamos el esquema al modelo
  Alumno.init(AlumnoSchema,Alumno.config(sequelize));
}

module.exports = setupModels;
