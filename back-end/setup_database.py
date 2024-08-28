import mysql.connector
from mysql.connector import errorcode

# Configuração da conexão com o MySQL (sem especificar o banco de dados)
db_config = {
    'host': 'localhost',
    'user': 'root',        # Substitua pelo seu usuário MySQL
    'password': '123mysql%%',      # Substitua pela sua senha MySQL
}

def criar_banco_e_tabela():
    try:
        # Conectar ao MySQL (sem banco de dados específico)
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        # Criar o banco de dados se não existir
        cursor.execute("CREATE DATABASE IF NOT EXISTS loja")
        cursor.execute("USE loja")  # Selecionar o banco de dados

        # Criar a tabela se não existir
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS produtos (
            id INT AUTO_INCREMENT PRIMARY KEY,
            codigo VARCHAR(255) NOT NULL,
            nome VARCHAR(255) NOT NULL,
            descricao TEXT,
            preco DECIMAL(10, 2)
        )
        """)

        # Fechar a conexão
        cursor.close()
        conn.close()
        print("Banco de dados e tabela criados com sucesso.")
    except mysql.connector.Error as err:
        print(f"Erro: {err}")

# Chame a função para criar o banco de dados e a tabela ao executar este script
if __name__ == "__main__":
    criar_banco_e_tabela()
