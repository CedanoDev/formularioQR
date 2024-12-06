$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario

        // Obtener los valores del formulario
        const name = $('#name').val();
        const email = $('#email').val();
        const phone = $('#phone').val();

        // Crear un string con la información del contacto
        const contactInfo = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nEMAIL:${email}\nTEL:${phone}\nEND:VCARD`;

        // Limpiar el área del código QR
        $('#qrcode').empty();

        // Generar el código QR
        $('#qrcode').qrcode({
            text: contactInfo,
            width: 200,
            height: 200
        });
    });
});