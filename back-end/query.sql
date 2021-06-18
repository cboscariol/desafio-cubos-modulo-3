CREATE DATABASE market_cubos

DROP TABLE IF EXISTS usuarios,
CREATE TABLE usuarios (
  id serial UNIQUE primary key,
  nome text NOT NULL,
  nome_loja text NOT NULL,
  email text NOT NULL,
  senha text NOT NULL
  );
  
DROP TABLE IF EXISTS produtos,
CREATE TABLE produtos (
  id serial NOT NULL primary key,
  usuario_id serial NOT NULL references usuarios(id),
  nome varchar(80) NOT NULL,
  estoque integer NOT NULL,
  categoria varchar(20) NOT NULL,
  preco integer NOT NULL,
  descricao text,
  imagem text
  );