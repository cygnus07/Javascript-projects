const insert = document.getElementById('message')

window.addEventListener('keydown', (e) => {
    // console.log(e.key);
    insert.innerHTML= `
    <div>
            <table border="1">
            <tr>
                <td>Key</td>
                <td>KeyCode</td>
                <td>Code</td>
            </tr>
            <tr>
                <td>${e.key === " " ? "Space": e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>
    `
})