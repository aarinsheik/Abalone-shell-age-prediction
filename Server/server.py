from flask import Flask , request , jsonify , render_template 
import pickle
import pandas as pd
import sklearn.preprocessing as LabelEncoder

# create flask app
app = Flask(__name__)

# load the model 
with open('..\Model\/best_model.pkl', 'rb') as f:
    abalone_model = pickle.load(f)

@app.route("/hello")
def hello():
    print('hello, This abalone shell age predicting server running : printed in server')
    response =  jsonify('hello, This abalone shell age predicting server running')

    response.headers.add('Access-Control-Allow-Origin','*')
    return response

@app.route("/send_features", methods=["POST"])
def send_features():
    data = request.get_json()
    gender = data['gender']
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

    # Encoding categorical variables 
    le = LabelEncoder()
    predict_df['Sex'] = le.fit_transform( predict_df['Sex'])

    # Make prediction
    prediction = abalone_model.predict(predict_df)
    print(prediction[0])
    
    response =  jsonify({'age': prediction[0]})

    response.headers.add('Access-Control-Allow-Origin','*')
    print(response)
    return response

if __name__ == '__main__':
    print("starting Abalone_age_predicting server...")
    app.run(debug=True)