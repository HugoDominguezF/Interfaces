
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
        new Persona(10, 'Elena', 'Torres')
    ];
    public getPersonas(): Persona[] {
        return this.personas;
    }
    public addPersona(persona: Persona): void {
        this.personas.push(persona);
    }
    public removePersona(id: number): void {
        this.personas = this.personas.filter(p => p.getId() !== id);
    }
}