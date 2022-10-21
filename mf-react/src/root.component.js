import "./index.css";
import App from "./App/App";

export default function Root(props) {
  const productId = window.location.pathname.split("/").pop();

  return (
    <div className="container mx-auto my-6">
      <App productId={productId} />
    </div>
  );
}
