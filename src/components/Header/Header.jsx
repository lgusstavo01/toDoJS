// Importa o arquivo de imagem do logo do projeto | Imports the logo image file for the project

import logo from "/logo.svg";

// Define o componente funcional Header |Defines the functional Header component
export function Header() {
  return (
    // Cabeçalho principal da aplicação | Main header container of the application
    <header className="bg-gray700 h-[200px] flex justify-center items-center">
      {/* Exibe o logo do projeto | Displays the project logo */}
      <img
        src={logo} // Caminho para a imagem do logo |  Path to the logo image
        alt="Logo do projeto ToDo" // Texto alternativo para acessibilidade | Alternative text for accessibility
        className="w-[126px] h-[48px]" // Define largura e altura do logo | Sets the logo width and height
      />
    </header>
  );
}
