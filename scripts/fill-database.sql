USE sgc;


DELETE FROM emplacamento;
DELETE FROM itens;
DELETE FROM automovel;
DELETE FROM venda;
DELETE FROM cliente;
DELETE FROM vendedor;
DELETE FROM usuario;
DELETE FROM modelo_fabricante;

INSERT INTO usuario SET username = "admin", senha = "$2a$10$rFrnGh2Dk2E50LIpHzMVDOcI0g6EsZ6szOjW3lmLHsHY8Rw32UXX6", nome = "admin", cpf= "00000000000", email = "admin@admin.com", telefone = "0000000", endereco = "endereco";
INSERT INTO usuario SET username = "vendedor1", senha = "$2a$10$rFrnGh2Dk2E50LIpHzMVDOcI0g6EsZ6szOjW3lmLHsHY8Rw32UXX6", nome = "vendedor1", cpf= "00000000000", email = "vendedor1@email.com", telefone = "0000000", endereco = "endereco";
INSERT INTO usuario SET username = "vendedor2", senha = "$2a$10$rFrnGh2Dk2E50LIpHzMVDOcI0g6EsZ6szOjW3lmLHsHY8Rw32UXX6", nome = "vendedor2", cpf= "00000000000", email = "vendedor2@email.com", telefone = "0000000", endereco = "endereco";
INSERT INTO usuario SET username = "cliente1", senha = "$2a$10$rFrnGh2Dk2E50LIpHzMVDOcI0g6EsZ6szOjW3lmLHsHY8Rw32UXX6", nome = "cliente1", cpf= "00000000000", email = "cliente1@email.com", telefone = "0000000", endereco = "endereco";
INSERT INTO usuario SET username = "cliente2", senha = "$2a$10$rFrnGh2Dk2E50LIpHzMVDOcI0g6EsZ6szOjW3lmLHsHY8Rw32UXX6", nome = "cliente2", cpf= "00000000000", email = "cliente2@email.com", telefone = "0000000", endereco = "endereco";
INSERT INTO vendedor SET u_id = (SELECT id FROM usuario WHERE email = "admin@admin.com"), gerente = true;
INSERT INTO vendedor SET u_id = (SELECT id FROM usuario WHERE email = "vendedor1@email.com"), gerente = false;
INSERT INTO vendedor SET u_id = (SELECT id FROM usuario WHERE email = "vendedor2@email.com"), gerente = false;
INSERT INTO cliente SET u_id = (SELECT id FROM usuario WHERE email = "cliente1@email.com");
INSERT INTO cliente SET u_id = (SELECT id FROM usuario WHERE email = "cliente2@email.com");

INSERT INTO modelo_fabricante SET modelo = "Uno", fabricante = "FIAT";
INSERT INTO modelo_fabricante SET modelo = "Logan", fabricante = "Renault";
INSERT INTO modelo_fabricante SET modelo = "Aventador", fabricante = "Lamborghini";
INSERT INTO modelo_fabricante SET modelo = "Mustang", fabricante = "Ford";

INSERT INTO automovel SET chassi = "000000", cor = "prata", ano = 2022, valor = 25000, mf_modelo = "Uno";
INSERT INTO automovel SET chassi = "111111", cor = "preto", ano = 2022, valor = 30000, mf_modelo = "Logan";
INSERT INTO automovel SET chassi = "222222", cor = "laranja", ano = 2019, valor = 1000000, mf_modelo = "Aventador";
INSERT INTO automovel SET chassi = "333333", cor = "branco", ano = 2022, valor = 30000, mf_modelo = "Logan";

INSERT INTO emplacamento SET placa = 00000, valor = 100.75, despachante_nome = "despachante1", despachante_telefone = "40048922", a_chassi= "000000";
INSERT INTO emplacamento SET placa = 01010, valor = 72.77, despachante_nome = "despachante1", despachante_telefone = "40048922", a_chassi= "111111";

INSERT INTO itens SET id = 1, nome = "farol xenon", descricao = "descricao", a_chassi= "000000";
INSERT INTO itens SET id = 2, nome = "camera de re", descricao = "descricao", a_chassi= "111111";

START TRANSACTION;

INSERT INTO venda SET c_id = (SELECT id FROM usuario WHERE email = "cliente1@email.com"), v_id = (SELECT id FROM usuario WHERE email = "vendedor1@email.com"), num_nota_fiscal = "NFE-231310", data = curdate(), forma_pagamento = 2;
INSERT INTO venda SET c_id = (SELECT id FROM usuario WHERE email = "cliente1@email.com"), v_id = (SELECT id FROM usuario WHERE email = "vendedor2@email.com"), num_nota_fiscal = "NFE-321809", data = curdate(), forma_pagamento = 1;
UPDATE automovel SET v_nf =  "NFE-231310" WHERE chassi = "000000";
UPDATE automovel SET v_nf =  "NFE-321809" WHERE chassi = "111111";

COMMIT;


