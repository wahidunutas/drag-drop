const dropZone = document.querySelector(".dropzone")
const preview = document.querySelector(".preview")

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
})
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.dataTransfer.files[0];

    reader.addEventListener("load", () => {
        preview.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(file)
})