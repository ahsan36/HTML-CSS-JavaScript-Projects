const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

// Add event listener on Generate QR Code

generateBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isEmptyInput();
})

// Add event listener for size changes

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

// Download QR Code

downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        // Blank Rectangle Download
         
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

// Check input is empty or not

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code");
    }
}

// JavaScript QR generator for QR Code images

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}