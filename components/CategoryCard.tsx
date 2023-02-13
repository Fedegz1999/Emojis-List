
interface categoryProps {
emoji: string,
group: string,
handleFilter: (group: string) => void
}

export const CategoryCard:React.FunctionComponent<categoryProps> = ({emoji, group, handleFilter}) => {
    return (
        <>
        <button
        onClick={()=>handleFilter(group)}
        className="flex items-baseline justify-start pl-7 rounded-md bg-red-600 py-2 hover:bg-gray-100">
        <span className="text-4xl md:text-5xl mb-2" role={'img'} aria-label={emoji}>{emoji}</span>
        <p>{group}</p>
        </button>
        </>
    )
}