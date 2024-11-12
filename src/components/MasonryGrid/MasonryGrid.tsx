import { ReactNode } from "react";

export interface MasonryGridItem {
    name: string
}



import style from "./MasonaryGrid.module.css"

export function MasonryGrid<T extends MasonryGridItem>({ data, content }: {
    data: T[],
    content: (item: T) => ReactNode
}) {
    return <div className={style.masonryContainer}>
        {(data.map(item => (
            <div className={style.masonryItem} key={item.name}>{content(item)}</div>
        )))}
    </div>
}