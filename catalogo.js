// ------------------- GERADOR DE IMAGENS VÁLIDAS -------------------
// URLs externas sem Wikimedia, usando Placehold.co para evitar erro de thumbnail.
function gerarImagemProduto(nome, categoria) {
  const coresPorCategoria = {
    "Árvores Nativas": "E7F5E7",
    "Citros": "FFF3C4",
    "Frutíferas": "FFE7D1",
    "Forrações": "E4F5DC",
    "Palmeiras": "E2F0E8",
    "Ornamentais": "F0E8FF",
  };

  const fundo = coresPorCategoria[categoria] || "E8F3E6";
  const texto = encodeURIComponent(nome);
  return `https://placehold.co/900x650/${fundo}/1F3B2D/png?text=${texto}`;
}

// ------------------- DADOS DOS PRODUTOS -------------------
const produtos = [
  // Árvores Nativas
  { id: 1, nome: "Acácia Amarela", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Acácia Amarela", "Árvores Nativas") },
  { id: 2, nome: "Acácia Rosa", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Acácia Rosa", "Árvores Nativas") },
  { id: 3, nome: "Acácia Roxa", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Acácia Roxa", "Árvores Nativas") },
  { id: 4, nome: "Angico Branco", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Angico Branco", "Árvores Nativas") },
  { id: 5, nome: "Angico Folha", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Angico Folha", "Árvores Nativas") },
  { id: 6, nome: "Aroeira Salsa", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Aroeira Salsa", "Árvores Nativas") },
  { id: 7, nome: "Aroeira Vermelha", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Aroeira Vermelha", "Árvores Nativas") },
  { id: 8, nome: "Babatimão", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Babatimão", "Árvores Nativas") },
  { id: 9, nome: "Canafístula", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Canafístula", "Árvores Nativas") },
  { id: 10, nome: "Espatódia", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Espatódia", "Árvores Nativas") },
  { id: 11, nome: "Espirradeira", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Espirradeira", "Árvores Nativas") },
  { id: 12, nome: "Flamboyant", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Flamboyant", "Árvores Nativas") },
  { id: 13, nome: "Ingá", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ingá", "Árvores Nativas") },
  { id: 14, nome: "Ipê Amarelo", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ipê Amarelo", "Árvores Nativas") },
  { id: 15, nome: "Ipê Branco", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ipê Branco", "Árvores Nativas") },
  { id: 16, nome: "Ipê Rosa", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ipê Rosa", "Árvores Nativas") },
  { id: 17, nome: "Jasmim Manga", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jasmim Manga", "Árvores Nativas") },
  { id: 18, nome: "Magnólia", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Magnólia", "Árvores Nativas") },
  { id: 19, nome: "Manacá da Serra", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Manacá da Serra", "Árvores Nativas") },
  { id: 20, nome: "Murta Toceira", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Murta Toceira", "Árvores Nativas") },
  { id: 21, nome: "Oiti", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Oiti", "Árvores Nativas") },
  { id: 22, nome: "Paineira Rosa", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Paineira Rosa", "Árvores Nativas") },
  { id: 23, nome: "Pata de Vaca", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pata de Vaca", "Árvores Nativas") },
  { id: 24, nome: "Pau Brasil", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pau Brasil", "Árvores Nativas") },
  { id: 25, nome: "Pau Ferro", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pau Ferro", "Árvores Nativas") },
  { id: 26, nome: "Quaresmeira Rosa", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Quaresmeira Rosa", "Árvores Nativas") },
  { id: 27, nome: "Quaresmeira Roxa", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Quaresmeira Roxa", "Árvores Nativas") },
  { id: 28, nome: "Reseda", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Reseda", "Árvores Nativas") },
  { id: 29, nome: "Sibipiruna", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Sibipiruna", "Árvores Nativas") },
  { id: 30, nome: "Teca", categoria: "Árvores Nativas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Teca", "Árvores Nativas") },

  // Citros
  { id: 31, nome: "Laranja Campista", categoria: "Citros", especificacao: "Todos os portes", imagem: gerarImagemProduto("Laranja Campista", "Citros") },
  { id: 32, nome: "Laranja Lima", categoria: "Citros", especificacao: "Todos os portes", imagem: gerarImagemProduto("Laranja Lima", "Citros") },
  { id: 33, nome: "Lima", categoria: "Citros", especificacao: "Todos os portes", imagem: gerarImagemProduto("Lima", "Citros") },
  { id: 34, nome: "Limão Taíti", categoria: "Citros", especificacao: "Todos os portes", imagem: gerarImagemProduto("Limão Taíti", "Citros") },
  { id: 35, nome: "Mexerica Rio", categoria: "Citros", especificacao: "Todos os portes", imagem: gerarImagemProduto("Mexerica Rio", "Citros") },
  { id: 36, nome: "Pokan", categoria: "Citros", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pokan", "Citros") },
  { id: 37, nome: "Tangerina", categoria: "Citros", especificacao: "Todos os portes", imagem: gerarImagemProduto("Tangerina", "Citros") },

  // Frutíferas
  { id: 38, nome: "Abacate", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Abacate", "Frutíferas") },
  { id: 39, nome: "Abiu Amarelo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Abiu Amarelo", "Frutíferas") },
  { id: 40, nome: "Abiu Roxo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Abiu Roxo", "Frutíferas") },
  { id: 41, nome: "Acerola", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Acerola", "Frutíferas") },
  { id: 42, nome: "Ameixa", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ameixa", "Frutíferas") },
  { id: 43, nome: "Ameixa do Japão", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ameixa do Japão", "Frutíferas") },
  { id: 44, nome: "Amora Vermelha", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Amora Vermelha", "Frutíferas") },
  { id: 45, nome: "Araçá", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Araçá", "Frutíferas") },
  { id: 46, nome: "Atemoia", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Atemoia", "Frutíferas") },
  { id: 47, nome: "Cacau", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cacau", "Frutíferas") },
  { id: 48, nome: "Caju", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Caju", "Frutíferas") },
  { id: 49, nome: "Cambucá", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cambucá", "Frutíferas") },
  { id: 50, nome: "Caqui", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Caqui", "Frutíferas") },
  { id: 51, nome: "Carambola", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Carambola", "Frutíferas") },
  { id: 52, nome: "Castanha Portuguesa", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Castanha Portuguesa", "Frutíferas") },
  { id: 53, nome: "Cereja do Rio Grande", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cereja do Rio Grande", "Frutíferas") },
  { id: 54, nome: "Cupuaçu", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cupuaçu", "Frutíferas") },
  { id: 55, nome: "Figo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Figo", "Frutíferas") },
  { id: 56, nome: "Flor do Jambo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Flor do Jambo", "Frutíferas") },
  { id: 57, nome: "Framboesa", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Framboesa", "Frutíferas") },
  { id: 58, nome: "Fruta Pão", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Fruta Pão", "Frutíferas") },
  { id: 59, nome: "Fruto do Conde ou Pinha", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Fruto do Conde ou Pinha", "Frutíferas") },
  { id: 60, nome: "Goiaba", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Goiaba", "Frutíferas") },
  { id: 61, nome: "Graviola", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Graviola", "Frutíferas") },
  { id: 62, nome: "Groselha", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Groselha", "Frutíferas") },
  { id: 63, nome: "Groselha Branca", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Groselha Branca", "Frutíferas") },
  { id: 64, nome: "Grumixama", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Grumixama", "Frutíferas") },
  { id: 65, nome: "Guaraná", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Guaraná", "Frutíferas") },
  { id: 66, nome: "Jabuticaba", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jabuticaba", "Frutíferas") },
  { id: 67, nome: "Jaca", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jaca", "Frutíferas") },
  { id: 68, nome: "Jambo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jambo", "Frutíferas") },
  { id: 69, nome: "Jamelão", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jamelão", "Frutíferas") },
  { id: 70, nome: "Jenipapo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jenipapo", "Frutíferas") },
  { id: 71, nome: "Kinkã", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Kinkã", "Frutíferas") },
  { id: 72, nome: "Kiwi", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Kiwi", "Frutíferas") },
  { id: 73, nome: "Lixia", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Lixia", "Frutíferas") },
  { id: 74, nome: "Maçã", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Maçã", "Frutíferas") },
  { id: 75, nome: "Mamão", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Mamão", "Frutíferas") },
  { id: 76, nome: "Manga Palmer", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Manga Palmer", "Frutíferas") },
  { id: 77, nome: "Manga Tommy", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Manga Tommy", "Frutíferas") },
  { id: 78, nome: "Manga Ubá", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Manga Ubá", "Frutíferas") },
  { id: 79, nome: "Mangostão", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Mangostão", "Frutíferas") },
  { id: 80, nome: "Maracujá", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Maracujá", "Frutíferas") },
  { id: 81, nome: "Marmelo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Marmelo", "Frutíferas") },
  { id: 82, nome: "Mirtilo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Mirtilo", "Frutíferas") },
  { id: 83, nome: "Nectarina", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Nectarina", "Frutíferas") },
  { id: 84, nome: "Noni", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Noni", "Frutíferas") },
  { id: 85, nome: "Noz Pecan", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Noz Pecan", "Frutíferas") },
  { id: 86, nome: "Pera", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pera", "Frutíferas") },
  { id: 87, nome: "Pêssego", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pêssego", "Frutíferas") },
  { id: 88, nome: "Pitanga Vermelha", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pitanga Vermelha", "Frutíferas") },
  { id: 89, nome: "Pitomba", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pitomba", "Frutíferas") },
  { id: 90, nome: "Romã", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Romã", "Frutíferas") },
  { id: 91, nome: "Sapoti", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Sapoti", "Frutíferas") },
  { id: 92, nome: "Siriguela", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Siriguela", "Frutíferas") },
  { id: 93, nome: "Tamarindo", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Tamarindo", "Frutíferas") },
  { id: 94, nome: "Uva", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Uva", "Frutíferas") },
  { id: 95, nome: "Uva Verde", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Uva Verde", "Frutíferas") },
  { id: 96, nome: "Uvaia", categoria: "Frutíferas", especificacao: "Todos os portes", imagem: gerarImagemProduto("Uvaia", "Frutíferas") },

  // Forrações
  { id: 97, nome: "Begônia", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Begônia", "Forrações") },
  { id: 98, nome: "Bela Emília Azul", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Bela Emília Azul", "Forrações") },
  { id: 99, nome: "Bela Emília Branca", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Bela Emília Branca", "Forrações") },
  { id: 100, nome: "Camarão Amarelo", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Camarão Amarelo", "Forrações") },
  { id: 101, nome: "Cinéria", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cinéria", "Forrações") },
  { id: 102, nome: "Clorofito", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Clorofito", "Forrações") },
  { id: 103, nome: "Cravina", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cravina", "Forrações") },
  { id: 104, nome: "Cravo Difunto", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cravo Difunto", "Forrações") },
  { id: 105, nome: "Érica Amarela", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Érica Amarela", "Forrações") },
  { id: 106, nome: "Érica Rosa", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Érica Rosa", "Forrações") },
  { id: 107, nome: "Érica Roxa", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Érica Roxa", "Forrações") },
  { id: 108, nome: "Flor do Guarujá", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Flor do Guarujá", "Forrações") },
  { id: 109, nome: "Grama Amendoim", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Grama Amendoim", "Forrações") },
  { id: 110, nome: "Iresine", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Iresine", "Forrações") },
  { id: 111, nome: "Jerônimo", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jerônimo", "Forrações") },
  { id: 112, nome: "Kalanchoe", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Kalanchoe", "Forrações") },
  { id: 113, nome: "Lanatana Câmbara", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Lanatana Câmbara", "Forrações") },
  { id: 114, nome: "Lavanda", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Lavanda", "Forrações") },
  { id: 115, nome: "Mini Grama Preta", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Mini Grama Preta", "Forrações") },
  { id: 116, nome: "Onze Horas", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Onze Horas", "Forrações") },
  { id: 117, nome: "Penta Vermelha", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Penta Vermelha", "Forrações") },
  { id: 118, nome: "Sálvia Vermelha", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Sálvia Vermelha", "Forrações") },
  { id: 119, nome: "Unha de Gato", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Unha de Gato", "Forrações") },
  { id: 120, nome: "Vinca", categoria: "Forrações", especificacao: "Todos os portes", imagem: gerarImagemProduto("Vinca", "Forrações") },

  // Palmeiras
  { id: 121, nome: "Açaí", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Açaí", "Palmeiras") },
  { id: 122, nome: "Areca Bambu", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Areca Bambu", "Palmeiras") },
  { id: 123, nome: "Areca Catechu", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Areca Catechu", "Palmeiras") },
  { id: 124, nome: "Areca de Locuba", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Areca de Locuba", "Palmeiras") },
  { id: 125, nome: "Areca Vestiária", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Areca Vestiária", "Palmeiras") },
  { id: 126, nome: "Bismarck", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Bismarck", "Palmeiras") },
  { id: 127, nome: "Buriti", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Buriti", "Palmeiras") },
  { id: 128, nome: "Butiá", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Butiá", "Palmeiras") },
  { id: 129, nome: "Carpentaria", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Carpentaria", "Palmeiras") },
  { id: 130, nome: "Coco Anão", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Coco Anão", "Palmeiras") },
  { id: 131, nome: "Fênix", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Fênix", "Palmeiras") },
  { id: 132, nome: "Garrafão", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Garrafão", "Palmeiras") },
  { id: 133, nome: "Laca", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Laca", "Palmeiras") },
  { id: 134, nome: "Palmeira Azul e palmeira-de-bismarck", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Palmeira Azul e palmeira-de-bismarck", "Palmeiras") },
  { id: 135, nome: "Palmeira Imperial", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Palmeira Imperial", "Palmeiras") },
  { id: 136, nome: "Palmeirinha de Petrópolis", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Palmeirinha de Petrópolis", "Palmeiras") },
  { id: 137, nome: "Pata de Elefante", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pata de Elefante", "Palmeiras") },
  { id: 138, nome: "Pinanga", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pinanga", "Palmeiras") },
  { id: 139, nome: "Rabo de Raposa", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Rabo de Raposa", "Palmeiras") },
  { id: 140, nome: "Real", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Real", "Palmeiras") },
  { id: 141, nome: "Tamareira Dactylifera", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Tamareira Dactylifera", "Palmeiras") },
  { id: 142, nome: "Tamareira das Canárias", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Tamareira das Canárias", "Palmeiras") },
  { id: 143, nome: "Triangular", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Triangular", "Palmeiras") },
  { id: 144, nome: "Veitchia Joannis", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Veitchia Joannis", "Palmeiras") },
  { id: 145, nome: "Veitchia Merrillii", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Veitchia Merrillii", "Palmeiras") },
  { id: 146, nome: "Washingtonia", categoria: "Palmeiras", especificacao: "Todos os portes", imagem: gerarImagemProduto("Washingtonia", "Palmeiras") },

  // Ornamentais
  { id: 147, nome: "Agave", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Agave", "Ornamentais") },
  { id: 148, nome: "Alpinia Purpurata", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Alpinia Purpurata", "Ornamentais") },
  { id: 149, nome: "Alpinia Zerumbet", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Alpinia Zerumbet", "Ornamentais") },
  { id: 150, nome: "Aspargo", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Aspargo", "Ornamentais") },
  { id: 151, nome: "Azaléia", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Azaléia", "Ornamentais") },
  { id: 152, nome: "Bambuza", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Bambuza", "Ornamentais") },
  { id: 153, nome: "Bougainvillea", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Bougainvillea", "Ornamentais") },
  { id: 154, nome: "Bromélias Variadas", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Bromélias Variadas", "Ornamentais") },
  { id: 155, nome: "Buxinho", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Buxinho", "Ornamentais") },
  { id: 156, nome: "Camélia", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Camélia", "Ornamentais") },
  { id: 157, nome: "Chuva de Prata", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Chuva de Prata", "Ornamentais") },
  { id: 158, nome: "Cipreste Italiano", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cipreste Italiano", "Ornamentais") },
  { id: 159, nome: "Cycas Circinalis", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Cycas Circinalis", "Ornamentais") },
  { id: 160, nome: "Dianela", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Dianela", "Ornamentais") },
  { id: 161, nome: "Dracena Cordiline", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Dracena Cordiline", "Ornamentais") },
  { id: 162, nome: "Dracena Poá", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Dracena Poá", "Ornamentais") },
  { id: 163, nome: "Dracena Tricolor", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Dracena Tricolor", "Ornamentais") },
  { id: 164, nome: "Fórmio", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Fórmio", "Ornamentais") },
  { id: 165, nome: "Flor do deserto", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Flor do deserto", "Ornamentais") },
  { id: 166, nome: "Ixora Mid", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ixora Mid", "Ornamentais") },
  { id: 167, nome: "Jade Vermelha", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Jade Vermelha", "Ornamentais") },
  { id: 168, nome: "Kaizuka", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Kaizuka", "Ornamentais") },
  { id: 169, nome: "Lírio Amarelo", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Lírio Amarelo", "Ornamentais") },
  { id: 170, nome: "Licuala", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Licuala", "Ornamentais") },
  { id: 171, nome: "Liriopes", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Liriopes", "Ornamentais") },
  { id: 172, nome: "Moreia Branca", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Moreia Branca", "Ornamentais") },
  { id: 173, nome: "Mussaenda", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Mussaenda", "Ornamentais") },
  { id: 174, nome: "Orquídea Bambu", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Orquídea Bambu", "Ornamentais") },
  { id: 175, nome: "Pinheiro", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pinheiro", "Ornamentais") },
  { id: 176, nome: "Pleomele Amarela", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pleomele Amarela", "Ornamentais") },
  { id: 177, nome: "Pleomele Inversa", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pleomele Inversa", "Ornamentais") },
  { id: 178, nome: "Pleomele Variegata", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Pleomele Variegata", "Ornamentais") },
  { id: 179, nome: "Podocarpus", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Podocarpus", "Ornamentais") },
  { id: 180, nome: "Ráfia", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Ráfia", "Ornamentais") },
  { id: 181, nome: "Strelitzia", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Strelitzia", "Ornamentais") },
  { id: 182, nome: "Tuia", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Tuia", "Ornamentais") },
  { id: 183, nome: "Tuia Compacta", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Tuia Compacta", "Ornamentais") },
  { id: 184, nome: "Yuca Elephantine", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Yuca Elephantine", "Ornamentais") },
  { id: 185, nome: "Yuca Rígida", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Yuca Rígida", "Ornamentais") },
  { id: 186, nome: "Yuca Tronco", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Yuca Tronco", "Ornamentais") },
  { id: 187, nome: "Yuca Variegata", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Yuca Variegata", "Ornamentais") },
  { id: 188, nome: "Zamea", categoria: "Ornamentais", especificacao: "Todos os portes", imagem: gerarImagemProduto("Zamea", "Ornamentais") },
];

// ------------------- VARIÁVEIS GLOBAIS -------------------
const STORAGE_KEY = "dona-euzebia-cart";
let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentCategory = "todas";
let searchQuery = "";

// ------------------- ELEMENTOS DO DOM -------------------
const filterContainer = document.getElementById("filtroCategorias");
const searchInput = document.getElementById("buscaProduto");
const clearFiltersBtn = document.getElementById("limparFiltros");
const catalogGrid = document.getElementById("catalogoGrid");
const cartCounter = document.getElementById("carrinhoContador");
const cartFloatingBtn = document.getElementById("carrinhoFlutuante");
const cartOverlay = document.getElementById("carrinhoOverlay");
const cartDrawer = document.getElementById("carrinhoDrawer");
const cartCloseBtn = document.getElementById("carrinhoFechar");
const cartContent = document.getElementById("carrinhoConteudo");
const cartFooter = document.getElementById("carrinhoFooter");
const clearCartBtn = document.getElementById("limparCarrinho");
const whatsappBtn = document.getElementById("botaoWhatsApp");
const toast = document.getElementById("toast");

// ------------------- INICIALIZAÇÃO -------------------
document.addEventListener("DOMContentLoaded", () => {
  renderCategoryFilters();
  renderProducts();
  updateCartCounter();
  setupEventListeners();
  lucide.createIcons();
});

// ------------------- EVENT LISTENERS -------------------
function setupEventListeners() {
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderProducts();
  });

  clearFiltersBtn.addEventListener("click", () => {
    searchQuery = "";
    currentCategory = "todas";
    searchInput.value = "";
    document.querySelectorAll(".filtro-categoria").forEach(btn => {
      btn.classList.toggle("ativo", btn.dataset.categoria === "todas");
    });
    renderProducts();
  });

  cartFloatingBtn.addEventListener("click", openCart);
  cartOverlay.addEventListener("click", closeCart);
  cartCloseBtn.addEventListener("click", closeCart);
  clearCartBtn.addEventListener("click", clearCart);
  whatsappBtn.addEventListener("click", handleWhatsAppClick);
}

// ------------------- CATEGORIAS -------------------
function renderCategoryFilters() {
  const categories = [...new Set(produtos.map(p => p.categoria))].sort();
  
  // Botão "Todas"
  filterContainer.innerHTML = `
    <button class="filtro-categoria ativo" data-categoria="todas">Todas</button>
    ${categories.map(cat => `
      <button class="filtro-categoria" data-categoria="${cat}">${cat}</button>
    `).join("")}
  `;

  // Adiciona eventos aos botões
  filterContainer.querySelectorAll(".filtro-categoria").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filtro-categoria").forEach(b => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      currentCategory = btn.dataset.categoria;
      renderProducts();
    });
  });
}

// ------------------- PRODUTOS -------------------
function getFilteredProducts() {
  return produtos.filter(p => {
    const matchesCategory = currentCategory === "todas" || p.categoria === currentCategory;
    const matchesSearch = p.nome.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();
  catalogGrid.innerHTML = filteredProducts.length === 0
    ? `<div style="grid-column: 1/-1; text-align: center; padding: 40px 0; color: var(--texto-suave);">
        <p style="font-size: 1.1rem;">Nenhum produto encontrado com esses filtros.</p>
      </div>`
    : filteredProducts.map(product => {
      const fallbackUrl = gerarImagemProduto(product.nome, product.categoria);

      return `
      <div class="produto-card">
        <div class="produto-imagem">
          <img
            src="${product.imagem}"
            alt="${product.nome}"
            loading="lazy"
            decoding="async"
            referrerpolicy="no-referrer"
            onerror="this.onerror=null; this.src='${fallbackUrl}';"
          >
          <div class="produto-selo">${product.especificacao}</div>
        </div>
        <div class="produto-conteudo">
          <h3 class="produto-nome">${product.nome}</h3>
          <p class="produto-preco">Preço sob consulta</p>
          <button class="produto-botao" onclick="addToCart(${product.id})">
            <i data-lucide="shopping-cart" width="16" height="16"></i>
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    `;
    }).join("");
  
  // Re-inicializa ícones do Lucide
  lucide.createIcons();
}

// ------------------- CARRINHO -------------------
function addToCart(productId) {
  const product = produtos.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart();
  updateCartCounter();
  showToast();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartCounter();
  renderCartContent();
}

function updateQuantity(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartCounter();
    renderCartContent();
  }
}

function clearCart() {
  if (!confirm("Tem certeza que deseja limpar todo o carrinho?")) return;
  cart = [];
  saveCart();
  updateCartCounter();
  renderCartContent();
}

function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

function updateCartCounter() {
  const total = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCounter.textContent = total;
  cartCounter.style.display = total > 0 ? "flex" : "none";
}

function renderCartContent() {
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="carrinho-vazio">
        <i data-lucide="shopping-cart"></i>
        <p>Seu carrinho de orçamento está vazio</p>
      </div>
    `;
    cartFooter.style.display = "none";
  } else {
    // Agrupa por categoria
    const grouped = cart.reduce((acc, item) => {
      if (!acc[item.categoria]) acc[item.categoria] = [];
      acc[item.categoria].push(item);
      return acc;
    }, {});

    cartContent.innerHTML = Object.entries(grouped).map(([categoria, items]) => `
      <div class="carrinho-categoria">
        <h4 class="carrinho-categoria-titulo">${categoria}</h4>
        ${items.map(item => `
          <div class="carrinho-item">
            <div class="carrinho-item-info">
              <div class="carrinho-item-nome">${item.nome}</div>
              <div class="carrinho-item-especificacao">${item.especificacao}</div>
            </div>
            <div class="carrinho-item-controles">
              <div class="carrinho-qtd">
                <button onclick="updateQuantity(${item.id}, -1)">
                  <i data-lucide="minus" width="14" height="14"></i>
                </button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">
                  <i data-lucide="plus" width="14" height="14"></i>
                </button>
              </div>
              <button class="carrinho-remover" onclick="removeFromCart(${item.id})">
                <i data-lucide="trash-2" width="16" height="16"></i>
              </button>
            </div>
          </div>
        `).join("")}
      </div>
    `).join("");
    cartFooter.style.display = "flex";
  }

  lucide.createIcons();
}

function openCart() {
  cartOverlay.classList.add("ativo");
  cartDrawer.classList.add("ativo");
  renderCartContent();
}

function closeCart() {
  cartOverlay.classList.remove("ativo");
  cartDrawer.classList.remove("ativo");
}

// ------------------- TOAST -------------------
function showToast() {
  toast.classList.add("ativo");
  setTimeout(() => {
    toast.classList.remove("ativo");
  }, 2000);
}

// ------------------- WHATSAPP -------------------
function handleWhatsAppClick(e) {
  e.preventDefault();
  if (cart.length === 0) {
    alert("Adicione pelo menos um produto ao carrinho antes de finalizar.");
    return;
  }

  const message = generateWhatsAppMessage();
  const phoneNumber = "5532999183344";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

function generateWhatsAppMessage() {
  const grouped = cart.reduce((acc, item) => {
    if (!acc[item.categoria]) acc[item.categoria] = [];
    acc[item.categoria].push(item);
    return acc;
  }, {});

  let message = "Olá, Dona Euzébia Plantas!\nGostaria de solicitar um orçamento dos seguintes produtos:\n\n";

  Object.entries(grouped).forEach(([categoria, items]) => {
    message += `*${categoria}*\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.nome}\n   Especificação: ${item.especificacao}\n   Quantidade: ${item.quantity}\n\n`;
    });
  });

  message += "Aguardo retorno com disponibilidade e valores. Obrigado!";

  return message;
}
