from flask import Flask, render_template, request, redirect, send_from_directory
# from wpi import WPI
#from wqi import WQI
from flask import jsonify
from flask_cors import CORS
#from wqiBasic import calcWQI
from runexcel import finallist
from werkzeug.utils import secure_filename
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})
#CORS(app, resources={​​​​​​​r"/*": {​​​​​​​"origins": "*"}​​​​​​​}​​​​​​)
HOST = '0.0.0.0'
PORT = 5000

@app.route('/')
def hello():
	return jsonify({"hey":"hello"}),200





@app.route('/check', methods = ['GET','POST'])
def check():

	river_locations = finallist 
	return jsonify({"river_locations":river_locations}),200





if __name__ == "__main__":
	app.run(host=HOST, port=PORT, debug=True)

# def calcWQI(pH_val, temp_val, turb_val, oxy_val, nitrate_val, coli_val):