import { useState, useEffect } from 'react';

function Mirdula() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return <button onClick={() => setCount(count + 1)}>Click me</button>;
}
export default Mirdula