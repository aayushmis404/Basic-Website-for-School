import PageMeta from "../components/PageMeta";
import Button from "../components/Button";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="not-found">
        <div>
          <div className="not-found__code">
            4<span>0</span>4
          </div>
          <h1>Page Not Found</h1>
          <p>The page you're looking for may have been moved or no longer exists.</p>
          <div className="not-found__actions">
            <Button to="/" variant="primary">Back to Home</Button>
            <Button to="/contact" variant="ghost">Contact Us</Button>
          </div>
        </div>
      </div>
    </>
  );
}
