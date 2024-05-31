import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  function handleFormSubmit() {
    setIsSubmitted(() => !isSubmitted);
  }

  return <main>{isSubmitted ? <ThankYou /> : <Rating onSubmit={handleFormSubmit} />}</main>;
}

function Rating({ onSubmit }: { onSubmit: () => void }) {
  return (
    <section id="rating">
      <img src="images/icon-star.svg" className="icon" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <form onSubmit={onSubmit}>
        <div className="numbers">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <button className="btn-submit">submit</button>
      </form>
    </section>
  );
}

function ThankYou() {
  return (
    <section id="rating" className="thank-you">
      <img src="images/illustration-thank-you.svg"></img>
      <p>You selected X out of 5</p>
      <h2>Thank You</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
        touch!
      </p>
    </section>
  );
}

export default App;
