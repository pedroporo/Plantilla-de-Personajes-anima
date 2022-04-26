/*global define: false */
/**
 * Data on Advantages that can be chosen with Creation Points.
 * @module advantages
 * @requires jquery
 * @requires abilities
 * @requires magic_paths
 * @requires psychic_disciplines
 * @requires tables
 */
define(['jquery', 'abilities', 'magic_paths',  'psychic_disciplines',
        'tables'], function ($, abilities, paths, disciplines, tables) {
    return {
        'Acceso a los poderes psíquicos naturales.': {Cost: [1, 2, 3], Options: [], Option_Title: 'Seleccione un poder'},
        'Acceso a una disciplina psíquica': {Cost: 1, Options: Object.keys(disciplines.disciplines), Option_Title: 'Seleccione una disciplina'},
        'Sentidos agudos': {Cost: 1},
        'Añadir un punto a una característica': {Cost: 1, Options: tables.characteristics, Option_Title: 'Seleccione la característica para aumentar'},
        Ambidextrous: {Cost: 1},
        'Amplificar el poder sostenido': {Category: 'Psíquica', Cost: 2},  // one difficulty level higher
        'Afinidad animal': {Cost: 1},
        'Aptitud en un campo': {Cost: 2, Options: tables.fields, Option_Title: 'Seleccione un campo'},
        'Aptitud en un sujeto': {Cost: [1, 2], Options: $.map(Object.keys(abilities), function (val) {
            return ('Campo' in abilities[val]) ? val : null;
        }), Option_Title: 'Seleccione un tema'},
        'Aptitud para el desarrollo mágico.': {Category: 'Magia', Cost: 1}, // adds +3 to INT to determine max potential no other ability
        Artifact: {Category: 'Fondo', Cost: [1, 2, 3], Options: [], Option_Title: 'Ingrese el nombre del artefacto'},
        'Afinidad del artefacto': {Cost: 1},
        'Estado alrededor': {Category: 'Fondo', Cost: [1, 2, 3]},
        'Asistente nacido': {Category: 'Magia', Cost: 1},
        Charm: {Cost: 1},
        'Sentidos de combate': {Cost: 3, Options: tables.primary_combat_abilities, Option_Title: 'Seleccione una habilidad'},
        Contacts: {Category: 'Fondo', Cost: [1, 2, 3], Options: [], Option_Title: 'Ingrese el nombre de la organización'},
        'Dominio del hechizo impugnado': {Category: 'Magia', Cost: 1},
        'Raíces culturales': {Category: 'Fondo', Cost: 1, Options: [], Option_Title: 'Seleccione un fondo'},
        'Sentido del peligro': {Cost: 2},
        Disquieting: {Cost: 1},
        'Límite dual': {Cost: 1}, // choose up to 2 limits
        Elan: {Cost: [1, 2, 3], Options: [], Option_Title: 'Ingrese el nombre del beryl o shajad'},
        'Compatibilidad elemental': {Category: 'Magia', Cost: 1, Options: Object.keys(paths), Option_Title: 'Seleccione una ruta'}, //+ 20 MA and +20 MR in one element -20 in opposing. if necro then all.
        'Excepcional resistencia mágica': {Cost: [1, 2]},  // +25 to MR , +50 to MR
        'Resistencia física excepcional': {Cost: [1, 2]},  // +25 to PhR/VR/DR , +50 to Phr/VR/DR
        'Resistencia psíquica excepcional': {Cost: [1, 2]},  // +25 to PsR , +50 to PsR
        'Concentración extrema': {Category: 'Psíquica', Cost: 2},  // doubles the bonus for concentrating
        Fame: {Category: 'Fondo', Cost: [1, 2]},
        Familiar: {Cost: [2, 3]},
        Focus: {Category: 'Psíquica', Cost: 1}, // psychic points spent to boost projection are +20 instead of +10
        Fortunate: {Cost: 1},
        'Acceso gratuito a cualquier disciplina psíquica.': {Cost: 2},
        'Libre albedrío': {Cost: 1},  // +60 to resist domination or possession
        'Buena suerte': {Cost: 1},
        'Aprendizaje mágico gradual': {Category: 'Magia', Cost: 2},
        'Medio en sintonía con el arbol': {Category: 'Magia', Cost: 2}, // necromany not allowed.  Like elemental compat, but allows you to choose 1/2 the tree. necro not allowed
        'Difícil de matar': {Cost: [1, 2, 3]}, // +10 per pt to LP per level
        'Inmunidad al dolor y la fatiga': {Cost: 1},
        'Ki imperceptible': {Cost: 1}, // +10 to ki concealment per level.  does not grant any benefit without ability ki concealment
        'Hechizo innato mejorado': {Category: 'Magia', Cost: [1, 2, 3]},
        'Regalo incompleto': {Cost: 1, Options: tables.theorems, Option_Title: 'Seleccione el teorema utilizado'},
        'Aumento de la acumulación de KI': {Cost: [1, 2]},
        'Aumento de la bonificación natural': {Cost: 2},  // twice the  usual bonus to a secondary when levelling
        'Aumento de los modificadores psíquicos': {Category: 'Psíquica', Cost: 1},
        'Aumentar una característica a nueve': {Cost: 2, Options: tables.characteristics, Option_Title: 'Seleccione la característica para aumentar'},
        'Jack of All Trades': {Cost: 2},
        'Percepción de ki': {Cost: 1},  // +10 per level to Ki Detection
        'Recuperacion de Ki': {Cost: [1, 2, 3]},
        'Sueño ligero': {Cost: 1},
        Learning: {Cost: [1, 2, 3]}, // Additional +3 xp, +6 xp, +9 xp per session
        'Naturaleza mágica': {Category: 'Magia', Cost: [1, 2, 3]},  //+50 +100 +150 zeon per level
        'Dicción mágica': {Category: 'Magia', Cost: 1},  // no zeon for casting from scroll or grimoire
        'Aprendizaje marcial': {Cost: 1},  // increases learning level by 2
        'Dominio marcial': {Cost: [1, 2, 3]},
        'Invocador de masas': {Cost: [1, 2, 3]},
        'Sellos magistrales': {Cost: 1}, // +2 levels for difficulty of setting a seal
        'Armadura mística': {Cost: 1},
        'Armadura natural': {Cost: 1},
        'Conocimiento natural de un camino': {Category: 'Magia', Cost: 1,  Options: Object.keys(paths), Option_Title: 'Seleccione una ruta'},
        'Alumno natural': {Cost: [1, 2, 3], Options: $.map(Object.keys(abilities), function (val) {
            return ('Campo' in abilities[val]) ? val : null;
        }), Option_Title: 'Seleccione una habilidad'},   //+10, +20, +30 per level additional to specific secondary
        'Learner natural, campo': {Cost: [2, 3], Options: tables.fields, Option_Title: 'Seleccione un campo'},   //+5 +10, per level additional to specific field
        'Poder Natural': {Category: 'Magia', Cost: 1}, // maximum spell potential uses POW
        'Vision nocturna': {Cost: 1},
        'No hay gestos': {Cost: 1},  // no reduction to ki accumulation
        'Magia opuesta': {Category: 'Magia', Cost: 1},
        'Concentración pasiva': {Category: 'Psíquica', Cost: 2},
        'Poderoso aliado': {Category: 'Fondo', Cost: [1, 2, 3], Options: [], Option_Title: 'Ingrese al aliado poderoso'},
        'Ambivalencia psíquica': {Category: 'Psíquica', Cost: 1},
        'Resistencia de fatiga psíquica': {Category: 'Psíquica', Cost: 2},  // no fatigue when a power fails.  Does not effect 3rd level powers
        'Inmunidad psíquica': {Cost: 1},
        'Inclinación psíquica':  {Category: 'Psíquica', Cost: 2, Options: Object.keys(disciplines.disciplines), Option_Title: 'Seleccione una disciplina'}, // +1 level of greater difficulty for one of his psychic disciplines.
        'Recuperación de Punto Psíquico': {Category: 'Psíquica', Cost: [1, 2, 3]},  // recover 1pt/10m 1pt/5m  1pt/1minute
        'Reflejos rápidos': {Cost: [1, 2, 3]},   // +25, +45, +60 to initiative
        'Regeneración': {Cost: [1, 2, 3]},
        'Repita un tiro de características': {Cost: 1, Options: tables.characteristics, Option_Title: 'Seleccione la característica para Reroll'},
        Saint: {Category: 'Fondo', Cost: 2},
        Seducer: {Cost: 1},  // +60 to persuasion
        'Ver sobrenatural': {Cost: 1},
        'Esencia sheele': {Cost: 1},
        'Posición social': {Category: 'Fondo', Cost: [1, 2]},
        'Fondos iniciales': {Category: 'Fondo', Cost: [1, 2, 3]},
        'Recuperación mágica superior': {Category: 'Magia', Cost: [1, 2, 3]},  //x2, x3, x4 magic recovery
        'Inmunidad sobrenatural': {Cost: [1, 2, 3]},  // cannot access The Gift, See Supernatural with this. Not available to Duk/Dai, Sylvain
        'Sobreviviente': {Cost: 1},
        Talented: {Cost: 1},  //+30 to sleight of hands +3 to opposed dex checks
        'Al limite': {Cost: 1},  //+20 all action when below 20% of total LP
        'Tocado por el destino': {Cost: 1},
        'Acumulación total': {Cost: 2},
        'El don': {Cost: 2, Options: tables.theorems, Option_Title: 'Seleccione el teorema utilizado'},   // +10 to MR, can take magic advantages/disadvantages
        'Tamaño poco común': {Cost: 1, Options: [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5], Option_Title: 'Seleccione el modificador de tamaño para aplicar'},
        'Técnicas no conectadas': {Cost: 1},
        'Familiares ilimitados': {Cost: 2},
        'Caster sin hablar': {Category: 'Magia', Cost: 1}, // no reduction to MA when casting unspoken
        Untiring: {Cost: [1, 2, 3]},
        'Afinidad de uso': {Cost: 1},
        'Uso de armadura': {Cost: [1, 2, 3]},  // +5/+10/+15 per level to wear armor
        Versatile: {Cost: 1},
        'Versátil metamágico': {Category: 'Magia', Cost: 1}
    };
});
