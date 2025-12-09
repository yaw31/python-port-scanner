document.getElementById('scanForm').addEventListener('submit', async (e) => {
e.preventDefault();
const target = document.getElementById('target').value.trim();
const start = parseInt(document.getElementById('start').value, 10);
const end = parseInt(document.getElementById('end').value, 10);


const status = document.getElementById('status');
const tbody = document.querySelector('#resultsTable tbody');
const summary = document.getElementById('summary');


tbody.innerHTML = '';
summary.textContent = '';
status.textContent = 'Scanning...';


try {
const resp = await fetch('/scan', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ target, start, end })
});


if (!resp.ok) {
const err = await resp.json();
status.textContent = 'Error: ' + (err.error || resp.statusText);
return;
}


const data = await resp.json();
status.textContent = `Completed in ${data.duration.toFixed(2)}s`;


if (data.open_ports.length === 0) {
summary.textContent = 'No open ports found.';
} else {
data.open_ports.sort((a,b) => a.port - b.port);
data.open_ports.forEach(item => {
const tr = document.createElement('tr');
const td1 = document.createElement('td'); td1.textContent = item.port;
const td2 = document.createElement('td'); td2.textContent = item.banner || '';
tr.appendChild(td1); tr.appendChild(td2);
tbody.appendChild(tr);
});
summary.textContent = `${data.open_ports.length} open port(s) found.`;
}


} catch (e) {
status.textContent = 'Error: ' + e.message;
}
});