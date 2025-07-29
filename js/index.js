document.getElementById('formPessoas').addEventListener('submit', async (e) => {
    console.log('Submit capturado');
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    try {
        const resp = await fetch('http://127.0.0.1:3000/pessoa', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        const json = await resp.json();
        if (!resp.ok) throw new Error(json.error || 'Erro desconhecido');
        alert(json.message);
        e.target.reset();
    } catch (err) {
        alert('Error: ' + err.message);
    }
});