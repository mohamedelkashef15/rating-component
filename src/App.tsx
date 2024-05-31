import { useState } from "react";

/*
  onClick on Specific number (span) 
    1- the style selected will be applied 
    2- value of selectedRating will be the number of selected span
  
*/

interface IRatings {
  selectedRating: number | null;
  onSubmit: () => void;
  setSelectedRating: (val: number) => void;
}

function App() {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [selectedRating, setSelectedRating] = useState<null | number>(null);

  function handleFormSubmit() {
    setIsSubmitted(() => !isSubmitted);
  }

  return (
    <main>
      {isSubmitted ? (
        <ThankYou selectedRating={selectedRating} />
      ) : (
        <Rating onSubmit={handleFormSubmit} selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
      )}
    </main>
  );
}

function Rating({ selectedRating, onSubmit, setSelectedRating }: IRatings) {
  const numbers = [1, 2, 3, 4, 5];
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
          {numbers.map((number, index) => {
            return (
              <span
                className={`number ${selectedRating === number ? "selected" : ""}`}
                key={index}
                onClick={() => setSelectedRating(number)}
              >
                {number}
              </span>
            );
          })}
        </div>
        <button className="btn-submit">submit</button>
      </form>
    </section>
  );
}

function ThankYou({ selectedRating }: { selectedRating: number | null }) {
  return (
    <section id="thank-you" className="thank-you">
      <img src="images/illustration-thank-you.svg"></img>
      <p className="message">You selected {selectedRating} out of 5</p>
      <h2>Thank You</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in
        touch!
      </p>
    </section>
  );
}

export default App;
