import FormFormik from "./components/FormFormik";
// або
// import FormHook from "./components/FormHook";

function App() {
  return (
    <div className="container">
      <h1>Форма з валідацією</h1>
      <FormFormik />
      {/* <FormHook /> */}
    </div>
  );
}

export default App;
