let BASE_URL = 'https://minotruyendd.xyz';
let IMG_URL = 'https://cloudkk.art';
try {
    if (CONFIG_URL) BASE_URL = CONFIG_URL;
    if (CONFIG_IMG_URL) IMG_URL = CONFIG_IMG_URL;
} catch (error) {
}

function formatTimeAgo(isoString) {
    const MINUTE_IN_MS = 60 * 1000;
    const HOUR_IN_MS = 60 * MINUTE_IN_MS;
    const DAY_IN_MS = 24 * HOUR_IN_MS;
    const WEEK_IN_MS = 7 * DAY_IN_MS;

    const now = new Date();
    const pastDate = new Date(isoString);

    if (isNaN(pastDate.getTime())) {
        return "Ngày không hợp lệ";
    }
    
    const timeDifference = now.getTime() - pastDate.getTime();

    if (timeDifference >= 0) {
        if (timeDifference < MINUTE_IN_MS) {
            return "Vừa xong";
        }
        if (timeDifference < HOUR_IN_MS) {
            const minutes = Math.round(timeDifference / MINUTE_IN_MS);
            return `${minutes} phút trước`;
        }
        if (timeDifference < DAY_IN_MS) {
            const hours = Math.round(timeDifference / HOUR_IN_MS);
            return `${hours} giờ trước`;
        }
        if (timeDifference < WEEK_IN_MS) {
            const days = Math.round(timeDifference / DAY_IN_MS);
            return `${days} ngày trước`;
        }
    }

    const day = String(pastDate.getDate()).padStart(2, '0');
    const month = String(pastDate.getMonth() + 1).padStart(2, '0');
    const year = pastDate.getFullYear();
    return `${day}/${month}/${year}`;
}

function fixAllTitleQuotes(htmlString) {
    const flexibleTitleRegex = /"title":"(.*?)"(?=,|})/g;

    const replacerFunction = (match, titleContent) => {
        const cleanedTitle = titleContent.replace(/"/g, '');
        return `"title":"${cleanedTitle}"`;
    };

    return htmlString.replace(flexibleTitleRegex, replacerFunction);
}