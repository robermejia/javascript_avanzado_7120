CREATE DATABASE pokemon;

CREATE TABLE pokemons (
   id INT AUTO_INCREMENT PRIMARY KEY,        -- ID único para cada Pokémon, autoincrementable
   nombre VARCHAR(100) NOT NULL,             -- Nombre del Pokémon, no puede ser nulo
   tipo VARCHAR(50),                         -- Tipo del Pokémon (por ejemplo, Fuego, Agua, Planta)
   habilidad VARCHAR(100),                   -- Habilidad del Pokémon (por ejemplo, Intimidación, Levitate)
   nivel INT DEFAULT 1,                      -- Nivel del Pokémon (por defecto es 1)
   salud_maxima INT DEFAULT 100              -- Salud máxima del Pokémon (por defecto es 100)
);

 

-- Insertar 10 Pokémon con diferentes características
INSERT INTO pokemons (nombre, tipo, habilidad, nivel, salud_maxima)
VALUES
   ('Pikachu', 'Eléctrico', 'Estática', 5, 100),
   ('Bulbasaur', 'Planta/Veneno', 'Sobrecrecimiento', 10, 120),
   ('Charmander', 'Fuego', 'Mar llamas', 8, 110),
   ('Squirtle', 'Agua', 'Torrente', 7, 110),
   ('Jigglypuff', 'Normal/Hada', 'Canto', 12, 90),
   ('Meowth', 'Normal', 'Recogida', 9, 95),
   ('Psyduck', 'Agua', 'Cabezazo', 6, 100),
   ('Eevee', 'Normal', 'Adaptable', 15, 105),
   ('Snorlax', 'Normal', 'Inmunidad', 30, 150),
   ('Mewtwo', 'Psíquico', 'Presión', 50, 200);