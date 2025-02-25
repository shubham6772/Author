
import LineStyleIcon from "@mui/icons-material/LineStyle";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LanguageIcon from "@mui/icons-material/Language";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import ScaleIcon from "@mui/icons-material/Scale";
import { debounce } from "@mui/material";


export const parseToJSON = (parsableJSONString: string) => {
    try {
        if (parsableJSONString != undefined) {
            return JSON.parse(parsableJSONString);
        }
    } catch (error) {
        return false;
    }
}

export const debounceCall = (delay: number, callback: Function) => {
    const delayCallMethod = debounce(() => {
        callback();
    }, delay)
    delayCallMethod();
};


export const getBookDetails = (isbn: string, page: number, language: string, publisher: string, weight: string) => [
    { title: "ISBN", value: isbn, Icon: LineStyleIcon },
    { title: "Page No.", value: page, Icon: FileCopyIcon },
    { title: "Language", value: language, Icon: LanguageIcon },
    { title: "Imprint", value: publisher, Icon: RecentActorsIcon },
    { title: "Weight", value: weight, Icon: ScaleIcon },
];

export const getTimeAgoStringByTimestamp = (time: string) => {
    const timestamp = parseInt(time)
    const now = new Date();
    const past = new Date(timestamp);
    const timeDiff = now.getTime() - past.getTime();
    const timeDiffInSeconds = Math.floor(timeDiff / 1000);

    if (isNaN(timeDiffInSeconds)) return "";

    if (timeDiffInSeconds < 60) return "1 min ago";

    const minutes = Math.floor(timeDiffInSeconds / 60);
    if (minutes < 60) return `${minutes} ${minutes > 1 ? "mins" : "min"} ago`;

    const hours = Math.floor(timeDiffInSeconds / 3600);
    if (hours < 24) return `${hours} ${hours > 1 ? "hrs" : "hr"} ago`;

    const days = Math.floor(timeDiffInSeconds / 86400);
    if (days === 1) return "yesterday";
    if (days < 30) return `${days} ${days > 1 ? "days" : "day"} ago`;

    const months = Math.floor(days / 30);
    if (months < 12) return `${months} ${months > 1 ? "months" : "month"} ago`;

    const years = Math.floor(days / 365);
    return `${years} ${years > 1 ? "years" : "year"} ago`;
}
