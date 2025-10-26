import { useForm } from "react-hook-form";

const FormHook = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Дані форми:", data);
    alert("Форма успішно відправлена!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <label>Ім’я:</label>
      <input {...register("name", { required: "Ім’я є обов’язковим" })} />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label>Email:</label>
      <input {...register("email", { 
        required: "Email є обов’язковим",
        pattern: { value: /^\S+@\S+$/i, message: "Невірний формат email" }
      })} />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label>Пароль:</label>
      <input type="password" {...register("password", { 
        required: "Пароль є обов’язковим",
        minLength: { value: 6, message: "Мінімум 6 символів" }
      })} />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <button type="submit">Відправити</button>
    </form>
  );
};

export default FormHook;
