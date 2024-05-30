function App() {
  return (
    <main>
      <Rating />
    </main>
  );
}

function Rating() {
  return (
    <section id="Rating">
      <img src="images/icon-star.svg"></img>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <div className="numbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
      <button className="btn-submit">submit</button>
    </section>
  );
}

export default App;
