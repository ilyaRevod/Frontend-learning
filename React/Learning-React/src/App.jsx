import "./App.css";

function App() {
  const date = new Date().getHours();
  let text;
  let color;

  if (date >= 6 && date <= 12) {
    text = "Good morning!";
    color = "orange";
  } else if (date >= 13 && date <= 18) {
    text = "Good evening!";
    color = "blue";
  } else if (date >= 19 && date <= 24) {
    text = "Good night!";
    color = "purple";
  } else {
    text = "Good night!";
    color = "black";
  }

  return (
    <>
      <h1 style={{ color: color }}>{text}</h1>
      <p>Hour: {date}</p>
    </>
  );
}

export default App;
