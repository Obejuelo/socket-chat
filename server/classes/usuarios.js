class Usuarios {
    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {
        let persona = { id, nombre, sala };
        this.personas.push(persona);
        return this.personas;
    }

    getPersona(id) {
        let persona = this.personas.filter(persona => persona.id === id)[0]; //fiñter regrresa un nuevo arreglo y solo necesitamos la´rimera posicion po eso [0]
        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSalas(sala) {
        let personasSala = this.personas.filter(persona => {
            return persona.sala === sala;
        });

        return personasSala;
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id); //Para no perder la referencia al objeto borrado

        this.personas = this.personas.filter(persona => persona.id != id);

        return personaBorrada;
    }
}

module.exports = {
    Usuarios
}