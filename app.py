from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS from flask_cors

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

NUM_EMAILS = 0

@app.route("/num_emails")
def fetch_num_emails():
    global NUM_EMAILS
    try:
        NUM_EMAILS = NUM_EMAILS + 1
        return jsonify({"count": NUM_EMAILS})
    except Exception as e:
        print("error")
        app.logger.error(f"An error occurred: {str(e)}")
        return jsonify({"error": "Internal Server Error"}), 500
