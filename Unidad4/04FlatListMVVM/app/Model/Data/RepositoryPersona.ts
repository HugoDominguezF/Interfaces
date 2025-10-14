
import { Persona } from '../Entities/PersonaModel';

export class RepositoryPersona {

    private personas: Persona[] = [
        new Persona(1, 'Juan', 'Perez'),
        new Persona(2, 'Maria', 'Gomez'),
        new Persona(3, 'Carlos', 'Lopez'),
        new Persona(4, 'Ana', 'Martinez'),
        new Persona(5, 'Luis', 'Garcia'),
        new Persona(6, 'Sofia', 'Rodriguez'),
        new Persona(7, 'Miguel', 'Hernandez'),
        new Persona(8, 'Laura', 'Sanchez'),
        new Persona(9, 'Diego', 'Ramirez'),
        new Persona(10, 'Elenaa', 'Torres'),
        new Persona(11, 'Elenas', 'Torres'),
        new Persona(12, 'Elenad', 'Torres'),
        new Persona(13, 'Elenaq', 'Torres'),
        new Persona(14, 'Elenaw', 'Torres'),
        new Persona(15, 'Elenae', 'Torres'),
    ];
    public get Personas(): Persona[] {
        return this.personas;
    }
    public addPersona(persona: Persona): void {
        this.personas.push(persona);
    }
    public removePersona(id: number): void {
        this.personas = this.personas.filter(p => p.Id !== id);
    }
}