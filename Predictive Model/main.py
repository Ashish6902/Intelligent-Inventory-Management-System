import json
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

# Load the JSON data
with open('sales.js', 'r') as file:
    data_json = json.load(file)

# Convert JSON to DataFrame
data = pd.DataFrame(data_json)

# Select features (X) and target variable (y)
X = data[['Temperature', 'Humidity']]
y = data['QuantitySold']

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize and train the linear regression model
forest_model = RandomForestRegressor(random_state=42)
forest_model.fit(X_train, y_train)


# Make predictions on the test set
forest_y_pred = forest_model.predict(X_test)

# Evaluate the model
forest_mse = mean_squared_error(y_test, forest_y_pred)
print('Random Forest Mean Squared Error:', forest_mse)
