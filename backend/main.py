from flask import Flask, request
from flask_cors import CORS

import random

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def print_headers():
    headers = request.headers
    print(request.headers["Authorization"])

    return str(random.randint(0, 100))

if __name__ == '__main__':
    app.run(debug=True)