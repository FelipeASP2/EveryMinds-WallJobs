import mysql.connector

# Configuração da conexão com o banco de dados
db = mysql.connector.connect(
    host="localhost",
    user="",                        # Substitua por seu usuário do MySQL
    password="",                    # Substitua pela sua senha do MySQL
    database=""                     # Substitua pela sua database
)

# Função para adicionar um produto
def adicionar_produto(codigo, nome, descricao, preco):
    cursor = db.cursor()
    query = "INSERT INTO produtos (codigo, nome, descricao, preco) VALUES (%s, %s, %s, %s)"
    valores = (codigo, nome, descricao, preco)
    cursor.execute(query, valores)
    db.commit()
    cursor.close()

# Função para listar todos os produtos
def listar_produtos():
    cursor = db.cursor(dictionary=True)
    query = "SELECT * FROM produtos"
    cursor.execute(query)
    produtos = cursor.fetchall()
    cursor.close()
    return produtos

# Função para atualizar um produto
def atualizar_produto(id, codigo, nome, descricao, preco):
    cursor = db.cursor()
    query = "UPDATE produtos SET codigo = %s, nome = %s, descricao = %s, preco = %s WHERE id = %s"
    valores = (codigo, nome, descricao, preco, id)
    cursor.execute(query, valores)
    db.commit()
    cursor.close()

# Função para deletar um produto
def deletar_produto(id):
    cursor = db.cursor()
    query = "DELETE FROM produtos WHERE id = %s"
    valores = (id,)
    cursor.execute(query, valores)
    db.commit()
    cursor.close()

# Função para iniciar o banco de dados com produtos iniciais
def iniciar_db():
    cursor = db.cursor()

    # Verifica se há produtos existentes
    cursor.execute("SELECT COUNT(*) FROM produtos")
    count = cursor.fetchone()[0]
    
    if count == 0:
        # Se não houver produtos, insere os produtos iniciais
        produtos_iniciais = [
            ("001", "Tênis", "Calçado", 10.99),
            ("002", "Bola de Basquete", "Bola de Basquete", 20.99),
            ("003", "Luva de Goleiro", "Luva de Goleiro", 30.99)
        ]

        for codigo, nome, descricao, preco in produtos_iniciais:
            adicionar_produto(codigo, nome, descricao, preco)
    
    cursor.close()