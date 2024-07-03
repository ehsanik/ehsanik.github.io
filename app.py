from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/selected_works')
def selected_works():
    return render_template('selected_works.html')

@app.route('/cv')
def cv():
    return render_template('cv.html')


@app.route('/mountains')
def mountains():
    return render_template('mountains.html')


if __name__ == '__main__':
    app.run(debug=True)