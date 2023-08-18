export const capitalizeEveryWordOfString = (unprocessedString) => {
    const lowerCaseStringArray = unprocessedString.toLowerCase().split(" ");
    const capitalArray = lowerCaseStringArray.map((word) => {
        return word[0].toUpperCase() + word.slice(1);
    });

    return capitalArray.join(" ");
};

const yearsDisplay = (years) => {
    if (years === "0") {
        return "";
    }
    if (years === "1") {
        return "1 year ";
    }
    return years + " years ";
};

const monthsDisplay = (months) => {
    const monthsInteger = months.split(".")[0];
    if (monthsInteger === "0") {
        return "";
    }

    if (monthsInteger === "1") {
        return "1 month";
    }

    return monthsInteger + " months";
};
export const ageDisplay = (years, months) => {
    return yearsDisplay(years) + monthsDisplay(months);
};

export const weightDisplay = (weight) => {

    if (weight == null) return "";
    if (isNaN(weight)) return "";
    if (parseFloat(weight) == 0) return "";

    return parseFloat(weight) + " lbs";
};