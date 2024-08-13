let contador = 0;
        let marcados = [];
        let matriz = Array(3).fill(null).map(() => Array(3).fill(null));
        
        function marcar(posicaox, posicaoy) {
            if (contador === 9) {
                alert("O jogo acabou!");
                return;
            }
            if (matriz[posicaox][posicaoy] !== null) {
                alert('Essa posição já foi marcada');
                return;
            }
            
            const posicao = parseInt(posicaox + posicaoy.toString());
            console.log(posicao)
            const celula = document.getElementById(posicao);

            if (contador % 2 == 0) {
                matriz[posicaox][posicaoy] = 'X';
                celula.style.color = 'red';
                celula.innerText = 'X';
            } else {
                matriz[posicaox][posicaoy] = 'O';
                celula.style.Color = 'blue';
                celula.innerText = 'O';
            }
            
            contador++;
            marcados.push(posicao);
            console.log(marcados);
            
            if (verificarVencedor()) {
                alert(`O jogador ${contador % 2 === 0 ? 'O' : 'X'} venceu!`);
                contador = 9; 
            } else if (contador >=9) {
                alert("O jogo acabou!");
            }
        }

        function verificarVencedor() {
            for (let i = 0; i < 3; i++) {
                if (matriz[i][0] !== null && matriz[i][0] === matriz[i][1] && matriz[i][1] === matriz[i][2]) return true;
                if (matriz[0][i] !== null && matriz[0][i] === matriz[1][i] && matriz[1][i] === matriz[2][i]) return true;
            }
            if (matriz[0][0] !== null && matriz[0][0] === matriz[1][1] && matriz[1][1] === matriz[2][2]) return true;
            if (matriz[0][2] !== null && matriz[0][2] === matriz[1][1] && matriz[1][1] === matriz[2][0]) return true;
            
            return false;
        }

        function reiniciar() {
            contador = 0;
            marcados = [];
            matriz = Array(3).fill(null).map(() => Array(3).fill(null));
            const cells = document.querySelectorAll('.celula');
            cells.forEach(cell => {
                cell.style.backgroundColor = '#f0f0f0';
                cell.innerText = '';
            });
        }