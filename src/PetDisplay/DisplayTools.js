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

export const shouldDisplayWeight = (weight) => {
    return (weight != null) && (!isNaN(weight)) && (parseFloat(weight) > 0);
};
export const weightDisplay = (weight) => {
    if (shouldDisplayWeight(weight)) {
        return parseFloat(weight) + " lbs";
    }
    return "";
};