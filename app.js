document.addEventListener('DOMContentLoaded', () => {

    const textarea = document.getElementById('myTextarea');
    const currentCount = document.getElementById('currentCount');
    const maxCount = document.getElementById('maxCount');
    const maxLength = textarea.getAttribute('maxlength');

    maxCount.textContent = maxLength;
    textarea.addEventListener('input', () => {
        const textLength = textarea.value.length;
        currentCount.textContent = textLength;
    });
});
