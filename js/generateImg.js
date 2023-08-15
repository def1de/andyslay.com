const imageFiles = ["1692116627130.jpg", "1692116627211.jpg", "1692116627293.jpg", "1692116627381.jpg", "1692116627145.jpg", "1692116627226.jpg", "1692116627311.jpg", "1692116627393.jpg", "1692116627162.jpg", "1692116627244.jpg", "1692116627322.jpg", "1692116627181.jpg", "1692116627260.jpg", "1692116627342.jpg", "1692116627195.jpg", "1692116627275.jpg", "1692116627364.jpg"]
const imgParent = document.getElementById("imgContainer")

function getImage(imagePath) {
    let image = document.createElement("div")
    image.setAttribute("class", "image")

    let img = document.createElement("img")
    img.setAttribute("src", imagePath)

    image.appendChild(img)
    imgParent.appendChild(image)
}

imageFiles.forEach(file => {
    let path = "/img/"+file
    getImage(path)
} )