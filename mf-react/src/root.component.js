import "./index.css";
import App from "./App/App";

export default function Root(props) {
  const productId = window.location.pathname.split("/").pop();

  return (
    <div className="container mx-auto">
      <App productId={productId} />
    </div>
  );
}
