import React, { useRef, useEffect } from 'react';
import { Bateau } from '../Library/Bateau';
import { useState } from 'react';
import { Mer } from '../Library/Mer';
import { Position } from '../Library/Position';
import { Cellule } from '../Library/Cellule';





const CanvasComponent: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);


    // on définit une 

    let bateau:Bateau = new Bateau(3);
    let mer:Mer = new Mer(5);    
    mer.ajouterBateau(bateau, new Position(0, 0));
    mer.ajouterBateau(bateau, new Position(0, 1));
    mer.ajouterBateau(bateau, new Position(0, 2));



    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
                const size = 100; // Taille de chaque carré
                // Dessiner la grille
                for (let row = 0; row < mer.getTaille(); row++) {
                    for (let col = 0; col < mer.getTaille(); col++) {
                        context.fillStyle = (row + col) % 2 === 0 ? 'blue' : 'white';
                        context.fillRect(col * size, row * size, size, size);
                    }
                }

                // Dessiner le bateau en vert
                context.fillStyle = 'green';
                for (let i = 0; i < bateau.getPointDeVie(); i++) {
                    context.fillRect(0, i * size, size, size); // Dessiner le bateau sur la première ligne
                }
            }
        }
    }, [bateau.getPointDeVie]);

    const handleTirer = () => {
        console.log('Tirer button clicked');
        // Ajoutez ici la logique pour tirer sur le bateau
        const canvas = canvasRef.current;
        if (canvas) {
            const context = canvas.getContext('2d');
            if (context) {
            const input = document.getElementById('xyposition') as HTMLInputElement;
            const position = input.value.split(',').map(Number);
            const [x, y] = position;
            const size = 100; // Taille de chaque carré
            context.fillStyle = 'red';
            console.log('Tirer at position:', x, y);
            context.fillRect(x * size, y * size, size, size);
            const resultTir = mer.tirer(new Position(x, y))

            const result = document.getElementById('result');
            if (result) {
                result.innerText = `Résultat: ${resultTir}`;
            }

            

            }
        }
    };

    return (
        <div>
            <canvas ref={canvasRef} width={500} height={500} />
            <div style={{ marginTop: '10px' }}>
                <label>
                    Position:
                    <input type="text" id='xyposition' />
                </label>
                <button onClick={handleTirer}>Tirer</button>
                <div id="result" style={{ marginTop: '10px' }}>Résultat: </div>
            </div>
        </div>
    );
};

export { CanvasComponent };