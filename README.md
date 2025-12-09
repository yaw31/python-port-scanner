# Advanced Python Port Scanner with Web Dashboard

A multi-threaded TCP port scanner built with **Python** and a **Flask-based web UI dashboard**. Designed for students and beginners in cybersecurity to understand networking, reconnaissance, and web-based tool interfaces.

⚠️ **For educational and authorized testing only. Never scan systems without permission.**

---

## 🚀 Features
- Multi-threaded TCP port scanning
- Banner grabbing for service identification
- Web dashboard built with Flask
- Clean, simple frontend (HTML + CSS + JS)
- Adjustable port range (1–65535)
- Fast scanning with threading
- Real-time results table
- Scan duration display

---

## 🗂️ Project Structure
```
port-scanner/
│ app.py
│ requirements.txt
│ README.md
│
├── templates/
│     index.html
│
└── static/
      script.js
      style.css
```

---

## 🛠️ Installation & Setup
### 1. Clone the Repository
```
git clone https://github.com/your-username/python-port-scanner.git
cd python-port-scanner
```

### 2. Create Virtual Environment (Windows)
```
python -m venv venv
venv\Scripts\Activate.ps1
```

### 3. Install Dependencies
```
pip install -r requirements.txt
```

### 4. Start the Web Server
```
python app.py
```

### 5. Open the Dashboard
Go to:
```
http://127.0.0.1:5000
```

---

## 📸 Screenshot 

<img width="853" height="489" alt="Screenshot 2025-12-09 164123" src="https://github.com/user-attachments/assets/7499199f-4c7e-4ffc-b1e9-a18b3db275c8" />


---

## 🧠 How It Works
### Port Scanning
- Creates TCP sockets
- Attempts connection to each port
- If connection succeeds → port is open
- Attempts to read service banner

### Web UI
- User inputs IP and port range
- JavaScript sends a POST request to `/scan`
- Flask returns JSON with open ports
- Results displayed in a table dynamically



---

## 🛡️ Disclaimer
This tool is for **learning**, **research**, and **authorized** testing only.
You are responsible for how you use it.

---



---

### ⭐ If this project helped you, please give it a star on GitHub!
