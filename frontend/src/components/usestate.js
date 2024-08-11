import { useEffect, useState } from "react"
import { Pro } from "./signin/props"
export const UseStateFunction = () => {
    const [count, setCount] = useState(0)

    const Count = () => {
        setCount(count + 1)
    }

     const rev = useEffect(() => {
        setCount(count + 1)
    }, [])

    return (
        <>
            <h2>My count is : {count}</h2>
            <button onClick={() => Count()}>Update count</button>
             <button onMouse={() => rev}>ffddd</button>
            <Pro ast={count} />

        </>
    )
}