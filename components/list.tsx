import { EmojiCard, EmojiCardProps } from "./emojiCard"


export interface listEmoji {
    emojis: EmojiCardProps[]
}

export const List: React.FunctionComponent<listEmoji> = ({emojis}) => {
    return (
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
{emojis.map((emoji,i) => { 
    return <EmojiCard key={i} {...emoji} />
})}
</div>

    )
}