from flask import Flask, request
from flask import render_template, send_from_directory

application = Flask(__name__, static_url_path='/static')
application.config['JSON_SORT_KEYS'] = False


@application.route("/")
def send_index():
    return render_template('472_Interactive_Draft.html')

if __name__ == "__main__":
    application.run(debug=True)


