class NationalProductController{
    national(req, res){
        return res.status(200).json([
            {
                id: 1,
                description: "Camisa do Flamengo ano 2021",
                image: "https://http2.mlstatic.com/D_NQ_NP_764812-MLB46322521386_062021-W.jpg",
                price: 200,
                stock: 5
            },
            {
                id: 2,
                description: "Camisa do Fortaleza boa qualidade",
                image: "https://images.tcdn.com.br/img/img_prod/813926/camisa_do_fortaleza_vermelha_e_marinho_colecao_2021_393_1_1893e20caf88d710ebf31d77292bdb0b.jpg",
                price: 250,
                stock: 3
            },
            {
                id: 3,
                description: "Camisa do Chapecoence ano 2018",
                image: "https://static.lojadachape.com.br/produtos/camisa-chapecoense-aquecimento-1718-umbro-masculina/10/D21-1488-010/D21-1488-010_zoom1.jpg?ts=1632419326&ims=420x",
                price: 350,
                stock: 4
            },
            {
                id: 4,
                description: "Camisa do Corinthians feminina",
                image: "https://images.tcdn.com.br/img/img_prod/580496/camisa_corinthians_ii_nike_2019_20_feminina_5679123_1_20190523124402.jpg",
                price: 450,
                stock: 1
            },
            {
                id: 5,
                description: "Camisa do São Paulo ano 2020",
                image: "https://photos.enjoei.com.br/camisa-de-time-sao-paulo/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMTM5ODMyOS9mM2Q5ZGM2Nzk5NDdhMWY3OGJmNzNlNWEwOTU5MDBmMS5qcGc",
                price: 150,
                stock: 8
            },
            {
                id: 6,
                description: "Camisa do São Paulo ano 2000",
                image: "https://static.netshoes.com.br/produtos/camisa-sao-paulo-i-1920-sn-torcedor-adidas-masculina/24/COL-5660-024/COL-5660-024_zoom1.jpg?ts=1588953216",
                price: 250,
                stock: 8
            },
            {
                id: 7,
                description: "Camisa do Grêmio ano 2021",
                image: "https://gaston.vteximg.com.br/arquivos/ids/305528-500-500/2001127441_Ampliada.jpg?v=637578277675270000",
                price: 650,
                stock: 10
            },
            {
                id: 8,
                description: "Camisa do Santos ano 2021",
                image: "https://cdn.espn.com.br/image/livre/7a6c0454-1503-4e1a-a3bc-26ff4e335ecc.jpg",
                price: 750,
                stock: 7
            },
        ]);
    }

    international(req, res){
        return res.status(200).json([
            {
                id: 9,
                description: "Camisa do Chelsea ano 2021",
                image: "https://images-americanas.b2w.io/produtos/01/00/img/3801187/3/3801187311_1GG.jpg",
                price: 200,
                stock: 5
            },
            {
                id: 10,
                description: "Camisa do Chelsea ano 2020",
                image: "https://static.netshoes.com.br/produtos/camisa-chelsea-home-1920-sn-torcedor-nike-masculina/58/HZM-1554-058/HZM-1554-058_zoom1.jpg?ts=1639673598",
                price: 250,
                stock: 5
            },
            {
                id: 11,
                description: "Camisa da Polônia ano 2020",
                image: "https://img.r7.com/images/camisa-manchester-united-20072018120914717",
                price: 250,
                stock: 5
            },
            {
                id: 12,
                description: "Camisa da Bayer ano 2020",
                image: "https://static.netshoes.com.br/produtos/camisa-bayern-de-munique-home-1920-sn-torcedor-adidas-masculina/16/COL-4509-016/COL-4509-016_detalhe1.jpg?ts=1561464951",
                price: 350,
                stock: 5
            },
            {
                id: 13,
                description: "Camisa da BVB do ano 2020",
                image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/668/361/products/191-1b0c80b27cd9a16c7c16109099063511-480-0.jpg",
                price: 450,
                stock: 5
            },
            {
                id: 14,
                description: "Camisa da Espanha ano 2020",
                image: "https://images.mantosdofutebol.com.br/wp-content/uploads/2019/05/Camisas-do-Borussia-M%C3%B6nchengladbach-2019-2020-PUMA-10.jpg",
                price: 250,
                stock: 5
            },
            {
                id: 15,
                description: "Camisa do Borússia ano 2000",
                image: "https://static.netshoes.com.br/produtos/camisa-borussia-dortmund-1920-treino-puma/78/D14-9660-178/D14-9660-178_zoom1.jpg?ts=1587480356&ims=544x",
                price: 100,
                stock: 5
            },
            {
                id: 16,
                description: "Camisa da Itália ano 2000",
                image: "https://cdn.awsli.com.br/600x450/1973/1973315/produto/115876882/4449879fab.jpg",
                price: 490,
                stock: 5
            },
        ]);
    }

    exclusive(req, res){
        return res.status(200).json([
            {
                id: 17,
                description: "Camisa do Manchester ano 2000",
                image: "https://d3ugyf2ht6aenh.cloudfront.net/stores/668/361/products/14681575684-camisa-2-manchester-city-away-branca-2021-2022-1-22dfe3469fe510bffe16338273627762-480-0.jpg",
                price: 490,
                stock: 5
            },
            {
                id: 18,
                description: "Camisa do Burússia 2010",
                image: "https://images-americanas.b2w.io/produtos/2177654827/imagens/camisa-time-borussia-dortmund-branca-20-21-masculina/2177654931_1_large.jpg",
                price: 390,
                stock: 5
            },
            {
                id: 19,
                description: "Camisa do PSG do ano 2010",
                image: "https://d3qoj2c6mu9s8x.cloudfront.net/Custom/Content/Products/12/15/12158_camisa-nike-psg-iii-torcedor-2016-2017-branca_l1_636302020448634579.jpg",
                price: 190,
                stock: 5
            },
            {
                id: 20,
                description: "Camisa do Real Madrid ano 2010",
                image: "https://static.netshoes.com.br/produtos/camisa-real-madrid-home-1920-sn-torcedor-adidas-masculina/14/COL-4524-014/COL-4524-014_zoom1.jpg?ts=1587473204&ims=544x",
                price: 890,
                stock: 5
            },
            {
                id: 21,
                description: "Camisa do Santos ano 2001",
                image: "https://cf.shopee.com.br/file/eb3d63958f0217d8a6fdbc2c17fe441f",
                price: 890,
                stock: 5
            },
            {
                id: 22,
                description: "Camisa do CABJ ano 1990",
                image: "https://cdn.awsli.com.br/400x400/1258/1258079/produto/54163006/a22a29e817.jpg",
                price: 990,
                stock: 5
            },
            {
                id: 23,
                description: "Camisa do Paris ano 2020",
                image: "https://1.bp.blogspot.com/-eaGjZfOS4cg/X3JHTmbYANI/AAAAAAAB9Ts/mG5MQ-2DDjo4vPmvQwr_-ZjwyrLxwNn1gCLcBGAsYHQ/s1200/Terceira-camisa-do-PSG-2020-2021-Jordan-2.jpg",
                price: 1990,
                stock: 5
            },
            {
                id: 24,
                description: "Camisa do Vasco ano 1980",
                image: "https://www.esportelandia.com.br/wp-content/uploads/2020/03/camisa-do-vasco.jpg",
                price: 2000,
                stock: 5
            },
        ]);
    }
}

module.exports = new NationalProductController();