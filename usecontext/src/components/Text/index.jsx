import { useCount } from "../../context/count-context";

export const Text = () => {
    const { count } = useCount();
    
    return (
        <p>The count is {count}</p>
    );
};