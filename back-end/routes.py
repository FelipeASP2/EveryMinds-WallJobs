from flask import Blueprint, request, jsonify
from database import adicionar_produto, listar_produtos, atualizar_produto, deletar_produto

# Criação do blueprint
routes = Blueprint('routes', __name__)

# Rota para adicionar um produto
@routes.route('/adicionar_produto', methods=['POST'])
def adicionar_produto_route():
    data = request.json
    codigo = data['codigo']
    nome = data['nome']
    descricao = data['descricao']
    preco = data['preco']
    
    adicionar_produto(codigo, nome, descricao, preco)
    return jsonify({"message": "Produto adicionado com sucesso!"}), 201

# Rota para listar todos os produtos
@routes.route('/produtos', methods=['GET'])
def listar_produtos_route():
    produtos = listar_produtos()
    return jsonify(produtos)

# Rota para atualizar um produto
@routes.route('/atualizar_produto/<int:id>', methods=['PUT'])
def atualizar_produto_route(id):
    data = request.json
    codigo = data['codigo']
    nome = data['nome']
    descricao = data['descricao']
    preco = data['preco']
    
    atualizar_produto(id, codigo, nome, descricao, preco)
    return jsonify({"message": "Produto atualizado com sucesso!"})

# Rota para deletar um produto
@routes.route('/deletar_produto/<int:id>', methods=['DELETE'])
def deletar_produto_route(id):
    deletar_produto(id)
    return jsonify({"message": "Produto deletado com sucesso!"})
