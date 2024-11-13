import { log } from "console";
import style from "./HomeCard.module.css";

export interface HomeCardProps {
    className?: string;
    title: string;
    description: string;
    src: string;
    url: string;
    date?: Date;
    location?: string;
}

function DateIcon({ date }: { date: Date }) {
    log(date);
    return (
        <div className={style.dateContainer}>
            <div className={style.month}>{date.toLocaleString("default", { month: "short" })}</div>
            <div className={style.day}>{date.getDate()}</div>
        </div>
    );
}

export function HomeCard({ title, description, src, url, date, location }: HomeCardProps) {
    return (
        <a href={url} className={style.cardContainer} title={title}>
            <img src={src} alt="" className={style.background} />
            <div
                className={style.description}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                }}
            >
                <h1 className={style.title}>{title}</h1>
                {
                    // only show event date and location if both are visible
                    date && location && (
                        <div className="flex flex-row gap-[12px]">
                            {/* DateIcon is a calendar looking widget */}
                            <DateIcon date={date} />

                            <div className="flex flex-col gap-[4px]">
                                {/* Meeting time */}
                                <span className={style.info}>
                                    {date.toLocaleDateString("default", {
                                        month: "long",
                                        day: "2-digit",
                                        year: "numeric",
                                    })}
                                </span>
                                <span className={style.info}>
                                    {date.toLocaleTimeString("default", {
                                        hour12: true,
                                        hour: "numeric",
                                        minute: "2-digit",
                                    })}
                                </span>

                                {/* Meeting location */}
                                <span className={style.info}>{location}</span>
                            </div>
                        </div>
                    )
                }
                {/* description of the event */}
                <p>{description}</p>
            </div>
        </a>
    );
}
