const express = require('express');
const cadastrarUsuario = require('./controladores/cadastrarUsuario');
const login = require('./controladores/login');
const perfil = require('./controladores/perfil');
const produtos = require('./controladores/produtos');
const verificacaoLogin = require('./verificacoes/verificacaoLogin');

const rotas = express();

//usuario
rotas.post('/cadastro', cadastrarUsuario.cadastrarUsuario);

//perfil
rotas.get('/perfil', verificacaoLogin, perfil.verPerfil);
rotas.put('/perfil', verificacaoLogin, perfil.editarPerfil);

// login
rotas.post('/login', login.logar);


// produtos
rotas.get('/produtos', verificacaoLogin, produtos.listarProdutos);
rotas.post('/produtos', verificacaoLogin, produtos.cadastrarProduto);
rotas.put('/produtos/:id', verificacaoLogin, produtos.editarProduto);
rotas.get('/produtos/:id', verificacaoLogin, produtos.listarProduto);
rotas.delete('/produtos/:id', verificacaoLogin, produtos.deletarProduto);


module.exports = rotas;