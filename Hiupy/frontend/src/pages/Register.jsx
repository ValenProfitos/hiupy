import { useState } from "react";
import { Footer } from "../components";

//Formulario
export const Register = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasenia: "",
    confirmarContrasenia: "",
  });

  const [errors, setError] = useState({});

  const onValidate = (formData) => {
    let isError = false;
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexP =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    if (!formData.nombre.trim()) {
      errors.nombre = "El campo nombre no debe estar vacio";
      isError = true;
    } else if (!regexName.test(formData.nombre)) {
      errors.nombre = "el campo nombre solo acepta letras y espacios";
      isError = true;
    }

    if (!formData.correo.trim()) {
      errors.correo = "El campo correo no debe estar vacio";
      isError = true;
    } else if (!regexEmail.test(formData.correo)) {
      errors.correo = "el campo correo tiene un formato no valido";
      isError = true;
    }

    if (!formData.contrasenia.trim()) {
      errors.contrasenia = "El campo contrasenia no debe estar vacio";
      isError = true;
    } else if (!regexP.test(formData.contrasenia)) {
      errors.contrasenia =
        "Debe ser minimo 8 caracteres, una letra mayuscula y un caracter especial";
      isError = true;
    }

    if (!formData.confirmarContrasenia.trim()) {
      errors.confirmarContrasenia =
        "El campo confirmar contrasenia no debe estar vacio";
      isError = true;
    } else if (!regexP.test(formData.confirmarContrasenia)) {
      errors.confirmarContrasenia =
        "el campo nombre solo acepta letras y espacios";
      isError = true;
    }

    if (formData.contrasenia !== formData.confirmarContrasenia) {
      errors.confirmarContrasenia = "Las contraseñas no coinciden";
      isError = true;
    }

    return isError ? errors : null;
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  const nombre = formData.nombre.trim();
  const correo = formData.correo.trim();
  const contrasenia = formData.contrasenia.trim();
  const confirmarContrasenia = formData.confirmarContrasenia.trim();

  if (nombre === '' || correo === '' || contrasenia === '' || confirmarContrasenia === '') {
    window.alert('Todos los campos son obligatorios');
    return;
  } else{
    window.alert("Formulario enviado");
  }
  if (formData.contrasenia !== formData.confirmarContrasenia) {
    setError('Las contraseñas no coinciden');
    return;
  }


  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError({
      ...errors,
      nombre: "",
      correo: "",
      confirmarContrasenia: "",
      contrasenia: "",
    });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col text-left gap-2 m-10"
      >
        <h1 className="text-left text-3xl font-bold "> Creá tu cuenta </h1>
        <label className="flex flex-col">Nombre:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ingrese su nombre"
        />
        {errors.nombre && <p className="text-red-500">{errors.nombre}</p>}

        <label>Correo electrónico:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="email"
          name="correo"
          value={formData.correo}
          onChange={handleChange}
          placeholder="Ingrese su correo electronico"
        />
        {errors.correo && <p className="text-red-500">{errors.correo}</p>}

        <label>Contraseña:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="password"
          name="contrasenia"
          value={formData.contrasenia}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
        />
        {errors.contrasenia && (
          <p className="text-red-500">{errors.contrasenia}</p>
        )}

        <label>Confirma la contraseña:</label>
        <input
          className="border-2 h-10 border-gray-200 rounded-md"
          type="password"
          name="confirmarContrasenia"
          value={formData.confirmarContrasenia}
          onChange={handleChange}
          placeholder="Ingrese su contraseña"
        />
        {errors.confirmarContrasenia && (
          <p className="text-red-500">{errors.confirmarContrasenia}</p>
        )}
        <label className="flex m-3 gap-2 ">
          <input
            type="checkbox"
            className="flex flex-row"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          {isChecked ? (
            <p className="flex text-ff9c00">
              ¡Términos y condiciones aceptados!
            </p>
          ) : (
            <p className="flex text-ff9c00">
              Acepto los términos y condiciones.
            </p>
          )}
        </label>

        <button
          className="w-50 h-14 content-normal text-white bg-af7d4d rounded-md"
          type="submit"
        >
          Registrate
        </button>
        <label className="text-center text-gray-500">
          {" "}
          —— O ingresa con tu cuenta de ——
        </label>
        <div className="flex-row flex justify-around">
          <button
            className="w-14 h-14  text-white bg-af7d4d rounded-md shadow-2xl"
            type="submit"
          >
            <img src="/assets/images/Facebook.png" />
          </button>
          <button
            className="w-14 h-14 text-white bg-af7d4d rounded-md shadow-2xl"
            type="submit"
          >
            <img src="/assets/images/GoogleLogo.png" />
          </button>
        </div>
        <div className=" flex gap-1 place-content-center">
          <label className=" content-center">¿Ya tenés cuenta?</label>
          <p className="text-orange-500 font-medium"> Ingresa </p>
        </div>
      </form>
      <Footer />
    </div>
  );
};
