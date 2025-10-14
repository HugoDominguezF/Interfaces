import { Persona } from "../Model/Entities/PersonaModel";
import { RepositoryPersona } from "../Model/Data/RepositoryPersona";

export class IndexVM {

    private personas: Persona[] = [];
    private personaSeleccionada : Persona | null = null;

    constructor() {
        this.personaSeleccionada
    }
    public get Personas(): Persona[] {
        const repo = new RepositoryPersona();
        this.personas = repo.Personas;
        return this.personas;
    }
    public get PersonaSeleccionada(): Persona | null {
        return this.personaSeleccionada;
    }
    public personaPress(persona: Persona): void {
        this.personaSeleccionada = persona;
        alert(`has clicado en :  ${persona.Nombre} ${persona.Apellido}`);
    }

}