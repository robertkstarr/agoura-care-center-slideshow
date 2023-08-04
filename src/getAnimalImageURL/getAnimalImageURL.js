export const getAnimalImageURL = () => {
    const petURLs = [
        "https://api.lacounty.gov/data/acc/animal_images/A5546628.jpg",
        "https://api.lacounty.gov/data/acc/animal_images/A5441277.jpg",
        "https://api.lacounty.gov/data/acc/animal_images/A5569284.jpg",
        "https://api.lacounty.gov/data/acc/animal_images/A5564976.jpg",
        "https://api.lacounty.gov/data/acc/animal_images/A5566159.jpg",
        "https://api.lacounty.gov/data/acc/animal_images/A5566447.jpg"
    ]
    return petURLs[Math.floor(Math.random() * petURLs.length)];
}
