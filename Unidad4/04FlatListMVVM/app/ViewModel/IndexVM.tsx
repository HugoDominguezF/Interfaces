import { Persona } from "../Model/Entities/PersonaModel";
import { RepositoryPersona } from "../Model/Data/RepositoryPersona";

export class IndexVM {

    private personas: Persona[] = [];
    private personaSeleccionada : Persona | null = null;

    constructor() {
        this.personaSeleccionada
    }
    public getPersonas(): Persona[] {
        const repo = new RepositoryPersona();
        this.personas = repo.getPersonas();
        return this.personas;
    }
    public getPersonaSeleccionada(): Persona | null {
        return this.personaSeleccionada;
    }
    public personaPress(persona: Persona): void {
        this.personaSeleccionada = persona;
        alert(`has clicado en :  ${persona.Nombre} ${persona.Apellido}`);
    }

}