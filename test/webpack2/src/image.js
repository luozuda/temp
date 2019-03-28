export default (url) => {
    const image = document.createElement("img");
    image.src = url;
    image.height = "100";
    return image;
}