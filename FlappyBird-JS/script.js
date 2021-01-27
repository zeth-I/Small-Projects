
    context = c.getContext("2d");
    const bird = new Image();
    bird.src = "bird.png";
    birdX = birdDY = score = bestScore = 0;
    interval = birdSize = pipeWidth = topPipeBottomY = 24;
    birdY = pipeGap = 200;
    canvasSize = pipeX = 400;
    c.onclick = () => (birdDY = 9) ;
    setInterval(() => {
      context.fillStyle = "skyblue";
      //Desenho do céu
      context.fillRect(0,0,canvasSize,canvasSize); 
      //Gravidade
      birdY -= birdDY -= 0.5; 
      //Desenho do pássaro
      context.drawImage(bird, birdX, birdY, birdSize * (524/374), birdSize);
      context.fillStyle = "green";
      // Movimento do canos
      pipeX -= 8; 
      //Abertura dos canos
      pipeX < -pipeWidth && 
      //Tempo dos canos e reset da abertura dos canos com random
      ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()));
      //Cano na parte de cima
      context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); 
      //Cano na parte de baixo
      context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); 
      context.fillStyle = "black";
      //Placar de score
      context.fillText(score++, 9, 25); 
      // O melhor novo escore?
      bestScore = bestScore < score ? score : bestScore; 
      // Mostrar o novo escore
      context.fillText(`Best: ${bestScore}`, 9, 50); 
      //Passarinho batendo no cano + Passarinho saindo da tela
      (((birdY < topPipeBottomY || birdY > topPipeBottomY + pipeGap) && pipeX < birdSize * (524/374))
       || birdY > canvasSize) && 
      ((birdDY = 0), (birdY = 200), (pipeX = canvasSize), (score = 0)); // Como resultado, passarinho morreu :c
    }, interval)