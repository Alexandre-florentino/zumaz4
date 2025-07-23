document.addEventListener('DOMContentLoaded', function() {
    // Dados completos dos modelos de iPhone (XR ao 16 Pro)
    const iphoneModels = {
        "iphone-xr": {
            name: "iPhone XR",
            specs: {
                "Lançamento": "2018",
                "Tela": "6.1″ Liquid Retina HD",
                "Resolução": "1792x828",
                "Chip": "A12 Bionic",
                "Câmera Traseira": "12MP (f/1.8)",
                "Câmera Frontal": "7MP (f/2.2)",
                "Bateria": "Até 16 horas de vídeo",
                "Armazenamento": "64GB, 128GB, 256GB",
                "Resistência": "IP67",
                "Conector": "Lightning"
            }
        },
        "iphone-11": {
            name: "iPhone 11",
            specs: {
                "Lançamento": "2019",
                "Tela": "6.1″ Liquid Retina HD",
                "Resolução": "1792x828",
                "Chip": "A13 Bionic",
                "Câmera Traseira": "Sistema duplo 12MP (Ultra Wide e Wide)",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 17 horas de vídeo",
                "Armazenamento": "64GB, 128GB, 256GB",
                "Resistência": "IP68",
                "Conector": "Lightning"
            }
        },
        "iphone-11-pro": {
            name: "iPhone 11 Pro",
            specs: {
                "Lançamento": "2019",
                "Tela": "5.8″ Super Retina XDR",
                "Resolução": "2436x1125",
                "Chip": "A13 Bionic",
                "Câmera Traseira": "Sistema triplo 12MP (Ultra Wide, Wide e Telephoto)",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 18 horas de vídeo",
                "Armazenamento": "64GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "Lightning"
            }
        },
        "iphone-11-pro-max": {
            name: "iPhone 11 Pro Max",
            specs: {
                "Lançamento": "2019",
                "Tela": "6.5″ Super Retina XDR",
                "Resolução": "2688x1242",
                "Chip": "A13 Bionic",
                "Câmera Traseira": "Sistema triplo 12MP (Ultra Wide, Wide e Telephoto)",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 20 horas de vídeo",
                "Armazenamento": "64GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "Lightning"
            }
        },
        "iphone-12": {
            name: "iPhone 12",
            specs: {
                "Lançamento": "2020",
                "Tela": "6.1″ Super Retina XDR",
                "Resolução": "2532x1170",
                "Chip": "A14 Bionic",
                "Câmera Traseira": "Sistema duplo 12MP (Ultra Wide e Wide)",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 17 horas de vídeo",
                "Armazenamento": "64GB, 128GB, 256GB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim"
            }
        },
        "iphone-12-pro": {
            name: "iPhone 12 Pro",
            specs: {
                "Lançamento": "2020",
                "Tela": "6.1″ Super Retina XDR",
                "Resolução": "2532x1170",
                "Chip": "A14 Bionic",
                "Câmera Traseira": "Sistema triplo 12MP (Ultra Wide, Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 17 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim"
            }
        },
        "iphone-12-pro-max": {
            name: "iPhone 12 Pro Max",
            specs: {
                "Lançamento": "2020",
                "Tela": "6.7″ Super Retina XDR",
                "Resolução": "2778x1284",
                "Chip": "A14 Bionic",
                "Câmera Traseira": "Sistema triplo 12MP (Ultra Wide, Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 20 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim"
            }
        },
        "iphone-13": {
            name: "iPhone 13",
            specs: {
                "Lançamento": "2021",
                "Tela": "6.1″ Super Retina XDR",
                "Resolução": "2532x1170",
                "Chip": "A15 Bionic",
                "Câmera Traseira": "Sistema duplo 12MP (Ultra Wide e Wide) com sensor maior",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 19 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim"
            }
        },
       
        "iphone-13-pro": {
            name: "iPhone 13 Pro",
            specs: {
                "Lançamento": "2021",
                "Tela": "6.1″ Super Retina XDR com ProMotion",
                "Resolução": "2532x1170",
                "Chip": "A15 Bionic",
                "Câmera Traseira": "Sistema triplo 12MP (Ultra Wide, Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 22 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB, 1TB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim",
                "Taxa de Atualização": "Até 120Hz"
            }
        },
        "iphone-13-pro-max": {
            name: "iPhone 13 Pro Max",
            specs: {
                "Lançamento": "2021",
                "Tela": "6.7″ Super Retina XDR com ProMotion",
                "Resolução": "2778x1284",
                "Chip": "A15 Bionic",
                "Câmera Traseira": "Sistema triplo 12MP (Ultra Wide, Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/2.2)",
                "Bateria": "Até 28 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB, 1TB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim",
                "Taxa de Atualização": "Até 120Hz"
            }
        },
        "iphone-14": {
            name: "iPhone 14",
            specs: {
                "Lançamento": "2022",
                "Tela": "6.1″ Super Retina XDR",
                "Resolução": "2532x1170",
                "Chip": "A15 Bionic",
                "Câmera Traseira": "Sistema duplo 12MP (Ultra Wide e Wide) com sensor maior",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 20 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim",
                "Segurança": "Detecção de acidente"
            }
        },
        "iphone-14-plus": {
            name: "iPhone 14 Plus",
            specs: {
                "Lançamento": "2022",
                "Tela": "6.7″ Super Retina XDR",
                "Resolução": "2778x1284",
                "Chip": "A15 Bionic",
                "Câmera Traseira": "Sistema duplo 12MP (Ultra Wide e Wide) com sensor maior",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 26 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim",
                "Segurança": "Detecção de acidente"
            }
        },
        "iphone-14-pro": {
            name: "iPhone 14 Pro",
            specs: {
                "Lançamento": "2022",
                "Tela": "6.1″ Super Retina XDR com ProMotion",
                "Resolução": "2556x1179",
                "Chip": "A16 Bionic",
                "Câmera Traseira": "Sistema triplo 48MP (Main) + 12MP (Ultra Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 23 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB, 1TB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim",
                "Taxa de Atualização": "Até 120Hz",
                "Dynamic Island": "Sim"
            }
        },
        "iphone-14-pro-max": {
            name: "iPhone 14 Pro Max",
            specs: {
                "Lançamento": "2022",
                "Tela": "6.7″ Super Retina XDR com ProMotion",
                "Resolução": "2796x1290",
                "Chip": "A16 Bionic",
                "Câmera Traseira": "Sistema triplo 48MP (Main) + 12MP (Ultra Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 29 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB, 1TB",
                "Resistência": "IP68",
                "Conector": "Lightning",
                "5G": "Sim",
                "Taxa de Atualização": "Até 120Hz",
                "Dynamic Island": "Sim"
            }
        },
        "iphone-15": {
            name: "iPhone 15",
            specs: {
                "Lançamento": "2023",
                "Tela": "6.1″ Super Retina XDR",
                "Resolução": "2556x1179",
                "Chip": "A16 Bionic",
                "Câmera Traseira": "Sistema duplo 48MP (Main) + 12MP (Ultra Wide)",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 20 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "USB-C",
                "5G": "Sim",
                "Dynamic Island": "Sim"
            }
        },
        "iphone-15-plus": {
            name: "iPhone 15 Plus",
            specs: {
                "Lançamento": "2023",
                "Tela": "6.7″ Super Retina XDR",
                "Resolução": "2796x1290",
                "Chip": "A16 Bionic",
                "Câmera Traseira": "Sistema duplo 48MP (Main) + 12MP (Ultra Wide)",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 26 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB",
                "Resistência": "IP68",
                "Conector": "USB-C",
                "5G": "Sim",
                "Dynamic Island": "Sim"
            }
        },
        "iphone-15-pro": {
            name: "iPhone 15 Pro",
            specs: {
                "Lançamento": "2023",
                "Tela": "6.1″ Super Retina XDR com ProMotion",
                "Resolução": "2556x1179",
                "Chip": "A17 Pro",
                "Câmera Traseira": "Sistema triplo 48MP (Main) + 12MP (Ultra Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 23 horas de vídeo",
                "Armazenamento": "128GB, 256GB, 512GB, 1TB",
                "Resistência": "IP68",
                "Conector": "USB-C",
                "5G": "Sim",
                "Taxa de Atualização": "Até 120Hz",
                "Dynamic Island": "Sim",
                "Action Button": "Sim"
            }
        },
        "iphone-15-pro-max": {
            name: "iPhone 15 Pro Max",
            specs: {
                "Lançamento": "2023",
                "Tela": "6.7″ Super Retina XDR com ProMotion",
                "Resolução": "2796x1290",
                "Chip": "A17 Pro",
                "Câmera Traseira": "Sistema triplo 48MP (Main) + 12MP (Ultra Wide e Telephoto) + LiDAR",
                "Câmera Frontal": "12MP (f/1.9) com autofoco",
                "Bateria": "Até 29 horas de vídeo",
                "Armazenamento": "256GB, 512GB, 1TB",
                "Resistência": "IP68",
                "Conector": "USB-C",
                "5G": "Sim",
                "Taxa de Atualização": "Até 120Hz",
                "Dynamic Island": "Sim",
                "Action Button": "Sim",
                "Zoom Óptico": "5x"
            }
        },
        "iphone-16": {
            name: "iPhone 16 (rumores)",
            specs: {
                "Lançamento": "2024 (esperado)",
                "Tela": "6.1″ Super Retina XDR",
                "Resolução": "~2556x1179",
                "Chip": "A18 (esperado)",
                "Câmera Traseira": "Sistema duplo (melhorias esperadas)",
                "Câmera Frontal": "12MP com autofoco",
                "Bateria": "Melhorias esperadas",
                "Armazenamento": "128GB+ (esperado)",
                "Resistência": "IP68",
                "Conector": "USB-C",
                "5G": "Sim",
                "Dynamic Island": "Provável"
            }
        },
       
        
    };

    // Preencher dropdowns
    const dropdowns = document.querySelectorAll('.model-dropdown');
    
    dropdowns.forEach(dropdown => {
        for (const [id, model] of Object.entries(iphoneModels)) {
            const option = document.createElement('option');
            option.value = id;
            option.textContent = model.name;
            dropdown.appendChild(option);
        }
        
        dropdown.addEventListener('change', updateComparison);
    });

    // Atualizar tabela de comparação
    function updateComparison() {
        const selectedModels = [];
        const dropdowns = document.querySelectorAll('.model-dropdown');
        
        dropdowns.forEach(dropdown => {
            if (dropdown.value) {
                selectedModels.push(dropdown.value);
            }
        });
        
        const tableContainer = document.querySelector('.comparison-table');
        if (selectedModels.length === 0) {
            tableContainer.innerHTML = '<p>Selecione pelo menos um modelo para comparar</p>';
            return;
        }
        
        // Obter todas as especificações possíveis
        const allSpecs = new Set();
        selectedModels.forEach(modelId => {
            Object.keys(iphoneModels[modelId].specs).forEach(spec => {
                allSpecs.add(spec);
            });
        });
        
        // Criar tabela
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Especificação</th>
                        ${selectedModels.map(modelId => `<th>${iphoneModels[modelId].name}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
        `;
        
        // Adicionar linhas para cada especificação
        Array.from(allSpecs).sort().forEach(spec => {
            tableHTML += `
                <tr>
                    <td>${spec}</td>
                    ${selectedModels.map(modelId => `
                        <td>${iphoneModels[modelId].specs[spec] || '-'}</td>
                    `).join('')}
                </tr>
            `;
        });
        
        tableHTML += `
                </tbody>
            </table>
        `;
        
        tableContainer.innerHTML = tableHTML;
    }
});