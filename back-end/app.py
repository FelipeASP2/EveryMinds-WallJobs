from flask import Flask
from routes import routes
from database import iniciar_db
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Registrar o blueprint
app.register_blueprint(routes)

# Inicializar o banco de dados com produtos iniciais
iniciar_db()

if __name__ == '__main__':
    app.run(debug=True)

