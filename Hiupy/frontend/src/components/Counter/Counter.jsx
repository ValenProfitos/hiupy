import { useCallback, useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    //Usando el hook useCallBack memoizo la función y evito que se re-renderice, salvo que counter se actualice.
    const increment = useCallback(() => {
        setCounter((prevCounter) => prevCounter + 1);
        // console.log("Increment here: ", counter)
    }, [counter]);

    const decrement = useCallback(() => {
        if (counter >= 1) {
            setCounter((prevCounter) => prevCounter - 1)
            // console.log("Decrement here: ", counter)
        } else return
    }, [counter]);

    return (
        <div className="flex flex-row gap-3 items-center text-md text-botones">
            <button
                onClick={decrement}
                className="text-lg w-8 h-8 font-semibold  rounded-full border border-botones"
            >
                -
            </button>
            <p>{counter}</p>
            <button
                onClick={increment}
                className="text-lg w-8 h-8  font-semibold  border border-botones rounded-full"
            >
                +
            </button>
        </div>
    );
};
