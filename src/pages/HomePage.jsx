import { useState } from "react";

export const HomePage = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Home Page</h1>
            <h2>{count}</h2>

            <button onClick={() => {
                setCount(count + 1)
            }}>Adição</button>

            <button onClick={() => {
                setCount(count - 1)
            }}>Subtração</button>
        </div>
    )
}

export default HomePage;