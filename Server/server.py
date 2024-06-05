from flask import Flask , request , jsonify 
import pickle
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from flask_cors import CORS, cross_origin

# create flask app
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# load the model 
with open('..\Model\/best_model.pkl', 'rb') as f:
    abalone_model = pickle.load(f)

@app.route("/hello")
@cross_origin()
def hello():
    print('hello, This abalone shell age predicting server running : printed in server')
    response =  jsonify('hello, This abalone shell age predicting server running')

    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route("/sendFeatures", methods=["POST"])
@cross_origin()
def send_features():

    print('hello')
    data = request.json

    gender = data.get('gender')
    length = data['length']
    diameter = data['diameter']
    height = data['height']
    shucked_weight = data['shucked_weight']
    shell_weight = data['shell_weight']
    viscera_weight = data['viscera_weight']
    whole_weight = data['whole_weight']

    # Make predictions using the model :

    # prepare a dataframe with the features for prediction
    # example data

    DFdata = {
        'Sex' : [str(gender)] ,
        'Length' : [float(length)] ,
        'Diameter' : [float(diameter)] ,
        'Height': [float(height)] ,
        'Whole weight' : [float(whole_weight)] ,
        'Whole weight.1' : [float(shucked_weight)] , 
        'Whole weight.2' : [float(viscera_weight)] ,
        'Shell weight' : [float(shell_weight)] ,
    }

    predict_df = pd.DataFrame(DFdata)

    print('\n\nRecieved Data from User :\n\n',predict_df,'\n\n')

    # Encoding categorical variables 
    le = LabelEncoder()
    predict_df['Sex'] = le.fit_transform( predict_df['Sex'])

    # Make prediction
    prediction = abalone_model.predict(predict_df)
    print('Predicted age by the model :',prediction[0],'\n\n')
    
    response =  jsonify({'age': prediction[0]})
    # response.headers.add('Access-Control-Allow-Origin','*')
    print(response)
    return response

if __name__ == '__main__':
    print("starting Abalone_age_predicting server...")
    app.run(debug=True)