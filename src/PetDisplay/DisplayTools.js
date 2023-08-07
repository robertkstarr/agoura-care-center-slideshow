export const capitalizeEveryWordOfString = (unprocessedString) => {
    const lowerCaseStringArray = unprocessedString.toLowerCase().split(" ");
    const capitalArray = lowerCaseStringArray.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    })

    return capitalArray.join(" ");
}