import { ReactNode, useCallback, useRef, useState } from "react";

export interface MasonryGridItem {
    name: string
}

// export function MasonryGrid<T extends MasonryGridItem>({
//     columnMap, data, content
// }: {
//     columnMap: { [width: number]: number },
//     data: T[],
//     content: (item: T) => ReactNode
// }) {

//     const [columns, setColumns] = useState(3);

//     const containerRef = useRef<HTMLDivElement>(null);

//     const updateColumns = useCallback(()=>{}, [containerRef])


//     return <div ref={containerRef} className="flex-row gap-1 w-full">
//         {[...Array(columns).keys()].map((index) => (<div key={index} className="flex-col gap-1">
//             ({data.map(item => content(item))})
//         </div>))}
//     </div>

// }

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