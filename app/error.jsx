// "use client";
// export default function Error() {
//   return <h1>ertyuiol</h1>;
// }
// app/error.jsx
"use client";
export default function Error({ error, reset }) {
  console.error(error);
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}