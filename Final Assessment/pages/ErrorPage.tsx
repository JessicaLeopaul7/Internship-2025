import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <br />
        <br />
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  );
};

export default ErrorPage;
