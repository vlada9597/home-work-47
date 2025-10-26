import { useFormik } from "formik";
import * as Yup from "yup";

const FormFormik = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Ім'я є обов’язковим"),
      email: Yup.string().email("Невірний формат email").required("Email є обов’язковим"),
      password: Yup.string().min(6, "Мінімум 6 символів").required("Пароль є обов’язковим"),
    }),
    onSubmit: (values) => {
      console.log("Дані форми:", values);
      alert("Форма успішно відправлена!");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <label>Ім’я:</label>
      <input type="text" {...formik.getFieldProps("name")} />
      {formik.touched.name && formik.errors.name && <p className="error">{formik.errors.name}</p>}

      <label>Email:</label>
      <input type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email && <p className="error">{formik.errors.email}</p>}

      <label>Пароль:</label>
      <input type="password" {...formik.getFieldProps("password")} />
      {formik.touched.password && formik.errors.password && <p className="error">{formik.errors.password}</p>}

      <button type="submit">Відправити</button>
    </form>
  );
};

export default FormFormik;
