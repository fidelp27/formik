import React, { useState } from "react";
import { Formik } from "formik";
import "../formularioReact/form.css";

const FormularioFormik = () => {
  const [enviado, setEnviado] = useState(false);
  return (
    <div className="form-container">
      {/* 1 Estructura inicial  Formik - (props)=>{*/}
      {/* 4 - Ya no se necesitan estados. Formik se encarga. Para acceder a los valores se hace a través del onSubmit (val) */}
      {/* 5- validate es para validar los campos en tiempo real, sin enviar el formulario onChange + onBlur*/}
      {/* 6 - dentro de validate se pueden manejar errores. Se crea un objeto vacío y se retorna al final de la validación return errores*/}
      {/* 7 - en las props se pasa errors - en inglés */}
      <Formik
        initialValues={{ nombre: "", correo: "" }}
        validate={(val) => {
          let errores = {};
          if (!val.nombre) {
            errores.nombre = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(val.nombre)) {
            errores.nombre = "Solo se permiten letras y espacios en este campo";
          }
          if (!val.correo) {
            errores.correo = "Por favor ingresa un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val.correo)
          ) {
            errores.correo = "El correo ingresado es inválido ";
          }
          return errores;
        }}
        onSubmit={(val, { resetForm }) => {
          console.log("Formulario enviado");
          setEnviado(true);
          resetForm();
          setTimeout(() => setEnviado(false), 2000);
        }}
      >
        {/* 2 - Se pasan props: values: valores del formulario, handle: métodos */}
        {/* 3 - Se pasan values, onChange, onBlur (pierde el foco el input) a los input, touched efecto solo en elemento seleccionado */}
        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form action="" className="form" onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="John Doe"
              className="input"
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.nombre && errors.nombre && (
              <div className="error">{errors.nombre} </div>
            )}
            <label htmlFor="correo">Correo</label>
            <input
              type="text"
              id="correo"
              name="correo"
              placeholder="johndoe@email.com"
              className="input"
              value={values.correo}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.correo && errors.correo && (
              <div className="error">{errors.correo} </div>
            )}

            <button type="submit">Enviar</button>
            {enviado && <p className="exito">Formulario enviado con éxito</p>}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormularioFormik;
