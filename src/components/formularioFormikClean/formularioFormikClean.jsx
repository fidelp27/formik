import React, { useState } from "react";

import { Formik, Form, ErrorMessage, Field } from "formik";
import "../formularioReact/form.css";

const FormularioFormikClean = () => {
  const [enviado, setEnviado] = useState(false);
  return (
    <div className="form-container">
      {/* 1 Estructura inicial  Formik - (props)=>{*/}
      {/* 4 - Ya no se necesitan estados. Formik se encarga. Para acceder a los valores se hace a través del onSubmit (val) */}
      {/* 5- validate es para validar los campos en tiempo real, sin enviar el formulario onChange + onBlur*/}
      {/* 6 - dentro de validate se pueden manejar errores. Se crea un objeto vacío y se retorna al final de la validación return errores*/}
      {/* 7 - en las props se pasa errors - en inglés */}
      {/* Se pueden importar las etiquetas directamente para simplificar el código: Form, Field, ErrorMessage */}
      {/* Al importar Form no es necesario pasar el metodo onSubmit al formulario */}
      {/* Field sustituye el input e incluye el values y métodos */}
      {/* Error message se maneja con el name para validar el campo que se usa y component para retornar un elemento jsx */}
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
        {({ errors }) => (
          <Form action="" className="form">
            <label htmlFor="nombre">Nombre</label>
            <Field
              type="text"
              name="nombre"
              placeholder="John Doe"
              className="input"
            />
            <ErrorMessage
              name="nombre"
              component={() => <div className="error">{errors.nombre} </div>}
            />

            <label htmlFor="correo">Correo</label>
            <Field
              type="text"
              id="correo"
              name="correo"
              placeholder="johndoe@email.com"
              className="input"
            />
            <ErrorMessage
              name="correo"
              component={() => <div className="error">{errors.correo} </div>}
            />

            <button type="submit">Enviar</button>
            {enviado && <p className="exito">Formulario enviado con éxito</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormularioFormikClean;
