document.addEventListener('DOMContentLoaded', () => {
    const generateCodeBtn = document.getElementById('generateCodeBtn');
    const displayCode = document.getElementById('displayCode');
    const copyCodeBtn = document.getElementById('copyCodeBtn');

    // Function to generate a random code
    function generateRandomCode() {
        const prefix = "C-"; // Your desired prefix
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) { // Generate a 6-character random string
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return prefix + code;
    }

    // Initial code display
    displayCode.textContent = "കോഡ് ജനറേറ്റ് ചെയ്തിട്ടില്ല";

    // Event listener for generate button
    generateCodeBtn.addEventListener('click', () => {
        const newCode = generateRandomCode();
        displayCode.textContent = newCode;
    });

    // Event listener for copy button
    copyCodeBtn.addEventListener('click', () => {
        const codeToCopy = displayCode.textContent;
        // Use the modern clipboard API
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(codeToCopy)
                .then(() => {
                    alert('കോഡ് പകർത്തി: ' + codeToCopy);
                })
                .catch(err => {
                    console.error('കോഡ് പകർത്താനായില്ല:', err);
                    // Fallback for older browsers
                    const textArea = document.createElement("textarea");
                    textArea.value = codeToCopy;
                    textArea.style.position = "fixed"; // Avoid scrolling to bottom
                    textArea.style.left = "-999999px";
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        alert('കോഡ് പകർത്തി (പഴയ രീതി): ' + codeToCopy);
                    } catch (err) {
                        console.error('കോഡ് പകർത്താനായില്ല (പഴയ രീതി):', err);
                    } finally {
                        document.body.removeChild(textArea);
                    }
                });
        } else {
            // Fallback for very old browsers
            const textArea = document.createElement("textarea");
            textArea.value = codeToCopy;
            textArea.style.position = "fixed";
            textArea.style.left = "-999999px";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            try {
                document.execCommand('copy');
                alert('കോഡ് പകർത്തി (പഴയ രീതി): ' + codeToCopy);
            } catch (err) {
                console.error('കോഡ് പകർത്താനായില്ല (പഴയ രീതി):', err);
            } finally {
                document.body.removeChild(textArea);
            }
        }
    });
});
          
