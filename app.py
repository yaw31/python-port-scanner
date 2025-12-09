from flask import Flask, render_template, request, jsonify
import socket
import threading
from datetime import datetime

app = Flask(__name__, static_folder='static', template_folder='templates')

results = []

def scan_port(target, port):
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.settimeout(0.7)
        s.connect((target, port))

        try:
            banner = s.recv(1024).decode(errors='ignore').strip()
        except:
            banner = "No banner"

        results.append({"port": port, "banner": banner})

    except:
        pass

    finally:
        try:
            s.close()
        except:
            pass


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/scan', methods=['POST'])
def scan():
    global results
    results = []

    data = request.json
    target = data.get('target')
    start_port = int(data.get('start', 1))
    end_port = int(data.get('end', 1024))

    # Validation
    if not target:
        return jsonify({'error': 'No target provided'}), 400

    start_port = max(1, min(65535, start_port))
    end_port = max(1, min(65535, end_port))

    start_time = datetime.now()
    threads = []

    for port in range(start_port, end_port + 1):
        t = threading.Thread(target=scan_port, args=(target, port))
        threads.append(t)
        t.start()

    for t in threads:
        t.join()

    duration = (datetime.now() - start_time).total_seconds()

    return jsonify({
        'target': target,
        'duration': duration,
        'open_ports': results
    })


if __name__ == '__main__':
    app.run(debug=True)
