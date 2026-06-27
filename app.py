from flask import Flask, render_template

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/model')
def model():
    return render_template('model.html')

@app.route('/graphs')
def graphs():
    return render_template('graphs.html')

if __name__ == '__main__':
    app.run(debug=True)