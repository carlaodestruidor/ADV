function mostrarDica() {
    const dica = document.getElementById("dica");
    const dicas = [
      "Leia os princípios fundamentais com calma — eles guiam toda a Constituição.",
      "Use uma Constituição anotada para entender melhor os artigos.",
      "Compare artigos com casos reais — isso ajuda na fixação.",
      "A leitura em grupo ou com um mentor jurídico pode ser muito mais proveitosa."
    ];
    const aleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    dica.textContent = aleatoria;
    dica.style.display = "block";
  }
  